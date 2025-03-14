"use client";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const hideFooterPaths = ["/floor-plans"];
  const showFooter = !hideFooterPaths.includes(pathname);

  if (!showFooter) return null;
  return (
    <div className=" bottom-0 w-full z-40 bg-footer-gradient text-white">
      <div className="flex flex-col md:flex-row gap-0 md:gap-10  items-start md:items-center px-8 sm:px-32 py-8">
        <img
          src="/assets/footer/finalLogo.png"
          alt="logo img"
          className="h-72"
        />
        <div className="text-left flex flex-col gap-4 workSans">
          <p className="text-2xl  ">Contact Us At:</p>
          <div className="flex gap-4 items-center">
            <Icon icon="mdi:phone-classic" width="30" height="30" />
            <p>042-111-111-744</p>
          </div>
          <div className="flex gap-4 items-center">
            <Icon icon="ic:baseline-local-phone" width="30" height="30" />
            <p>+92 300 8497999</p>
          </div>
          <div className="flex gap-4 items-center">
            <Icon icon="ic:baseline-mail" width="30" height="30" />
            <p>info@sereneheightsnathiagali.com</p>
          </div>
        </div>
      </div>

      <div className="px-8 sm:px-32 pb-6 inter">
        <div className="flex flex-wrap gap-4 md:gap-8">
          <Link href="/" className="hover:underline cursor-pointer">
            Home
          </Link>
          <Link href="/about" className="hover:underline cursor-pointer">
            About Us
          </Link>
          <Link href="/amenities" className="hover:underline cursor-pointer">
            Amenities
          </Link>
          <Link href="/payment-plan" className="hover:underline cursor-pointer">
            Payment Plan
          </Link>
          <Link href="/progress" className="hover:underline cursor-pointer">
            Progress
          </Link>
          <Link href="/contact-us" className="hover:underline cursor-pointer">
            Contact Us
          </Link>
        </div>

        <div className="w-full my-4 border-t border-[#FFFEFF]/60"></div>

        <div className="flex flex-col-reverse md:flex-row gap-2 justify-between items-center">
          <p>Copyright @{currentYear} Serene Heights Nathia Gali</p>
          <div className="flex gap-4 items-center">
            {/* <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:twitter" width="24" height="24" />
            </a> */}
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
