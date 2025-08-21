"use client";
import { Icon } from "@iconify-icon/react";
import React, { useEffect, useState, useRef } from "react";

const HowItWorks = () => {
  const data = [
    {
      label: "STEP 1",
      title: "Fill booking form",
      description:
        "Apply easily with just a few personal and financial details.",
      icon: "mingcute:document-2-line",
    },
    {
      label: "STEP 2",
      title: "CHOOSE PAYMENT PLAN",
      description:
        "Affordable down payment & easy monthly installments.",
      icon: "solar:wallet-money-linear",
    },
    {
      label: "STEP 3",
      title: "CONFIRM OWNERSHIP",
      description:
        "Once payments are complete, your Smart Property Share in Serene Heights is secured.",
      icon: "emojione-monotone:handshake",
    },
    {
      label: "STEP 4",
      title: "MANAGED BY EXPERTS",
      description:
        "DM Consortium takes care of rentals, maintenance & returns.",
      icon: "bitcoin-icons:verify-outline",
    },
    {
      label: "STEP 5",
      title: "TRANSFERABLE SHARES",
      description:
        "Sell or transfer your ownership anytime",
      icon: "humbleicons:coins",
    },
  ];

  const formattedData = data.map((item) => ({
    ...item,
    id: item.label.toLowerCase().replace(/[, ]+/g, "-"),
  }));

  const [activeId, setActiveId] = useState(formattedData[0].id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visitedIndices, setVisitedIndices] = useState(new Set([0]));
  const [lineProgresses, setLineProgresses] = useState({});
  const sectionsRef = useRef([]);
  const lineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = null;
        let visibleIndex = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
            visibleIndex = formattedData.findIndex(
              (item) => item.id === entry.target.id
            );
          }
        });

        if (visibleSection && visibleSection !== activeId) {
          setActiveId(visibleSection);
          setActiveIndex(visibleIndex);

          setVisitedIndices(
            new Set(Array.from({ length: visibleIndex + 1 }, (_, i) => i))
          );
        }
      },
      { threshold: 0.5, rootMargin: "-50px 0px -30% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [activeId]);

  useEffect(() => {
    const calculateLineProgress = () => {
      const newProgresses = {};

      sectionsRef.current.forEach((section, index) => {
        if (section && index < formattedData.length - 1) {
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const sectionTop = rect.top;
          const sectionHeight = rect.height;

          let progress = 0;

          if (sectionTop <= windowHeight * 0.5) {
            progress = Math.min(
              100,
              Math.max(
                0,
                ((windowHeight * 0.5 - sectionTop) / (sectionHeight * 0.8)) *
                  100
              )
            );
          }

          newProgresses[index] = progress;
        }
      });

      setLineProgresses(newProgresses);
    };

    const handleScroll = () => {
      calculateLineProgress();

      if (window.scrollY === 0) {
        setActiveIndex(0);
      }
    };

    calculateLineProgress();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isIconActive = (index) => {
    if (index === 0) {
      return index <= activeIndex;
    }

    const ownLineProgress = lineProgresses[index] || 0;

    if (index === formattedData.length - 1) {
      return index <= activeIndex;
    }

    return index <= activeIndex && ownLineProgress > 0;
  };

  return (
    <div className="px-8 " id="how-it-works">
      <h1 className="uppercase font-semibold text-[#37584F] pb-12 text-center sm:text-5xl text-3xl gravesendSans">
        How It Works
      </h1>
      <div className="my-5">
        {formattedData.map((item, index) => (
          <div
            className="flex gap-4"
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            id={item.id}
          >
            {/* Side Indicator */}
            <div className="flex flex-col items-center">
              <div
                className={`rounded-full border-2 h-12 flex justify-center items-center w-12 transition-all duration-500 ease-in-out ${
                  isIconActive(index)
                    ? "border-[#37584F] bg-[#1654430D]/5"
                    : "border-[#D3D3D3] bg-white"
                }`}
              >
                <Icon
                  className={`transition-all duration-500 ease-in-out ${
                    isIconActive(index) ? "text-[#37584F]" : "text-[#D3D3D3]"
                  }`}
                  icon={item.icon}
                  width="24"
                  height="24"
                />
              </div>

              {/* Only show line if not the last item */}
              {index < formattedData.length - 1 && (
                <div
                  ref={(el) => (lineRefs.current[index] = el)}
                  className="relative w-[2px] overflow-hidden mt-1 mb-1"
                  style={{ height: "132px" }}
                >
                  {/* Background line (gray) */}
                  <div className="absolute inset-0 bg-[#D3D3D3]"></div>
                  {/* Progressive green line */}
                  <div
                    className="absolute top-0 left-0 w-full bg-[#37584F] transition-all duration-300 ease-out"
                    style={{
                      height: `${lineProgresses[index] || 0}%`,
                    }}
                  ></div>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="w-full sm:pb-20">
              <h3
                className={`${
                  isIconActive(index) ? "text-[#37584F]" : "text-[#222222] opacity-70"
                } font-bold sm:text-4xl text-xl gravesendSans mt-2 transition-colors duration-500 ease-in-out`}
              >
                {item.title}
              </h3>

              <p
                className="text-[#222222] sm:text-lg text-sm mt-4 leading-relaxed transition-colors duration-500 ease-in-out"
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
