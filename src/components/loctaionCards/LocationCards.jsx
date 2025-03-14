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
    <div className="w-full h-full text-left flex gap-4 pl-6 items-center rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex-shrink-0 flex-grow">
      <img
        src="/assets/home/location/locationIcon.png"
        className="h-14 object-cover flex-shrink-0"
        alt="locationIcon"
      />
      <div className="py-2 flex-grow">
        <p>{title}</p>
        <p>{distance}</p>
      </div>
    </div>
  );
}

export default LocationCards;