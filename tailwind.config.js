/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-clr': '#e4ecfa',
        'button-clr': '#102241',
        'text-clr': '#102241',        
      },
      fontFamily: {
        'Notoserif': 'Noto Serif, Arial, sans-serif',
        'Manrope': 'Noto Sans Mono, Arial, sans-serif',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['group-hover'],
    }
  },
  plugins: [],
}
