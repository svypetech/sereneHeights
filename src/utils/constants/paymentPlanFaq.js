export const paymentPlanFaqSections = [
  {
    heading: "PRICING & PAYMENT STRUCTURE",
    items: [
      {
        body: [
          "What is the base price per square foot?",
          "The base price is PKR 40,000 per square foot for all apartments at Serene Heights, Nathia Gali.",
        ],
      },
      {
        body: [
          "What is the total cost to calculate my apartment price?",
          "Multiply your apartment's square footage by PKR 40,000 per sq ft. Example: 700 sq ft apartment = 700 × PKR 40,000 = Total price.",
        ],
      },
      {
        body: [
          "What is the booking payment amount?",
          "Booking payment starts from 30% of your total apartment price. This is due upon signing the purchase agreement.",
        ],
      },
      {
        body: [
          'What does "From 30%" mean? Is there a different booking percentage?',
          'Standard booking is 30%. The wording "from 30%" suggests potential flexibility, but the standard requirement is 30%.',
        ],
      },
      {
        body: [
          "How long are the 36-month installments?",
          "36 months equals 3 years of monthly payments to complete the remaining 70% of your apartment cost.",
        ],
      },
      {
        body: [
          "Are the monthly installments equal throughout?",
          'The page indicates "36 Months Only" for the installment plan, suggesting equal monthly payments over 36 months.',
        ],
      },
    ],
  },
  {
    heading: "PAYMENT TERMS & CONDITIONS",
    items: [
      {
        body: [
          "What happens after I pay the 30% booking amount?",
          "The remaining 70% is divided into 36 equal monthly installments paid over the 3-year period.",
        ],
      },
      {
        body: [
          "What is the monthly payment amount for a 1-bedroom apartment?",
          "To calculate: (Total price × 70%) ÷ 36 months = Monthly payment amount.",
        ],
      },
      {
        body: [
          "When are monthly payments due?",
          'The payment page states "36 Months Only," but specific due dates are not mentioned. Contact DM Consortium for exact payment schedule details.',
        ],
      },
      {
        body: [
          "Can I pay installments late without penalty?",
          "The page does not specify late payment terms or penalties. This should be clarified in your purchase agreement with DM Consortium.",
        ],
      },
      {
        body: [
          "Can I pay off my remaining balance early?",
          "The page does not specify early payment options. Contact DM Consortium to discuss early payment possibilities.",
        ],
      },
      {
        body: [
          "Are there any hidden fees or charges beyond the stated price?",
          "The pricing structure shows base price per sq ft, booking percentage, and installment plan. Additional charges are not mentioned on the payment plan page.",
        ],
      },
      {
        body: [
          "Is the PKR 40,000 per sq ft price fixed or does it change?",
          "The page presents PKR 40,000 as the base price. Whether this changes over time is not specified.",
        ],
      },
    ],
  },
];

export const paymentPlanFaqElements = paymentPlanFaqSections.flatMap(
  (section) => section.items
);
