/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mine-shaft': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#2d2d2d',
      },
    'cinnamon': {
        '50': '#feffe4',
        '100': '#fcffb8',
        '200': '#f9ff75',
        '300': '#ffff27',
        '400': '#ffef00',
        '500': '#ffd300',
        '600': '#eda000',
        '700': '#bc6f00',
        '800': '#9a5500',
        '900': '#793f01',
        '950': '#4d2200',
    },
      }
    },
  },
  plugins: [],
}