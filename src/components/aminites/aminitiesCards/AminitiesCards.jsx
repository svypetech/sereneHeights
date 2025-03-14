// import { aminitiesElements } from '@/utils/constants/aminitiesElements';
// import React from 'react'

// function AminitiesCards({src, text}) {
//   return (
//     <div className="py-16 bg-white flex flex-wrap gap-8 justify-center items-center ">
//       {aminitiesElements.map((data, index) => (
//         <div
//           key={index}
//           className="rounded-md w-[200px] h-[210px] p-6  flex flex-col justify-cente items-center text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] "
//         >
//           <img
//             src={`assets/aminities/frames/${data.src}.png`}
//             alt={`${data.src}`}
//           />
//           {/* {data.heading && <p>{data.heading}</p>} */}
//           <p className="text- pt-3 text-[#222222] font-medium popping ">{data.text}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AminitiesCards

import { aminitiesElements } from "@/utils/constants/aminitiesElements";
import React from "react";

function AminitiesCards({ src, text }) {
  return (
    <div className="py-16 bg-white flex flex-wrap gap-8 justify-center items-center">
      {aminitiesElements.map((data, index) => (
        <div
          key={index}
          className="rounded-md w-[200px] h-[210px] p-6 flex flex-col justify-center items-center text-center cursor-pointer 
          shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300 
          hover:scale-105 hover:shadow-[0px_4px_15px_rgba(55,88,79,0.8)]"
        >
          <img
            src={`assets/aminities/frames/${data.src}.png`}
            alt={`${data.src}`}
          />
          <p className="pt-3 text-[#222222] font-medium popping">{data.text}</p>
        </div>
      ))}
    </div>
  );
}

export default AminitiesCards;