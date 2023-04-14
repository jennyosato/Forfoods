/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        slide: {
          from: { left: '100%' },
          to: { left: '0%' },
        }
      },
      animation: {
        slide: 'slide 1s infinite',
       },
      backgroundImage: {
        '100': '100%',
        '200': '200%'
      },
      width: {
        'xxl': '28rem'
      },
      height: {
        'xlx': '28rem'
      }
      
    },
  },
  plugins: [],
}

