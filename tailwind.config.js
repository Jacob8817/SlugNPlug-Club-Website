const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ethnocentric: ["Ethnocentric"],
        sarpanch: ["Sarpanch"]
      },
      clipPath: {
        inset: "inset(50% 50% 50% 50%)",
        "clip-path-none": "inset(0% 0% 0% 0%)",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-4px, -5px)" },
          "40%": { transform: "translate(5px, -5px)" },
          "60%": { transform: "translate(-7px, 7px)" },
          "80%": { transform: "translate(7px, 7px)" },
        },
        "glitch-glow": {
          "0%, 100%": { textShadow: "0px 0px 4px #ffffff, 0px 0px 12px #ff00ff" },
          "50%": { textShadow: "0px 0px 6px #00ffff, 0px 0px 16px #ff0000" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        rotateIn: {
          "0%": { transform: "rotateY(90deg) translateZ(-200px)", opacity: "0" },
          "50%": { transform: "rotateY(45deg) translateZ(-100px)", opacity: "0.5" },
          "100%": { transform: "rotateY(0deg) translateZ(0px)", opacity: "1" },
        },
      },
      animation: {
        "spin-slow1": "spin 10s linear infinite",
        "spin-reverse1": "spin-reverse 10s linear infinite",
        "spin-slow2": "spin 15s linear infinite",
        "spin-reverse2": "spin-reverse 15s linear infinite",
        "spin-slow3": "spin 20s linear infinite",
        "spin-reverse3": "spin-reverse 20s linear infinite",
        "cylindrical-in": "rotateIn 2s ease-in-out forwards",
        glitch: "glitch 0.5s infinite",
        "glitch-glow": "glitch-glow 1s infinite",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require("tailwind-clip-path"),
    require("@xpd/tailwind-3dtransforms"),
    require("tailwind-extended-shadows"),
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
