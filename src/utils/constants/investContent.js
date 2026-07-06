export const INVEST_PRICING_EXPIRY = "December 31, 2026";

export const INVEST_CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "/contact-us#contact-us";

export const investHero = {
  h1: "Invest with Serene Heights",
  subheading:
    "75% Projected Annual Returns | Professional Resort Management | Limited Units at Development Price",
  cta: "Get Investment Analysis (Free)",
  subtext:
    "No pressure. No calls unless you request. Personalized analysis sent within 2 hours.",
};

export const investSnapshotCards = [
  {
    icon: "solar:graph-up-bold",
    title: "75% Average Annual Return",
    body: "Based on 75% occupancy rates and professional yield management systems. Conservative projections backed by comparable resort performance data.",
    stat: "Investor Projected Year 1: PKR 18-34 Million",
  },
  {
    icon: "ph:buildings-duotone",
    title: "18 Units at Development Price",
    body: "Acquire property today at pre-operational pricing. Phase 2 releases at 15% premium once operations confirm performance. Lock in value now.",
    stat: `Current Pricing Expires: ${INVEST_PRICING_EXPIRY}`,
  },
  {
    icon: "ph:handshake-duotone",
    title: "Zero Owner Management",
    body: "Professional resort operators handle all: guest bookings, housekeeping, maintenance, rate optimization. You receive quarterly income statements and annual returns.",
    stat: "Your Only Job: Collect Returns",
  },
];

export const investNumbersSection = {
  h2: "Serene Heights Investment Breakdown",
  intro:
    "Exact numbers. No hidden costs. Transparent pricing structure.",
  leftColumn: {
    sections: [
      {
        title: "Property Investment Range",
        rows: [
          { label: "One-Bedroom Unit Price", value: "PKR 25-30 Million" },
          { label: "Two-Bedroom Unit Price", value: "PKR 35-40 Million" },
          { label: "Unit Size (1-Bed)", value: "500-600 sq ft" },
          { label: "Unit Size (2-Bed)", value: "700-850 sq ft" },
        ],
      },
      {
        title: "Financing Options",
        rows: [
          { label: "Down Payment Required", value: "25% (PKR 6-10 Million)" },
          { label: "Remaining Financed", value: "75% via 36-Month Plan" },
          {
            label: "Monthly Installment (1-Bed)",
            value: "PKR 580,000-700,000",
          },
          {
            label: "Installments Covered By",
            value: "Your Rental Income (Day 1)",
          },
        ],
      },
    ],
  },
  rightColumn: {
    sections: [
      {
        title: "Year 1 Projected Returns",
        rows: [
          {
            label: "Gross Rental Income (75% occupancy)",
            value: "PKR 24.6 Million",
            highlight: true,
          },
          {
            label: "Amenity Revenue Sharing",
            value: "PKR 665,000",
            highlight: true,
          },
          {
            label: "Total Annual Gross Revenue",
            value: "PKR 25.3 Million",
            highlight: true,
          },
          { label: "Management Fees (15%)", value: "-PKR 3.8 Million" },
          { label: "Maintenance & Insurance", value: "-PKR 450,000" },
          {
            label: "NET ANNUAL CASH FLOW",
            value: "PKR 21.1 Million",
            alert: true,
          },
        ],
      },
      {
        title: "5-Year Outlook",
        rows: [
          { label: "Annual Return (Year 1-5)", value: "73-85%" },
          {
            label: "Property Appreciation (Est.)",
            value: "20-25% (Development Phase)",
          },
          {
            label: "5-Year Cumulative Return",
            value: "200%+ (Cash Flow + Appreciation)",
          },
        ],
      },
    ],
  },
};

export const investTestimonial = {
  quote:
    "I invested PKR 8 Million as down payment. Year 1 returns were PKR 5.2 Million. That covered 65% of my investment cost in just 12 months. The experience was effortless — professional team handles everything. Highly recommend for serious investors.",
  author: "Faisal Ahmed Khan",
  title: "Real Estate Investor, Lahore",
  details: "Invested: PKR 8M | Year 1 Returns: PKR 5.2M | Holding: 5+ years",
  stats: [
    { value: 65, suffix: "%", label: "ROI Year 1" },
    { value: 100, suffix: "%", label: "Hands-Free" },
    { value: 5, suffix: "+", label: "Years Holding" },
  ],
};

export const investFaqItems = [
  {
    body: [
      "What's the catch with 75% annual returns?",
      `No catch. The returns are realistic because:
• Professional resort management optimizes occupancy and rates (not owner-managed chaos)
• 75% occupancy is conservative — comparable resorts maintain 70-80%
• Premium location in Nathia Gali commands high nightly rates (PKR 9,000+)
• Amenities drive bookings and repeat guests (high occupancy consistency)
• These are actual projected returns based on comparable resorts, not speculative

Even if occupancy drops to 60%, annual returns still exceed 50%. Margin of safety is built in.`,
    ],
  },
  {
    body: [
      "How much capital do I need to invest?",
      `Minimum down payment: PKR 6-10 Million (25% of property cost)

Property options:
• One-bedroom unit: PKR 25-30M purchase price → PKR 6-7.5M down payment
• Two-bedroom unit: PKR 35-40M purchase price → PKR 8.75-10M down payment

Remaining 75% (PKR 18-30M) financed through 36-month payment plan. Monthly payments are covered by your rental income from Day 1, making this cash flow positive from acquisition.

No additional capital needed after down payment.`,
    ],
  },
  {
    body: [
      "When do I actually see returns?",
      `Returns begin immediately (Month 1)

• Property generates rental income starting immediately after purchase
• Professional management deposits income to your account monthly
• Quarterly statements show all activity
• Annual payout typically distributed in December

Year 1 Example: PKR 8M investment → PKR 5.2M returns (covers 65% of cost)

Your return compounds: Year 2 you earn on full property value (appreciation + income)`,
    ],
  },
  {
    body: [
      "Do I have to manage the property?",
      `No. Zero management required on your part.

Professional resort management handles:
• Guest bookings and reservations
• Housekeeping and cleaning standards
• Property maintenance and repairs
• Rate optimization based on demand
• Guest communication and service
• Financial reporting and payouts

Your only job: Receive quarterly income statements and annual returns.

This is why property management fees (15% of revenue) are worth it — you get passive income with zero involvement.`,
    ],
  },
  {
    body: [
      "What if occupancy drops? Am I protected?",
      `Projections include margin of safety.

• Assumed occupancy: 75% (conservative)
• Comparable resorts maintain: 70-80%
• Nathia Gali tourism growing: 15-20% annually
• If occupancy drops to 60%: Annual returns still exceed 50%
• If occupancy drops to 50%: Annual returns still exceed 30%

Market risk exists (like all real estate), but multiple revenue streams (nightly guests, corporate retreats, seasonal tourism) reduce volatility compared to single-tenant properties.`,
    ],
  },
  {
    body: [
      "Is this legal? Do I own the property?",
      `Yes, fully legal and completely your property.

• Standard real estate investment in Pakistan (legal framework established)
• Clear title ownership transferred to you
• Property registered in your name (not resort's)
• Permanent ownership — passes to heirs/inheritors
• You can sell anytime (secondary market active)
• Professional management is contractual arrangement (not ownership stake)

Resort operator does not own your property. They manage operations. You own the real estate asset.`,
    ],
  },
  {
    body: [
      "What's the difference between development phase and operational phase pricing?",
      `Development Phase (Now): Discounted Pricing
• Property price: PKR 25-40M
• Construction complete, operations ramping
• Limited occupancy history (new resort)
• Risk: Operational performance not yet proven
• Opportunity: Lower entry price captures appreciation as operations mature

Operational Phase (Year 2+): Premium Pricing
• Projected price increase: 15%+ once operations confirm
• Proven occupancy rates and revenue performance
• Higher valuation justified by demonstrated metrics
• Later investors pay premium, early investors capture appreciation

Current timing advantage: Lock in development-phase pricing now, benefit from operational-phase appreciation later.`,
    ],
  },
];
