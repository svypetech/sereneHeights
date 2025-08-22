import Image from "next/image";
import React from "react";

const SmartProperty = () => {
  return (
    <div className="sm:py-32 xs:mb-10 sm:mb-0 flex flex-col md:flex-row gap-12 justify-center sm:justify-between items-center ">
      <div className=" text-left w-full md:w-1/2">
        <div className="flex items-center gap-3">
          <p className="sm:text-5xl text-[32px] font-bold py-3 mb-0 md:mb-3 text-[#37584F] gravesendSans md:leading-[55px] leading-0">
            WHAT IS SMART PROPERTY UNIT?
          </p>
        </div>
        <p className="md:text-xl text-md text-[#222222] workSans font-normal opacity-70">
          Welcome to Smart Property Unit, a revolutionary way to invest in
          premium real estate like Serene Heights without buying the entire
          apartment. With just <span className="font-bold">50 SQFT</span> per
          unit, you can co-own a luxury apartment in one of Nathiagali's most
          sought-after developments.<br /><br />On project completion, your apartment will
          be rented out by <span className="font-bold">DM Consortium</span> and rental income will be distributed
          according to your unit.
        </p>
      </div>

      <div className="w-full md:w-1/2 grid grid-cols-2 gap-2">
        <div>
          <div className="mb-2">
            <Image
              src="/assets/about/obj/objImg1.png"
              alt="img"
              width={170}
              height={220}
              className="rounded-[10px] w-full h-auto"
              priority
            />
          </div>
          <div>
            <Image
              src="/assets/about/obj/objImg2.png"
              alt="img"
              width={170}
              height={140}
              className="rounded-[10px] w-full h-auto"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-2">
            <Image
              src="/assets/about/obj/objImg3.png"
              alt="img"
              width={170}
              height={140}
              className="rounded-[10px] w-full h-auto"
              priority
            />
          </div>
          <div className="flex-1">
            <Image
              src="/assets/about/obj/objImg4.png"
              alt="img"
              width={170}
              height={220}
              className="rounded-[10px] w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartProperty;
