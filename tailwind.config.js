/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B18',
          900: '#0A1128',
          850: '#0F1A3A',
          800: '#14214D',
          700: '#1E326E',
          600: '#2E4C9E',
        },
        ivory: {
          50: '#FCFAF7',
          100: '#F7F3EB',
          200: '#ECE3D4',
          300: '#DED1BC',
        },
        gold: {
          300: '#EBD494',
          400: '#E0C26D',
          500: '#C5A880',
          600: '#B08E55',
          700: '#8E6F36',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(10, 17, 40, 0.08), 0 0 1px 1px rgba(197, 168, 128, 0.2)',
        'luxury-hover': '0 25px 50px -12px rgba(10, 17, 40, 0.16), 0 0 2px 1px rgba(197, 168, 128, 0.4)',
        'modal': '0 25px 60px -15px rgba(6, 11, 24, 0.45)',
      }
    },
  },
  plugins: [],
}
