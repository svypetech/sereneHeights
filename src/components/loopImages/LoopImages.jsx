// 'use client'
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react'

//  const frames = [
//    ["frame1.png", "frame2.png", "frame3.png", "frame4.png"],
//    ["frame5.png", "frame6.png", "frame7.png", "frame8.png"],
//    ["frame9.png", "frame10.png", "frame11.png", "frame12.png"],
//    ["frame13.png", "frame14.png", "frame15.png", "frame16.png"],
//  ];

//  const useIsXsScreen = () => {
//    const [isXs, setIsXs] = useState(false);

//    useEffect(() => {
//      const checkScreenSize = () => {
//        setIsXs(window.innerWidth < 640); // Tailwind's `xs` breakpoint is typically < 640px
//      };

//      checkScreenSize(); // Run once on mount
//      window.addEventListener("resize", checkScreenSize);

//      return () => {
//        window.removeEventListener("resize", checkScreenSize);
//      };
//    }, []);

//    return isXs;
//  };

//  const LoopingRow = ({ images, animation }) => (
//    <div className="flex w-screen overflow-hidden whitespace-nowrap group  before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:from-[#FEFEFB]/20 before:to-transparent before:z-10 before:w-[50px] before:h-full after:absolute after:top-0 after:right-0 after:w-[50px] after:h-full after:z-30 after:bg-gradient-to-l after:from-[#FEFEFB]/20 after:to-transparent ">
//      {[...Array(2)].map((_, index) => (
//        <div
//          key={index}
//          //  className={`loop-row flex flex-col xs:flex-row flex-shrink-0 w-full group-hover:paused ${animation}`}
//          className={`loop-row flex flex-col xs:flex-row flex-shrink-0 w-full group-hover:paused ${
//            isXs ? "" : animation // Remove animation if `isXs` is true
//          }`}
//        >
//          {images.map((src, i) => (
//            <Image
//              key={i}
//              width={200}
//              height={50}
//              className="h-[150px] 2xl:h-[200px] w-full "
//              src={`/assets/home/desireFrames/${src}`}
//              alt="img"
//              priority
//            />
//          ))}
//        </div>
//      ))}
//    </div>
//  );

// function LoopImages() {
//   return (
//     <div className="relative before:w-[450px] ">
//       {frames.map((frameSet, index) => (
//         <LoopingRow
//           key={index}
//           images={frameSet}
//           animation={
//             index % 2 === 0
//               ? "animate-left-loop-scroll "
//               : "animate-right-loop-scroll "
//           }
//         />
//       ))}
//     </div>
//   );
// }

// export default LoopImages
'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

const frames = [
  ["frame1.png", "frame2.png", "frame3.png", "frame4.png"],
  ["frame5.png", "frame6.png", "frame7.png", "frame8.png"],
  ["frame9.png", "frame10.png", "frame11.png", "frame12.png"],
  ["frame13.png", "frame14.png", "frame15.png", "frame16.png"],
];

const useIsXsScreen = () => {
  const [isXs, setIsXs] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXs(window.innerWidth < 636); 
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return isXs;
};

const LoopingRow = ({ images, animation }) => {
  const isXs = useIsXsScreen();

  return (
    <div
      className={`flex w-screen overflow-hidden  ${
        isXs
          ? ""
          : "whitespace-nowrap group before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:from-[#FEFEFB]/20 before:to-transparent before:z-10 before:w-[50px] before:h-full after:absolute after:top-0 after:right-0 after:w-[50px] after:h-full after:z-30 after:bg-gradient-to-l after:from-[#FEFEFB]/20 after:to-transparent "
      } `}
    >
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className={`loop-row flex flex-col sm:flex-row  flex-shrink-0 w-full group-hover:paused ${
            isXs ? "" : `${animation}`
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-4 w-full">
            {images.map((src, i) => (
              <Image
                key={i}
                width={200}
                height={50}
                className="h-[260px] sm:h-[180px] md:h-[150px] 2xl:h-[260px] w-full px-2 sm:px-0 p-1 sm:p-0 rounded-2xl sm:rounded-none"
                src={`/assets/home/desireFrames/${src}`}
                alt="img"
                priority
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

function LoopImages() {
  return (
    <div className="relative before:w-[450px]">
      {frames.map((frameSet, index) => (
        <LoopingRow
          key={index}
          images={frameSet}
          animation={
            index % 2 === 0
              ? "animate-left-loop-scroll"
              : "animate-left-loop-scroll"
          }
        />
      ))}
    </div>
  );
}

export default LoopImages;
