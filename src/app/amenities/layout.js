import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { amenitiesSchemas } from "@/utils/schema";
import { canonicalMetadata } from "@/utils/site";

export const metadata = canonicalMetadata("/amenities");

export default function AmenitiesLayout({ children }) {
  return (
    <>
      <SchemaScripts schemas={amenitiesSchemas()} />
      {children}
    </>
  );
}
