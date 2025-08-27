"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col justify-center items-center text-center gap-6 min-h-[85vh]"
    >
      <p className="text-4xl text-[#37584F] sm:text-5xl  font-bold tracking-wide  gravesendSans">
        Thank you for choosing Serene Heights.
      </p>
      <p className="text-2xl sm:text-3xl text-[#37584F]/80  tracking-wide font-helvetica font-medium">
        Our team will get in touch with you shortly.
      </p>

      {/* <button
      onClick={() => router.push('/')}
      className="my-2 text-2xl sm:text-4xl text-[#37584F]/80  tracking-wide font-helvetica font-medium">
        Back to Home
      </button> */}

      <button
        onClick={() => router.push("/")}
        className="group w-auto relative mt-5 inline-flex items-center justify-center overflow-hidden rounded-full bg-[#37584F] px-12 py-3 font-mono text-xl font-medium tracking-tighter text-white border-[1px] border-[#00000033] disabled:opacity-50"
      >
        <span className="absolute h-0 w-0 rounded-full bg-[#37584F] transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
        <span className="absolute inset-0 -mt-1 h-full w-full rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-700 opacity-30"></span>
        <span className="relative font-[Poppins] tracking-wide font-medium text-[20px] text-[#FEFEFB]">
          Back to Home
        </span>
      </button>
    </motion.div>
  );
};

export default page;
