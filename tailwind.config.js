/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cocoa: {
          50: '#FAF6F4',
          100: '#F4ECE7',
          200: '#E6D7CE',
          300: '#D5BEB1',
          400: '#B68E7B',
          500: '#8E5A44',
          600: '#6C3E2D',
          700: '#532E21',
          800: '#3D2218',
          900: '#27150F',
          950: '#1A0C08'
        },
        caramel: {
          50: '#FDF8F3',
          100: '#FBF0E4',
          200: '#F5DCBF',
          300: '#EEC293',
          400: '#E4A263',
          500: '#D98235',
          600: '#C26723',
          700: '#9E4E1C',
          800: '#7E3E1C',
          900: '#66341B',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FFF9F0',
          200: '#FFF1E0',
          300: '#FFE7CC',
        },
        gourmetPink: {
          50: '#FDF4F5',
          100: '#FAE8EB',
          200: '#F5D4D9',
          300: '#EEB5BE',
          400: '#E28B99',
          500: '#D46376',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -5px rgba(61, 34, 24, 0.08), 0 4px 12px -2px rgba(61, 34, 24, 0.04)',
        'warm-hover': '0 20px 40px -10px rgba(61, 34, 24, 0.16), 0 8px 16px -4px rgba(61, 34, 24, 0.08)',
        'glow': '0 0 25px rgba(217, 130, 53, 0.35)',
      }
    },
  },
  plugins: [],
}
