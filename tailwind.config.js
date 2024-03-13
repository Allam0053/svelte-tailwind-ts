/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
      fontFamily: {
          sans: ['Roboto', 'Arial', 'sans-serif']
      },
      extend: {
          colors: {
              primary: '#2563EB',
              light: '#f8fafc',
              dark: '#111827',
              color0: '#00ADB5',
          },
          keyframes: {
              flicker: {
                  '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
                      opacity: '0.99',
                      filter: 'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))'
                  },
                  '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
                      opacity: '0.4',
                      filter: 'none'
                  }
              },
              shimmer: {
                  '0%': {
                      backgroundPosition: '-700px 0'
                  },
                  '100%': {
                      backgroundPosition: '700px 0'
                  }
              }
          },
          animation: {
              flicker: 'flicker 3s linear infinite',
              shimmer: 'shimmer 1.3s linear infinite'
          },
          screens: {
              'xs': '480px', // min-width
          },
      }
  },
  plugins: [],
  darkMode: 'class'
};
