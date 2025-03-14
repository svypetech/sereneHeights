import AminitiesCards from "@/components/aminites/aminitiesCards/AminitiesCards";
import FeaturesCards from "@/components/aminites/featuresCards/FeaturesCards";
import React from "react";

function page() {
  return (
    <div
      className="text-center px-8  md:px-20 pt-1  "
      style={{ textTransform: "none" }}
    >
      <h1
        className="sm:text-5xl text-4xl font-bold text-[#37584F] gravesendSans "
        id="aminities"
      >
        AMENITIES
      </h1>
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

export default page;
