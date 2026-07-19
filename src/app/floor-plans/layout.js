import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { floorPlansSchemas } from "@/utils/schema";
import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/floor-plans");

export default function FloorPlansLayout({ children }) {
  return (
    <>
      <SchemaScripts schemas={floorPlansSchemas()} />
      {children}
    </>
  );
}
