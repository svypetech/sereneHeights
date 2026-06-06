import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { paymentPlanSchemas } from "@/utils/schema";
import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/payment-plan");

export default function PaymentPlanLayout({ children }) {
  return (
    <>
      <SchemaScripts schemas={paymentPlanSchemas()} />
      {children}
    </>
  );
}
