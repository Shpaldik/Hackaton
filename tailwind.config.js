/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gray': '#373737',
        'primary-lime': '#379777',
        'primary-bg-gray': "#45474B",
        'primary-bg-blackgray': "#262626",
      },
    },
  },
  plugins: [],
}
