"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const text1 = "A HAVEN IN THE";
const text2 = "HIGHLANDS";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const typingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const images = [
  {
    src: "frame1.png",
    width: 200,
    height: 50,
    delay: 0.1,
    xsWidth: "44%",
    textNum: "150+",
    textLetters: "Apartments",
  },
  {
    src: "frame2.png",
    width: 150,
    height: 150,
    delay: 0.15,
    xsWidth: "28%",
    textNum: "3",
    textLetters: "Towers",
  },
  {
    src: "frame3.png",
    width: 150,
    height: 150,
    delay: 0.2,
    xsWidth: "28%",
    textNum: "24/7",
    textLetters: "Power Backup",
  },
  {
    src: "frame4.png",
    width: 480,
    height: 550,
    delay: 0.25,
    xsWidth: "55%",
    large: true,
    textNum: "SERENE HEIGHTS",
    text2: "",
    text3: "HOTEL & RESORTS",
  },
  {
    src: "frame5.png",
    width: 480,
    height: 150,
    delay: 0.3,
    textNum: "50+",
    textLetters: "World Class Amenities",
  },
  {
    src: "frame6.png",
    width: 480,
    height: 150,
    delay: 0.35,
    textNum: "7906 FT",
    textLetters: "Location Altitude",
  },
  {
    src: "frame7.png",
    width: 200,
    height: 150,
    delay: 0.4,
    xsWidth: "44%",
    textNum: "1ST",
    textLetters: "Winter Resort of Pakistan",
  },
  {
    src: "frame8.png",
    width: 200,
    height: 150,
    delay: 0.45,
    xsWidth: "28%",
    textNum: "30 +",
    textLetters: "Area in Kanals",
  },
  {
    src: "frame9.png",
    width: 200,
    height: 150,
    delay: 0.5,
    xsWidth: "28%",
    textNum: "15+",
    textLetters: "Resort Activities",
  },
  {
    src: "frame10.png",
    width: 150,
    height: 350,
    delay: 0.55,
    large: true,
    textNum: "1,2,3",
    textLetters: "Bed Fully Furnished Hotel Appartment",
  },
  {
    src: "frame11.png",
    width: 150,
    height: 150,
    delay: 0.6,
    textNum: "36",
    textLetters: "Monthly Installments",
  },
  {
    src: "frame12.png",
    width: 150,
    height: 150,
    delay: 0.65,
    textNum: "24/7",
    textLetters: "Concierge Service",
  },
];

const MotionImage = ({
  src,
  width,
  height,
  textNum,
  textLetters,
  delay,
  xsWidth,
  large,
}) => {
  // Define uniform height scaling for large images
  const defaultHeight = large ? "h-[470px]" : "h-[230px]";
  const xlHeight = large ? "2xl:h-[709px]" : "2xl:h-[350px]";

  return (
    <motion.div
      className={`relative w-full group ${
        xsWidth ? `xs:w-[${xsWidth}]` : ""
      } overflow-hidden ${
        ["frame5.png", "frame11.png"].includes(src) ? "mb-3" : ""
      }`}
    >
      <Image
        width={width}
        height={height}
        className={`${defaultHeight} ${xlHeight} rounded-3xl min-h-[150px] max-h-[710px] w-full transition-transform duration-100 ease-in-out`}
        src={`/assets/home/frames/${src}`}
        alt="img"
        priority
      />
      {src === "frame4.png" ? (
        <Image
          src="/assets/logo/logo.png" // Replace with the actual path of the new image
          alt="Alternative Image"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      ) : (
        <div className="absolute top-0 flex flex-col justify-center items-center text-center w-full h-full text-white px-44 md:px-6 lg:px-16 xl:px-24">
          <p className="cinzel text-3xl  xl:text-5xl 2xl:text-7xl font-medium">
            {textNum}
          </p>
          <p className="helveticaN text-2xl sm:text-lg xl:text-3xl 2xl:text-3xl popping">
            {textLetters}
          </p>
        </div>
      )}
      {/* <div className="absolute top-0 flex flex-col justify-center items-center text-center w-full h-full text-white px-24">
        <p className='cinzel text-7xl font-medium '>{textNum}</p>
        <p className="helveticaNeue text-3xl popping ">{textLetters}</p>{" "}
      </div> */}
      <div className="absolute top-0 left-0 rounded-3xl cursor-point w-full h-full bg-[#37584F]/50 transition-opacity duration-300 opacity-100 group-hover:opacity-0"></div>
    </motion.div>
  );
};

function ImageGrid() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const [textPosition, setTextPosition] = useState(0);
  const [scale, setScale] = useState(2);
  const [isXsScreen, setIsXsScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsXsScreen(window.innerWidth < 640); // Tailwind's 'xs' is usually <640px
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (isXsScreen) {
      setScale(1); // Disable zoom on xs screens
      return;
    }

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility percentage
      const visiblePercentage = Math.max(
        0,
        Math.min(2, (windowHeight - rect.top) / windowHeight)
      );
      setScale(1.2 - visiblePercentage * 0.3);

      // Apply scale based on visibility
      // controls.start({ scale: 1.4 - visiblePercentage * 0.4 });

      // const scrollProgress = Math.min(
      //   Math.max(0, window.innerHeight - rect.top),
      //   window.innerHeight
      // );
      // setTextPosition(scrollProgress / 1.75);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // cancelAnimationFrame(requestRef.current);
  }, [isXsScreen]);

  return (
    <div className="relative ">
      <div className="block xs:hidden text-[#37584F] text-center text-3xl font-bold gravesendSans">
        <p> A HAVEN IN THE</p>
        <p> HIGHLANDS</p>
      </div>

      <div
        ref={ref}
        className="pb-32 hidden xs:flex absolut  top- z-10 rounded-2xl text-white text-6xl text-center font-bold flex-col justify-center h-full w-full pointer-events-none"
        // className="absolute xs:hidden top-0 z-10 rounded-2xl text-white  text-4xl sm:text-6xl text-center font-bold flex flex-col h-full w-full  pointer-events-none"
      >
        <motion.div
          variants={typingVariants}
          // ref={ref}
          // initial="hidden"
          style={{ transform: `translateY(${textPosition}px)` }}
          animate={isInView ? "visible" : "hidden"}
          exit="exit"
          className="inline-block text-[#37584F]"
        >
          {/* First Line */}
          <motion.div className="block ">
            {text1.split("").map((char, index) => (
              <motion.span
                className="stroke-text gravesendSans"
                style={{}}
                key={index}
                custom={index}
                variants={letterVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Second Line */}
          <motion.div className="block gravesendSans">
            {text2.split("").map((char, index) => (
              <motion.span key={index} custom={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        initial={{ scale: 1.5 }}
        // animate={controls}
        style={{ scale }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        className=" w-full flex items-center justify-center "
      >
        <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-3 p-2">
          <div className="w-full sm:w-[80%]">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              {images.slice(0, 3).map((img, idx) => (
                <MotionImage key={idx} {...img} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full py-3">
              <MotionImage {...images[3]} />
              <div className="w-full ">
                {images.slice(4, 6).map((img, idx) => (
                  <MotionImage key={idx} {...img} />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              {images.slice(6, 9).map((img, idx) => (
                <MotionImage key={idx} {...img} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full sm:w-[30%] md:w-[28%] lg:w-[22%] ">
            <div className="col-span-2   ">
              <MotionImage {...images[9]} />
            </div>

            <div className="col-span-2  ">
              {images.slice(10, 12).map((img, idx) => (
                <MotionImage key={idx} {...img} />
              ))}
            </div>
          </div>

          {/* <div className="absolute rounded-2xl text-white text-4xl sm:text-6xl text-center font-bold flex flex-col justify-center items-center h-full w-full bg-[#37584F]/40 pointer-events-none">
          A HAVEN IN THE<span>HIGHLANDS</span>
        </div> */}
        </div>
      </motion.div>
    </div>
  );
}

export default ImageGrid;
