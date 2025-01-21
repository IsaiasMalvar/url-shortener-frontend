import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        updown: "updown 50s linear infinite",
      },
      transitionDuration: {
        3000: "3000ms",
      },
      keyframes: {
        updown: {
          "0%": { transform: "skew(0deg)" },
          "100%": { transform: "skew(360deg)" },
        },
      },
      fontFamily: {
        doto: "Zen Dots, serif",
        vt323: "VT323, serif",
        oswald: "Oswald, serif",
      },
      screens: {
        mobile: "320px",
      },
    },
  },
  plugins: [],
};
