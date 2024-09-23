/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#54A075",
        secondaryGreen:"#EAF3EE",
        backgroundWhite: "#F5F5F5",

        textBlack: {
          11: "#1F1F1F",
          10: "#262626",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"], // Add Montserrat to Tailwind
      },
      fontWeight: {
        78: "78.02px",
      },
      fontSize: {
        64: "64px",
      },
    },
  },
  plugins: [],
};
