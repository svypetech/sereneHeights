"use client";
import PaymentCards from "@/components/payment/paymentCards/PaymentCards";
import UniqueServicesCard from "@/components/payment/uniqueServicesCard/UniqueServicesCard";
import { paymentPlanFaqSections } from "@/utils/constants/paymentPlanFaq";
import { paymentCardsElements } from "@/utils/constants/paymentCardElements";
import { uniqueServicesElements } from "@/utils/constants/uniqueServicesElement";
import React, { useState } from "react";

function Page() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(0);

  const totalServices = uniqueServicesElements.length;
  const totalFaqItems = paymentPlanFaqSections.reduce(
    (count, section) => count + section.items.length,
    0
  );

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleFaqExpand = (index) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  return (
    <div className="lg:px-36 md:px-20 px-6">
      <h1
        className="sm:text-5xl text-4xl text-[#37584F] font-semibold text-center pb-12 gravesendSans"
        id="payment-plan"
      >
        Flexible Payment Plans for Serene Heights Nathia Gali | 36-Month
        Investment Options
      </h1>

      <div
        className="flex flex-wrap justify-center items-center"
        id="payment-plans"
      >
        {paymentCardsElements.map((element) => (
          <div key={element.keys} className="w-full md:w-[33%] ">
            <PaymentCards
              heading={element.heading}
              currency={"PKR"}
              price={element.price}
              body={element.body}
              basic={element.basic}
              mainheading={"Per Sqft Base Price"}
              keys={element.keys}
            />
          </div>
        ))}
      </div>

      <div className="text-center max-w-3xl mx-auto pt-12">
        <h2 className="sm:text-3xl text-2xl font-bold text-[#37584F] gravesendSans">
          PRICING STRUCTURE
        </h2>
        <p className="py-2 text-sm pb-4 inter text-[#475467]">Base Pricing</p>
        <ul className="text-left text-lg text-[#222] inter space-y-2 list-disc pl-6">
          <li>Price per Square Foot: PKR 37,000</li>
          <li>Booking Payment: From 30%</li>
          <li>Remaining Balance: 36 Monthly Installments</li>
        </ul>
      </div>

      <div className="text-center" id="other-details">
        <p className="sm:text-4xl text-3xl font-bold pt-20 text-[#37584F] gravesendSans">
          OUR UNIQUE HOTEL <br /> APARTMENTS MODEL
        </p>
        <p className="py-2 text-sm pb-8 inter text-[#475467]">
          Everything you need to know about Serene Heights
        </p>

        <div className="sm:w-[60vw] w-auto mx-auto inter mt-10 mb-10">
          {uniqueServicesElements.map((element, index) => (
            <UniqueServicesCard
              body={element.body}
              key={index}
              isExpanded={expandedIndex === index}
              onClick={() => toggleExpand(index)}
              totalServices={totalServices}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="text-center" id="payment-faq">
        <p className="sm:text-4xl text-3xl font-bold pt-20 text-[#37584F] gravesendSans">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <p className="py-2 text-sm pb-8 inter text-[#475467]">
          Pricing, payment terms, and investment structure
        </p>

        <div className="sm:w-[60vw] w-auto mx-auto inter mt-10 mb-10">
          {paymentPlanFaqSections.map((section, sectionIndex) => {
            const sectionStartIndex = paymentPlanFaqSections
              .slice(0, sectionIndex)
              .reduce((sum, s) => sum + s.items.length, 0);

            return (
              <div key={section.heading} className="mb-10 text-left">
                <h3 className="text-xl font-bold text-[#37584F] gravesendSans mb-4 text-center">
                  {section.heading}
                </h3>
                {section.items.map((element, itemIndex) => {
                  const currentIndex = sectionStartIndex + itemIndex;
                  return (
                    <UniqueServicesCard
                      body={element.body}
                      key={element.body[0]}
                      isExpanded={expandedFaqIndex === currentIndex}
                      onClick={() => toggleFaqExpand(currentIndex)}
                      totalServices={totalFaqItems}
                      index={currentIndex}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
