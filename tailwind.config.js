/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(146deg, #82CAFC 0%, #ffffff 30%, #ffffff 100%)',
        'gradient-secondary': 'linear-gradient(180deg, #EBF8FF 0%, #FEFEFE 50%, #EBF8FF 100%)',
      },
      fontFamily: {
        calibri: ['Calibri', 'sans-serif'],
      },
    },
  },
  plugins: [],
}