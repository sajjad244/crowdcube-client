/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: '#A8E6CF',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #A8E6CF, #3B82F6)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}