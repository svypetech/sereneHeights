// import React from 'react'

// function UniqueServicesCard({body, src}) {
//   return (
//     <>
//       <div className="flex gap-4 justify-between text-start items-center">
//         <div>
//           {body?.map((line, index) => (
//             <p
//               key={index}
//               className={`text-sm ${
//                 body.length > 1 && index === 1 ? "font-normal" : "font-semibold"
//               }`}
//             >
//               {line}
//             </p>
//           ))}
//         </div>
//         <div>
//           <img src={src} alt="img" />
//         </div>
//       </div>

//       <div className="w-full my-4 border-t border-black"></div>
//     </>
//   );
// }

// export default UniqueServicesCard

import React from "react";

function UniqueServicesCard({ body, isExpanded, onClick }) {
  return (
    <>
      <div className="flex gap-4 justify-between text-start items-center">
        <div className="flex-1">
          {" "}
          {/* Allows text to take remaining space */}
          <p className="text-sm font-semibold">{body[0]}</p>
          {isExpanded && <p className="text-sm font-normal">{body[1]}</p>}
        </div>
        <div
          onClick={onClick}
          className="cursor-pointer flex items-center justify-center"
        >
          <img
            className="w-6 h-6" // Fixed size for icon
            src={
              isExpanded
                ? "/assets/payment/minusCircle.svg"
                : "/assets/payment/plusCircle.svg"
            }
            alt="toggle-icon"
          />
        </div>
      </div>

      <div className="w-full my-4 border-t border-black"></div>
    </>
  );
}

export default UniqueServicesCard;

