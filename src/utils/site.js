export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.sereneheightsnathiagali.com";

export const SITE_HOST = new URL(SITE_URL).host;
export const APEX_HOST = SITE_HOST.replace(/^www\./, "");

export const SITE_NAME = "Serene Heights Nathia Gali";
export const DEFAULT_DESCRIPTION =
  "Pakistan's first and largest winter resort in Nathia Gali offering luxury hotel apartments, Smart Property Units, and world-class amenities in the Galiyat highlands.";

export const OG_IMAGE = {
  url: "/assets/og/og-image.png",
  width: 1200,
  height: 630,
  alt: "Serene Heights Nathia Gali Hotel & Resort",
};

const PAGE_SEO = {
  "/": {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
  },
  "/about": {
    title: "About Us",
    description:
      "Discover Serene Holdings and DM Consortium's flagship Serene Heights Hotel & Resorts development in Nathia Gali.",
  },
  "/amenities": {
    title: "Amenities",
    description:
      "Explore 50+ world-class amenities at Serene Heights including infinity pool, spa, rooftop restaurant, and more.",
  },
  "/payment-plan": {
    title: "Payment Plan",
    description:
      "Flexible payment plans for Serene Heights hotel apartments with affordable down payment and monthly installments.",
  },
  "/floor-plans": {
    title: "Floor Plans",
    description:
      "View tower layouts and floor plans for Serene Heights Nathia Gali's luxury resort apartments.",
  },
  "/floor-plans/floors": {
    title: "Floor Plans",
    description:
      "Detailed floor-by-floor plans for Serene Heights Nathia Gali resort towers.",
  },
  "/progress": {
    title: "Construction Progress",
    description:
      "Follow the latest construction milestones and development updates at Serene Heights Nathia Gali.",
  },
  "/co-ownership": {
    title: "Smart Property Unit",
    description:
      "Invest in Serene Heights with Smart Property Units — fractional ownership from 50 sq ft with rental income.",
  },
  "/contact-us": {
    title: "Contact Us",
    description:
      "Get in touch with Serene Heights Nathia Gali for enquiries, site visits, and booking information.",
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description:
      "Privacy policy for Serene Heights Nathia Gali resort and real estate enquiries.",
  },
  "/thank-you": {
    title: "Thank You",
    description:
      "Thank you for contacting Serene Heights Nathia Gali. Our team will be in touch shortly.",
  },
};

function resolveTitle(title, path) {
  if (title) {
    return title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;
  }

  const pageTitle = PAGE_SEO[path]?.title;
  if (!pageTitle || pageTitle === SITE_NAME) {
    return SITE_NAME;
  }

  return `${pageTitle} | ${SITE_NAME}`;
}

function buildPageUrl(path) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

function buildHreflangAlternates(path) {
  const url = buildPageUrl(path);

  return {
    canonical: path,
    languages: {
      en: url,
      "x-default": url,
    },
  };
}

function buildSocialMetadata({ title, description, path }) {
  const pageMeta = PAGE_SEO[path] || {};
  const resolvedTitle = resolveTitle(title, path);
  const resolvedDescription =
    description || pageMeta.description || DEFAULT_DESCRIPTION;
  const url = buildPageUrl(path);

  return {
    alternates: buildHreflangAlternates(path),
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [OG_IMAGE.url],
    },
  };
}

export function canonicalMetadata(path) {
  const pageMeta = PAGE_SEO[path] || {};

  return {
    ...buildSocialMetadata({
      title: pageMeta.title,
      description: pageMeta.description,
      path,
    }),
  };
}

export function createPageMetadata({ title, description, path }) {
  return {
    title,
    description,
    ...buildSocialMetadata({ title, description, path }),
  };
}

export const rootMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  ...buildSocialMetadata({
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    path: "/",
  }),
};
