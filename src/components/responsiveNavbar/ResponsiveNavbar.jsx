// import { elements } from "@/utils/constants/navElements";
// import { useState } from "react";
// // import { elements } from "../path-to-elements-file"; // Adjust the path accordingly
// import { FaChevronRight } from "react-icons/fa";

// const ResponsiveNavbar = () => {
//   const [openMenu, setOpenMenu] = useState(null);

//   const toggleMenu = (key) => {
//     setOpenMenu(openMenu === key ? null : key);
//   };

//   return (
//     <div className="w-screen h-screen bg-gray-900 text-white flex flex-col p-6">
//       {elements.map((element) => (
//         <div key={element.key} className="w-full">
//           <div
//             className="flex items-center justify-between p-4 cursor-pointer bg-gray-800 hover:bg-gray-700 rounded-lg mb-2"
//             onClick={() => toggleMenu(element.key)}
//           >
//             <span>{element.name}</span>
//             {element.submenu && (
//               <FaChevronRight
//                 className={`transition-transform ${
//                   openMenu === element.key ? "rotate-90" : ""
//                 }`}
//               />
//             )}
//           </div>

//           {openMenu === element.key && element.submenu && (
//             <div className="ml-4 bg-gray-700 p-3 rounded-lg">
//               {element.submenu.map((submenu, index) => (
//                 <div key={index} className="mb-3">
//                   <h4 className="text-sm font-bold text-gray-300">
//                     {submenu.sectionTitle}
//                   </h4>
//                   <ul className="mt-2">
//                     {submenu.items.map((item) => (
//                       <li
//                         key={item.id}
//                         className="p-2 hover:bg-gray-600 rounded-md cursor-pointer"
//                       >
//                         {item.name}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResponsiveNavbar;

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { elements } from "../path-to-elements-file"; // Adjust the path accordingly
import { FaChevronRight } from "react-icons/fa";
import { elements } from "@/utils/constants/navElements";
import { Icon } from "@iconify-icon/react";
import ConIcon from "../conIcon/ConIcon";
import Link from "next/link";

const SidebarMenu = ({ setShow }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling on background
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling on close
    };
  }, []);

  const toggleMenu = (key) => {
    setOpenMenu(openMenu === key ? null : key);
  };

  const navigateTo = (id, section = null) => {
    if (section) {
      router.push(`/${section}#${id}`);
    } else {
      router.push(`/${id}`);
    }
    setShow(false); // Close the menu on navigation
  };

  return (
    <nav className="fixed inset-0  w-screen h-full z-[80] bg-[#F3F2ED] backdrop-blur flex flex-col justify-between p-6  overflow-y-auto inter">
      <div className="text-white flex flex-col ">
        <div className="flex justify-between items-center pr-2">
          <img
            src="assets/logo/logoGreen.png"
            className="h-[140px]"
            alt="logo"
          />
          <p className="text-[#37584F] text-4xl" onClick={() => setShow(false)}>
            X
          </p>
        </div>
        {elements.map((element) => (
          <div key={element.key} className="w-full">
            <div
              className="flex items-center justify-between p-2 cursor-pointer text-[#37584F] font-semibold rounded-lg "
              onClick={() => navigateTo(element.id)}
            >
              <span>{element.name}</span>
              {element.submenu && (
                <FaChevronRight
                  className={`transition-transform ${
                    openMenu === element.key ? "rotate-90" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu(element.key);
                  }}
                />
              )}
            </div>

            {openMenu === element.key && element.submenu && (
              <div className="ml-4 text-[#37584F]/80 px-3 rounded-lg">
                {element.submenu.map((submenu, index) => (
                  <div key={index} className="mb-1">
                    <h4 className="text-sm font-bold text-gray-300">
                      {submenu.sectionTitle}
                    </h4>
                    <ul className="mt-">
                      {submenu.items.map((item) => (
                        <li
                          key={item.id}
                          className="px-2 py-1 rounded-md cursor-pointer"
                          onClick={() => navigateTo(item.id, item.section)}
                        >
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-left text-[#37584F]  font-semibold flex flex-col gap-2 justify-end pb-2">
        <p className="text-xl text-[#37584F]/80  ">Contact Us At:</p>
        <div className="flex gap-2 items-center">
          <Icon icon="mdi:phone-classic" width="30" height="30" />
          <p>042-111-111-744</p>
        </div>
        <div className="flex gap-2 items-center">
          <Icon icon="ic:baseline-local-phone" width="30" height="30" />
          <p>+92 300 8497999</p>
        </div>
        <div className="flex gap-2 items-center">
          <Icon icon="ic:baseline-mail" width="30" height="30" />
          <p>info@sereneheightsnathiagali.com</p>
        </div>
      </div>
      <div>
        <div className="flex flex-wra items-center gap-2">
          <ConIcon bgColor={"bg-[#37584F]"} direction={"row"} padding={"p-3"} />
          <Link
            href="contact-us#contact-us"
            className="text-decoration-none   "
          >
            <button className="hidde items-center gap-2 rounded-lg bg-[#37584F] hover:bg-white px-6 py-3 text-sm text-white hover:text-[#37584F] shadow-lg sm:flex">
              Enquire
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SidebarMenu;
