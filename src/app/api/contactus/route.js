import { NextResponse } from "next/server";
import { isKnownInterest } from "@/components/contactUs/interestOptions";
import { ALLOWED_HOSTS } from "@/utils/site";

const CRM_TIMEOUT_MS = 10_000;
const TURNSTILE_TIMEOUT_MS = 5_000;
const MAX_BODY_BYTES = 16_384;
// Picks this site's project in the CRM (WEBSITE_PROJECT_KEYS in crm-server).
const CRM_PROJECT_KEY = "nathia";
const PHONE_RE = /^\+?\d{7,15}$/;
const EMAIL_RE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
// Control chars, zero-width and bidi overrides (display spoofing); keeps ZWNJ/ZWJ for Urdu.
const SAFE_TEXT = /^[^\p{Cc}\u200B\u2060\uFEFF\u202A-\u202E\u2066-\u2069]*$/u;
const FORMS = new Set(["contact_form", "invest_form"]);
// Minimum time a human takes to fill the form; faster = bot.
const MIN_FILL_MS = 2_000;
// Vercel overwrites x-real-ip. Elsewhere (Docker) set CLIENT_IP_HEADER only when a
// proxy in front overwrites that header; otherwise clients could forge it.
const CLIENT_IP_HEADER = process.env.VERCEL ? "x-real-ip" : process.env.CLIENT_IP_HEADER;
const IS_PRODUCTION = process.env.NODE_ENV === "production";

if (IS_PRODUCTION && !process.env.TURNSTILE_SECRET_KEY) {
  console.warn("Lead form: TURNSTILE_SECRET_KEY not set — bot check disabled");
}

function reject(message, status) {
  return NextResponse.json({ message }, { status });
}

function text(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Browsers always send Origin on POST fetch; reject other sites posting here. */
function isAllowedOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    const host = new URL(origin).hostname.toLowerCase();
    if (ALLOWED_HOSTS.has(host)) return true;
    // This deployment's own preview URL (set by Vercel), never other *.vercel.app sites.
    if (process.env.VERCEL_URL && host === process.env.VERCEL_URL.toLowerCase()) return true;
    return !IS_PRODUCTION && (host === "localhost" || host === "127.0.0.1");
  } catch {
    return false;
  }
}

function clientIp(request) {
  return (CLIENT_IP_HEADER && request.headers.get(CLIENT_IP_HEADER)?.trim()) || "";
}

/** Cloudflare Turnstile. Off when TURNSTILE_SECRET_KEY is unset. */
async function passesBotCheck(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (typeof token !== "string" || !token || token.length > 2048) return false;
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token, ...(ip ? { remoteip: ip } : {}) }),
      signal: AbortSignal.timeout(TURNSTILE_TIMEOUT_MS),
      cache: "no-store",
    });
    const data = await response.json();
    return data.success === true;
  } catch (error) {
    // Don't lose real enquiries during a Cloudflare outage; CRM rate limits still apply.
    console.warn("Lead form: Turnstile verify unavailable, allowing", { error: error?.name });
    return true;
  }
}

function validate(body) {
  const lead = {
    project: CRM_PROJECT_KEY,
    submissionId: text(body.submissionId, 36),
    form: text(body.form, 32),
    name: text(body.userName, 120),
    email: text(body.email, 320).toLowerCase(),
    phone: text(body.phoneNumber, 16),
    city: text(body.city, 120),
    interestedIn: text(body.interestedIn, 120),
    subInterest: text(body.subInterest, 300),
  };
  const textOk = [lead.name, lead.city, lead.interestedIn, lead.subInterest].every((v) =>
    SAFE_TEXT.test(v)
  );
  const interestOk =
    (!lead.interestedIn && !lead.subInterest) ||
    isKnownInterest(lead.interestedIn, lead.subInterest);
  const ok =
    UUID_RE.test(lead.submissionId) &&
    FORMS.has(lead.form) &&
    lead.name &&
    textOk &&
    interestOk &&
    EMAIL_RE.test(lead.email) &&
    PHONE_RE.test(lead.phone);
  if (!ok) return null;
  for (const key of ["city", "interestedIn", "subInterest"]) {
    if (!lead[key]) delete lead[key];
  }
  return lead;
}

async function readJsonBody(request) {
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) return null;
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return null;
  try {
    const body = JSON.parse(raw);
    return body && typeof body === "object" && !Array.isArray(body) ? body : null;
  } catch {
    return null;
  }
}

export async function POST(request) {
  if (!isAllowedOrigin(request)) {
    return reject("Forbidden", 403);
  }

  const body = await readJsonBody(request);
  if (!body) {
    return reject("Invalid request", 400);
  }

  // Honeypot / too-fast submit: pretend success so bots learn nothing.
  const startedAt = Number(body.startedAt);
  const dropReason = body.website
    ? "honeypot"
    : !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS
      ? "too_fast"
      : null;
  if (dropReason) {
    console.warn("Lead form: dropped", { reason: dropReason, form: text(body.form, 32) });
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const lead = validate(body);
  if (!lead) {
    return reject("Please check your details and try again.", 400);
  }

  const ip = clientIp(request);
  if (!(await passesBotCheck(body.turnstileToken, ip))) {
    console.warn("Lead form: bot check failed", { form: lead.form });
    return reject("Security check failed. Please refresh the page and try again.", 400);
  }

  const crmUrl = process.env.CRM_WEBSITE_LEADS_URL;
  const secret = process.env.CRM_WEBSITE_LEADS_SECRET;
  if (!crmUrl || !secret || (IS_PRODUCTION && !crmUrl.startsWith("https://"))) {
    console.error("Lead form: CRM_WEBSITE_LEADS_URL (https) / CRM_WEBSITE_LEADS_SECRET not configured");
    return reject("Service unavailable", 503);
  }

  try {
    const response = await fetch(crmUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Secret": secret,
        "X-Client-IP": ip,
      },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(CRM_TIMEOUT_MS),
      cache: "no-store",
      // Never replay the secret to wherever a redirect points.
      redirect: "error",
    });

    if (response.status === 429) {
      return reject("Too many submissions. Please try again later.", 429);
    }
    if (!response.ok) {
      console.error("Lead form: CRM rejected lead", { status: response.status, form: lead.form });
      return reject("Failed to submit form", 502);
    }
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Lead form: CRM request failed", {
      form: lead.form,
      error: error?.name,
      cause: error?.cause?.code || error?.cause?.message || error?.message,
    });
    return reject("Failed to submit form", 502);
  }
}
