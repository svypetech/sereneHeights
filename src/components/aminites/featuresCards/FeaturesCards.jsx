"use client";
import { featuresElements } from "@/utils/constants/aminitiesElements";
import React, { useState, useEffect } from "react";

function FeaturesCards() {
  const [screenSize, setScreenSize] = useState('sm');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenSize('lg');
      } else if (width >= 768) {
        setScreenSize('md');
      } else {
        setScreenSize('sm');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // px-6 md:px-8 lg:px-12
  return (
    <div className="pt-16 pb-16 bg-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {featuresElements.map((data, index) => (
          <div
            key={index}
            className="feature-card rounded-md p-6 flex flex-col md:flex-row items-center md:items-center justify-center cursor-pointer 
              shadow-[0_0_4px_0_#00000040] transition-all duration-300 
              hover:scale-105 hover:shadow-[0px_4px_15px_rgba(55,88,79,0.8)]
              bg-white"
          >
            <img
              src={`assets/aminities/features/${data.src}.png`}
              alt={`${data.src}`}
              className="w-16 h-16 lg:w-20 lg:h-20 object-contain mb-4 md:mb-0 md:mr-6 flex-shrink-0"
            />
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full">
              <p className="text-lg lg:text-xl font-semibold gravesendSans break-words mb-2 w-full">
                {data.heading}
              </p>
              <p className="text-[#222222]/70 text-xs lg:text-sm popping break-words leading-relaxed w-full">
                {data.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesCards;