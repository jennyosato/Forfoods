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

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gridTemplateColumns:{
        fluid: 'repeat(auto-fit, minmax(15rem, 1fr))'
      },
      keyframes: {
        slide: {
          from: { left: '100%' },
          to: { left: '0%' },
        },
        marqx: {
          from: {transform: 'translateX(0)'},
          to: {transform: 'translateX(-50%)'}
        }
      },
      animation: {
        slide: 'slide 1s infinite',
        marquee: 'marqx 15s linear infinite'
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

