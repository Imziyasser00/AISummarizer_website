/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi: ["Satoshi","sans-serif"],
        inter: ["Inter","sans-serif"],
      },
      colors:{
        backgroundColor:'',
        primary: "#F8F9FC",
        secondary: "#C00000",
        third: "#DE3C3C",
        fourth: "#F7B32D",
      }
    },
  },
  plugins: [],
}