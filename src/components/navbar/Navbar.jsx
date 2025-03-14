"use client";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { elements } from "../../utils/constants/navElements";
import { usePathname, useRouter } from "next/navigation";
import ResponsiveNavbar from "../responsiveNavbar/ResponsiveNavbar";

function Navbar() {
  const [show, setShow] = useState(false);
  const [activeElement, setActiveElement] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const [imgColor, setImgColor] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const router = useRouter();

  console.log("Active element", activeElement);
  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textColor =
    scrolling || pathname !== "/"
      ? "text-[#37584F]"
      : "text-white hover:!text-[#37584F]";
  const logo =
    scrolling || pathname !== "/" || imgColor == true ? "logoGreen" : "logo";

  // Mouse events to track hover state for the dropdown menu
  const handleMouseEnter = (key) => {
    setActiveElement(key);
  };

  const handleMouseLeave = () => {
    if (
      !dropdownRef.current ||
      !dropdownRef.current.contains(event.relatedTarget)
    ) {
      setActiveElement(null);
    }
  };

  // const handleScrollToSection = (section, elementId, elementKey) => {
  //   setActiveElement(elementKey);
  //   setShow(false);
  //   const newPath = `/${section}#${elementId}`;
  //   const offset = 90;

  //   if (pathname === `/${section}`) {
  //     setTimeout(() => {
  //       const element = document.getElementById(elementId);
  //       if (element) {
  //         const elementPosition =
  //           element.getBoundingClientRect().top + window.scrollY;
  //         window.scrollTo({
  //           top: elementPosition - offset,
  //           behavior: "smooth",
  //         });
  //       }
  //     }, 100);
  //   } else {
  //     router.push(`/${section}`).then(() => {
  //       setTimeout(() => {
  //         window.location.hash = elementId; // Set hash in URL
  //         const element = document.getElementById(elementId);
  //         if (element) {
  //           const elementPosition =
  //             element.getBoundingClientRect().top + window.scrollY;
  //           window.scrollTo({
  //             top: elementPosition - offset,
  //             behavior: "smooth",
  //           });
  //         }
  //       }, 500);
  //     });
  //   }
  // };

  const handleScrollToSection = (section, elementId, elementKey) => {
    setActiveElement(elementKey);
    setShow(false);

    const offset = 90;

    if (pathname === `/${section}`) {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      router.push(`/${section}`);
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 500);
    }
  };

  useEffect(() => {
    const currentPath = window.location.hash || window.location.pathname;
    const currentElement = elements.find(
      (el) =>
        currentPath.includes(`#${el.id}`) || currentPath.includes(`/${el.id}`)
    );

    if (currentPath === "/") {
      setActiveElement(null);
    } else if (currentElement) {
      setActiveElement(currentElement.key);
    }
  }, [router]);

  return (
    <>
      {show == true ? (
        <ResponsiveNavbar setShow={() => setShow()} />
      ) : (
        <nav
          className={`bg-black ${
            scrolling
              ? "bg-white/90 !text-[#37584F] backdrop-blur-sm drop-shadow-xl "
              : `bg-transparent hover:!bg-white/90 ${textColor} hover:${() =>
                  setImgColor(true)} hover:backdrop-blur-sm`
          } sticky top-0 start-0 z-30 w-full inter `}
          onMouseEnter={() => setImgColor(true)}
          onMouseLeave={() => setImgColor(false)}
        >
          <div className="  bg-red-60 w-screen-2xl flex gap-4 rtl:space-x-reverse  flex-nowrap justify-around px-0 lg:px-1 xl:px-14">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={`/assets/logo/${logo}.png`}
                className="h-28 my-0 sm:my-5"
                alt="serene heights"
              />
            </Link>
            <div className="flex items-center gap-1 ">
              <button
                // data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-fle h-10 w-10 items-center justify-center rounded-lg p-2 text-sm md:hidden"
                // aria-controls="navbar-sticky"
                // aria-expanded={show}
                onClick={() => setShow(!show)}
              >
                {/* <span className="sr-only">Open main menu</span> */}
                <Icon
                  icon="hugeicons:menu-03"
                  className={`text-2xl ${textColor}`}
                />
              </button>
            </div>
            {/* {show == true &&
        <ResponsiveNavbar setShow={()=>setShow()}/> 
        } */}
            <div
              className={`w-full items-center justify-between  order-2 lg:order-1 m bg-yellow md:flex md:w-auto ${
                show ? "" : "hidden"
              }`}
              id="navbar-sticky"
            >
              <ul className="relative mt-4 flex  h-full flex-col md:flex-row rounded-lg font-medium md:mt-0 space-x-0 lg:space-x-10 md:space-x-6 rtl:space-x-reverse">
                {elements.map((element) => (
                  <li
                    key={element.key}
                    className="relative group h-full cursor-pointer flex items-center"
                    onMouseEnter={() => handleMouseEnter(element.key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={`/${element.id}`}
                      onClick={() =>
                        handleScrollToSection(element.id, element.key)
                      }
                    >
                      <button
                        className={`w-full cursor-pointer hover:underline-offset-[6px] hover:underline md:bg-transparent rounded px-5 py-2 text-left transition-transform duration-300 transform ${
                          activeElement === element.key
                            ? "scale-110 "
                            : "scale-100"
                        }  md:p-0 `}
                      >
                        {element.name}
                      </button>
                    </Link>
                    {/* Dropdown Menu */}
                    {element.submenu && activeElement === element.key && (
                      <div
                        className="absolute border-t border-[#37584F] top-full  w-ful bg-white/90 backdrop-blur-sm text-white drop-shadow-xl"
                        ref={dropdownRef}
                        onMouseEnter={() => setActiveElement(activeElement)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="mx-aut max-w-screen-2 flex justify-center gap-8 px-8 py-">
                          {element.submenu.map((section, index) => (
                            // elements
                            //   .find((el) => el.key === activeElement)
                            //   ?.submenu.map((section, index) => (
                            // elements.map(
                            //   (elem) =>
                            //   console.log(elem.id, "checking the elements")
                            // ),
                            <div
                              key={index}
                              className={`w-fu flex flex-col py-8 ${
                                index === 1
                                  ? "border-l border-[#37584F] pl-8 "
                                  : ""
                              } `}
                            >
                              {/* Section Title */}
                              <div className="text-lg font-bold text-[#c1c0c0]">
                                {section.sectionTitle}
                              </div>
                              {/* Submenu Items */}
                              <div className={`flex flex-col text-[#37584F]`}>
                                {section.items.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={`/${subItem.section}#${subItem.id}`}
                                    onClick={() =>
                                      handleScrollToSection(
                                        subItem.section,
                                        subItem.id
                                      )
                                    }
                                    className={`block py-2 hover:underline hover:underline-offset-[6px] hover:text-lg md:bg-transparent w-[150px]`}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`pl-0  md:flex order-1 lg:order-2 items-center gap-1 md:gap-4 ${
                show ? "" : "hidden"
              }`}
            >
              <Link href="/contact-us#location">
                <Icon
                  icon="fluent:location-20-regular"
                  width="30"
                  height="30"
                  // className={`${textColor}`}
                />
              </Link>
              {/* <Icon
                icon="iconamoon:search-thin"
                width="24"
                height="24"
                // className={`${textColor}`}
              /> */}
              <Link
                href="/contact-us#contact-us"
                className="text-decoration-none   "
              >
                <button className="hidden items-center gap-2 rounded-lg bg-[#37584F] hover:bg-transparent hover:border hover:border-[#37584F] px-5 md:px-12 py-4 text-sm text-white hover:text-[#37584F] hover:shadow-none shadow-lg sm:flex">
                  Enquire
                </button>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
