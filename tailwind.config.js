/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slideIn 1s ease-out',
        'slide-out': 'slideOut 1s ease-in',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gryffindor: {
          red: '#7F0909',
          gold: '#FFC500',
        },
        slytherin: {
          green: '#0D6217',
          silver: '#C0C0C0',
        },
        ravenclaw: {
          blue: '#0E1A40',
          bronze: '#946B2D',
        },
        hufflepuff: {
          yellow: '#EEE117',
          black: '#2E2E2E',
        },
      },
    },
  },
  plugins: [],
};
