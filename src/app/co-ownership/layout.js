import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { coOwnershipSchemas } from "@/utils/schema";
import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/co-ownership");

export default function CoOwnershipLayout({ children }) {
  return (
    <>
      <SchemaScripts schemas={coOwnershipSchemas()} />
      {children}
    </>
  );
}
