import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/applications/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|navbar|snippet|code|input|breadcrumb|card|popover|scroll-shadow|divider|modal|button|image|tabs|select|user|table|tooltip|avatar).js"
  ],
  theme: {
    extend: {
      height: {
        screen: "100dvh"
      },
      colors: {
        yellow: "#FEED5D"
      }
    }
  },
  darkMode: "class",
  plugins: [nextui()]
};
