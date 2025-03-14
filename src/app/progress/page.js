// "use client";
// import { Icon } from "@iconify-icon/react";
// import React, { useEffect, useState, useRef } from "react";

// function Progress() {
//   const data = [
//     { label: "JULY, 2024", image: "/assets/home/progress6.png" },
//     { label: "FEBRUARY, 2024", image: "/assets/home/progress5.png" },
//     { label: "NOVEMBER, 2023", image: "/assets/home/progress4.png" },
//     { label: "JULY, 2023", image: "/assets/home/progress3.png" },
//     { label: "OCTOBER, 2022", image: "/assets/home/progress2.png" },
//     { label: "DECEMBER, 2021", image: "/assets/home/progress1.png" },
//   ];

//   const formattedData = data.map((item) => ({
//     ...item,
//     id: item.label.toLowerCase().replace(/[, ]+/g, "-"),
//   }));

//   const [activeId, setActiveId] = useState(null);
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveId(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.15} // Trigger when 50% of the section is visible
//     );

//     sectionsRef.current.forEach((section) => {
//       if (section) observer.observe(section);
//     });

//     return () => {
//       sectionsRef.current.forEach((section) => {
//         if (section) observer.unobserve(section);
//       });
//     };
//   }, []);

//   return (
//     <div className="px-8 md:px-36 lg:px-40 2xl:px-80">
//       <h1 className="uppercase font-semibold text-[#37584F] py-12 text-center text-5xl gravesendSans">
//         Construction Progress
//       </h1>
//       <div className="my-5">
//         {formattedData.map((item, index) => (
//           <div
//             className="flex gap-4 "
//             key={index}
//             ref={(el) => (sectionsRef.current[index] = el)}
//             id={item.id}
//           >
//             {/* Side Indicator */}
//             <div className="flex flex-col items-center">
//               <div
//                 className={`rounded-full border-2 h-10 flex justify-center items-center w-10 transition-colors duration-300 ${
//                   activeId === item.id
//                     ? "border-[#37584F] bg-[#1654430D]/5 "
//                     : "boder-[#D3D3D3]"
//                 }`}
//               >
//                 <Icon
//                   className={`p-2 transition-colors duration-300 ${
//                     activeId === item.id ? "text-[#37584F]" : " text-[#D3D3D3]"
//                   }`}
//                   icon="uit:calender"
//                   width="24"
//                   height="24"
//                 />
//               </div>
//               <div
//                 className={`h-full w-[2px] transition-colors duration-300 ${
//                   activeId === item.id ? "bg-[#37584F]" : "bg-[#D3D3D3]"
//                 }`}
//               ></div>
//             </div>

//             {/* Content Section */}
//             <div className="w-full pb-16">
//               <p className="text-[#37584F] font-semibold text-3xl gravesendSans">
//                 {item.label}
//               </p>
//               <img
//                 src={item.image}
//                 alt="progress"
//                 className="rounded-lg my-7 xl:h-[500px] w-full"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Progress;

"use client";
import { Icon } from "@iconify-icon/react";
import React, { useEffect, useState, useRef } from "react";

function Progress() {
  const data = [
    { label: "JULY, 2024", video: "https://www.youtube.com/embed/_RjucM01Vp8" },
    {
      label: "FEBRUARY, 2024",
      video: "https://www.youtube.com/embed/J_EAtfLGICw",
    },
    {
      label: "NOVEMBER, 2023",
      video: "https://www.youtube.com/embed/YbcwSm0l4Es",
    },
    { label: "JULY, 2023", video: "https://www.youtube.com/embed/deh7Edv0cFM" },
    {
      label: "OCTOBER, 2022",
      video: "https://www.youtube.com/embed/_ArGeucKghA",
    },
    {
      label: "DECEMBER, 2021",
      video: "https://www.youtube.com/embed/-j6c51b2Dis",
    },
  ];

  const formattedData = data.map((item) => ({
    ...item,
    id: item.label.toLowerCase().replace(/[, ]+/g, "-"),
  }));

  const [activeId, setActiveId] = useState(formattedData[0].id);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });

        if (visibleSection && visibleSection !== activeId) {
          setActiveId(visibleSection);
        }
      },
      { threshold: 0.6, rootMargin: "-50px 0px -30% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [activeId]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveId(formattedData[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-8 md:px-36 lg:px-40 2xl:px-80">
      <h1 className="uppercase font-semibold text-[#37584F] pb-12 text-center sm:text-5xl text-3xl gravesendSans">
        Construction Progress
      </h1>
      <div className="my-5">
        {formattedData.map((item, index) => (
          <div
            className="flex gap-4"
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            id={item.id}
          >
            {/* Side Indicator */}
            <div className="flex flex-col items-center">
              <div
                className={`rounded-full border-2 h-10 flex justify-center items-center w-10 transition-all duration-500 ease-in-out ${
                  activeId === item.id
                    ? "border-[#37584F] bg-[#1654430D]/5 scale-110"
                    : "border-[#D3D3D3] scale-100"
                }`}
              >
                <Icon
                  className={`p-2 transition-all duration-500 ease-in-out ${
                    activeId === item.id ? "text-[#37584F]" : "text-[#D3D3D3]"
                  }`}
                  icon="uit:calender"
                  width="24"
                  height="24"
                />
              </div>
              <div
                className={`h-full w-[2px] transition-all duration-500 ease-in-out ${
                  activeId === item.id ? "bg-[#37584F]" : "bg-[#D3D3D3]"
                }`}
              ></div>
            </div>

            {/* Content Section */}
            <div className="w-full pb-20">
              <p className="text-[#37584F] font-semibold sm:text-3xl text-2xl gravesendSans">
                {item.label}
              </p>
              <iframe
                src={item.video}
                title={item.label}
                className="rounded-lg my-7 xl:h-[500px] w-full opacity-0 transition-opacity duration-700 ease-in-out"
                style={{
                  opacity: activeId === item.id ? 1 : 0.3,
                }}
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Progress;
