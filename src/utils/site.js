export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.sereneheightsnathiagali.com";

export const SITE_HOST = new URL(SITE_URL).host;
export const APEX_HOST = SITE_HOST.replace(/^www\./, "");

export const SITE_NAME = "Serene Heights Nathia Gali";
export const HOME_TITLE =
  "Serene Heights Nathia Gali | Pakistan's #1 Winter Resort & Investment";
export const HOME_DESCRIPTION =
  "Invest in Serene Heights - Pakistan's luxury 5-star winter resort. Earn PKR 80K-120K monthly rental income. Premium hotel apartments with verified returns and 24/7 management.";
export const ABOUT_TITLE =
  "Serene Heights Nathia Gali | Luxury Hotel Apartments & Resort";
export const ABOUT_DESCRIPTION =
  "Learn about Serene Heights Nathia Gali, a luxury hotel & resort led by owner Fahad Masud Lone, offering fully furnished 1, 2 & 3 bed apartments with 50+ amenities in the Galyat hills.";
export const INVEST_TITLE =
  "Invest with Serene Heights | Nathia Gali Property Investment";
export const INVEST_DESCRIPTION =
  "Hotel apartment investment at Serene Heights Nathia Gali with professional resort management, quarterly income statements and a 36-month payment plan.";
export const AMENITIES_TITLE = "Amenities | Serene Heights Nathia Gali";
export const AMENITIES_DESCRIPTION =
  "50+ world-class amenities at Serene Heights including infinity pool, spa, rooftop restaurant, fitness gym, adventure activities and 24/7 concierge.";
export const PAYMENT_PLAN_TITLE = "Payment Plan | Serene Heights Nathia Gali";
export const PAYMENT_PLAN_DESCRIPTION =
  "Payment plan for Serene Heights hotel apartments: PKR 37,000 per sq ft base price, booking from 30%, 36 monthly installments, managed by DM Consortium with hotel-apartment revenue sharing for owners.";
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
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    absoluteTitle: true,
  },
  "/about": {
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    absoluteTitle: true,
  },
  "/amenities": {
    title: AMENITIES_TITLE,
    description: AMENITIES_DESCRIPTION,
    absoluteTitle: true,
  },
  "/payment-plan": {
    title: PAYMENT_PLAN_TITLE,
    description: PAYMENT_PLAN_DESCRIPTION,
    absoluteTitle: true,
  },
  "/invest": {
    title: INVEST_TITLE,
    description: INVEST_DESCRIPTION,
    absoluteTitle: true,
  },
  "/floor-plans": {
    title: "Floor Plans | Serene Heights Nathia Gali",
    description:
      "Interactive tower layouts and floor plans for Serene Heights Nathia Gali's fully furnished 1, 2 and 3 bed hotel apartments across 3 towers.",
    absoluteTitle: true,
  },
  "/floor-plans/floors": {
    title: "Floor Plans | Serene Heights Nathia Gali",
    description:
      "Detailed floor-by-floor plans for Serene Heights Nathia Gali resort towers.",
    absoluteTitle: true,
  },
  "/progress": {
    title: "Construction Progress | Serene Heights Nathia Gali",
    description:
      "Dated video updates documenting construction progress at Serene Heights Nathia Gali from December 2021 to December 2025.",
    absoluteTitle: true,
  },
  "/co-ownership": {
    title: "Smart Property Unit | Serene Heights Nathia Gali",
    description:
      "Smart Property Units at Serene Heights Nathia Gali: fractional co-ownership of luxury hotel apartments in standardized 50 sq ft units with managed rental income distribution by DM Consortium.",
    absoluteTitle: true,
  },
  "/contact-us": {
    title: "Contact Us | Serene Heights Nathia Gali",
    description:
      "Contact Serene Heights Nathia Gali by phone, WhatsApp or email, or visit the project site in Nathia Gali or the DM Consortium head office in Lahore.",
    absoluteTitle: true,
  },
  "/blog": {
    title: "Blog | Serene Heights Nathia Gali",
    description:
      "Stories, updates, and insights from the Serene Heights resort development in Nathia Gali: travel guides, investment analysis, and construction news.",
    absoluteTitle: true,
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
  const pageMeta = PAGE_SEO[path];

  if (pageMeta?.absoluteTitle && (title || pageMeta.title)) {
    return title || pageMeta.title;
  }

  if (title) {
    return title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;
  }

  const pageTitle = pageMeta?.title;
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
  const title = pageMeta.title;
  const description = pageMeta.description || DEFAULT_DESCRIPTION;
  const resolvedTitle = resolveTitle(title, path);

  return {
    title: pageMeta.absoluteTitle
      ? { absolute: resolvedTitle }
      : resolvedTitle,
    description,
    ...buildSocialMetadata({
      title,
      description,
      path,
    }),
  };
}

export function createPageMetadata({ title, description, path }) {
  const pageMeta = PAGE_SEO[path] || {};
  const resolvedTitle = resolveTitle(title || pageMeta.title, path);
  const resolvedDescription =
    description || pageMeta.description || DEFAULT_DESCRIPTION;

  return {
    title: pageMeta.absoluteTitle
      ? { absolute: resolvedTitle }
      : resolvedTitle,
    description: resolvedDescription,
    ...buildSocialMetadata({
      title: title || pageMeta.title,
      description: resolvedDescription,
      path,
    }),
  };
}

export const rootMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  ...buildSocialMetadata({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    path: "/",
  }),
};
