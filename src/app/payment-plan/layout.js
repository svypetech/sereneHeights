import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/payment-plan");

export default function PaymentPlanLayout({ children }) {
  return children;
}
