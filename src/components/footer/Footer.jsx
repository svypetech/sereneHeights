"use client";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const hideFooterPaths = ["/floor-plans"];
  const showFooter = !hideFooterPaths.includes(pathname);

  if (!showFooter) return null;

  return (
    <div className="bottom-0 w-full z-40 bg-footer-gradient text-white">
      <div className="px-8 sm:px-20 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Logo and Contact Info - Stays separate */}
          <div className="flex flex-col lg:w-auto lg:flex-shrink-0">
            <img
              src="/assets/footer/finalLogo1.png"
              alt="logo img"
              className="h-72 w-56 max-h-auto"
            />
            <div className="flex flex-col gap-3 workSans text-sm">
              <div className="flex gap-3 items-center">
                <Icon icon="mdi:phone-classic" width="20" height="20" />
                <p>042-111-111-744</p>
              </div>
              <div className="flex gap-3 items-center">
                <Icon icon="ic:baseline-local-phone" width="20" height="20" />
                <p>+92 300 8497999</p>
              </div>
              <div className="flex gap-3 items-center">
                <Icon icon="ic:baseline-mail" width="20" height="20" />
                <p>info@sereneheightsnathiagali.com</p>
              </div>
            </div>
          </div>

          {/* Links Grid - Responsive 4 columns on md+, 2 columns below md */}
          <div className="flex-1 lg:flex lg:justify-end lg:items-center lg:ml-20 lg:mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 inter">
              {/* Details Column */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold mb-2">Details</h3>
                <Link
                  href="/about#about"
                  className="hover:underline cursor-pointer text-sm"
                >
                  About us
                </Link>
                <Link
                  href="/amenities#amenities"
                  className="hover:underline cursor-pointer text-sm"
                >
                  Amenities
                </Link>
                <Link
                  href="/payment-plan#payment-plans"
                  className="hover:underline cursor-pointer text-sm"
                >
                  Payment Plans
                </Link>
                <Link
                  href="/payment-plan#other-details"
                  className="hover:underline cursor-pointer text-sm"
                >
                  Other Details
                </Link>
              </div>

              {/* Progress Column */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold mb-2">
                  Progress
                </h3>
                <Link
                  href="/progress#july-2024"
                  className="hover:underline cursor-pointer text-sm"
                >
                  July 2024
                </Link>
                <Link
                  href="/progress#february-2024"
                  className="hover:underline cursor-pointer text-sm"
                >
                  February 2024
                </Link>
                <Link
                  href="/progress#november-2023"
                  className="hover:underline cursor-pointer text-sm"
                >
                  November 2023
                </Link>
                <Link
                  href="/progress#july-2023"
                  className="hover:underline cursor-pointer text-sm"
                >
                  July 2023
                </Link>
                <Link
                  href="/progress#october-2022"
                  className="hover:underline cursor-pointer text-sm"
                >
                  October 2022
                </Link>
              </div>

              {/* Floors Column */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold mb-2">
                  Floors
                </h3>
                <Link
                  href="/floor-plans"
                  className="hover:underline cursor-pointer text-sm"
                >
                  Tower View
                </Link>
                <Link
                  href="/floor-plans#basement-floor"
                  className="hover:underline cursor-pointer text-sm"
                >
                  Basement
                </Link>
                <Link
                  href="/floor-plans/floors#ground-floor"
                  className="hover:underline cursor-pointer text-sm"
                >
                  Ground Floor
                </Link>
              </div>

              {/* Get In Touch Column */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold mb-2">
                  Get In Touch
                </h3>
                <Link
                  href="/contact-us"
                  className="hover:underline cursor-pointer text-sm"
                >
                  Contact Us
                </Link>
                <Link
                  href="/contact-us#location"
                  className="hover:underline cursor-pointer text-sm"
                >
                  Location
                </Link>
                <Link
                  href="/contact-us#contact-us"
                  className="hover:underline cursor-pointer text-sm"
                >
                  Schedule A Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 sm:px-20 pb-6 inter">
        <div className="w-full my-4 border-t border-[#FFFEFF]/60"></div>

        <div className="flex flex-col-reverse md:flex-row gap-2 justify-between items-left">
          <p className="hidden md:block">
            Copyright @{currentYear} Serene Heights Nathia Gali
          </p>
          <div className="flex md:gap-3 lg:gap-4 gap-4 items-center">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:twitter" width="24" height="24" />
            </a>
            <a
              href="https://www.linkedin.com/company/serene-heights-hotel-resort"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mingcute:linkedin-fill" width="24" height="24" />
            </a>
            <a
              href="https://www.instagram.com/sereneheightshotelsandresorts/"
              target="_blank"
              rel="noopener noreferrer"
              // className="hidden lg:block"
            >
              <Icon icon="streamline:instagram-solid" width="20" height="20" />
            </a>
            <a
              href="https://www.facebook.com/sereneheightshotelsandresorts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="ic:outline-facebook" width="24" height="24" />
            </a>
            <a
              href="https://youtube.com/@sereneheightsnathiagali5573?si=3Q-4tZW0WSAb8aN0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:youtube" width="24" height="24" />
            </a>

            {/* <a
              href="https://www.facebook.com/sereneheightshotelsandresorts"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden"
            >
              <Icon icon="ph:hand-peace-light" width="24" height="24" />
            </a>
            <a
              href="https://www.facebook.com/sereneheightshotelsandresorts"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden"
            >
              <Icon icon="mingcute:dribbble-line" width="24" height="24" />
            </a> */}
          </div>
        </div>
      </div>

      <div className="p-4 text-center bg-[#18332A] inter">
        Powered By <u>Svype</u>
      </div>
    </div>
  );
}

export default Footer;
