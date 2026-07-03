import AminitiesCards from "@/components/aminites/aminitiesCards/AminitiesCards";
import FeaturesCards from "@/components/aminites/featuresCards/FeaturesCards";
import { AMENITIES_INTRO } from "@/utils/constants/aminitiesElements";
import React from "react";

function AmenitiesPage() {
  return (
    <div
      className="text-center px-6 md:px-16 lg:px-36 pt-1"
      style={{ textTransform: "none" }}
    >
      <h1
        className="sm:text-5xl text-4xl font-bold text-[#37584F] gravesendSans"
        id="amenities"
      >
        Luxury Amenities at Serene Heights Nathia Gali | 50+ World-Class Resort
        Facilities
      </h1>
      <p className="py-10 text-[#222] text-lg inter max-w-4xl mx-auto">
        {AMENITIES_INTRO}
      </p>
      <AminitiesCards />

      <h2
        className="sm:text-5xl text-4xl font-bold text-[#37584F] pt-20 gravesendSans"
        id="general-feature"
      >
        GENERAL FEATURES
      </h2>
      <FeaturesCards />
    </div>
  );
}

export default AmenitiesPage;
