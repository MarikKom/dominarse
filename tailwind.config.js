/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",    // Указываем путь к HTML-файлам
    "./src/**/*.{js,jsx,ts,tsx}", // Указываем пути к вашим JS/JSX/TS/TSX файлам
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};