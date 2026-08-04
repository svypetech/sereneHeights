"use client";

import ImgCarousel from "@/components/carousel/ImgCarousel";
import ContactUs from "@/components/contactUs/ContactUs";
import ImageGrid from "@/components/imageGrid/ImageGrid";
import LocationSection from "@/components/location/LocationSection";
import LoopImages from "@/components/loopImages/LoopImages";
import { Icon } from "@iconify-icon/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HOME_DISCOVER_ALTS } from "@/utils/constants/imageAltText";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden  ">

      <div className="relative">
        <ImgCarousel />
      </div>

      <div className="relative text-[#37584F] bg-white mt-[100vh] w-full z-10 py-20">
        {/* <Section1 /> */}
        <div className="flex flex-col md:flex-row gap-4 justify-center sm:justify-around items-center px-4 xs:px-8 py-28">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-4xl sm:text-5xl  font-bold tracking-wide  gravesendSans">
              DISCOVER
              <br /> REFINED LUXURY
            </p>
            <p className="my-2 text-2xl sm:text-4xl text-[#37584F]/80  tracking-wide font-helvetica font-medium">
              AT OUR EXCLUSIVE RESORT <br /> AND HOTEL
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-3"
              >
                <Image
                  src="/assets/home/image1.png"
                  alt={HOME_DISCOVER_ALTS["image1.png"]}
                  width={170}
                  height={220}
                  className="rounded-[10px]"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <Image
                  src="/assets/home/image2.png"
                  alt={HOME_DISCOVER_ALTS["image2.png"]}
                  width={170}
                  height={140}
                  className="rounded-[10px]"
                  priority
                />
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <Image
                  src="/assets/home/image3.png"
                  alt={HOME_DISCOVER_ALTS["image3.png"]}
                  width={170}
                  height={140}
                  className="rounded-[10px]"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="mt-3"
              >
                <Image
                  src="/assets/home/image4.png"
                  alt={HOME_DISCOVER_ALTS["image4.png"]}
                  width={170}
                  height={220}
                  className="rounded-[10px]"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>


        {/* <Section2 /> */}
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="my-8 lg:px-36 md:px-20 px-4 py-0 xs:py-16 text-center"
        >
          <p className="text-4xl sm:text-5xl font-bold gravesendSans">
            PAKISTAN’S FIRST AND LARGEST <br /> WINTER RESORT.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
          >
            <video
              src="/assets/home/videoL/laerialnew.mp4"
              width="1300"
              height="600"
              controls
              autoPlay
              loop
              muted
              className="mt-6 w-full rounded-2xl "
            />
          </motion.div>
        </motion.div>


        {/* <Section3 /> */}
        <div className="w-full pt-0 xs:pt-6  ">
          <ImageGrid />
        </div>


        {/* <Section4 /> */}
        <div className="text-center sm:pb-24 pb-0 sm:px-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="my-20 lg:px-36 md:px-20 px-4"
          >
            <p className="text-3xl sm:text-5xl text-[#37584F] font-bold gravesendSans">
              DISCOVER SERENE HEIGHTS <br /> IN NATHIA GALI
            </p>
            <p className="py-8 text-[#222222] inter">
              Serene Heights Nathia Gali is Pakistan&apos;s premier investment
              destination in luxury mountain hospitality. Located at 7,906ft with
              direct Islamabad access (80km), our fully managed hotel apartments
              generate verified monthly rental income of PKR 80,000–120,000. Unlike
              traditional plots with slow appreciation, Serene Heights residents earn
              immediate passive income while their investment appreciates 5–8%
              annually. Backed by DM Consortium&apos;s successful track record of
              15+ completed projects, our 150+ apartments with 24/7 concierge
              service deliver the gold standard for Pakistani investors seeking
              sustainable, transparent returns in the mountain resort market.
            </p>

            {/* Main Image Container */}
            <div className="relative w-full max-w-[1400px] mx-auto mt-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                className="relative w-full"
              >
                {/* Responsive YouTube iframe wrapper */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/hgdClMWb6rE"
                    title="YouTube Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>


        {/* <Section5 /> */}
        <div className="relative">
          <div className="md:absolute md:left-0 md:w-1/2 flex items-center justify-center md:h-1/2">
            <div className="backdrop-blur px-8 py-8 lg:px-16 w-full text-center md:text-left">
              <p className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-semibold gravesendSans pb-4">
                EVERY DESIRE ON YOUR DOORSTEP
              </p>
              <p className="font-medium poppins text-[#222222] opacity-70 pt-0 md:text-[12px] lg:text-[15px]">
                Indulge in unparalleled luxury at our esteemed hotel & resort. Experience opulent comfort, exquisite
                dining, and refined accommodations. Elevate your lifestyle with our luxurious apartments, offering modern
                comfort and convenience. Enjoy a range of activities including archery, hiking, golf, snowboarding,
                shooting range, helipad access, massages, alpine roller coaster, and rock climbing.
              </p>
            </div>
          </div>
          <LoopImages />
        </div>


        {/* <Section6 /> */}
        <LocationSection />


        {/* <Section7 /> */}
        <div className="text-center lg:px-36 md:px-20 xs:px-6 mb-10">
          <p className="sm:text-5xl text-4xl font-bold py-16 gravesendSans">
            ENQUIRE NOW
          </p>
          <div className="flex flex-col px-4 sm:px-0 md:flex-row gap-4">
            <div className="text-left :text-lg  w-full md:w-[40%] font-medium popping">
              <p className="sm:text-4xl text-3xl py-4">Contact Information</p>
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
    </div>
  );
}
