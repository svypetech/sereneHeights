"use client";

import ImageGrid from "@/components/about/imageGrid/ImageGrid";
import {
  bottomImages,
  imageGroups,
  sideImage,
} from "@/utils/constants/aboutElements";
import {
  ABOUT_FOUNDER,
  ABOUT_LEADERSHIP,
  ABOUT_PHILOSOPHY,
  ABOUT_TRACK_RECORD,
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

function WhyItMatters({ children }) {
  return (
    <div className="border-l-4 border-[#37584F] pl-5 mt-6">
      <p className="text-base text-[#37584F] font-semibold inter mb-1">
        Why This Matters to You
      </p>
      <p className="text-lg text-[#222] inter">{children}</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="text-center px-6 md:px-16 lg:px-36 h-full" id="about">
      <h1 className="sm:text-5xl text-4xl font-bold text-[#37584F] gravesendSans">
        About Serene Heights Nathia Gali
      </h1>

      <div className="py-10 text-left max-w-4xl mx-auto">
        <SectionHeading icon="mdi:account-tie">Our Founder & Vision</SectionHeading>
        {ABOUT_FOUNDER.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-[#222] inter mt-4">
            {paragraph}
          </p>
        ))}
        <blockquote className="border-l-4 border-[#37584F] pl-5 mt-6 italic text-lg text-[#37584F] inter">
          &ldquo;{ABOUT_FOUNDER.quote}&rdquo;
          <span className="block not-italic text-base text-[#222] mt-2">
            — Muhammad Ali Khan, Founder
          </span>
        </blockquote>
        <WhyItMatters>{ABOUT_FOUNDER.whyItMatters}</WhyItMatters>
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

      <div className="sm:py-32 py-20 text-left max-w-5xl mx-auto">
        <SectionHeading icon="mdi:account-group">Our Leadership Team</SectionHeading>
        <div className="mt-8 space-y-14">
          {ABOUT_LEADERSHIP.map((leader) => (
            <div key={leader.name}>
              <h3 className="text-2xl font-bold text-[#37584F] gravesendSans">
                {leader.name}{" "}
                <span className="text-lg font-medium text-[#222] inter">
                  | {leader.role}
                </span>
              </h3>
              {leader.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-[#222] inter mt-4">
                  {paragraph}
                </p>
              ))}
              {leader.highlights?.length > 0 && (
                <ul className="list-disc pl-6 mt-4 space-y-2 text-lg text-[#222] inter">
                  {leader.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {leader.quote && (
                <blockquote className="border-l-4 border-[#37584F] pl-5 mt-4 italic text-lg text-[#37584F] inter">
                  &ldquo;{leader.quote}&rdquo;
                </blockquote>
              )}
              <WhyItMatters>{leader.whyItMatters}</WhyItMatters>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:py-32 py-20 flex flex-col md:flex-row gap-12 justify-center sm:justify-between items-center">
        <div className="text-left w-full md:w-1/2">
          <SectionHeading icon="mdi:chart-timeline-variant">
            Our Track Record
          </SectionHeading>
          <div className="space-y-8 mt-4">
            {ABOUT_TRACK_RECORD.map((project) => (
              <div key={project.name}>
                <h3 className="text-xl font-bold text-[#37584F] gravesendSans">
                  {project.name}
                </h3>
                <ul className="list-disc pl-6 mt-3 space-y-1 text-lg text-[#222] inter">
                  {project.stats.map((stat) => (
                    <li key={stat}>{stat}</li>
                  ))}
                </ul>
                {project.summary && (
                  <p className="text-lg text-[#222] inter mt-3">{project.summary}</p>
                )}
              </div>
            ))}
          </div>
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

      <div className="sm:py-26 py-20 flex flex-col md:flex-row gap-12 justify-center sm:justify-between items-center">
        <div className="relative w-full md:w-1/2 order-2 md:order-1">
          <Image
            src="/assets/about/opportunity/opr1.png"
            alt={ABOUT_OPPORTUNITY_ALTS["opr1.png"]}
            width={1000}
            height={500}
            className="w-full h-[500px] 2xl:h-[500px] rounded-2xl mb-3 object-cover"
            priority
          />

          <Image
            src="/assets/about/opportunity/oprFrame1.png"
            alt={ABOUT_OPPORTUNITY_ALTS["oprFrame1.png"]}
            width={220}
            height={220}
            className="absolute hidden md:block top-[5%] md:top-[8%] right-[-6%] w-[35%] max-w-[180px] md:max-w-[220px]"
          />

          <Image
            src="/assets/about/opportunity/oprFrame2.png"
            alt={ABOUT_OPPORTUNITY_ALTS["oprFrame2.png"]}
            width={220}
            height={220}
            className="absolute hidden md:block bottom-[5%] md:bottom-[10%] right-[-18%] w-[35%] max-w-[180px] md:max-w-[220px]"
          />
        </div>

        <div className="text-left w-full md:w-1/2 order-1 md:order-2">
          <SectionHeading icon="fa6-solid:lightbulb">
            Our Investment Philosophy
          </SectionHeading>
          <div className="space-y-6 mt-4">
            {ABOUT_PHILOSOPHY.map((principle, index) => (
              <div key={principle.title}>
                <h3 className="text-xl font-bold text-[#37584F] gravesendSans">
                  {index + 1}. {principle.title.toUpperCase()}
                </h3>
                <p className="text-lg text-[#222] inter mt-2">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sm:pb-32 pb-20 text-left max-w-4xl mx-auto">
        <SectionHeading icon="mdi:shield-check">Why Choose Serene Heights</SectionHeading>
        <ul className="mt-6 space-y-3 text-lg text-[#222] inter">
          {ABOUT_WHY_CHOOSE.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-[#37584F] font-bold shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
