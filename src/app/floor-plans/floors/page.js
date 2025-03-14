// import Image from "next/image";
// import React from "react";

// const data = [
//   { label: "ground-floor", image: "/assets/floorPlan/ground.png" },
//   { label: "1st-floor", image: "/assets/floorPlan/1st.png" },
//   { label: "2nd-floor", image: "/assets/floorPlan/2nd.png" },
//   { label: "3rd-floor", image: "/assets/floorPlan/3rd.png" },
//   { label: "5th-floor", image: "/assets/floorPlan/5th.png" },
//   { label: "6th-floor", image: "/assets/floorPlan/6th.png" },
//   { label: "7th-floor", image: "/assets/floorPlan/7th.png" },
//   { label: "8th-floor", image: "/assets/floorPlan/8th.png" },
// ];

// function page() {
//   return (
//     <div>
//       <div className="text-[#37584F] text-center py-10">
//         <p className="text-5xl font-bold gravesendSans">FLOOR PLANS</p>
//         <div className=" mt-10">
//           {data.map((item) => (
//             <div
//               id={item.label}
//               key={item.label}
//               className="flex flex-col items-center px-8 md:px-20"
//             >
//               <div style={{ height: 250 }}></div>
//               <Image
//                 src={item.image}
//                 alt={item.label}
//                 width={800}
//                 height={700}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page;

// import Image from "next/image";
// import React from "react";

// const data = [
//   { label: "ground-floor", image: "/assets/floorPlan/ground.png" },
//   { label: "1st-floor", image: "/assets/floorPlan/1st.png" },
//   { label: "2nd-floor", image: "/assets/floorPlan/2nd.png" },
//   { label: "3rd-floor", image: "/assets/floorPlan/3rd.png" },
//   { label: "5th-floor", image: "/assets/floorPlan/5th.png" },
//   { label: "6th-floor", image: "/assets/floorPlan/6th.png" },
//   { label: "7th-floor", image: "/assets/floorPlan/7th.png" },
//   { label: "8th-floor", image: "/assets/floorPlan/8th.png" },
// ];

// function Page() {
//   return (
//     <div>
//       <div className="text-[#37584F] text-center py-10">
//         <p className="text-5xl font-bold gravesendSans">FLOOR PLANS</p>
//         <div className="mt-10">
//           {data.map((item) => (
//             <div
//               id={item.label}
//               key={item.label}
//               className="flex flex-col items-center px-8 md:px-20"
//             >
//               <div style={{ height: 250 }}></div>

//               {/* Zoom effect without cutting edges */}
//               <div className="relative flex items-center justify-center">
//                 <Image
//                   src={item.image}
//                   alt={item.label}
//                   width={800}
//                   height={700}
//                   className="transition-transform duration-300 ease-in-out transform hover:scale-125 cursor-pointer"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page;

"use client";
import Image from "next/image";
import React, { useState } from "react";

const data = [
  { label: "ground-floor", image: "/assets/floorPlan/ground1.png" },
  { label: "ground-floor-2", image: "/assets/floorPlan/ground.png" },
  { label: "1st-floor", image: "/assets/floorPlan/1st.png" },
  { label: "2nd-floor", image: "/assets/floorPlan/2nd.png" },
  { label: "3rd-floor", image: "/assets/floorPlan/3rd.png" },
  { label: "5th-floor", image: "/assets/floorPlan/5th.png" },
  { label: "6th-floor", image: "/assets/floorPlan/6th.png" },
  { label: "7th-floor", image: "/assets/floorPlan/7th.png" },
  { label: "8th-floor", image: "/assets/floorPlan/8th.png" },
];

function Page() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e, index) => {
    if (hoveredIndex !== index) return; // Ensure only hovered image moves
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div>
      <div className="text-[#37584F] text-center py-10">
        <p className="sm:text-5xl text-4xl font-bold gravesendSans">
          FLOOR PLANS
        </p>
        <div className="mt-10">
          {data.map((item, index) => (
            <div
              id={item.label}
              key={item.label}
              className="flex flex-col items-center px-8 md:px-20"
            >
              <div style={{ height: 90 }}></div>

              {/* Zoom-in and Cursor Move Effect */}
              <div
                className="relative overflow-hidden w-[300px] xs:w-[600px] md:w-[900px] h-[600px] rounded-lg  hover:border p-10 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                style={{
                  cursor:
                    hoveredIndex === index
                      ? 'url("/assets/magnifier.png") 20 20, zoom-in' // Custom magnifier cursor
                      : "default",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  width={1600} // Higher resolution for zoom effect
                  height={1400}
                  className={`absolute top-0 left-0 transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-[3]" : "scale-100"
                  }`}
                  style={{
                    transformOrigin: `${position.x} ${position.y}`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
