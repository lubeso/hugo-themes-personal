/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./hugo_stats.json",
  ],
  theme: {
    extend: {
      fontFamily: ["Domine", "serif"],
    },
  },
  plugins: [],
}

