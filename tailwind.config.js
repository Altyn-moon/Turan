/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // файлы внутри папки app
    "./components/**/*.{js,ts,jsx,tsx}" // файлы внутри components
  ],
  theme: {
    extend: {}, // сюда можно будет добавлять свои цвета, шрифты и т.д.
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // подключаем плагин "обрезка текста"
  ],
};
