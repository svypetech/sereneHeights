"use client";

import { Icon } from "@iconify-icon/react";
import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MultiCarousel() {
  const carouselRef = useRef(null);
  
  // Update responsive to show exactly 3 items on desktop
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  // Functions to control the carousel
  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };
  
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="mt-5 relative w-full mx-auto px-16">
      
      <button 
        onClick={handlePrevious} 
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-[#00000066] hover:bg-[#37584F] text-white w-9 h-9 rounded-full flex items-center justify-center border-none cursor-pointer z-10 transition-900-all"
        aria-label="Previous"
        style={{ transform: "translateY(-50%)" }}
      >
        <Icon icon="akar-icons:chevron-left" />
      </button>
      
      
      <button 
        onClick={handleNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-[#00000066] hover:bg-[#37584F] text-white w-9 h-9 rounded-full flex items-center justify-center border-none cursor-pointer z-10 transition-900-all"
        aria-label="Next"
        style={{ transform: "translateY(-50%)" }}
      >
        <Icon icon="akar-icons:chevron-right" />
      </button>
      
      {/* Carousel without built-in arrows */}
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        showDots={false}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        arrows={false}
      >
        <div className="border rounded-lg px-5 py-7 mx-3">
          <Icon
            icon="humbleicons:location"
            width="24"
            height="24"
            className="bg-[#37584F] text-white p-1 rounded-md"
          />
          <p className="font-medium mt-2 inter">PAF Airbase Nathia Gali</p>
          <p className="text-[#37584F] text-sm inter">50 Meters</p>
        </div>
        <div className="border rounded-lg px-5 py-7 mx-3 inter">
          <Icon
            icon="humbleicons:location"
            width="24"
            height="24"
            className="bg-[#37584F] text-white p-1 rounded-md"
          />
          <p className="font-medium mt-2 ">Main Nathia Gali Road</p>
          <p className="text-[#37584F] text-sm">1.5 KMS ( 3 Minutes Drive )</p>
        </div>
        <div className="border rounded-lg px-5 py-7 mx-3 inter">
          <Icon
            icon="humbleicons:location"
            width="24"
            height="24"
            className="bg-[#37584F] text-white p-1 rounded-md"
          />
          <p className="font-medium mt-2">Hotel Elites Nathia Gali</p>
          <p className="text-[#37584F] text-sm">3 KMS (6 Minutes Drive)</p>
        </div>
        <div className="border rounded-lg px-5 py-7 mx-3 inter">
          <Icon
            icon="humbleicons:location"
            width="24"
            height="24"
            className="bg-[#37584F] text-white p-1 rounded-md"
          />
          <p className="font-medium mt-2">Main Bazar Nathia Gali</p>
          <p className="text-[#37584F] text-sm">5 KMS (10 Minutes Drive)</p>
        </div>
        <div className="border rounded-lg px-5 py-7 mx-3 inter">
          <Icon
            icon="humbleicons:location"
            width="24"
            height="24"
            className="bg-[#37584F] text-white p-1 rounded-md"
          />
          <p className="font-medium mt-2">PAF Airbase Nathia Gali</p>
          <p className="text-[#37584F] text-sm">50 Meters</p>
        </div>
      </Carousel>
    </div>
  );
}

export default MultiCarousel;