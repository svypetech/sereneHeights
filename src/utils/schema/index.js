import { aminitiesElements } from "@/utils/constants/aminitiesElements";
import { investFaqItems } from "@/utils/constants/investContent";
import { SITE_URL } from "@/utils/site";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const DM_CONSORTIUM_ID = `${SITE_URL}/#dm-consortium`;
const RESORT_ID = `${SITE_URL}/#resort`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const FOUNDER_ID = `${SITE_URL}/about#fahad-masud-lone`;
const BLOG_ID = `${SITE_URL}/blog#blog`;
const LOGO_URL = `${SITE_URL}/assets/logo/logo.png`;
const OG_IMAGE_URL = `${SITE_URL}/assets/og/og-image.png`;

const RESORT_AMENITIES = [
  "Infinity Pool",
  "Rooftop Restaurant",
  "Sauna, Jacuzzi & Massage",
  "Fitness Gym",
  "24/7 Front Desk & Concierge",
  "24/7 CCTV Surveillance",
  "Power Backup",
  "Dedicated Parking Floor",
  "Business & Executive Center",
  "Conference Room",
  "Banquet Hall",
  "Mosque / Prayer Room",
  "Mini Golf Course",
  "Archery",
  "Zipline",
  "Rock Climbing",
  "Air Gun Shooting Range",
  "Refractor Telescope",
  "Italian Central Heating & Heated Flooring",
];

export const PROGRESS_VIDEOS = [
  {
    label: "December 2025",
    id: "HIewLGoRr2g",
    uploadDate: "2025-12-01",
  },
  {
    label: "September 2025",
    id: "_b7QhNjmldk",
    uploadDate: "2025-09-01",
  },
  {
    label: "April 2025",
    id: "zih0inhf1hM",
    uploadDate: "2025-04-01",
  },
  {
    label: "July 2024",
    id: "_RjucM01Vp8",
    uploadDate: "2024-07-01",
  },
  {
    label: "February 2024",
    id: "J_EAtfLGICw",
    uploadDate: "2024-02-01",
  },
  {
    label: "November 2023",
    id: "YbcwSm0l4Es",
    uploadDate: "2023-11-01",
  },
  {
    label: "July 2023",
    id: "deh7Edv0cFM",
    uploadDate: "2023-07-01",
  },
  {
    label: "October 2022",
    id: "_ArGeucKghA",
    uploadDate: "2022-10-01",
  },
  {
    label: "December 2021",
    id: "-j6c51b2Dis",
    uploadDate: "2021-12-01",
  },
];

function graph(nodes) {
  return [
    {
      "@context": "https://schema.org",
      "@graph": nodes,
    },
  ];
}

function organizationRef() {
  return { "@id": ORGANIZATION_ID };
}

function resortRef() {
  return { "@id": RESORT_ID };
}

function websiteRef() {
  return { "@id": WEBSITE_ID };
}

function breadcrumb(id, items) {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

function flattenText(content) {
  if (typeof content === "string") {
    return content.replace(/\s+/g, " ").trim();
  }

  if (Array.isArray(content)) {
    return content
      .map((part) => {
        if (typeof part === "string") return part;
        if (part?.type === "link") return part.text || "";
        if (part?.type === "bold" || part?.type === "italic") return part.text || "";
        return part?.value || "";
      })
      .join("")
      .replace(/\s+/g, " ")
      .trim();
  }

  return "";
}

function faqMainEntity(items) {
  return items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));
}

function absoluteUrl(path) {
  if (!path) return OG_IMAGE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function homeSchemas() {
  return graph([
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Serene Heights Nathia Gali",
      alternateName: "Serene Heights Hotels & Resorts",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: LOGO_URL,
        contentUrl: LOGO_URL,
        caption: "Serene Heights Nathia Gali Hotel and Resort",
      },
      image: OG_IMAGE_URL,
      description:
        "Serene Heights Nathia Gali is a winter resort and hotel apartment development at 7,906 ft in Nathia Gali, Khyber Pakhtunkhwa, offering fully furnished 1, 2 and 3 bed hotel apartments and Smart Property Units, developed and managed by DM Consortium.",
      telephone: "+92-42-111-111-744",
      email: "info@sereneheightsnathiagali.com",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+92-300-8497999",
          availableLanguage: ["English", "Urdu"],
        },
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+92-321-4979447",
          availableLanguage: ["English", "Urdu"],
        },
      ],
      parentOrganization: { "@id": DM_CONSORTIUM_ID },
      sameAs: [
        "https://www.linkedin.com/company/serene-heights-hotel-resort",
        "https://www.instagram.com/sereneheightshotelsandresorts/",
        "https://www.facebook.com/sereneheightshotelsandresorts",
        "https://youtube.com/@sereneheightsnathiagali5573",
      ],
    },
    {
      "@type": "Organization",
      "@id": DM_CONSORTIUM_ID,
      name: "DM Consortium",
      foundingDate: "2018",
      founder: { "@id": FOUNDER_ID },
      description:
        "Real estate development company founded in 2018, developer and operator of Serene Heights Nathia Gali and the Serene Farms development in Lahore.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "H. No. 71 C3, Gulberg III, Park View Lane",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
    {
      "@type": "Resort",
      "@id": RESORT_ID,
      name: "Serene Heights Nathia Gali",
      url: `${SITE_URL}/`,
      image: OG_IMAGE_URL,
      description:
        "Winter resort development at 7,906 ft elevation in Nathia Gali on a 30+ kanal campus, comprising 3 towers with 150+ fully furnished hotel apartments and 50+ planned amenities including an infinity pool, rooftop restaurant, spa and adventure activities. Currently under construction and managed by DM Consortium.",
      brand: organizationRef(),
      address: {
        "@type": "PostalAddress",
        streetAddress: "1.5 KM, Kala Bagh Air Base Road",
        addressLocality: "Nathia Gali",
        addressRegion: "Khyber Pakhtunkhwa",
        addressCountry: "PK",
      },
      telephone: "+92-300-8497999",
      containedInPlace: {
        "@type": "Place",
        name: "Nathia Gali, Galiyat, Khyber Pakhtunkhwa",
      },
      amenityFeature: RESORT_AMENITIES.map((name) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true,
      })),
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: "Serene Heights Nathia Gali",
      publisher: organizationRef(),
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Serene Heights Nathia Gali | Pakistan's Winter Resort & Investment",
      isPartOf: websiteRef(),
      about: resortRef(),
      inLanguage: "en",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: OG_IMAGE_URL,
      },
    },
  ]);
}

export function aboutSchemas() {
  return graph([
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about#webpage`,
      url: `${SITE_URL}/about`,
      name: "Serene Heights Nathia Gali | Luxury Hotel Apartments & Resort",
      description:
        "Learn about Serene Heights Nathia Gali, a luxury hotel & resort led by owner Fahad Masud Lone, offering fully furnished 1, 2 & 3 bed apartments with 50+ amenities in the Galyat hills.",
      isPartOf: websiteRef(),
      about: organizationRef(),
      breadcrumb: { "@id": `${SITE_URL}/about#breadcrumb` },
      inLanguage: "en",
    },
    breadcrumb(`${SITE_URL}/about#breadcrumb`, [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "About", item: `${SITE_URL}/about` },
    ]),
    {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Fahad Masud Lone",
      jobTitle: "Visionary CEO, Serene Heights Nathia Gali",
      description:
        "Visionary CEO behind Serene Heights Nathia Gali, redefining luxury resort living in Galyat with Pakistan’s first winter resort concept, innovative financial models, and transparent ownership with zero maintenance charges.",
      worksFor: organizationRef(),
      knowsAbout: [
        "Real estate development",
        "Mountain hospitality",
        "Entrepreneurship",
        "Leadership education",
      ],
    },
  ]);
}

export function amenitiesSchemas() {
  const amenityNames = aminitiesElements.map((item) => item.text.trim());

  return graph([
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/amenities#webpage`,
      url: `${SITE_URL}/amenities`,
      name: "Amenities | Serene Heights Nathia Gali",
      description:
        "50+ world-class amenities at Serene Heights including infinity pool, spa, rooftop restaurant, fitness gym, adventure activities and 24/7 concierge.",
      isPartOf: websiteRef(),
      about: resortRef(),
      breadcrumb: { "@id": `${SITE_URL}/amenities#breadcrumb` },
      inLanguage: "en",
      mainEntity: { "@id": `${SITE_URL}/amenities#list` },
    },
    breadcrumb(`${SITE_URL}/amenities#breadcrumb`, [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Amenities", item: `${SITE_URL}/amenities` },
    ]),
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/amenities#list`,
      name: "Serene Heights Amenities",
      itemListElement: amenityNames.map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
      })),
    },
  ]);
}

export function paymentPlanSchemas() {
  return graph([
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/payment-plan#webpage`,
      url: `${SITE_URL}/payment-plan`,
      name: "Payment Plan | Serene Heights Nathia Gali",
      description:
        "Payment plan for Serene Heights hotel apartments: PKR 40,000 per sq ft base price, booking from 30%, 36 monthly installments, managed by DM Consortium with hotel-apartment revenue sharing for owners.",
      isPartOf: websiteRef(),
      breadcrumb: { "@id": `${SITE_URL}/payment-plan#breadcrumb` },
      inLanguage: "en",
      mainEntity: { "@id": `${SITE_URL}/payment-plan#offer` },
    },
    breadcrumb(`${SITE_URL}/payment-plan#breadcrumb`, [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Payment Plan", item: `${SITE_URL}/payment-plan` },
    ]),
    {
      "@type": "Offer",
      "@id": `${SITE_URL}/payment-plan#offer`,
      name: "Serene Heights Hotel Apartments",
      description:
        "Fully furnished 1, 2 and 3 bed hotel apartments at Serene Heights Nathia Gali. Booking from 30% with a 36-month installment plan.",
      url: `${SITE_URL}/payment-plan`,
      seller: organizationRef(),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: 40000,
        priceCurrency: "PKR",
        unitText: "per square foot",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitText: "SQFT",
        },
      },
      itemOffered: {
        "@type": "Apartment",
        name: "Serene Heights Fully Furnished Hotel Apartment",
        containedInPlace: resortRef(),
      },
      availability: "https://schema.org/PreOrder",
    },
  ]);
}

export function investSchemas() {
  const faqItems = investFaqItems.map((item) => ({
    question: item.body[0],
    answer: flattenText(item.body[1]),
  }));

  return graph([
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/invest#webpage`,
      url: `${SITE_URL}/invest`,
      name: "Invest with Serene Heights | Nathia Gali Property Investment",
      description:
        "Hotel apartment investment at Serene Heights Nathia Gali with professional resort management, quarterly income statements and a 36-month payment plan.",
      isPartOf: websiteRef(),
      about: resortRef(),
      breadcrumb: { "@id": `${SITE_URL}/invest#breadcrumb` },
      inLanguage: "en",
    },
    breadcrumb(`${SITE_URL}/invest#breadcrumb`, [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Investment", item: `${SITE_URL}/invest` },
    ]),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/invest#faq`,
      mainEntity: faqMainEntity(faqItems),
    },
  ]);
}

export function floorPlansSchemas() {
  return graph([
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/floor-plans#webpage`,
      url: `${SITE_URL}/floor-plans`,
      name: "Floor Plans | Serene Heights Nathia Gali",
      description:
        "Interactive tower layouts and floor plans for Serene Heights Nathia Gali's fully furnished 1, 2 and 3 bed hotel apartments across 3 towers.",
      isPartOf: websiteRef(),
      about: resortRef(),
      breadcrumb: { "@id": `${SITE_URL}/floor-plans#breadcrumb` },
      inLanguage: "en",
    },
    breadcrumb(`${SITE_URL}/floor-plans#breadcrumb`, [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Floor Plans", item: `${SITE_URL}/floor-plans` },
    ]),
  ]);
}

export function progressSchemas() {
  return graph([
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/progress#webpage`,
      url: `${SITE_URL}/progress`,
      name: "Construction Progress | Serene Heights Nathia Gali",
      description:
        "Dated video updates documenting construction progress at Serene Heights Nathia Gali from December 2021 to December 2025.",
      isPartOf: websiteRef(),
      about: resortRef(),
      breadcrumb: { "@id": `${SITE_URL}/progress#breadcrumb` },
      inLanguage: "en",
    },
    breadcrumb(`${SITE_URL}/progress#breadcrumb`, [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Construction Progress", item: `${SITE_URL}/progress` },
    ]),
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/progress#videos`,
      name: "Serene Heights Construction Progress Videos",
      itemListElement: PROGRESS_VIDEOS.map((video, index) => ({
        "@type": "VideoObject",
        position: index + 1,
        name: `Serene Heights Nathia Gali Construction Progress - ${video.label}`,
        description: `Construction progress update for Serene Heights Nathia Gali, ${video.label}.`,
        embedUrl: `https://www.youtube.com/embed/${video.id}`,
        contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
        thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
        uploadDate: video.uploadDate,
        publisher: organizationRef(),
      })),
    },
  ]);
}

export function coOwnershipSchemas() {
  return graph([
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/co-ownership#webpage`,
      url: `${SITE_URL}/co-ownership`,
      name: "Smart Property Unit | Serene Heights Nathia Gali",
      description:
        "Smart Property Units at Serene Heights Nathia Gali: fractional co-ownership of luxury hotel apartments in standardized 50 sq ft units with managed rental income distribution by DM Consortium.",
      isPartOf: websiteRef(),
      breadcrumb: { "@id": `${SITE_URL}/co-ownership#breadcrumb` },
      inLanguage: "en",
      mainEntity: { "@id": `${SITE_URL}/co-ownership#product` },
    },
    breadcrumb(`${SITE_URL}/co-ownership#breadcrumb`, [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Smart Property Unit", item: `${SITE_URL}/co-ownership` },
    ]),
    {
      "@type": "Product",
      "@id": `${SITE_URL}/co-ownership#product`,
      name: "Smart Property Unit at Serene Heights Nathia Gali",
      description:
        "Fractional co-ownership unit of 50 sq ft in a luxury hotel apartment at Serene Heights Nathia Gali. On project completion the apartment is rented out by DM Consortium and rental income is distributed according to units held. Units are transferable and protected by legal agreements.",
      url: `${SITE_URL}/co-ownership`,
      image: OG_IMAGE_URL,
      brand: organizationRef(),
      offers: {
        "@type": "Offer",
        price: 2250000,
        priceCurrency: "PKR",
        url: `${SITE_URL}/co-ownership`,
        seller: organizationRef(),
        availability: "https://schema.org/PreOrder",
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          value: 50,
          unitText: "SQFT per unit",
        },
      },
    },
  ]);
}

export function blogIndexSchemas() {
  return graph([
    {
      "@type": "Blog",
      "@id": BLOG_ID,
      url: `${SITE_URL}/blog`,
      name: "Serene Heights Nathia Gali Blog",
      description:
        "Stories, updates, and insights from the Serene Heights resort development in Nathia Gali: travel guides, investment analysis, and construction news.",
      publisher: organizationRef(),
      inLanguage: "en",
    },
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/blog#webpage`,
      url: `${SITE_URL}/blog`,
      name: "Blog | Serene Heights Nathia Gali",
      isPartOf: websiteRef(),
      breadcrumb: { "@id": `${SITE_URL}/blog#breadcrumb` },
      mainEntity: { "@id": BLOG_ID },
      inLanguage: "en",
    },
    breadcrumb(`${SITE_URL}/blog#breadcrumb`, [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Blog", item: `${SITE_URL}/blog` },
    ]),
  ]);
}

export function blogPostSchemas(post) {
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const nodes = [
    {
      "@type": "BlogPosting",
      "@id": `${postUrl}#article`,
      headline: post.title,
      description: post.metaDescription || post.excerpt,
      url: postUrl,
      mainEntityOfPage: postUrl,
      datePublished: post.date,
      dateModified: post.date,
      author: organizationRef(),
      publisher: organizationRef(),
      image: absoluteUrl(post.image),
      isPartOf: { "@id": BLOG_ID },
      articleSection: post.category,
      inLanguage: "en",
    },
    breadcrumb(`${postUrl}#breadcrumb`, [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: post.title, item: postUrl },
    ]),
  ];

  const faqSection = (post.sections || []).find((section) => section.type === "faq");
  if (faqSection?.items?.length) {
    nodes.push({
      "@type": "FAQPage",
      "@id": `${postUrl}#faq`,
      mainEntity: faqMainEntity(
        faqSection.items.map((item) => ({
          question: flattenText(item.question),
          answer: flattenText(item.answer),
        }))
      ),
    });
  }

  return graph(nodes);
}

export function contactSchemas() {
  return graph([
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact-us#webpage`,
      url: `${SITE_URL}/contact-us`,
      name: "Contact Us | Serene Heights Nathia Gali",
      description:
        "Contact Serene Heights Nathia Gali by phone, WhatsApp or email, or visit the project site in Nathia Gali or the DM Consortium head office in Lahore.",
      isPartOf: websiteRef(),
      about: organizationRef(),
      breadcrumb: { "@id": `${SITE_URL}/contact-us#breadcrumb` },
      inLanguage: "en",
      mainEntity: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        location: [
          {
            "@type": "Place",
            name: "Serene Heights Project Site",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1.5 KM, Kala Bagh Air Base Road",
              addressLocality: "Nathia Gali",
              addressRegion: "Khyber Pakhtunkhwa",
              addressCountry: "PK",
            },
          },
          {
            "@type": "Place",
            name: "DM Consortium Head Office",
            address: {
              "@type": "PostalAddress",
              streetAddress: "H. No. 71 C3, Gulberg III, Park View Lane",
              addressLocality: "Lahore",
              addressRegion: "Punjab",
              addressCountry: "PK",
            },
          },
        ],
      },
    },
    breadcrumb(`${SITE_URL}/contact-us#breadcrumb`, [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Contact Us", item: `${SITE_URL}/contact-us` },
    ]),
  ]);
}
