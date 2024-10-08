/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: ['light'],
  },
  theme: {
    extend: {
      colors: {
        'primary-color': '#006643',
        'secondary-color': '#298064',
      },
      screens: {
        xs: '450px',
      },
    },
  },

  plugins: [require('daisyui')],
};
