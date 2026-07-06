"use client";

import InvestContactForm from "@/components/invest/InvestContactForm";
import InvestNumbersSection from "@/components/invest/InvestNumbersSection";
import AnimatedCounter from "@/components/invest/AnimatedCounter";
import FaqSection from "@/components/faq/FaqSection";
import { Icon } from "@iconify-icon/react";
import {
  INVEST_CALENDLY_URL,
  investFaqItems,
  investHero,
  investSnapshotCards,
  investTestimonial,
} from "@/utils/constants/investContent";
import React, { useState } from "react";

function InvestPage() {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(0);

  const scrollToForm = () => {
    document.getElementById("invest-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FEFEFB]">
      {/* SECTION 1: HERO */}
      <section className="relative bg-[#37584F] text-white px-6 md:px-16 lg:px-36 py-20 md:py-28 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#37584F] via-[#37584F] to-[#2a433c] opacity-95" />
        <div className="relative max-w-4xl mx-auto">
          <p className="inter text-xs md:text-sm font-semibold tracking-widest uppercase text-white/80 mb-4">
            INVEST WITH SERENE HEIGHTS
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gravesendSans mb-6">
            {investHero.h1}
          </h1>
          <p className="text-lg md:text-xl inter text-white/90 mb-8 leading-relaxed">
            {investHero.subheading}
          </p>
          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex items-center justify-center rounded-full bg-white text-[#37584F] px-8 py-4 font-semibold popping text-lg hover:bg-[#F3F2ED] transition-colors shadow-lg"
          >
            {investHero.cta}
          </button>
          <p className="text-sm inter text-white/75 mt-6 max-w-xl mx-auto">
            {investHero.subtext}
          </p>
        </div>
      </section>

      {/* SECTION 2: INVESTMENT SNAPSHOT */}
      <section className="px-6 md:px-16 lg:px-36 py-16 md:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#37584F] gravesendSans text-center mb-12">
          Why Investors Choose Serene Heights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {investSnapshotCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-8 shadow-[0px_0px_4px_1px_#0000001F] hover:shadow-[0px_4px_15px_rgba(55,88,79,0.15)] transition-shadow"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#37584F]/20 bg-[#37584F]/5 mb-4"
                aria-hidden="true"
              >
                <Icon
                  icon={card.icon}
                  width="26"
                  height="26"
                  className="text-[#37584F]"
                />
              </div>
              <h3 className="text-xl font-bold text-[#37584F] gravesendSans mb-3">
                {card.title}
              </h3>
              <p className="text-[#475467] inter text-sm leading-relaxed mb-4">
                {card.body}
              </p>
              <p className="text-sm font-semibold text-[#37584F] inter border-t border-gray-100 pt-4">
                {card.stat}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: THE NUMBERS */}
      <InvestNumbersSection />

      {/* SECTION 4: TESTIMONIAL */}
      <section className="px-6 md:px-16 lg:px-36 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#37584F] gravesendSans text-center mb-12">
            Real Investor Success
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0px_0px_4px_1px_#0000001F]">
            <blockquote className="text-lg md:text-xl text-[#222222] inter leading-relaxed italic mb-8 border-l-4 border-[#37584F] pl-6">
              &ldquo;{investTestimonial.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-16 h-16 rounded-full bg-[#37584F] flex items-center justify-center text-white font-bold text-xl shrink-0">
                FA
              </div>
              <div className="flex-1">
                <p className="font-bold text-[#101828] gravesendSans text-lg">
                  {investTestimonial.author}
                </p>
                <p className="text-[#475467] inter text-sm">
                  {investTestimonial.title}
                </p>
                <p className="text-[#37584F] inter text-sm font-medium mt-1">
                  {investTestimonial.details}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              {investTestimonial.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#37584F] gravesendSans">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="text-xs md:text-sm text-[#475467] inter mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <FaqSection
        id="invest-faq"
        subtitle="Clear answers to investor questions about Serene Heights investment."
        sections={[{ items: investFaqItems }]}
        expandedIndex={expandedFaqIndex}
        onToggle={(index) =>
          setExpandedFaqIndex(expandedFaqIndex === index ? null : index)
        }
        className="px-6 md:px-16 lg:px-36 pb-16 md:pb-24 bg-[#FEFEFB]"
      />

      {/* SECTION 6: CONTACT FORM */}
      <section
        id="invest-form"
        className="px-6 md:px-16 lg:px-36 py-16 md:py-24 scroll-mt-24"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#37584F] gravesendSans mb-3">
            Ready to Get Your Investment Analysis?
          </h2>
          <p className="text-[#475467] inter mb-10">
            Let&apos;s discuss your specific situation. Get personalized
            projections in 2 hours.
          </p>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-[0px_0px_4px_1px_#0000001F]">
            <InvestContactForm />
          </div>
        </div>
      </section>

      {/* SECTION 7: FOOTER CTA */}
      <section className="px-6 md:px-16 lg:px-36 py-16 md:py-20 bg-[#37584F] text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold gravesendSans mb-3">
          Or Schedule a Call Directly
        </h2>
        <p className="text-white/80 inter mb-8">
          15 minutes | No obligation | Discuss your specific situation
        </p>
        <a
          href={INVEST_CALENDLY_URL}
          className="inline-flex items-center justify-center rounded-full bg-white text-[#37584F] px-8 py-4 font-semibold popping hover:bg-[#F3F2ED] transition-colors"
        >
          Schedule Investor Consultation
        </a>
      </section>
    </div>
  );
}

export default InvestPage;
