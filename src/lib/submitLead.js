"use client";

import { useEffect, useRef } from "react";
import { SITE_BASE_PATH } from "@/utils/site";

const GENERIC_ERROR =
  "An error occurred while submitting your message. Please try again later.";

/**
 * Returns submit(fields) for a website enquiry form. Throws an Error with a
 * user-facing message on failure. The submission id stays the same across
 * retries so the CRM merges a retried enquiry instead of duplicating it.
 */
export function useLeadSubmit(form) {
  const startedAt = useRef(0);
  const submissionId = useRef(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  return async (fields) => {
    submissionId.current ??= crypto.randomUUID();
    const response = await fetch(`${SITE_BASE_PATH}/api/contactus`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...fields,
        form,
        submissionId: submissionId.current,
        startedAt: startedAt.current,
      }),
    });
    if (response.ok) return;
    const data = await response.json().catch(() => ({}));
    const isUserError = response.status === 400 || response.status === 429;
    throw new Error(isUserError && data.message ? data.message : GENERIC_ERROR);
  };
}
