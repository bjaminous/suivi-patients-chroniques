/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C5F8D',
        secondary: '#4CAF50',
        danger: '#E74C3C',
        warning: '#F39C12',
      },
    },
  },
  plugins: [],
}