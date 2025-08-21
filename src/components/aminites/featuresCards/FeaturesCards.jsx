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

  return (
    <div className="sm:px-2 px-8">
      <div className="pt-16 bg-white h-full w-full flex flex-col md:flex-row items-stretch gap-8 justify-center ">
        {featuresElements.slice(0, 3).map((data, index) => (
          <div
            key={index}
            className={`feature-card rounded-md w-full p-6 flex flex-col justify-center items-center text-center cursor-pointer 
          shadow-[0_0_4px_0_#00000040] transition-all duration-300 
          hover:scale-105 hover:shadow-[0px_4px_15px_rgba(55,88,79,0.8)]`}
            style={{
              width: screenSize === 'lg' ? data.width : undefined,
              aspectRatio: screenSize === 'md' ? '1/1' : 'auto'
            }}
          >
            <img
              src={`assets/aminities/features/${data.src}.png`}
              alt={`${data.src}`}
              className="w-20 h-20 object-contain mb-4"
            />
            <p className="sm:text-3xl text-2xl font-semibold gravesendSans break-words mb-2">
              {data.heading}
            </p>
            <p className="text-[#222222]/70 text-sm popping break-words leading-relaxed">
              {data.text}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white py-7 h-full w-full flex flex-col md:flex-row items-stretch gap-8 justify-center ">
        {featuresElements.slice(3, 6).map((data, index) => (
          <div
            key={index}
            className={`feature-card rounded-md w-full p-6 flex flex-col justify-center items-center text-center cursor-pointer 
          shadow-[0_0_4px_0_#00000040] transition-all duration-300 
          hover:scale-105 hover:shadow-[0px_4px_15px_rgba(55,88,79,0.8)]`}
            style={{
              width: screenSize === 'lg' ? data.width : undefined,
              aspectRatio: screenSize === 'md' ? '1/1' : 'auto'
            }}
          >
            <img
              src={`assets/aminities/features/${data.src}.png`}
              alt={`${data.src}`}
              className="w-20 h-20 object-contain mb-4"
            />
            <p className="sm:text-3xl text-2xl font-semibold gravesendSans break-words mb-2">
              {data.heading}
            </p>
            <p className="text-[#222222]/70 text-sm popping break-words leading-relaxed">
              {data.text}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white h-full w-full flex flex-col md:flex-row items-stretch gap-8 justify-center ">
        {featuresElements.slice(6, 9).map((data, index) => (
          <div
            key={index}
            className={`feature-card rounded-md w-full p-6 flex flex-col justify-center items-center text-center cursor-pointer 
          shadow-[0_0_4px_0_#00000040] transition-all duration-300 
          hover:scale-105 hover:shadow-[0px_4px_15px_rgba(55,88,79,0.8)]`}
            style={{
              width: screenSize === 'lg' ? data.width : undefined,
              aspectRatio: screenSize === 'md' ? '1/1' : 'auto'
            }}
          >
            <img
              src={`assets/aminities/features/${data.src}.png`}
              alt={`${data.src}`}
              className="w-20 h-20 object-contain mb-4"
            />
            <p className="sm:text-3xl text-2xl font-semibold gravesendSans break-words mb-2">
              {data.heading}
            </p>
            <p className="text-[#222222]/70 text-sm popping break-words leading-relaxed">
              {data.text}
            </p>
          </div>
        ))}
      </div>
      <div className="pb-16 bg-white py-7 h-full w-full flex flex-col md:flex-row items-stretch gap-8 justify-center ">
        {featuresElements.slice(9, 12).map((data, index) => (
          <div
            key={index}
            className={`feature-card rounded-md w-full p-6 flex flex-col justify-center items-center text-center cursor-pointer 
          shadow-[0_0_4px_0_#00000040] transition-all duration-300 
          hover:scale-105 hover:shadow-[0px_4px_15px_rgba(55,88,79,0.8)]`}
            style={{
              width: screenSize === 'lg' ? data.width : undefined,
              aspectRatio: screenSize === 'md' ? '1/1' : 'auto'
            }}
          >
            <img
              src={`assets/aminities/features/${data.src}.png`}
              alt={`${data.src}`}
              className="w-20 h-20 object-contain mb-4"
            />
            <p className="sm:text-3xl text-2xl font-semibold gravesendSans break-words mb-2">
              {data.heading}
            </p>
            <p className="text-[#222222]/70 text-sm popping break-words leading-relaxed">
              {data.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesCards;