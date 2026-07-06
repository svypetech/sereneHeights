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
  "About Serene Heights Nathia Gali | DM Consortium's Luxury Resort Vision";
export const ABOUT_DESCRIPTION =
  "Learn about Serene Heights' founder Muhammad Ali Khan, expert leadership team, and proven track record. Discover why 500+ investors trust our transparent approach to mountain resort development.";
export const AMENITIES_TITLE =
  "Luxury Amenities at Serene Heights Nathia Gali | 50+ World-Class Facilities";
export const AMENITIES_DESCRIPTION =
  "Explore 50+ premium amenities at Serene Heights. Infinity pool, rooftop restaurant, spa, fitness gym, adventure activities, business center, and more. World-class resort facilities for investors and guests.";
export const PAYMENT_PLAN_TITLE =
  "Payment Plans for Serene Heights Nathia Gali | PKR 37,000 Per Sq Ft with 36-Month Installments";
export const PAYMENT_PLAN_DESCRIPTION =
  "Investment payment plans at Serene Heights starting at PKR 37,000 per sq ft. 30% booking payment with 36-month installments. Managed hotel apartments with zero maintenance fees and profit sharing.";
export const INVEST_TITLE =
  "Invest with Serene Heights | 75% Annual Returns | Nathia Gali Property Investment";
export const INVEST_DESCRIPTION =
  "Invest in Serene Heights Nathia Gali. 75% annual returns. Professional resort management. Limited units at development price. Get your investment analysis.";
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
