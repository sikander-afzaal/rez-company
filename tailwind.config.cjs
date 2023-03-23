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
        dark: "#35363A",
        darker: "#03091C",
        gray: "#DCDCE7",
        cream: "#FEFFEF",
        shadowPurple: "#6B00FF1A",
        shadowRed: "#FF00001A",
        shadowCyan: "#00CAFF26",
        footer: "#FFF8DB",
      },
      boxShadow: {
        contactForm: "0px 20px 50px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
