/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "left-loop-scroll": "left-loop-scroll 60s linear infinite",
        "right-loop-scroll": "right-loop-scroll 60s linear infinite",
      },
      keyframes: {
        "left-loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "right-loop-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "footer-gradient":
          "linear-gradient(89.98deg, #0A3126 38.5%, #165443 99.98%)",
        "carosuel-gradient":
          " linear-gradient( rgba(0, 0, 0, 0.7) 21.99%, rgba(102, 102, 102, 0) 84.86%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "378px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
