"use client";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ConIcon from "../conIcon/ConIcon";

function ImgCarousel() {
  const [autoPlay, setAutoPlay] = useState(true);
  const [swipeable, setSwipeable] = useState(false);
  const [showArrows, setShowArrows] = useState(true);

   useEffect(() => {
     const handleResize = () => {
       setShowArrows(window.innerWidth > 768);
       setSwipeable(window.innerWidth > 768); 
     };

     handleResize(); 
     window.addEventListener("resize", handleResize);

     return () => window.removeEventListener("resize", handleResize);
   }, []);


  return (
    <div className="fixed top-0 left-0 w-[100%] h-screen">
      <Carousel
        autoPlay={autoPlay}
        className="h-[95vh] w-full"
        showThumbs={false}
        infiniteLoop
        centerMode
        centerSlidePercentage={100}
        interval={4000} // Adjust the autoplay speed
        showStatus={false}
        showArrows={showArrows}
        swipeable={swipeable}
      >
        <div className="relative h-[95vh] ">
          <img
            className="h-full w-full"
            src="/assets/carousel/carouselImg1.png"
            alt="image"
          />
          <div className="absolute text-white bg-gradient-to-tr from-[#000]/80 to-[#666]/10 text-left px-4 md:px-24 inset-0 w-full flex flex-col justify-center items-center md:items-start">
            <div className=" pt-20 px-0 lg:px-24 xl:px-32 w-full flex justify-center md:justify-between">
              <div>
                <p className="pt-6 xs:pt-4 text-2xl xs:text-4xl lg:text-5xl xl:text-6xl font-bold gravesendSans">
                  DISCOVER LUXURY <br /> EMBRACE NATURE
                </p>
                <p className="py-2 xs:py-4 text-xl xs:text-2xl lg:text-3xl xl:text-4xl pb-10 gravesendSans">
                  Serene Heights Nathia Gali <br /> Hotels & Resorts
                </p>
              </div>
              <div className=" hidden md:block">
                <ConIcon
                  bgColor={"bg-black/40 hover:bg-white/60"}
                  direction={"column"}
                  padding={"p-4"}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-around items-center">
              <div>
                <img
                  className="h-28 md:h-40 w"
                  src="/assets/carousel/dm.png"
                  alt="dm-logo"
                />
              </div>

              <div className="bg-[#63636380]/50 p-4 border-s-2 backdrop-blur-sm border-[#E8FF61] rounded-md inter">
                <ul className="text-left">
                  <li>
                    • Monthly Rental Income After <br />{" "}
                    <span className="pl-3">Operations</span>
                  </li>
                  <li>• Free 28 Nights Stay Annually</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Video Slide 1*/}
        <div className="relative h-[95vh]">
          <video
            className="h-full w-full object-cover"
            src="/assets/carousel/landingVideo.mp4"
            autoPlay
            muted
            loop
            onMouseEnter={() => setAutoPlay(false)} // Stop autoplay when hovering over the video
            onMouseLeave={() => setAutoPlay(true)} // Resume autoplay when leaving the video
          />
        </div>

        {/* Image Slide 2 */}
        {/* <div className="relative h-[95vh] ">
          <img
            className="h-full w-full "
            src="/assets/carousel/carouselImg2.png"
            alt="image"
          />
          <div className="absolute bg-gradient-to-tr from-[#000]/80 to-[#666]/10 text-white text-left px-4 md:px-24 inset-0 w-full flex flex-col justify-center items-center md:items-start">
            <div className="pt-20 w-full px-0 lg:px-24 xl:px-32 flex justify-center md:justify-between">
              <div>
                <p className="py-4 text-2xl xs:text-4xl lg:text-5xl xl:text-6xl font-extrabold gravesendSans">
                  Tower[A] is Now <br /> Officially A
                </p>
                <p className="text-4xl xs:text-6xl lg:text-7xl xl:text-8xl text-[#E8FF61] greatVibes pb-10">
                  Sold-out sucess
                </p>
              </div>
              <div className=" hidden md:block">
                <ConIcon
                  bgColor={"bg-black/40 hover:bg-white/60"}
                  direction={"column"}
                  padding={"p-4"}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-around items-center">
              <div>
                <img
                  className="h-40 w"
                  src="/assets/carousel/dm.png"
                  alt="dm-logo"
                />
              </div>

              <div className="bg-[#63636380]/50 p-4 border-s-2 backdrop-blur-sm border-[#E8FF61] rounded-md  inter">
                <ul className="text-left ">
                  <li>
                    • Monthly Rental Income After <br />{" "}
                    <span className="pl-3">Operations</span>
                  </li>
                  <li>• Free 28 Nights Stay Annually</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}

        {/* Image Slide 3 */}

        <div className="relative h-[95vh]">
          <video
            className="h-full w-full object-cover"
            src="/assets/carousel/landingVideo2.mp4"
            autoPlay
            muted
            loop
            onMouseEnter={() => setAutoPlay(false)} // Stop autoplay when hovering over the video
            onMouseLeave={() => setAutoPlay(true)} // Resume autoplay when leaving the video
          />
        </div>

        {/* Image Slide 4 */}
        {/* <div className="relative h-[95vh] ">
          <img
            className="h-full w-full"
            src="/assets/carousel/carouselImg3.png"
            alt="image"
          />
          <div className="absolute bg-gradient-to-tr from-[#000]/80 to-[#666]/10 text-white text-left px-4 md:px-24 inset-0 w-full flex flex-col justify-center items-center md:items-start">
            <div className="pt-20 px-0 lg:px-24 xl:px-32 w-full flex justify-center md:justify-between">
              <div>
                <p className="pt-6 xs:pt-4 pb-0 xs:pb-2 text-2xl xs:text-4xl lg:text-5xl xl:text-6xl font-bold gravesendSans">
                  GREY STRUCTURE
                </p>
                <p className="pb-4 text-[#E8FF61] text-2xl xs:text-4xl lg:text-5xl xl:text-6xl font-bold gravesendSans">
                  90% COMPLETED
                </p>
                <p className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl pb-10 helveticaNeue">
                  Project Delivery Less than{" "}
                  <span className="text-[#E8FF61]">12 Months!</span>
                </p>
              </div>
              <div className=" hidden md:block">
                <ConIcon
                  bgColor={"bg-black/40 hover:bg-white/60"}
                  direction={"column"}
                  padding={"p-4"}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-around items-center">
              <div>
                <img
                  className="h-40 w"
                  src="/assets/carousel/dm.png"
                  alt="dm-logo"
                />
              </div>

              <div className="bg-[#63636380]/50 p-4 border-s-2 backdrop-blur-sm border-[#E8FF61] rounded-md inter">
                <ul className="text-left">
                  <li>
                    • Monthly Rental Income After <br />
                    <span className="pl-3">Operations</span>
                  </li>
                  <li>• Free 28 Nights Stay Annually</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
