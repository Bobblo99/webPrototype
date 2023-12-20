import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navbar: "#e4e5f1",
        navbarDark: "#272829",
        bgDark: "#353738",
        darkHover: "#66347F",
        // navbarDark: "#1B2430",
        twitter: "#1DA1F2",
        facebook: "#4267B2",
        instagram: "#C13584",
        gradientColor: {
          start: '#405DE6', 
          middle: "#F56040",
          end: '#833AB4', 
        },
      }
    },
  },
  plugins: [],
});