/**
 * Enquiry choices, shared by the form dropdowns and the lead API's allow-list
 * (only these exact values are accepted server-side).
 */
export const INTEREST_QUESTION = "What are you interested in?";

export const INTERESTS = {
  "Smart Property Unit": {
    question:
      "How many 50 sq ft Smart Property Units of Serene Heights, Nathia Gali would you like to co-own?",
    options: [
      "1 Unit - PKR 2,250,000 (Down Payment: PKR 675,000)",
      "2 Units - PKR 4,500,000 (Down Payment: PKR 1,350,000)",
      "3 Units - PKR 6,750,000 (Down Payment: PKR 2,025,000)",
      "More than 3 Units",
    ],
  },
  "Full Apartment": {
    question: "What is your investment budget range?",
    options: ["Under PKR 1 Crore", "PKR 1.5 Crore - 2 Crore", "PKR 2 Crore - PKR 3 Crore"],
  },
};

/** Fixed interest sent by the invest page form (not shown in the dropdown). */
export const INVEST_INTEREST = {
  interestedIn: "Investment",
  subInterest: "Investment Analysis Request",
};

/** True when the pair is one the forms can actually produce. */
export function isKnownInterest(interestedIn, subInterest) {
  if (
    interestedIn === INVEST_INTEREST.interestedIn &&
    subInterest === INVEST_INTEREST.subInterest
  ) {
    return true;
  }
  return Boolean(INTERESTS[interestedIn]?.options.includes(subInterest));
}
