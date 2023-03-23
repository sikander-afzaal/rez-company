const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        commissioner: ["Commissioner"],
      },
      colors: {
        redOrange: "#FF3131",
        cream: "#FEFFEF",
      },
    },
  },
  plugins: [],
};
