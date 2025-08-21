"use client";
import PaymentCards from "@/components/payment/paymentCards/PaymentCards";
import UniqueServicesCard from "@/components/payment/uniqueServicesCard/UniqueServicesCard";
import { paymentCardsElements } from "@/utils/constants/paymentCardElements";
import { uniqueServicesElements } from "@/utils/constants/uniqueServicesElement";
import React, { useState } from "react";

function Page() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const totalServices = uniqueServicesElements.length;

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="lg:px-36 md:px-20 px-6">
      <h1
        className="sm:text-5xl text-4xl text-[#37584F] font-semibold text-center pb-12 gravesendSans"
        id="payment-plan"
      >
        {" "}
        PAYMENT PLAN{" "}
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        {paymentCardsElements.map((element, index) => (
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

      <div className="text-center" id="other-details">
        <p className="sm:text-4xl text-3xl font-bold pt-20 text-[#37584F] gravesendSans ">
          OUR UNIQUE SERVICED <br /> APARTMENT MODEL
        </p>
        <p className="py-2 text-sm pb-8 inter text-[#475467]">
          Everything you need to know about Serene Heights
        </p>

        <div className="sm:w-[60vw] w-auto mx-auto inter mt-10 mb-10">
          {uniqueServicesElements.map((elemnt, index) => (
            <UniqueServicesCard
              body={elemnt.body}
              // src={elemnt.src}
              key={index}
              isExpanded={expandedIndex === index}
              onClick={() => toggleExpand(index)}
              totalServices={totalServices}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
