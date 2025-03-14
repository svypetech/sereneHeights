"use client";
import ImgCarousel from "@/components/carousel/ImgCarousel";
import ContactUs from "@/components/contactUs/ContactUs";
import ImageGrid from "@/components/imageGrid/ImageGrid";
import LocationCards from "@/components/loctaionCards/LocationCards";
import LoopImages from "@/components/loopImages/LoopImages";
import { locationElements } from "@/utils/constants/locationElements";
import { Icon } from "@iconify-icon/react";
import { motion } from "framer-motion";
import Image from "next/image";
// import Image from "next/image";
// import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden  ">
      <div className="relative">
        <ImgCarousel />
      </div>

      <div className="relative text-[#37584F] bg-white mt-[100vh] w-full z-10  py-20">
        {/* <-------- Section# 1 --------> */}
        <div className="flex flex-col md:flex-row gap-4 justify-center sm:justify-around items-center px-4 xs:px-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-4xl sm:text-5xl  font-bold tracking-wide  gravesendSans">
              DISCOVER
              <br /> REFINED LUXURY
            </p>
            <p className="my-2 pl- text-2xl sm:text-4xl text-[#37584F]/80  tracking-wide  gravesendSans">
              AT OUR EXCLUSIVE RESORT <br /> AND HOTEL
            </p>
          </motion.div>

          {/* <div className="grid grid-cols-2 gap-3">
            <div>
              <motion.img
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-[220px] w-[170px] rounded-md mb-3"
                src="/assets/home/image1.png"
                alt="img"
              />

              <motion.img
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="h-[140px] w-[170px] rounded-md"
                src="/assets/home/image2.png"
                alt="img"
              />
            </div>

            <div>
              <motion.img
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="h-[140px] w-[170px] rounded-md  "
                src="/assets/home/image3.png"
                alt="img"
              />

              <motion.img
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="h-[220px] w-[170px] rounded-md mt-3 "
                src="/assets/home/image4.png"
                alt="img"
              />
            </div>
          </div> */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-3"
              >
                <Image
                  src="/assets/home/image1.png"
                  alt="img"
                  width={170}
                  height={220}
                  className="rounded-md"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <Image
                  src="/assets/home/image2.png"
                  alt="img"
                  width={170}
                  height={140}
                  className="rounded-md"
                  priority
                />
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <Image
                  src="/assets/home/image3.png"
                  alt="img"
                  width={170}
                  height={140}
                  className="rounded-md"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="mt-3"
              >
                <Image
                  src="/assets/home/image4.png"
                  alt="img"
                  width={170}
                  height={220}
                  className="rounded-md"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* <-------- Section# 2 --------> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="my-32 lg:px-36 md:px-20 px-4 py-0 xs:py-16 text-center"
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

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
          >
            <Image
              src="/assets/home/largestResort.png"
              alt="img"
              width={1000}
              height={600}
              priority
              className="mt-6 w-full"
            />
          </motion.div> */}
        </motion.div>

        {/* <-------- Section# 3 --------> */}
        <div className="w-full pt-0 xs:pt-6  ">
          <ImageGrid />
        </div>

        {/* <-------- Section# 4  --------> */}
        <div className="text-center sm:pb-24  pb-0  sm:px-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="my-28"
          >
            <p className="text-3xl sm:text-5xl font-bold gravesendSans">
              DISCOVER SERENE HEIGHTS <br /> IN NATHIA GALI
            </p>
            <p className="py-8 px inter">
              Serene Heights Nathia Gali, nestled near PAF’s Kalabagh Airbase,
              offers secure, scenic living amidst alpine forests, with
              unobstructed valley views. Minutes from Nathia Gali Main Bazar,
              this resort-style retreat provides peace, modern amenities, and
              breathtaking sunsets, making it your dream summer home.
            </p>

            {/* Main Image Container */}
            <div className="relative w-full max-w-[1400px] mx-auto mt-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                className="relative w-full"
              >
                <iframe
                  width="1200"
                  height="600"
                  src="https://www.youtube.com/embed/hgdClMWb6rE"
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full rounded-2xl"
                ></iframe>
              </motion.div>
              {/* <div className="relative w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                >
                  <Image
                    src="/assets/home/nathiagaliResort/nathiagaliResort.png"
                    alt="img"
                    width={1000}
                    height={600}
                    priority
                    className="w-full rounded-2xl"
                  />
                </motion.div>

                <motion.img
                  src="/assets/home/nathiagaliResort/frame1.png"
                  alt="img"
                  className="absolute top-[5%] md:top-[8%] right-[-6%] w-[25%] max-w-[180px] md:max-w-[220px]"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.img
                  src="/assets/home/nathiagaliResort/frame2.png"
                  alt="img"
                  className="absolute bottom-[20%] md:bottom-[25%] right-[-8%] w-[25%] max-w-[180px] md:max-w-[220px]"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.img
                  src="/assets/home/nathiagaliResort/frame3.png"
                  alt="img"
                  className="absolute bottom-[-20%] md:bottom-[-10%] right-[10%] w-[25%] max-w-[180px] md:max-w-[220px]"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* <-------- Section# 5 --------> */}
        <div className="relativ ">
          <div className="md:absolut flex flex-col justify-center items-center backdrop-blur pb-10  px-10 md:px-28 text-center  w-full  ">
            <p className="text-4xl lg:text-5xl font-semibold py-4 gravesendSans">
              EVERY DESIRE ON YOUR DOORSTEP
            </p>
            <p className="font-semibold inter">
              Indulge in unparalleled luxury at our esteemed hotel & resort.
              <br />
              Experience opulent comfort, exquisite dining, and refined
              accommodations.{" "}
            </p>
          </div>
          <LoopImages />
        </div>

        {/* <-------- Section# 6 --------> */}
        <div className="text-center bg-[url('/assets/home/location/bgMap.png')] bg-cover bg-no-repeat w-full lg:px-36 md:px-20 xs:px-6 mb-20 pt-20">
          <p className="sm:text-5xl text-4xl font-bold py-10 gravesendSans">
            Location
          </p>
          <div className="grid h-full px-3 sm:px-0 lg:h-[80vh] grid-cols-1 md:grid-cols-2 gap-6 py-10">
            {/* Image section */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/assets/home/location/location.png"
                alt="location"
                className="object-contai w-full h-full"
              />
            </div>

            {/* Cards section */}
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

        {/* <-------- Section# 7 --------> */}
        <div className="text-center lg:px-36 md:px-20 xs:px-6 ">
          <p className="sm:text-5xl text-4xl font-bold py-8 gravesendSans">
            ENQUIRE NOW
          </p>
          <div className="flex flex-col px-4 sm:px-0 md:flex-row justify-center items-center gap-4">
            <div className="text-left :text-lg  w-full md:w-[40%] font-medium popping">
              <p className="sm:text-4xl text-3xl py-4">Contact Information</p>
              <div className="border-b-4 rounded-full border-b-[#37584F] w-[20%]"></div>
              <p className="py-4 sm:text-2xl text-xl">
                Any question or remarks? Just <br /> write us a message!
              </p>
              <div className=" flex gap-4 items-center py-4">
                <Icon icon="mdi:phone-classic" width="24" height="24" />
                <p className="sm:text-xl md:text-lg text-base">
                  042-111-111-744
                </p>
              </div>
              <div className=" flex  gap-4 items-center py-4">
                <Icon icon="ic:baseline-local-phone" width="24" height="24" />
                <p className="sm:text-xl md:text-lg text-base">
                  +92 300 8497999
                </p>
              </div>
              <div className=" flex gap-4 items-center py-4">
                <Icon icon="ic:baseline-mail" width="24" height="24" />
                <p className="sm:text-xl md:text-lg text-base">
                  info@sereneheightsnathiagali.com
                </p>
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
