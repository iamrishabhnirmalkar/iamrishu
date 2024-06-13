import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundcolor: "#171717",
        white: "#FAFAFA",
        customblack: "#000000",
        customblack02: "#050505",
        custompurple: "#86003C",
        custompurple02: "#E41F7B",
        custompurple03: "#FF8BA0",
      },
      fontFamily: {
        sans: ["SPproDisplay", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
