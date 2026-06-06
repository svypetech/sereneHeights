import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { contactSchemas } from "@/utils/schema";
import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/contact-us");

export default function ContactUsLayout({ children }) {
  return (
    <>
      <SchemaScripts schemas={contactSchemas()} />
      {children}
    </>
  );
}
