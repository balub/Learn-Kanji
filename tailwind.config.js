/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBlack: "#030205",
        highlightPurple: "#BA12D4",
        textGrey: "#CAC2D4",
        darkBlue: "#331B4D",
        navBarbg: "#141414",
        silver: "#5d5d5d",
      },
    },
  },
  plugins: [],
};
