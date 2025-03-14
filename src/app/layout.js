import {
  Chivo,
  Geist,
  Geist_Mono,
  Great_Vibes,
  Poppins,
  Work_Sans,
  Inter,
  Cinzel,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import localFont from "next/font/local";
import { headers } from "next/headers";
import { Icon } from "@iconify-icon/react";
import ConIcon from "@/components/conIcon/ConIcon";

const gravesendSans = localFont({
  src: "../../public/fonts/gravesend-sans-medium.ttf", // Correct path if in public folder
  variable: "--font-gravesend-sans", // Define a CSS variable
  // weight: "400", // Adjust weight if needed
  display: "swap", // Optional: improve loading performance
});

const helveticaNeue = localFont({
  src: "../../public/fonts/helvetica-neue.otf", // Correct path if in public folder
  variable: "--font-helvetica-neue", // Define a CSS variable
  // weight: "400", // Adjust weight if needed
  display: "swap", // Optional: improve loading performance
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--cinzel",
  // weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--work-sans",
  // weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--inter",
  // weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Serene Heights Nathia Gali",
  description: "Serene Heights Nathia Gali",
};
export default function RootLayout({ children }) {
  // const headersList = headers();
  // const fullUrl = headersList.get("x-url") || "";
  // const lastPart = fullUrl.split("/").filter(Boolean).pop();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${poppins.variable} ${cinzel.variable} ${workSans.variable} ${inter.variable} ${helveticaNeue.variable} ${gravesendSans.variable} antialiased overflo`}
      >
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-grow w-full">{children}</main>
          {/* {currentPath != "floor-plans" && <Footer />} */}
          <Footer />
        </div>
        {/* <a
          href="https://wa.me/+923214979447"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 md:bottom-9 md:right-9 z-50 p-2 animate-pop hover:scale-125 transition-transform  hover:animate-none"
        >
          <Icon icon="logos:whatsapp-icon" width="48" height="48" />
        </a> */}
        <div className="fixed bottom-5 right-5 md:bottom-9 md:right-9 z-50 p-2 animate-po hover:scale-125 transition-transform  hover:animate-none">
          <ConIcon
            bgColor={"bg-black/40 hover:bg-white/60"}
            direction={"column"}
            padding={"p-3"}
          />
        </div>
        <style>{`
          @keyframes popEffect {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }

          .animate-pop {
            animation: popEffect 1.5s infinite ease-in-out;
          }
             }
        `}</style>
      </body>
    </html>
  );
}
