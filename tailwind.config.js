/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        mainColor: "#FA3715",
        hoverColor: "#e63111",
      },
      fontFamily: {
        main: ["New Amsterdam", "sans-serif"],
      },
    },
  },
  plugins: [],
};
