"use client";
import { Icon } from "@iconify-icon/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const floorsFront = [
  {
    label: "ground-floor",
    id: 1,
    name: "Ground Floor",
    apartments: 8,
    top: "85%",
    rotate: "-1deg",
  },
  {
    label: "1st-floor",
    id: 2,
    name: "Floor 1",
    apartments: 16,
    top: "75%",
    rotate: "-3deg",
  },
  {
    label: "2nd-floor",
    id: 3,
    name: "Floor 2",
    apartments: 20,
    top: "66%",
    rotate: "-4deg",
  },
  {
    label: "3rd-floor",
    id: 4,
    name: "Floor 3",
    apartments: 22,
    top: "56%",
    rotate: "-6deg",
  },
  {
    label: "4th-floor",
    id: 5,
    name: "Floor 4",
    apartments: 10,
    top: "47%",
    rotate: "-8deg",
  },
  {
    label: "5th-floor",
    id: 6,
    name: "Floor 5",
    apartments: 10,
    top: "38%",
    rotate: "-10deg",
  },
  {
    label: "6th-floor",
    id: 7,
    name: "Floor 6",
    apartments: 20,
    top: "27%",
    rotate: "-12deg",
  },
  {
    label: "7th-floor",
    id: 8,
    name: "Floor 7",
    apartments: 20,
    top: "18%",
    rotate: "-15deg",
  },
  {
    label: "8th-floor",
    id: 9,
    name: "Floor 8",
    apartments: 20,
    top: "11%",
    rotate: "-15deg",
  },
];

const floorsSide = [
  {
    label: "ground-floor",
    id: 1,
    name: "Ground Floor",
    apartments: 10,
    top: "87%",
    rotate: "-1deg",
  },
  {
    label: "1st-floor",
    id: 2,
    name: "Floor 1",
    apartments: 10,
    top: "75%",
    rotate: "10deg",
  },
  {
    label: "2nd-floor",
    id: 3,
    name: "Floor 2",
    apartments: 10,
    top: "63%",
    rotate: "20deg",
  },
  {
    label: "3th-floor",
    id: 4,
    name: "Floor 3",
    apartments: 10,
    top: "53%",
    rotate: "26deg",
  },
  {
    label: "4th-floor",
    id: 5,
    name: "Floor 4",
    apartments: 10,
    top: "43%",
    rotate: "32deg",
  },
  {
    label: "5th-floor",
    id: 6,
    name: "Floor 5",
    apartments: 10,
    top: "33%",
    rotate: "35deg",
  },
  {
    label: "6th-floor",
    id: 7,
    name: "Floor 6",
    apartments: 10,
    top: "21%",
    rotate: "44deg",
  },
  {
    label: "7th-floor",
    id: 8,
    name: "Floor 7",
    apartments: 10,
    top: "13%",
    rotate: "43deg",
  },
  {
    label: "8th-floor",
    id: 9,
    name: "Floor 8",
    apartments: 10,
    top: "6%",
    rotate: "38deg",
  },
];

const icons = [
  { name: "24/7 CCTV <br/> Survillance", icon: "bx:cctv" },
  { name: "Sauna, Jacuzzi <br/> & Massage", icon: "guidance:sauna" },
  { name: "Dedicated <br/> Parking Floor", icon: "mynaui:parking" },
  { name: "Fully <br/> Furnished", icon: "mynaui:sofa" },
  { name: "Servants <br/> Residence Office", icon: "clarity:building-line" },
  { name: "Rooftop <br/> Restaurant", icon: "ph:fork-knife-fill" },
  { name: "Infinty <br/> Pool", icon: "ic:round-pool" },
  { name: "Mosque", icon: "ph:mosque-duotone" },
  {
    name: "Power <br/> Backup",
    icon: "material-symbols:power-plug-outline-rounded",
  },
  { name: "Street <br/> Light", icon: "game-icons:double-street-lights" },
  { name: "Refractor <br/> Telescope", icon: "solar:telescope-broken" },
  {
    name: "Business & <br/> Executive Center",
    icon: "ic:outline-business-center",
  },
  { name: "Mini Golf <br/> Course", icon: "maki:golf" },
  { name: "Air Gun <br/> Shooting Range", icon: "game-icons:pistol-gun" },
  { name: "Fitness <br/> Gym", icon: "iconoir:gym" },
  { name: "Rock <br/> Climbing", icon: "guidance:climbing-wall" },
  { name: "Archery", icon: "iconoir:archery" },
  { name: "Zipline", icon: "material-symbols:mountain-flag-outline" },
  {
    name: "Conference <br/> Room",
    icon: "healthicons:group-discussion-meetingx3-outline",
  },
  { name: "Banquet <br/> Hall", icon: "streamline:city-hall" },
  { name: "Dedicated <br/> Lawn", icon: "mdi:lawn" },
  {
    name: "24/7 Frontdesk & <br/> Concierge",
    icon: "guidance:conference-room",
  },
];

function TowerView() {
  const [mood, setMood] = useState("true");
  const [snow, setSnow] = useState("true");
  const [show, setShow] = useState(false);
  const [otherView, setOtherView] = useState(false);

  const router = useRouter();

  const [hoveredFloorId, setHoveredFloorId] = useState(null);
  const hoveredFloor =
    floorsFront.find((f) => f.id === hoveredFloorId) ||
    floorsSide.find((f) => f.id === hoveredFloorId);

  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Find the navbar element (Modify the selector if needed)
    const navbar = document.querySelector("nav"); // Assuming <nav> is used for the Navbar
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    // Update on window resize
    const handleResize = () => {
      if (navbar) setNavbarHeight(navbar.offsetHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <p className="text-xl text-center mb-10 md:text-5xl text-[#37584F] font-bold gravesendSans">
        TOWER VIEW
      </p>
      <div className="relative flex justify-center items-center">
        <div className="relative flex justify-end w-full">
          {otherView ? (
            <img
              src="/assets/carousel/carouselImg1.png"
              alt="Building"
              className="floor-plan-img w-screen md:max-h-[100%] lg:max-h-[100vh] sm:max-h-[100vh] object-cover md:object-fill"
              // style={{
              //   height: `calc(100vh - ${navbarHeight}px)`,
              // }}
            />
          ) : snow ? (
            mood ? (
              <img
                src="/assets/animatedImg/SR_33 - Photo 1.png"
                alt="Building"
                className="floor-plan-img  w-screen h-full md:max-h-[100%] lg:max-h-[100vh] sm:max-h-[100vh] object-cover md:object-fill"
                // style={{
                //   height: `calc(100vh - ${navbarHeight}px)`,
                // }}
              />
            ) : (
              <img
                src="/assets/animatedImg/SR_31 - Photo 1.png"
                alt="Building"
                className="floor-plan-img  w-screen md:max-h-[100%] lg:max-h-[100vh] sm:max-h-[100vh] object-cover md:object-fill "
                // style={{
                //   height: `calc(100vh - ${navbarHeight}px)`,
                // }}
              />
            )
          ) : (
            <img
              src="/assets/animatedImg/SR_29 - Photo 1.png"
              alt="Building"
              className="floor-plan-img  w-screen md:max-h-[100%] lg:max-h-[100vh] sm:max-h-[100vh] object-cover md:object-fill"
              // style={{
              //   height: `calc(100vh - ${navbarHeight}px)`,
              // }}
            />
          )}

          {!otherView && (
            <div className="absolute z-10 sm:top-16 top-[8rem] sm:right-0 md:right-[3rem] right-3 flex gap-2">
              <div className="">
                {snow ? (
                  <img
                    src="/assets/animatedImg/wind.png"
                    onClick={() => setSnow(false)}
                    className=" cursor-pointer hover:bg-black rounded-full h-10 md:h-full"
                    alt="moonImg"
                  />
                ) : (
                  <img
                    src="/assets/animatedImg/snow.png"
                    onClick={() => setSnow(true)}
                    className=" cursor-pointer hover:bg-black rounded-full h-10 md:h-full"
                    alt="sunImg"
                  />
                )}
              </div>

              <div className="">
                {mood ? (
                  <img
                    src="/assets/animatedImg/moon.png"
                    onClick={() => setMood(false)}
                    className=" cursor-pointer hover:bg-black rounded-full h-10 md:h-full"
                    alt="moonImg"
                  />
                ) : (
                  <img
                    src="/assets/animatedImg/sun.png"
                    onClick={() => setMood(true)}
                    className=" cursor-pointer hover:bg-black rounded-full h-10 md:h-full"
                    alt="sunImg"
                  />
                )}
              </div>
            </div>
          )}

          {snow && !otherView && (
            <>
              {/* Transparent Overlay Divs for Each Floor */}
              {floorsFront.map((floor) => (
                <div
                  key={`front-${floor.id}`}
                  className={`absolute left-[51%] w-[17%] h-[6%]  cursor-pointer ${
                    hoveredFloorId === floor.id ? "bg-white/25" : ""
                  }`}
                  style={{
                    transform: "translateX(-55%)",
                    rotate: floor.rotate,
                    top: floor.top,
                  }}
                  onMouseEnter={() => setHoveredFloorId(floor.id)}
                  onMouseLeave={() => setHoveredFloorId(null)}
                  onClick={() =>
                    router.push(`/floor-plans/floors#${floor.label}`)
                  }
                ></div>
              ))}
              {floorsSide.map((floor, index) => (
                <div
                  key={`side-${floor.id}`}
                  className={`absolute right-[42%] w-[10%] h-[4%] md:h-[5%] cursor-pointer ${
                    hoveredFloorId === floor.id ? "" : ""
                  }`}
                  style={{
                    transform: "translateX(115%)",
                    rotate: floor.rotate,
                    top: floor.top,
                  }}
                  onMouseEnter={() => setHoveredFloorId(floor.id)}
                  onMouseLeave={() => setHoveredFloorId(null)}
                  onClick={() =>
                    router.push(`/floor-plans/floors#${floor.label}`)
                  }
                ></div>
              ))}

              {/* Floor Information Card */}
              {hoveredFloor && (
                <div
                  className="absolute pointer-events-none bg-white flex items-center gap-3 shadow-lg p-3 rounded-lg text-sm transition-opacity duration-200"
                  style={{
                    top: `calc(${hoveredFloor.top} + 1.5%)`,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <Icon icon="circum:map" width="24" height="24" />
                  <div>
                    <p className="font-bold">{hoveredFloor.name}</p>
                    {hoveredFloor.name.toLowerCase() !== "floor 4" &&
                      hoveredFloor.name.toLowerCase() !== "floor 5" && (
                        <p>Apartments: {hoveredFloor.apartments}</p>
                      )}
                  </div>
                </div>
              )}
            </>
          )}
          {/* <--------left side----------->  */}
          <div className="flex absolute left-[0rem] w-[100%] md:w-[50%] sm:w-[50%] top-0 h-full items-start md:items-start flex-col sm:justify-between justify-normal md:left-10">
            <div className="px-5 sm:px-0 mt-10 sm:mt-0 flex md:gap-3 gap-2 flex-col justify-center md:py-3 py-0 ">
              <img
                src="/assets/logo/logo.png"
                alt="logo"
                className="h-[80px] w-[80px] mb-1 sm:w-full sm:h-[100px] md:h-[150px]"
              />
              <button
                className="cursor-pointer border text-xs sm:text-base flex items-center gap-2 md:gap-1 border-white rounded-lg text-white py-2 px-2 sm:px-4"
                onClick={() => setOtherView(!otherView)}
              >
                <Icon icon="mdi:rotate-360" width="24" height="24" />
                Other View
              </button>
              <button
                onClick={() => setShow(true)}
                className="cursor-pointer text-xs sm:text-base border flex items-center gap-2 border-white rounded-lg text-white py-2 px-2 sm:px-4"
              >
                Amenities
                <Icon
                  icon="iconamoon:arrow-down-2-thin"
                  width="24"
                  height="24"
                />
              </button>
            </div>
            <div>
              <img
                src="/assets/carousel/dm.png"
                alt="not found"
                className="md:h-[150px] h-[80px] mt-5 pl-1 sm:pl-16 md:pl-0"
              />
            </div>
          </div>

          {show && (
            <div className="md:!left-0 absolute z-20 sm:mt-0 w-full md:w-[50%] lg:w-[35%] sm:h-full md:h-full h-[100%] top-0 sm:px-10 px-5 py-8  bg-[#FEFEFB]/25 backdrop-blur">
              <p
                className="flex items-center justify-end w-full cursor-pointer pb-2 font-semibold text-xl text-white"
                onClick={() => setShow(false)}
              >
                <Icon
                  icon="proicons:cancel"
                  width="24"
                  height="24"
                  style={{ color: "#37584F" }}
                />
              </p>
              <div className="h-[90%] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-[#37584F]/50 scrollbar-track-transparent">
                {icons.map((icon, index) => (
                  <div
                    key={index}
                    className="font-medium my-3 flex items-center gap-3 bg-white/30 p-3 rounded-lg"
                  >
                    <Icon
                      className="text-[#37584F] p-3 bg-[#165443]/20 rounded-full"
                      icon={icon.icon}
                      width="25"
                      height="25"
                    />
                    <div className="flex sm:text-base text-xs flex-col">
                      {icon.name.split("<br/>").map((line, i) => (
                        <span key={i}>{line}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TowerView;
