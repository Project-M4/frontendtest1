/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3C7305', // green
        secondary: '#4C9503', // light green
        accent: '#F5F3F3', // grey

      },
    },
  },
  plugins: [],
}