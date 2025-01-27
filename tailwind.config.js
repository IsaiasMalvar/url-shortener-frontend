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
        shapeshifter: "shapeshifter 10s linear infinite",
        blob: "blob 7s infinite",
        rdisappear: "rdisappear 0.3s linear",
        ldisappear: "ldisappear 0.3s linear",
        blg: "blg 3s linear",
      },
      transitionDuration: {
        3000: "3000ms",
      },
      keyframes: {
        updown: {
          "0%": { transform: "skew(0deg)" },
          "100%": { transform: "skew(360deg)" },
        },
        blg: {
          "0%": { filter: "blur(0px)", opacity: "1" },
          "100%": { filter: "blur(100px)", opacity: "0", display: "none" },
        },
        marquee: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        rdisappear: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        ldisappear: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)", display: "none" },
        },

        lightsout: {
          "0%": { display: "block" },
          "100%": { display: "none" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
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
