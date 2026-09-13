export const GA_MEASUREMENT_ID = "G-J275GJYG46";

/**
 * Fire a GA4 event. Safe to call from client components only.
 * Mark these event names as Key Events in GA4 Admin → Events.
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  const gtag = window.gtag;
  if (typeof gtag !== "function") return;

  gtag("event", eventName, params);
}

/** Successful enquiry / lead (contact or invest form). */
export function trackGenerateLead(params = {}) {
  trackEvent("generate_lead", {
    currency: "PKR",
    ...params,
  });
}

/** Floating contact widget clicks (WhatsApp / phone / email). */
export function trackContactClick(method, params = {}) {
  trackEvent("contact", {
    method,
    ...params,
  });
}

/** Payment plan page engagement / CTA. */
export function trackPaymentPlanEngagement(action, params = {}) {
  trackEvent("payment_plan_engagement", {
    action,
    ...params,
  });
}
