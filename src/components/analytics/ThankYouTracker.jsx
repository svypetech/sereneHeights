"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ThankYouTracker() {
  useEffect(() => {
    trackEvent("thank_you_view", {
      page_path: "/thank-you",
    });
  }, []);

  return null;
}
