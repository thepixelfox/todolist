/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        "black-custom": "#0D0D0D",
        "gray-custom": "#1A1A1A",
        "gray-custom-light": "#262626",
        "blue-dark": "#1E6F9F",
        "blue-light": "#4EA8DE",
      },
      spacing: {
        "custom-container": "900px",
      },
    },
  },
  plugins: [],
};
