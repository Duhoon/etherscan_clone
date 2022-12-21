/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        dropdown: "dropdown 500ms normal",
      },
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(5px)", opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
  },
  plugins: [],
};
