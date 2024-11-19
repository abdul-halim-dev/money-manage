 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#ebebeb",
        secondary:"#ffffff",
        active:"#fe0084"
        }
    },
  },
  plugins: [],
}