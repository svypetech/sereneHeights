"use client";
import SimpleMap from "@/components/map/Map";
import MultiCarousel from "@/components/multiCarousel/MultiCarousel";
import { Icon } from "@iconify-icon/react";
import React from "react";
import ContactUs from "@/components/contactUs/ContactUs";

function Contactus() {
  return (
    <div className=" py-20 ">
      <div className="px-16 lg:px-20 xl:px-40">
        <p className="text-[#37584F] font-semibold inter">Location</p>
        <h1 className=" my-2 text-3xl font-semibold text-[#37584F] gravesendSans">
          Nearby serene heights
        </h1>
        <p className="text-[#475467] inter">
          Our friendly team is always here to chat
        </p>
        <MultiCarousel />
      </div>

      <div className="relative my-10  " id="location">
        <div className="relative flex flex-wrap gap-4 items-center justify-between sm:py-36 py-28 px-16 lg:px-20 xl:px-40 bg-[#F3F2ED]">
          <div className="text-[#37584F]">
            <p className="font-semibold inter">Location</p>
            <p className="uppercase text-3xl font-semibold my-2 gravesendSans">
              Our Locations
            </p>
            <p className="text-sm inter text-[#475467]">
              You can visit us at offices at given addresses.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 inter">
              <Icon
                icon="humbleicons:location"
                width="24"
                height="24"
                className="bg-[#37584F] text-white p-1 rounded-md"
              />
              <div>
                <p className="font-semibold mt-2 text-[#101828]">Project</p>
                <p className="text-sm text-[#475467]">
                  Serene Heights. 1.5KM, Kala Bagh Air Base Road, Nathiagali
                </p>
              </div>
            </div>
            <div className="flex mt-3 items-center gap-3">
              <Icon
                icon="humbleicons:location"
                width="24"
                height="24"
                className="bg-[#37584F] text-white p-1 rounded-md"
              />
              <div>
                <p className="font-semibold mt-2 text-[#101828]">Head Office</p>
                <p className="text-sm text-[#475467]">
                  DM Consortium. H. No. 71 C3 Gulberg III Park View Lane, Lahore
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative -top-20 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40">
          <div className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full overflow-hidden rounded-xl shadow-lg">
            <SimpleMap />
          </div>
        </div>
        
      </div>

      <div className="h-[12vh] " id="contact-us">
        {" "}
      </div>
      {/* <div className="text-center text-[#37584F] xl:px-40 lg:px-36 md:px-20 px-6">
        <p className="sm:text-5xl text-4xl font-bold py-8 gravesendSans ">
          ENQUIRE NOW
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="text-left :text-lg  w-full md:w-[40%] font-medium popping">
            <p className="sm:text-4xl text-3xl py-4">Contact Information</p>
            <div className="border-b-4 rounded-full border-b-[#37584F] w-[20%]"></div>
            <p className="py-4 sm:text-2xl text-xl">
              Any question or remarks? Just <br /> write us a message!
            </p>
            <div className=" flex gap-4 items-center py-4">
              <Icon icon="mdi:phone-classic" width="24" height="24" />
              <p className="sm:text-xl text-base">042-111-111-744</p>
            </div>
            <div className=" flex  gap-4 items-center py-4">
              <Icon icon="ic:baseline-local-phone" width="24" height="24" />
              <p className="sm:text-xl text-base">+92 300 8497999</p>
            </div>
            <div className=" flex gap-4 items-center py-4">
              <Icon icon="ic:baseline-mail" width="24" height="24" />
              <p className="sm:text-xl text-base">
                info@sereneheightsnathiagali.com
              </p>
            </div>
          </div>
          <div className="w-full md:w-[60%]">
            <ContactUs />
          </div>
        </div>
      </div> */}

      <div className="text-center lg:px-36 md:px-20 xs:px-6 ">
          <p className="sm:text-5xl text-4xl font-bold py-16 gravesendSans text-[#37584F]">
            ENQUIRE NOW
          </p>
          <div className="flex flex-col px-4 sm:px-0 md:flex-row gap-4">
            <div className="text-left :text-lg  w-full md:w-[40%] font-medium popping">
              <p className="sm:text-4xl text-3xl py-4 text-[#37584F]">Contact Information</p>
              <div className="border-b-4 rounded-full border-b-[#37584F] w-[20%]"></div>
              <p className="py-6 sm:text-xl text-2xl text-[#222222] poppins opacity-80">
                Any question or remarks? Just <br /> write us a message!
              </p>
              <div className="flex flex-col gap-4 text-[#222222] font-medium">
                <div className="flex text-[#37584F] items-center gap-3">
                  <Icon
                    icon="mdi:phone-classic"
                    width="24"
                    height="24"
                  />
                  <p className="text-[14px] text-[#222222] md:text-[16px] lg:text-[18px]">
                    042-111-111-744
                  </p>
                </div>

                <div className="flex text-[#37584F] items-center gap-3">
                  <Icon
                    icon="ic:baseline-local-phone"
                    width="24"
                    height="24"
                  />
                  <p className="text-[14px] text-[#222222] md:text-[16px] lg:text-[18px]">
                    +92 300 8497999
                  </p>
                </div>

                <div className="flex text-[#37584F] items-center gap-3">
                  <Icon
                    icon="ic:baseline-mail"
                    width="24"
                    height="24"
                  />
                  <p className="text-[14px] text-[#222222] md:text-[16px] lg:text-[18px] break-all">
                    info@sereneheightsnathiagali.com
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[60%]">
              <ContactUs />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Contactus;
