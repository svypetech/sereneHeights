export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.sereneheightsnathiagali.com";

export const SITE_HOST = new URL(SITE_URL).host;
export const APEX_HOST = SITE_HOST.replace(/^www\./, "");

export function canonicalMetadata(path) {
  return {
    alternates: {
      canonical: path,
    },
  };
}

export function createPageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
  };
}
