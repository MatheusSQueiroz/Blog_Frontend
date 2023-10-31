/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'primary': '#40739e',
        'secondary': '#487eb0',
        'tertiary': '#273c75',
        'quatenary': '#192a56',
        'quinary' : '#353b48'
      }
    },
  },
  plugins: [],
}

