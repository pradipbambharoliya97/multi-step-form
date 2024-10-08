/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'light-blue': 'hsl(206, 94%, 87%)',
        'strawberry-red': 'hsl(354, 84%, 57%)',

        'cool-gray': 'hsl(231, 11%, 63%)',
        'light-gray': 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        // 'marine-blue': '#002c54',
        // 'purplish-blue': '#3f4ab1',
        // 'pastel-blue': '#a1c2f2',
        // 'light-blue': '#c4d8eb',
        // 'strawberry-red': '#e7465e',

        // 'cool-gray': '#6f7c8c',
        // 'light-gray': '#d0d6e0',
        // magnolia: '#e1eaff',
        // alabaster: '#f1f5f9',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
};
