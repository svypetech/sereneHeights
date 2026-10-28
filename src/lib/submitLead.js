"use client";

import { useEffect, useRef, useState } from "react";
import { TURNSTILE_SITE_KEY } from "@/components/turnstile/Turnstile";
import { SITE_BASE_PATH } from "@/utils/site";

const GENERIC_ERROR =
  "An error occurred while submitting your message. Please try again later.";
const BOT_CHECK_PENDING =
  "Please wait a moment for the security check to finish, then try again.";

/**
 * Submit helper for a website enquiry form. Returns `submitLead(fields)`, which
 * throws an Error with a user-facing message on failure, and `turnstileProps`
 * for the form's <Turnstile />. The submission id stays the same across
 * retries so the CRM merges a retried enquiry instead of duplicating it.
 */
export function useLeadSubmit(form) {
  const startedAt = useRef(0);
  const submissionId = useRef(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const submitLead = async (fields) => {
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      throw new Error(BOT_CHECK_PENDING);
    }
    submissionId.current ??= crypto.randomUUID();
    const response = await fetch(`${SITE_BASE_PATH}/api/contactus`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...fields,
        form,
        submissionId: submissionId.current,
        startedAt: startedAt.current,
        turnstileToken,
      }),
    });
    if (response.ok) return;
    // Turnstile tokens are single-use: get a fresh one for the retry.
    setResetKey((k) => k + 1);
    const data = await response.json().catch(() => ({}));
    const isUserError = response.status === 400 || response.status === 429;
    throw new Error(isUserError && data.message ? data.message : GENERIC_ERROR);
  };

  return { submitLead, turnstileProps: { onToken: setTurnstileToken, resetKey } };
}
