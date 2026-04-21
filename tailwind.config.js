/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0A1628',
          50: '#1A2942',
          100: '#0F1C35',
          900: '#050B17',
        },
        charcoal: {
          DEFAULT: '#1A1F2E',
          light: '#2A2F3E',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C660',
          dark: '#B8941F',
        },
        electric: {
          DEFAULT: '#00D4FF',
          light: '#33DDFF',
          dark: '#00A8CC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #E5C660 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A1628 0%, #050B17 100%)',
      },
    },
  },
  plugins: [],
}