// import React from 'react'

// function LocationCards({ title, distance }) {
//   return (
//     <div className="w-full text-left mb-4 flex gap-4 pl-2 items-center rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex-shrink-0">
//       <img
//         src="/assets/home/location/locationIcon.png"
//         className="h-10"
//         alt="locationIcon"
//       />
//       <div className="py-2">
//         <p>{title}</p>
//         <p>{distance}</p>
//       </div>
//     </div>
//   );
// }

// export default LocationCards

import React from "react";

function LocationCards({ title, distance }) {
  return (
    <div className="w-full h-full text-left flex gap-2 lg:gap-4 pl-3 lg:pl-6 items-center rounded-[10px] shadow-[0px_0px_4px_0px_#00000040] flex-shrink-0 flex-grow">
      <img
        src="/assets/home/location/locationIcon.png"
        className="h-12 lg:h-14 object-cover flex-shrink-0"
        alt="locationIcon"
      />
      <div className="py-2 flex-grow">
        <p className="poppins font-medium text-[15px] lg:text-[19px] xl:text-[22px] text-[#000000]">{title}</p>
        <p className="poppins font-medium text-[13px] lg:text-[16px] xl:text-[17px] text-[#000000] leading=[135%] opacity-70">{distance}</p>
      </div>
    </div>
  );
}

export default LocationCards;