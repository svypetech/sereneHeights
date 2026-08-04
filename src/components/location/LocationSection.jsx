"use client";

import LocationCards from "@/components/locationCards/LocationCards";
import SimpleMap from "@/components/map/Map";
import { locationElements } from "@/utils/constants/locationElements";

function LocationSection({ className = "" }) {
  return (
    <div
      className={`text-center bg-[url('/assets/home/location/bgMap.png')] bg-cover bg-no-repeat w-full lg:px-36 md:px-20 xs:px-6 mb-20 pt-20 pb-20 ${className}`}
    >
      <p className="sm:text-5xl text-4xl font-bold py-10 gravesendSans">
        Location
      </p>
      <div className="grid h-full px-3 sm:px-0 lg:h-[80vh] grid-cols-1 md:grid-cols-2 gap-6 py-10">
        <div className="relative w-full md:h-full h-[500px] overflow-hidden rounded-xl shadow-[0_0_6px_0_#00000040]">
          <SimpleMap />
        </div>

        <div className="h-full flex flex-col gap-4 py-2">
          {locationElements.map((loc, index) => (
            <div
              key={index}
              className="h-full flex-1 bg-white cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <LocationCards title={loc.title} distance={loc.distance} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocationSection;
