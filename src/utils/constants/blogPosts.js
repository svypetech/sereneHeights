export const blogPosts = [
  {
    slug: "discover-nathia-gali-premier-resort-destination",
    title: "Discover Nathia Gali: Pakistan's Premier Resort Destination",
    excerpt:
      "Nestled in the heart of the Galiyat region, Nathia Gali offers breathtaking mountain views, cool climate, and a serene escape from city life — the perfect setting for Serene Heights.",
    date: "2026-05-01",
    category: "Destination",
    image: "/assets/home/nathiagaliResort/nathiagaliResort.png",
    author: "Serene Heights Team",
    sections: [
      {
        type: "paragraph",
        content:
          "Nathia Gali, perched at an elevation of approximately 2,410 meters above sea level, is one of Pakistan's most cherished hill stations. Known for its lush pine forests, panoramic vistas, and pleasant year-round climate, it has long been a favorite retreat for families, travelers, and investors alike.",
      },
      {
        type: "heading",
        content: "Why Nathia Gali Stands Out",
      },
      {
        type: "paragraph",
        content:
          "Unlike many commercialized tourist spots, Nathia Gali retains its natural charm while offering modern accessibility. The region is well-connected via the Murree Expressway and Abbottabad Road, making it a convenient getaway from Islamabad, Rawalpindi, and Lahore.",
      },
      {
        type: "list",
        items: [
          "Average summer temperatures between 15°C and 25°C",
          "Rich biodiversity with hiking trails through pine and oak forests",
          "Proximity to Mukshpuri and Miranjani peaks for adventure enthusiasts",
          "Growing infrastructure supporting hospitality and real estate development",
        ],
      },
      {
        type: "heading",
        content: "Serene Heights at the Heart of It All",
      },
      {
        type: "paragraph",
        content:
          "Serene Heights Hotel & Resorts is strategically positioned to capture the essence of Nathia Gali. Our flagship development combines contemporary architecture with the timeless beauty of the Galiyat mountains, offering a refined luxury experience that sets a new standard for hospitality in Northern Pakistan.",
      },
    ],
  },
  {
    slug: "smart-property-unit-redefining-resort-investment",
    title: "Smart Property Unit: Redefining Resort Investment",
    excerpt:
      "Learn how Serene Heights' innovative Smart Property Unit model lets you own a share of premium resort real estate with flexible usage and strong returns.",
    date: "2026-04-15",
    category: "Investment",
    image: "/assets/home/largestResort.png",
    author: "Serene Heights Team",
    sections: [
      {
        type: "paragraph",
        content:
          "Traditional real estate investment in resort destinations often comes with high entry barriers and limited flexibility. Serene Heights introduces the Smart Property Unit — a co-ownership model designed to make premium resort real estate accessible, manageable, and rewarding.",
      },
      {
        type: "heading",
        content: "How the Model Works",
      },
      {
        type: "paragraph",
        content:
          "Each Smart Property Unit represents a fractional share in a fully furnished resort apartment. Owners enjoy designated usage days throughout the year while the property is professionally managed, maintained, and marketed when not in personal use.",
      },
      {
        type: "list",
        items: [
          "Fractional ownership of fully furnished resort units",
          "Professional property management and maintenance",
          "Flexible usage scheduling for personal vacations",
          "Potential rental income during unused periods",
          "Transparent payment plans tailored to your budget",
        ],
      },
      {
        type: "heading",
        content: "Built on Trust and Transparency",
      },
      {
        type: "paragraph",
        content:
          "DM Consortium, part of Serene Holdings, brings a proven track record in real estate development — from the successful Serene Farms horizontal project in Lahore to this ambitious vertical resort in Nathia Gali. Our Smart Property Unit model is backed by clear documentation, structured payment plans, and ongoing construction progress updates.",
      },
    ],
  },
  {
    slug: "construction-progress-milestones-at-serene-heights",
    title: "Construction Progress: Milestones at Serene Heights",
    excerpt:
      "From groundbreaking to vertical rise — follow the key milestones in the development of Serene Heights Hotel & Resorts in Nathia Gali.",
    date: "2026-03-20",
    category: "Progress",
    image: "/assets/home/progress1.png",
    author: "Serene Heights Team",
    sections: [
      {
        type: "paragraph",
        content:
          "Serene Heights is advancing steadily toward becoming Nathia Gali's landmark resort and hotel. Our construction timeline reflects the dedication and expertise of DM Consortium's development team, with regular milestones documented and shared with our investors and community.",
      },
      {
        type: "heading",
        content: "Key Milestones Achieved",
      },
      {
        type: "list",
        items: [
          "December 2021 — Project launch and site acquisition",
          "October 2022 — Foundation and structural groundwork completed",
          "July 2023 — Basement and ground floor structural work",
          "February 2024 — Tower rise commenced with floor-by-floor progress",
          "April 2025 — Multiple floors completed with facade work underway",
          "September 2025 — Interior fit-out planning and MEP installations",
          "December 2025 — Continued vertical progress and amenity zone development",
        ],
      },
      {
        type: "heading",
        content: "Stay Updated",
      },
      {
        type: "paragraph",
        content:
          "We regularly publish construction updates on our Progress page with video walkthroughs and timeline documentation. Visit our Progress section or contact our team to schedule a site visit and witness the development firsthand.",
      },
    ],
  },
  {
    slug: "world-class-amenities-at-serene-heights",
    title: "World-Class Amenities Designed for Your Comfort",
    excerpt:
      "From infinity pools to fine dining and wellness facilities — explore the premium amenities that make Serene Heights a complete luxury resort experience.",
    date: "2026-02-10",
    category: "Amenities",
    image: "/assets/home/image1.png",
    author: "Serene Heights Team",
    sections: [
      {
        type: "paragraph",
        content:
          "At Serene Heights, luxury extends beyond beautifully designed rooms. Every amenity has been thoughtfully planned to deliver a holistic resort experience — whether you are visiting for a weekend escape or investing in a Smart Property Unit.",
      },
      {
        type: "heading",
        content: "Resort Amenities",
      },
      {
        type: "list",
        items: [
          "Infinity swimming pool with mountain views",
          "Fine dining restaurant and café lounge",
          "Spa and wellness center",
          "Conference and event facilities",
          "Kids' play area and family recreation zones",
          "24/7 concierge and security services",
        ],
      },
      {
        type: "heading",
        content: "General Features",
      },
      {
        type: "paragraph",
        content:
          "The development incorporates modern infrastructure including backup power generation, high-speed connectivity, dedicated parking across multiple floors, and eco-conscious design principles that respect the natural environment of Nathia Gali.",
      },
      {
        type: "paragraph",
        content:
          "Explore our full amenities listing on the Amenities page, or reach out to our team to learn how these features enhance both your personal stays and investment value.",
      },
    ],
  },
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}
