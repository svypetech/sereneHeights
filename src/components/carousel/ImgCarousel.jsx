"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

export default function ImgCarousel() {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const [showAnims, setShowAnims] = useState(false);

  const [swipeable, setSwipeable] = useState(false);
  const [showArrows, setShowArrows] = useState(true);

  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const delayTimerRef = useRef(null);

  const DELAY_MS = 5000;

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth > 768);
      setSwipeable(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = 3;
  const nextIndex = useCallback((i) => (i + 1) % totalSlides, [totalSlides]);

  const clearDelayTimer = useCallback(() => {
    if (delayTimerRef.current) {
      clearTimeout(delayTimerRef.current);
      delayTimerRef.current = null;
    }
  }, []);

  const startDelayThenAdvance = useCallback(() => {
    setShowAnims(true);
    clearDelayTimer();
    delayTimerRef.current = window.setTimeout(() => {
      setShowAnims(false);
      setSelectedSlide((idx) => nextIndex(idx));
    }, DELAY_MS);
  }, [DELAY_MS, clearDelayTimer, nextIndex]);

  const freezeLastFrame = useCallback((video) => {
    try {
      const dur = video.duration;
      if (Number.isFinite(dur) && dur > 0) {
        video.currentTime = Math.max(0, dur - 0.05);
      }
    } catch {}
    video.pause();
  }, []);

  const stopAllVideos = useCallback(() => {
    for (const v of [video1Ref.current, video2Ref.current]) {
      if (!v) continue;
      try {
        v.pause();
        v.currentTime = 0;
      } catch {}
    }
  }, []);

  useEffect(() => {
    setShowAnims(false);
    clearDelayTimer();
    stopAllVideos();

    const v1 = video1Ref.current;
    const v2 = video2Ref.current;

    const onEnded1 = () => {
      if (selectedSlide !== 0) return;
      if (v1) freezeLastFrame(v1);
      startDelayThenAdvance();
    };
    const onEnded2 = () => {
      if (selectedSlide !== 2) return;
      if (v2) freezeLastFrame(v2);
      startDelayThenAdvance();
    };

    if (selectedSlide === 0) {
      if (v1) {
        v1.loop = false;
        v1.currentTime = 0;
        v1.play().catch(() => {
          startDelayThenAdvance();
        });
        v1.addEventListener("ended", onEnded1);
      }
    } else if (selectedSlide === 1) {
      startDelayThenAdvance();
    } else if (selectedSlide === 2) {
      if (v2) {
        v2.loop = false;
        v2.currentTime = 0;
        v2.play().catch(() => {
          startDelayThenAdvance();
        });
        v2.addEventListener("ended", onEnded2);
      }
    }

    return () => {
      v1?.removeEventListener("ended", onEnded1);
      v2?.removeEventListener("ended", onEnded2);
    };
  }, [selectedSlide]);

  const handleChange = (index) => {
    setSelectedSlide(index % totalSlides);
  };

  // Shared overlay wrapper
  const Overlay = useCallback(
    (props) => (
      <motion.div
        className="absolute text-white bg-gradient-to-tr from-[#000]/80 to-[#666]/10 text-left px-4 md:px-24 inset-0 w-full flex flex-col justify-center items-center md:items-start"
        initial={{ opacity: 0 }}
        animate={props.active && showAnims ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: props.fadeDelay ?? 1 }}
      >
        {props.children}
      </motion.div>
    ),
    [showAnims]
  );

  // Slide-specific motion blocks
  const Headings = useMemo(
    () => (
      <>
        <p className="pt-6 xs:pt-4 text-4xl lg:text-5xl xl:text-6xl font-bold gravesendSans">
          DISCOVER LUXURY <br /> EMBRACE NATURE
        </p>
        <p className="py-2 xs:py-4 text-2xl lg:text-3xl xl:text-4xl pb-10 font-regular font-helvetica">
          Serene Heights Nathia Gali <br /> Hotels & Resorts
        </p>
      </>
    ),
    []
  );

  return (
    <div className="fixed top-0 left-0 w-[100%] h-screen">
      <Carousel
        selectedItem={selectedSlide}
        onChange={handleChange}
        className="h-[100vh] w-full"
        showThumbs={false}
        infiniteLoop
        centerMode
        centerSlidePercentage={100}
        showStatus={false}
        showArrows={showArrows}
        swipeable={swipeable}
        autoPlay={false} // we control advancement ourselves
        // interval is ignored when autoPlay is false
      >
        {/* VIDEO #1 */}
        <div className="relative h-[100vh]" key={`video-0-${selectedSlide}`}>
          <video
            ref={video1Ref}
            className="h-full w-full object-cover"
            src="/assets/home/landingVideo.mp4"
            autoPlay
            preload="auto"
            muted
            playsInline
            // no loop; we handle ended -> 5s delay -> next
          />
          <Overlay active={selectedSlide === 0}>
            <div className="pt-20 px-0 lg:px-24 xl:px-32 w-full flex justify-center md:justify-between">
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={
                  selectedSlide === 0 && showAnims
                    ? { x: 0, opacity: 1 }
                    : { x: -500, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "linear", delay: 2.0 }}
              >
                {Headings}
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-around items-center">
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={
                  selectedSlide === 0 && showAnims
                    ? { x: 0, opacity: 1 }
                    : { x: -500, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "linear", delay: 2.0 }}
              >
                <img
                  className="h-28 md:h-40"
                  src="/assets/carousel/dm.png"
                  alt="DM brand mark"
                />
              </motion.div>

              <motion.div
                initial={{ x: 500, opacity: 0 }}
                animate={
                  selectedSlide === 0 && showAnims
                    ? { x: 0, opacity: 1 }
                    : { x: 500, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "linear", delay: 2.8 }}
                className="bg-[#63636380]/50 p-4 border-s-4 backdrop-blur-sm border-[#E8FF61] rounded-md font-helvetica font-medium"
              >
                <ul className="text-left">
                  <li>
                    • Monthly Rental Income After <br />
                    <span className="pl-3">Operations</span>
                  </li>
                  <li>• Free 28 Nights Stay Annually</li>
                </ul>
              </motion.div>
            </div>
          </Overlay>
        </div>

        {/* IMAGE SLIDE */}
        <div className="relative h-[100vh]" key={`image-1-${selectedSlide}`}>
          <img
            className="h-full w-full object-cover"
            src="/assets/carousel/carouselImg1.png"
            alt="Resort exterior with mountain landscape"
          />

          <Overlay active={selectedSlide === 1}>
            <div className="pt-20 px-0 lg:px-24 xl:px-32 w-full flex justify-center md:justify-between">
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={
                  selectedSlide === 1 && showAnims
                    ? { x: 0, opacity: 1 }
                    : { x: -500, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "linear", delay: 1.0 }}
              >
                {Headings}
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-around items-center">
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={
                  selectedSlide === 1 && showAnims
                    ? { x: 0, opacity: 1 }
                    : { x: -500, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "linear", delay: 1.0 }}
              >
                <img
                  className="h-28 md:h-40"
                  src="/assets/carousel/dm.png"
                  alt="DM brand mark"
                />
              </motion.div>

              <motion.div
                initial={{ x: 500, opacity: 0 }}
                animate={
                  selectedSlide === 1 && showAnims
                    ? { x: 0, opacity: 1 }
                    : { x: 500, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "linear", delay: 2.0 }}
                className="bg-[#63636380]/50 p-4 border-s-4 backdrop-blur-sm border-[#E8FF61] rounded-md font-helvetica font-medium"
              >
                <ul className="text-left">
                  <li>
                    • Monthly Rental Income After <br />
                    <span className="pl-3">Operations</span>
                  </li>
                  <li>• Free 28 Nights Stay Annually</li>
                </ul>
              </motion.div>
            </div>
          </Overlay>
        </div>

        {/* VIDEO #2 */}
        <div className="relative h-[100vh]" key={`video-2-${selectedSlide}`}>
          <video
            ref={video2Ref}
            className="h-full w-full object-cover"
            src="/assets/home/landingVideo2.mp4"
            autoPlay
            preload="auto"
            muted
            playsInline
          />
          <Overlay active={selectedSlide === 2}>
            <div className="pt-20 px-0 lg:px-24 xl:px-32 w-full flex justify-center md:justify-between">
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={
                  selectedSlide === 2 && showAnims
                    ? { x: 0, opacity: 1 }
                    : { x: -500, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "linear", delay: 2.0 }}
              >
                {Headings}
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-around items-center">
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={
                  selectedSlide === 2 && showAnims
                    ? { x: 0, opacity: 1 }
                    : { x: -500, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "linear", delay: 2.0 }}
              >
                <img
                  className="h-28 md:h-40"
                  src="/assets/carousel/dm.png"
                  alt="DM brand mark"
                />
              </motion.div>

              <motion.div
                initial={{ x: 500, opacity: 0 }}
                animate={
                  selectedSlide === 2 && showAnims
                    ? { x: 0, opacity: 1 }
                    : { x: 500, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "linear", delay: 2.8 }}
                className="bg-[#63636380]/50 p-4 border-s-4 backdrop-blur-sm border-[#E8FF61] rounded-md font-helvetica font-medium"
              >
                <ul className="text-left">
                  <li>
                    • Monthly Rental Income After <br />
                    <span className="pl-3">Operations</span>
                  </li>
                  <li>• Free 28 Nights Stay Annually</li>
                </ul>
              </motion.div>
            </div>
          </Overlay>
        </div>
      </Carousel>
    </div>
  );
}
