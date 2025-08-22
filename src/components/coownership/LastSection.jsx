"use client";
import React, { useState, useEffect } from "react";

const smartPropertyFeatures = [
  {
    heading: "AFFORDABLE INVESTMENT",
    text: "Own premium property in installments.",
    width: "40%",
    src: "/assets/coownership/featureGrid/feature1.png",
  },
  {
    heading: "SIMPLE PROCESS",
    text: "Hassle-free investment, just like buying a full unit.",
    width: "30%",
    src: "/assets/coownership/featureGrid/feature2.png",
  },
  {
    heading: "SECURE CONTRACTS",
    text: "Every unit is protected by legal agreements.",
    width: "30%",
    src: "/assets/coownership/featureGrid/feature3.png",
  },
  {
    heading: "100% LEGAL COMPLIANCE",
    text: "All transactions are fully Shariah-compliant & legally secure.",
    width: "50%",
    src: "/assets/coownership/featureGrid/feature4.png",
  },
  {
    heading: "STANDARDIZED UNITS",
    text: "Buy in fixed units of 50 SQFT, clear and fair.",
    width: "50%",
    src: "/assets/coownership/featureGrid/feature5.png",
  },
];

const FeatureCard = ({ data, screenSize, index, isSecondRow = false }) => {
  return (
    <div
      className={`feature-card bg-[#FEFEFB] rounded-[16px] w-full p-6 sm:p-10 flex flex-col justify-center items-start text-left cursor-pointer 
        shadow-[0px_0px_4px_1px_#0000001F] transition-all duration-300 
        hover:scale-105 hover:shadow-[0px_4px_15px_rgba(55,88,79,0.8)]`}
      style={{
        width: screenSize === "lg" ? data.width : undefined,
        aspectRatio: screenSize === "md" ? "1/1" : "auto",
      }}
    >

      <div className="h-16 w-16 sm:w-20 sm:h-20 mb-4 rounded-full flex items-center justify-center">
        <img src={data.src} alt={data.heading} />
      </div>

      <p className="sm:text-2xl xl:text-3xl text-xl font-bold gravesendSans break-words mb-2">
        {data.heading}
      </p>

      <p className="text-[#222222]/70 workSans break-words leading-relaxed">
        {data.heading === "STANDARDIZED SHARES" ? (
          <>
            Buy in fixed units of <span className="font-bold">50 SQFT</span>,
            clear and fair.
          </>
        ) : data.heading === "AFFORDABLE INVESTMENT" ? (
          <>
            Own premium property in installments.{" "}
            <span className="font-bold">Start small, grow smart.</span>
          </>
        ) : (
          data.text
        )}
      </p>
    </div>
  );
};

const FeatureRow = ({
  features,
  screenSize,
  isSecondRow = false,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#FEFEFB] h-full w-full flex flex-col md:flex-row items-stretch gap-6 justify-center ${className}`}
    >
      {features.map((data, index) => (
        <FeatureCard
          key={index}
          data={data}
          screenSize={screenSize}
          index={index}
          isSecondRow={isSecondRow}
        />
      ))}
    </div>
  );
};

function LastSection() {
  const [screenSize, setScreenSize] = useState("sm");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenSize("lg");
      } else if (width >= 768) {
        setScreenSize("md");
      } else {
        setScreenSize("sm");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="">
      {/* Title */}
      <h1 className="uppercase font-bold text-[#37584F] pb-12 text-center sm:text-5xl text-3xl gravesendSans">
        Why Choose Smart Property Unit @ Serene Heights?
      </h1>

      <FeatureRow
        features={smartPropertyFeatures.slice(0, 3)}
        screenSize={screenSize}
        className="pt-8"
      />

      <FeatureRow
        features={smartPropertyFeatures.slice(3, 5)}
        screenSize={screenSize}
        isSecondRow={true}
        className="pb-16 py-7"
      />
    </div>
  );
}

export default LastSection;
