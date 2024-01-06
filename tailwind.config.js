/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      ali : "ali"
    },
    animation: {
      updown: "updown 3s linear alternate infinite"
    }
  },
  plugins: [],
}