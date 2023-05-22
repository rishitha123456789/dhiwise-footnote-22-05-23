module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_600: "#818181",
        gray_50_01: "#f9f9f9",
        gray_400: "#c1c1c1",
        gray_600_01: "#787878",
        blue_gray_100: "#d9d9d9",
        blue_700: "#337ab7",
        blue_gray_50: "#f1f1f1",
        blue_gray_500: "#697882",
        indigo_800_01: "#1e4190",
        indigo_800: "#1d3f8f",
        white_A700: "#ffffff",
        gray_50: "#f8f8f8",
      },
      fontFamily: { roboto: "Roboto", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
