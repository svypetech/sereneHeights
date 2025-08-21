"use client";

import ImageGrid from "@/components/about/imageGrid/ImageGrid";
import {
  bottomImages,
  imageGroups,
  sideImage,
} from "@/utils/constants/aboutElements";
import { Icon } from "@iconify-icon/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="text-center px-6 md:px-16 lg:px-36 h-full" id="about">
      <h1 className="sm:text-5xl text-4xl font-bold text-[#37584F]  gravesendSans ">
        {" "}
        About Us
      </h1>
      <p className="py-10 text-[#222] text-lg inter">
        All In Holdings embodies a diverse portfolio of businesses,
        strategically investing across multiple sectors including{" "}
        <b> textiles, travel, and real estate.</b> Our unwavering commitment to
        excellence drives our pursuit of success in each venture we undertake.
        DM Consortium part of All in Holdings is a real estate company with its
        flagship project by the name of Serene Heights Hotel & Resorts.
        <br /> Prior to commencing vertical construction, DM Consortium achieved
        remarkable success with the completion of a{" "}
        <b>Horizontal Development Project named Serene Farms,</b> situated on
        Barki Road in Lahore.
      </p>

      <div className="w-[100%]">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-[80%]">
            {imageGroups.map((group, index) => (
              <ImageGrid key={index} images={group} />
            ))}
          </div>
          <div className="w-full md:w-[19%] lg:w-[19%] xl:w-[20%] 2xl:w-[20%] 4xl:w-[10%] h-full pb-4">
            <Image
              src={`/assets/about/frames/${sideImage.src}`}
              alt="Side Image"
              width={150}
              height={300}
              className="w-full min-h-[800px] md:min-h-[385px] xl:min-h-[578px] 2xl:min-h-[640px] object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
        <div className="w-[100%]">
          <ImageGrid images={bottomImages} />
        </div>
      </div>

      <div className="sm:py-32 py-20 flex flex-col md:flex-row gap-12 justify-center sm:justify-between items-center ">
        <div className=" text-left w-full md:w-1/2">
          <div className="flex items-center gap-3">
            <Icon
              icon="pajamas:issue-type-objective"
              className="text-[#37584F] font-extrabold"
              width="32"
              height="32"
            />
            <p className="sm:text-4xl text-3xl font-bold py-3 text-[#37584F] gravesendSans">
              Our Objective
            </p>
          </div>
          <p className="text-lg text-[#222] inter ">
            DM Consortium is currently dedicated to{" "}
            <b> crafting premium resorts in the Northern Areas of Pakistan.</b>{" "}
            Our primary objective is to introduce an all-encompassing vacation
            experience unparalleled in the nation&apos;s history. Through our
            initiatives, we aspire to redefine the holiday landscape throughout
            Pakistan, showcasing contemporary architectural marvels meticulously
            designed to epitomize comfort and opulence.
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

      <div className="sm:py-26 py-20 flex flex-col md:flex-row gap-12 justify-center sm:justify-between items-center">
        {/* Image */}
        <div className="relative w-full md:w-1/2 order-2 md:order-1">
          <Image
            src="/assets/about/opportunity/opr1.png"
            alt="img"
            width={1000}
            height={500}
            className="w-full h-[500px] 2xl:h-[500px] rounded-2xl mb-3 object-cover"
            priority
          />

          <Image
            src="/assets/about/opportunity/oprFrame1.png"
            alt="img"
            width={220}
            height={220}
            className="absolute hidden md:block top-[5%] md:top-[8%] right-[-6%] w-[35%] max-w-[180px] md:max-w-[220px]"
          />

          <Image
            src="/assets/about/opportunity/oprFrame2.png"
            alt="img"
            width={220}
            height={220}
            className="absolute hidden md:block bottom-[5%] md:bottom-[10%] right-[-18%] w-[35%] max-w-[180px] md:max-w-[220px]"
          />
        </div>

        {/* Text */}
        <div className="text-left w-full md:w-1/2 order-1 md:order-2">
          <div className="flex items-center gap-2">
            <Icon
              icon="fa6-solid:lightbulb"
              className="text-[#37584F]"
              width="34"
              height="32"
            />
            <p className="sm:text-4xl text-3xl font-bold py-3 text-[#37584F] gravesendSans">
              Opportunity For You
            </p>
          </div>
          <p className="text-lg text-[#222] inter">
            Furthermore, our projects present a{" "}
            <b>unique opportunity to invest in mountain real estate,</b>{" "}
            promising significant{" "}
            <b>capital appreciation and recurring monthly dividends.</b> We aim
            to nurture and spoil you by bringing you closer to nature and purity
            with zero compromise in comfort and quality of life.
          </p>
        </div>
      </div>

    </div>
  );
}

export default page;
