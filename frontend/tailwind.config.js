/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C5F8D',
          light: '#4A7BA7',
          dark: '#1A3A5C',
        },
        secondary: {
          DEFAULT: '#4CAF50',
          light: '#6FBF73',
          dark: '#3D8B40',
        },
        danger: {
          DEFAULT: '#E74C3C',
          light: '#EF5350',
          dark: '#C62828',
        },
        warning: {
          DEFAULT: '#F39C12',
          light: '#FFA726',
          dark: '#E65100',
        },
        info: {
          DEFAULT: '#3498DB',
          light: '#42A5F5',
          dark: '#1565C0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}