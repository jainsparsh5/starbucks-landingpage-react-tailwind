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
      },
    },
  },
  plugins: [],
}
