import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 10s linear infinite",
        marquee: "marquee 5s linear infinite",
        marquee2: "marquee2 5s linear infinite",
        lightsout: "lightsout 0s linear",
      },
      transitionDuration: {
        3000: "3000ms",
      },
      keyframes: {
        updown: {
          "0%": { transform: "skew(0deg)" },
          "100%": { transform: "skew(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        lightsout: {
          "0%": { display: "block" },
          "100%": { display: "none" },
        },
      },
      fontFamily: {
        doto: "Zen Dots, serif",
        vt323: "VT323, serif",
        oswald: "Oswald, serif",
      },
      screens: {
        mobile: "320px",
        "small-tablet": "470px",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
