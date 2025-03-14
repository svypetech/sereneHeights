import { featuresElements } from "@/utils/constants/aminitiesElements";
import React from "react";

function FeaturesCards() {
  return (
    <div className="sm:px-16 px-5">
      <div className="pt-16  bg-white h-full w-full flex flex-col md:flex-row items-stretch gap-8 justify-center items-cente">
        {featuresElements.slice(0, 3).map((data, index) => (
          <div
            key={index}
            className={`feature-card min-h-full  rounded-md w-full  p-6 flex flex-col justify-center items-center text-center cursor-pointer 
          shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300 
          hover:scale-105 hover:shadow-[0px_4px_15px_rgba(55,88,79,0.8)]`}
            style={{
              width: data.width,
            }}
          >
            <img
              src={`assets/aminities/features/${data.src}.png`}
              alt={`${data.src}`}
            />
            <p className="sm:text-3xl text-2xl font-semibold gravesendSans">
              {data.heading}
            </p>
            <p className="text-[#222222]/70 text-sm pt-2 popping">
              {data.text}
            </p>
          </div>
        ))}
      </div>
      <div className=" bg-white py-7 h-full w-full flex flex-col md:flex-row items-stretch gap-8 justify-center items-cente">
        {featuresElements.slice(3, 6).map((data, index) => (
          <div
            key={index}
            className={`feature-card min-h-full  rounded-md w-full  p-6 flex flex-col justify-center items-center text-center cursor-pointer 
          shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300 
          hover:scale-105 hover:shadow-[0px_4px_15px_rgba(55,88,79,0.8)]`}
            style={{
              width: data.width,
            }}
          >
            <img
              src={`assets/aminities/features/${data.src}.png`}
              alt={`${data.src}`}
            />
            <p className="sm:text-3xl text-2xl font-semibold gravesendSans">
              {data.heading}
            </p>
            <p className="text-[#222222]/70 text-sm pt-2 popping">
              {data.text}
            </p>
          </div>
        ))}
      </div>
      <div className=" bg-white  h-full w-full flex flex-col md:flex-row items-stretch gap-8 justify-center items-cente">
        {featuresElements.slice(6, 9).map((data, index) => (
          <div
            key={index}
            className={`feature-card min-h-full  rounded-md w-full  p-6 flex flex-col justify-center items-center text-center cursor-pointer 
          shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300 
          hover:scale-105 hover:shadow-[0px_4px_15px_rgba(55,88,79,0.8)]`}
            style={{
              width: data.width,
            }}
          >
            <img
              src={`assets/aminities/features/${data.src}.png`}
              alt={`${data.src}`}
            />
            <p className="sm:text-3xl text-2xl font-semibold gravesendSans">
              {data.heading}
            </p>
            <p className=" text-[#222222]/70 text-sm pt-2 popping">
              {data.text}
            </p>
          </div>
        ))}
      </div>
      <div className="pb-16 bg-white py-7 h-full w-full flex flex-col md:flex-row items-stretch gap-8 justify-center items-cente">
        {featuresElements.slice(9, 12).map((data, index) => (
          <div
            key={index}
            className={`feature-card min-h-full  rounded-md w-full  p-6 flex flex-col justify-center items-center text-center cursor-pointer 
          shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300 
          hover:scale-105 hover:shadow-[0px_4px_15px_rgba(55,88,79,0.8)]`}
            style={{
              width: data.width,
            }}
          >
            <img
              src={`assets/aminities/features/${data.src}.png`}
              alt={`${data.src}`}
            />
            <p className="sm:text-3xl text-2xl font-semibold gravesendSans">
              {data.heading}
            </p>
            <p className="text-[#222222]/70 text-sm pt-2 popping">
              {data.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesCards;

// import { featuresElements } from "@/utils/constants/aminitiesElements";
// import React from "react";

// function FeaturesCards() {
//   return (
//     <div
//       className="py-16 bg-white w-full grid grid-cols-1 md:grid-cols-4 gap-8"
//       style={{
//         // display: "grid",
//         // gridTemplateColumns: "repeat(4, 1fr)", // 3 responsive columns
//         // gridAutoFlow: "dense", // Prevents gaps in the layout
//         width: "100%",
//       }}
//     >
//       {featuresElements.map((data, index) => (
//         <div
//           key={index}
//           className="rounded-md h-full p-6 flex flex-col justify-center items-center text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
//           style={{
//             gridColumn: `span ${Math.round(parseFloat(data.width) / 25) || 0}`, // Convert % width to grid span
//           }}
//         >
//           <img
//             src={`assets/aminities/features/${data.src}.png`}
//             alt={data.src}
//           />
//           <p className="text-3xl font-semibold">{data.heading}</p>
//           <p className="text-[#222222]">{data.text}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FeaturesCards;
