"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function ImageGrid({ images }) {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    updateScreenSize(); // Set initial value
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full gap-4 pb-4 ">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full md:w-full rounded-3xl"
          style={screenSize >= 840 ? { width: image.width } : {}}
        >
          <Image
            key={index}
            src={`/assets/about/frames/${image.src}`}
            alt="About Image"
            width={300}
            height={300}
            className="h-[290px] md:h-[185px] xl:h-[280px] 2xl:h-[315px] w-full"
            priority
          />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
