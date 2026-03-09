import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        p: "240px",
        d: "1024px",
      },
      fontFamily: {
        //system font
        LexendDeca: ["Lexend Deca", "sans-serif"],
        FugazOne: ["Fugaz One", "cursive"],
        //custom font
      },

      colors: {
        //system color
        adminOrange: "#ffb301",

        //custom color
        mainOrange: "#fa8c5c",
        mainOrangeHover: "#d26536",
      },
    },
    keyframes: {
      shimmer: {
        "100%": { transform: "translateX(100%)" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
