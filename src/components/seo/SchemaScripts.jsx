import { JsonLd } from "./JsonLd";

export function SchemaScripts({ schemas }) {
  return schemas.map((schema, index) => (
    <JsonLd key={index} data={schema} />
  ));
}
