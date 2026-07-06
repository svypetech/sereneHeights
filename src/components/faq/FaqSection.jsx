"use client";

import React from "react";

function FaqAccordionItem({
  question,
  answer,
  isExpanded,
  onClick,
  showDivider,
}) {
  return (
    <>
      <div className="flex gap-4 justify-between text-start items-start">
        <button
          type="button"
          onClick={onClick}
          className="flex-1 text-left bg-transparent border-0 p-0 cursor-pointer"
          aria-expanded={isExpanded}
        >
          <p className="text-sm font-semibold text-[#101828]">{question}</p>
          {isExpanded && (
            <p className="text-sm pt-2 font-normal text-[#475467] whitespace-pre-line">
              {answer}
            </p>
          )}
        </button>
        <button
          type="button"
          onClick={onClick}
          className="cursor-pointer flex items-center justify-center shrink-0 bg-transparent border-0 p-0 mt-0.5"
          aria-label={isExpanded ? "Collapse answer" : "Expand answer"}
        >
          <img
            className="w-6 h-6"
            src={
              isExpanded
                ? "/assets/payment/minusCircle.svg"
                : "/assets/payment/plusCircle.svg"
            }
            alt=""
          />
        </button>
      </div>

      {showDivider && <div className="w-full my-4 border-t border-gray-200" />}
    </>
  );
}

export default function FaqSection({
  title = "FREQUENTLY ASKED QUESTIONS",
  subtitle,
  sections,
  expandedIndex,
  onToggle,
  className = "",
  id,
}) {
  const totalItems = sections.reduce(
    (count, section) => count + section.items.length,
    0
  );

  return (
    <div className={`text-center ${className}`} id={id}>
      <h2 className="sm:text-4xl text-3xl font-bold text-[#37584F] gravesendSans pt-20">
        {title}
      </h2>
      {subtitle && (
        <p className="py-2 text-sm pb-8 inter text-[#475467]">{subtitle}</p>
      )}

      <div className="sm:w-[60vw] w-auto mx-auto inter mt-10 mb-10 text-left">
        {sections.map((section, sectionIndex) => {
          const sectionStartIndex = sections
            .slice(0, sectionIndex)
            .reduce((sum, s) => sum + s.items.length, 0);

          return (
            <div
              key={section.heading || `faq-section-${sectionIndex}`}
              className={section.heading ? "mb-10 last:mb-0" : ""}
            >
              {section.heading && (
                <h3 className="text-xl font-bold text-[#37584F] gravesendSans mb-4 text-center">
                  {section.heading}
                </h3>
              )}

              {section.items.map((item, itemIndex) => {
                const currentIndex = sectionStartIndex + itemIndex;
                const isLast = currentIndex === totalItems - 1;

                return (
                  <FaqAccordionItem
                    key={item.body[0]}
                    question={item.body[0]}
                    answer={item.body[1]}
                    isExpanded={expandedIndex === currentIndex}
                    onClick={() => onToggle(currentIndex)}
                    showDivider={!isLast}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
