import { NextResponse } from "next/server";
import { ALLOWED_HOSTS } from "@/utils/site";

const CRM_TIMEOUT_MS = 10_000;
// Picks this site's project in the CRM (WEBSITE_LEADS_PROJECTS on the CRM side).
const CRM_PROJECT_KEY = "nathia";
const PHONE_RE = /^\+?\d{7,15}$/;
const EMAIL_RE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const FORMS = new Set(["contact_form", "invest_form"]);
// Minimum time a human takes to fill the form; faster = bot.
const MIN_FILL_MS = 2_000;

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
    return process.env.NODE_ENV !== "production" && (host === "localhost" || host === "127.0.0.1");
  } catch {
    return false;
  }
}

/** Vercel sets x-real-ip itself; clients can't override it. */
function clientIp(request) {
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    ""
  );
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
  const ok =
    UUID_RE.test(lead.submissionId) &&
    FORMS.has(lead.form) &&
    lead.name &&
    EMAIL_RE.test(lead.email) &&
    PHONE_RE.test(lead.phone);
  if (!ok) return null;
  for (const key of ["city", "interestedIn", "subInterest"]) {
    if (!lead[key]) delete lead[key];
  }
  return lead;
}

export async function POST(request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  // Honeypot / too-fast submit: pretend success so bots learn nothing.
  const startedAt = Number(body.startedAt);
  if (body.website || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const lead = validate(body);
  if (!lead) {
    return NextResponse.json({ message: "Please check your details and try again." }, { status: 400 });
  }

  const crmUrl = process.env.CRM_WEBSITE_LEADS_URL;
  const secret = process.env.CRM_WEBSITE_LEADS_SECRET;
  if (!crmUrl || !secret) {
    console.error("Lead form: CRM_WEBSITE_LEADS_URL / CRM_WEBSITE_LEADS_SECRET not configured");
    return NextResponse.json({ message: "Service unavailable" }, { status: 503 });
  }

  try {
    const response = await fetch(crmUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Secret": secret,
        "X-Client-IP": clientIp(request),
      },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(CRM_TIMEOUT_MS),
      cache: "no-store",
    });

    if (response.status === 429) {
      return NextResponse.json({ message: "Too many submissions. Please try again later." }, { status: 429 });
    }
    if (!response.ok) {
      console.error("Lead form: CRM rejected lead", { status: response.status, form: lead.form });
      return NextResponse.json({ message: "Failed to submit form" }, { status: 502 });
    }
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Lead form: CRM request failed", {
      form: lead.form,
      error: error?.name,
      cause: error?.cause?.code || error?.cause?.message || error?.message,
    });
    return NextResponse.json({ message: "Failed to submit form" }, { status: 502 });
  }
}
