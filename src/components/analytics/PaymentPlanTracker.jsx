"use client";

import { useEffect } from "react";
import { trackPaymentPlanEngagement } from "@/lib/analytics";

export default function PaymentPlanTracker() {
  useEffect(() => {
    trackPaymentPlanEngagement("page_view", {
      page_path: "/payment-plan",
    });
  }, []);

  return null;
}
