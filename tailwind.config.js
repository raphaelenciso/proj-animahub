/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-1": "#ddddf7",
        "blue-2": "#a7bcff",
        "blue-3": "#8da4f1",
        "blue-4": "#7b96ec",
        "blue-5": "#5d5b8d",
        "blue-6": "#3d3c61",
        "blue-7": "#2f2d52",

        "primary-main": "#0080ff",
        "primary-darker": "#0059B3",
        "primary-lighter": "#198CFF",
        "secondary-main": "#FFA000",
        "text-primary": "#e4e6eb",
        "text-secondary": "#b0b3b8",
        "bg-main": "#18191A",
        "bg-neutral": "#242526",
        "bg-neutral-lighter": "#3a3b3c",
      },
      transitionProperty: {
        width: "width",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
