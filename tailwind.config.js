/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#69c6ba',
          50: '#f1fbfb',
          100: '#e3f7f5',
          200: '#c7eeeb',
          300: '#9ce0d9',
          400: '#69c6ba',
          500: '#4ab3a6',
          600: '#389589',
          700: '#2f7871',
          800: '#2a615c',
          900: '#25514d',
        },
        secondary: {
          DEFAULT: '#de8a3f',
          50: '#fdf6ef',
          100: '#fbecd9',
          200: '#f6d5b3',
          300: '#eeb882',
          400: '#de8a3f',
          500: '#d67424',
          600: '#bc5c1c',
          700: '#9c4519',
          800: '#80381a',
          900: '#6b3019',
        },
        accent: {
          DEFAULT: '#f1fbfb',
        }
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};