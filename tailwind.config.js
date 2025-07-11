// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Vite's entry point HTML
    "./src/**/*.{js,jsx,ts,tsx}", // This line is important!
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add Inter font if you want to use it
      }
    },
  },
  plugins: [],
}

