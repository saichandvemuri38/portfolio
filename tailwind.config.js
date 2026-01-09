/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'editorial-bg': '#FDFCF0',
        'editorial-text': '#1A1A1A',
        'editorial-sub': '#4A4A4A',
        'editorial-accent': '#C5A572',
      },
      fontFamily: {
        'serif-display': ['"Bradford LL"', 'serif'],
        'serif-body': ['"Bradford LL"', 'serif'],
      },
    },
  },
  plugins: [],
}
