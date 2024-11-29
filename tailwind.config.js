/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Center the container by default
        padding: {
          DEFAULT: "1rem", // Padding for mobile (1rem = 16px)
          md: "0", // Remove padding on medium and larger screens
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
