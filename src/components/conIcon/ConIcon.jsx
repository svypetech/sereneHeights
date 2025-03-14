import { Icon } from "@iconify-icon/react";
import React from "react";

function ConIcon({ bgColor, direction, padding }) {
  const icons = [
    {
      icon: "icomoon-free:envelop",
      size: 23,
      link: "mailto:info@sereneheightsnathiagali.com",
    },
    { icon: "ic:baseline-phone", size: 25, link: "tel:+923214979447" },
    {
      icon: "ic:round-whatsapp",
      size: 23,
      link: "https://wa.me/+923214979447",
    },
  ];

  return (
    <div
      className={`flex ${
        direction === "column" ? "flex-col space-y-2" : "flex-row space-x-2"
      }`}
    >
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`${bgColor} ${padding} rounded-full flex items-center justify-center cursor-pointer text-white hover:text-black `}
          >
            <Icon
              icon={item.icon}
              // className="text-white hover:text-black"
              width={item.size}
              height={item.size}
            />
          </div>
        </a>
      ))}
    </div>
  );
}

export default ConIcon;
