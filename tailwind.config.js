/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0a3d62',    // Dark Blue (navy)
          'primary-dark': '#072642',
          accent: '#d4af37',     // Gold accent
          'accent-secondary': '#7c0a02', // Burgundy red
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        opacity: {
          '10': '0.1',
          '60': '0.6',
          '90': '0.90',
        }
      },
      container: {
        center: true,
        padding: '0',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '100%',
          '2xl': '100%',
        },
      },
    },
    plugins: [],
  }