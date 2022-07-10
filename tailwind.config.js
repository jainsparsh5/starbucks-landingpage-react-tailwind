/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: ["16px"],
      },
      colors: {
        starGreen: "#D4E9E2",  
        darkGreen: "#1E3932",
        lightText: "rgba(0,0,0, .58)" ,
        titleText: 'rgba(0,0,0, .87)',
      },
    },
  },
  plugins: [],
}
