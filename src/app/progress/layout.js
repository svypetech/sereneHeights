import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { progressSchemas } from "@/utils/schema";
import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/progress");

export default function ProgressLayout({ children }) {
  return (
    <>
      <SchemaScripts schemas={progressSchemas()} />
      {children}
    </>
  );
}
