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
      breakpoint: { max: 1024, min: 768 },
      items: 2,
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

  // Card data for reusability
  const cardData = [
    {
      title: "PAF Airbase Nathia Gali",
      distance: "50 Meters"
    },
    {
      title: "Main Nathia Gali Road",
      distance: "1.5 KMS ( 3 Minutes Drive )"
    },
    {
      title: "Hotel Elites Nathia Gali",
      distance: "3 KMS (6 Minutes Drive)"
    },
    {
      title: "Main Bazar Nathia Gali",
      distance: "5 KMS (10 Minutes Drive)"
    }
  ];

  // Card component for reusability
  const Card = ({ title, distance, className = "" }) => (
    <div className={`border rounded-lg px-5 py-7 inter ${className}`}>
      <Icon
        icon="humbleicons:location"
        width="24"
        height="24"
        className="bg-[#37584F] text-white p-1 rounded-md"
      />
      <p className="font-semibold mt-2 font-[inter]">{title}</p>
      <p className="text-[#37584F] font-[inter] text-sm">{distance}</p>
    </div>
  );

  return (
    <div className="mt-5">
      {/* Carousel for md and above */}
      <div className="hidden md:block relative w-full mx-auto px-16">
        <button
          onClick={handlePrevious}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-[#FEFEFB] hover:bg-[#37584F] w-9 h-9 rounded-full flex items-center justify-center border cursor-pointer z-10 transition-all duration-300 group"
          aria-label="Previous"
          style={{ transform: "translateY(-50%)" }}
        >
          <Icon
            icon="akar-icons:chevron-left"
            className="text-black group-hover:text-white"
          />
        </button>


        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-[#FEFEFB] hover:bg-[#37584F] w-9 h-9 rounded-full flex items-center justify-center border cursor-pointer z-10 transition-all duration-300"
          aria-label="Next"
          style={{ transform: "translateY(-50%)" }}
        >
          <Icon icon="akar-icons:chevron-right" color="black" />
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
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              distance={card.distance}
              className="mx-3"
            />
          ))}
          {/* Duplicate first card for infinite scroll effect */}
          <Card
            title={cardData[0].title}
            distance={cardData[0].distance}
            className="mx-3"
          />
        </Carousel>
      </div>

      {/* Stacked cards for mobile and below md */}
      <div className="block md:hidden px-4 space-y-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            distance={card.distance}
          />
        ))}
      </div>
    </div>
  );
}

export default MultiCarousel;