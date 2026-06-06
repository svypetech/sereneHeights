import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { homeSchemas } from "@/utils/schema";
import HomePage from "./HomePage";

export default function Page() {
  return (
    <>
      <SchemaScripts schemas={homeSchemas()} />
      <HomePage />
    </>
  );
}
