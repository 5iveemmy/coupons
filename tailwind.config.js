/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,css,scss}", "./index.html"],
  theme: {
    extend: {
      colors: {
        dark: "#1b1c1e",
        primary: "#9444cb",
        secondary: "#ee7037",
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
