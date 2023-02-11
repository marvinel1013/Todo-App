/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueApp: ["#669BBC"],
        redApp: ["#C1121F"],
        whiteApp: ["#FDF0D5"],
      },
    },
  },
  plugins: [],
};
