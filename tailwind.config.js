/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F7F7F7',
        'font': '#ACACAC',
        'names-tablet': '#9EAAB4',
        'username': '#0CB4F1',
      }
    },
  },
  plugins: [],
}

