"use client";

import ImageGrid from "@/components/about/imageGrid/ImageGrid";
import {
  bottomImages,
  imageGroups,
  sideImage,
} from "@/utils/constants/aboutElements";
import {
  ABOUT_FOUNDER,
  ABOUT_PHILOSOPHY,
  ABOUT_PROJECT,
  ABOUT_WHY_CHOOSE,
} from "@/utils/constants/aboutContent";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import {
  ABOUT_FRAME_ALTS,
  ABOUT_OBJECTIVE_ALTS,
  ABOUT_OPPORTUNITY_ALTS,
} from "@/utils/constants/imageAltText";

function SectionHeading({ icon, children }) {
  return (
    <div className="flex items-center justify-center md:justify-start gap-3">
      <Icon
        icon={icon}
        className="text-[#37584F] font-extrabold shrink-0"
        width="32"
        height="32"
      />
      <h2 className="sm:text-4xl text-3xl font-bold py-3 text-[#37584F] gravesendSans text-left">
        {children}
      </h2>
    </div>
  );
}

function MagazineLabel({ children }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-[#37584F] gravesendSans tracking-tight text-left md:sticky md:top-28">
      {children}
    </h2>
  );
}

function MagazineSection({ label, children, className = "" }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 md:gap-16 text-left ${className}`}
    >
      <MagazineLabel>{label}</MagazineLabel>
      <div>{children}</div>
    </div>
  );
}

function FloatingBadge({ icon, label, className = "" }) {
  return (
    <div
      className={`absolute hidden md:flex items-center gap-3 bg-white rounded-2xl shadow-md px-3 py-2.5 w-[min(100%,220px)] z-0 ${className}`}
    >
      <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-xl bg-[#F3F3F3]">
        <Icon icon={icon} width="28" height="28" style={{ color: "#37584F" }} />
      </div>
      <p className="text-sm text-[#4A4A4A] inter leading-snug text-left font-medium">
        {label}
      </p>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="text-center px-6 md:px-16 lg:px-36 pt-16 sm:pt-24 h-full" id="about">
      <div className="max-w-7xl mx-auto">
        <h1 className="sm:text-5xl text-4xl font-bold text-[#37584F] gravesendSans text-left">
          About Serene Heights Nathia Gali
        </h1>

        <MagazineSection label={ABOUT_FOUNDER.heading} className="mt-14 sm:mt-20 pb-10">
          {ABOUT_FOUNDER.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base sm:text-lg text-[#222] inter leading-relaxed mt-0 [&:not(:first-child)]:mt-5"
            >
              {paragraph}
            </p>
          ))}
          <blockquote className="border-l border-[#37584F]/40 pl-5 mt-10 italic text-base sm:text-lg text-[#37584F] inter leading-relaxed">
            &ldquo;{ABOUT_FOUNDER.quote}&rdquo;
            <span className="block not-italic text-sm text-[#222]/70 mt-3 tracking-wide">
              — {ABOUT_FOUNDER.quoteAttribution}
            </span>
          </blockquote>
          <div className="border-l border-[#37584F]/40 pl-5 mt-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#37584F] font-medium inter mb-3">
              Why This Matters to You
            </p>
            <p className="text-base sm:text-lg text-[#222] inter leading-relaxed">
              {ABOUT_FOUNDER.whyItMatters}
            </p>
          </div>
        </MagazineSection>
      </div>

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
              alt={ABOUT_FRAME_ALTS[sideImage.src]}
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

      <MagazineSection
        label={ABOUT_PROJECT.heading}
        className="max-w-7xl mx-auto sm:py-32 py-20"
      >
        <p className="text-base sm:text-lg text-[#222] inter leading-relaxed">
          {ABOUT_PROJECT.paragraph}
        </p>
      </MagazineSection>

      <div className="sm:py-26 py-20 flex flex-col md:flex-row gap-12 justify-center sm:justify-between items-center">
        <div className="relative w-full md:w-1/2 order-2 md:order-1 overflow-hidden md:overflow-visible">
          <Image
            src="/assets/about/opportunity/opr1.png"
            alt={ABOUT_OPPORTUNITY_ALTS["opr1.png"]}
            width={1000}
            height={500}
            className="w-full h-[500px] 2xl:h-[500px] rounded-2xl mb-3 object-cover"
            priority
          />

          <FloatingBadge
            icon="mdi:cash-sync"
            label="Recurring Monthly dividends"
            className="top-[5%] md:top-[8%] left-[-6%] animate-float"
          />

          <FloatingBadge
            icon="mdi:home-heart"
            label="Comfort and Quality"
            className="bottom-[5%] md:bottom-[10%] left-[-10%] animate-float-delayed"
          />
        </div>

        <div className="relative z-10 text-left w-full md:w-1/2 order-1 md:order-2">
          <SectionHeading icon="fa6-solid:lightbulb">
            Our Founder&apos;s Philosophy
          </SectionHeading>
          <div className="space-y-6 mt-4">
            {ABOUT_PHILOSOPHY.map((principle, index) => (
              <div key={principle.title}>
                <h3 className="text-xl font-bold text-[#37584F] gravesendSans">
                  {index + 1}. {principle.title.toUpperCase()}
                </h3>
                <p className="text-lg text-[#222] inter mt-2">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sm:pb-32 pb-20 flex flex-col md:flex-row gap-12 justify-center sm:justify-between items-center">
        <div className="text-left w-full md:w-1/2">
          <SectionHeading icon="mdi:shield-check">
            Why Choose Serene Heights
          </SectionHeading>
          <ul className="mt-6 space-y-3 text-lg text-[#222] inter">
            {ABOUT_WHY_CHOOSE.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#37584F] font-bold shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-2 gap-2">
          <div>
            <div className="mb-2">
              <Image
                src="/assets/about/obj/objImg1.png"
                alt={ABOUT_OBJECTIVE_ALTS["objImg1.png"]}
                width={170}
                height={220}
                className="rounded-[10px] w-full h-auto"
                priority
              />
            </div>
            <div>
              <Image
                src="/assets/about/obj/objImg2.png"
                alt={ABOUT_OBJECTIVE_ALTS["objImg2.png"]}
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
                alt={ABOUT_OBJECTIVE_ALTS["objImg3.png"]}
                width={170}
                height={140}
                className="rounded-[10px] w-full h-auto"
                priority
              />
            </div>
            <div className="flex-1">
              <Image
                src="/assets/about/obj/objImg4.png"
                alt={ABOUT_OBJECTIVE_ALTS["objImg4.png"]}
                width={170}
                height={220}
                className="rounded-[10px] w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
