import { aminitiesElements, featuresElements } from "@/utils/constants/aminitiesElements";
import { SITE_URL } from "@/utils/site";

export const BUSINESS = {
  name: "Serene Heights Nathia Gali",
  legalName: "Serene Heights Hotel & Resorts",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo/logo.png`,
  email: "info@sereneheightsnathiagali.com",
  phones: ["+92-42-111-111-744", "+92-300-8497999"],
  projectAddress: {
    streetAddress: "1.5KM, Kala Bagh Air Base Road",
    addressLocality: "Nathiagali",
    addressRegion: "Khyber Pakhtunkhwa",
    addressCountry: "PK",
  },
  headOfficeAddress: {
    streetAddress: "H. No. 71 C3 Gulberg III Park View Lane",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  geo: {
    latitude: 34.064834,
    longitude: 73.366237,
  },
  description:
    "Pakistan's first and largest winter resort in Nathia Gali offering luxury hotel apartments, Smart Property Unit co-ownership, and world-class amenities in the Galiyat highlands.",
};

function postalAddress(address) {
  return {
    "@type": "PostalAddress",
    ...address,
  };
}

function geoCoordinates() {
  return {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.latitude,
    longitude: BUSINESS.geo.longitude,
  };
}

function amenityFeatures() {
  const amenityNames = [
    ...aminitiesElements.map((item) => item.text.trim()),
    ...featuresElements
      .filter((item) => item.heading)
      .map((item) => item.heading.trim()),
  ];

  return [...new Set(amenityNames)].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  }));
}

function hotelBase(overrides = {}) {
  return {
    "@type": "Hotel",
    "@id": `${SITE_URL}/#hotel`,
    name: BUSINESS.name,
    alternateName: BUSINESS.legalName,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    description: BUSINESS.description,
    email: BUSINESS.email,
    telephone: BUSINESS.phones,
    address: postalAddress(BUSINESS.projectAddress),
    geo: geoCoordinates(),
    priceRange: "$$$$",
    ...overrides,
  };
}

export function homeSchemas() {
  return [
    {
      "@context": "https://schema.org",
      ...hotelBase(),
      additionalType: "https://schema.org/LocalBusiness",
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: BUSINESS.name,
      url: BUSINESS.url,
      logo: BUSINESS.logo,
      image: BUSINESS.logo,
      description: BUSINESS.description,
      email: BUSINESS.email,
      telephone: BUSINESS.phones,
      address: postalAddress(BUSINESS.projectAddress),
      geo: geoCoordinates(),
      parentOrganization: {
        "@type": "Organization",
        name: "DM Consortium",
      },
    },
  ];
}

export function contactSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/contact-us#localbusiness`,
      name: BUSINESS.name,
      url: `${SITE_URL}/contact-us`,
      logo: BUSINESS.logo,
      description: BUSINESS.description,
      email: BUSINESS.email,
      telephone: BUSINESS.phones,
      address: postalAddress(BUSINESS.projectAddress),
      geo: geoCoordinates(),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: BUSINESS.phones[0],
          contactType: "customer service",
          email: BUSINESS.email,
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"],
        },
        {
          "@type": "ContactPoint",
          telephone: BUSINESS.phones[1],
          contactType: "sales",
          email: BUSINESS.email,
          areaServed: "PK",
        },
      ],
      location: [
        {
          "@type": "Place",
          name: `${BUSINESS.name} Project Site`,
          address: postalAddress(BUSINESS.projectAddress),
          geo: geoCoordinates(),
        },
        {
          "@type": "Place",
          name: "DM Consortium Head Office",
          address: postalAddress(BUSINESS.headOfficeAddress),
        },
      ],
    },
  ];
}

export function amenitiesSchemas() {
  return [
    {
      "@context": "https://schema.org",
      ...hotelBase({
        url: `${SITE_URL}/amenities`,
        "@id": `${SITE_URL}/amenities#hotel`,
        amenityFeature: amenityFeatures(),
      }),
    },
  ];
}

export function paymentPlanSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Serene Heights Hotel Apartment",
      description:
        "Fully furnished luxury hotel apartment at Serene Heights Nathia Gali with flexible payment plans.",
      brand: {
        "@type": "Brand",
        name: BUSINESS.name,
      },
      category: "Real Estate",
      offers: [
        {
          "@type": "Offer",
          name: "Basic Price",
          price: 37000,
          priceCurrency: "PKR",
          description: "Basic price per square foot for Serene Heights apartments.",
          url: `${SITE_URL}/payment-plan`,
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "DM Consortium",
          },
        },
        {
          "@type": "Offer",
          name: "Booking Down Payment",
          description: "30% down payment payable within 5 days of booking.",
          url: `${SITE_URL}/payment-plan`,
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "36-Month Installment Plan",
          description:
            "Possession in 36 months with monthly installments. Detailed plan shared at booking.",
          url: `${SITE_URL}/payment-plan`,
          availability: "https://schema.org/InStock",
        },
      ],
    },
  ];
}

const howToSteps = [
  {
    name: "Fill booking form",
    text: "Apply easily with just a few personal and financial details.",
  },
  {
    name: "Choose payment plan",
    text: "Select an affordable down payment and easy monthly installments.",
  },
  {
    name: "Confirm ownership",
    text: "Once payments are complete, your Smart Property Unit in Serene Heights is secured.",
  },
  {
    name: "Managed by experts",
    text: "DM Consortium takes care of rentals, maintenance, and returns.",
  },
  {
    name: "Transferable units",
    text: "Sell or transfer your ownership anytime.",
  },
];

const faqItems = [
  {
    question: "What is a Smart Property Unit?",
    answer:
      "Smart Property Unit is a co-ownership model that lets you invest in premium Serene Heights real estate with units of 50 sq ft instead of purchasing an entire apartment.",
  },
  {
    question: "How does rental income work?",
    answer:
      "On project completion, apartments are rented by DM Consortium and rental income is distributed according to your unit share.",
  },
  {
    question: "What is the minimum investment?",
    answer:
      "One Smart Property Unit covers 50 sq ft with a unit value of PKR 2,250,000 and a 30% down payment of PKR 675,000.",
  },
  {
    question: "What ROI can investors expect?",
    answer:
      "Expected annual rental income is PKR 300,000 with an estimated ROI of 13–15% including rental income and capital gain.",
  },
  {
    question: "Can I transfer my Smart Property Unit?",
    answer:
      "Yes. Smart Property Units are transferable and can be sold or transferred at any time.",
  },
];

export function coOwnershipSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to own a Smart Property Unit at Serene Heights",
      description:
        "Step-by-step guide to booking and securing a Smart Property Unit at Serene Heights Nathia Gali.",
      step: howToSteps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}
