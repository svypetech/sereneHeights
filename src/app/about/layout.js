import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { aboutSchemas } from "@/utils/schema";
import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/about");

export default function AboutLayout({ children }) {
  return (
    <>
      <SchemaScripts schemas={aboutSchemas()} />
      {children}
    </>
  );
}
