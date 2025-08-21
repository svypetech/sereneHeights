import Image from "next/image";
import React from "react";

const featuresData = [
  {
    id: 1,
    title: "Prime Location",
    description: "Located in the heart of Nathiagali near major access points.",
    image: "/assets/coownership/frame1.png",
    alt: "prime-location",
  },
  {
    id: 2,
    title: "Modern Design",
    description:
      "Luxury apartments with contemporary finishes and smart space planning.",
    image: "/assets/coownership/frame2.png",
    alt: "modern-design",
  },
  {
    id: 3,
    title: "Rental Income",
    description: "High ROI through managed rentals via Smart Property Share.",
    image: "/assets/coownership/frame3.png",
    alt: "rental-income",
  },
  {
    id: 4,
    title: "Backed by Experts",
    description:
      "A project powered by trusted developers and managed by DM Consortium.",
    image: "/assets/coownership/frame4.png",
    alt: "backed-by-experts",
  },
];

function FeaturesGrid({ features = featuresData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="bg-white rounded-[16px] p-8 transition-shadow duration-300 shadow-[0px_0px_4px_1px_#0000001F]"
        >
          <div className="rounded-lg flex items-left justify-start mb-6">
            <Image
              src={feature.image}
              alt={feature.alt}
              width={70}
              height={70}
            />
          </div>

            <h3 className="text-2xl font-helvetica font-bold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-[#222222] workSans font-normal opacity-70">
              {feature.description}
            </p>
        </div>
      ))}
    </div>
  );
}

export default FeaturesGrid;
