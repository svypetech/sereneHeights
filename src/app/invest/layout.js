import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { investSchemas } from "@/utils/schema";
import { canonicalMetadata } from "@/utils/site";

export const metadata = {
  ...canonicalMetadata("/invest"),
  keywords: [
    "invest with serene heights",
    "Nathia Gali property investment",
    "resort property investment Pakistan",
    "high return real estate",
  ],
};

export default function InvestLayout({ children }) {
  return (
    <>
      <SchemaScripts schemas={investSchemas()} />
      {children}
    </>
  );
}
