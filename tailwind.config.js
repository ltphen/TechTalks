/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "10xl": [
          "11rem",
          {
            lineHeight: "2rem",
          },
        ],
        "11xl": [
          "13.5rem",
          {
            lineHeight: "2rem",
          },
        ],
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
