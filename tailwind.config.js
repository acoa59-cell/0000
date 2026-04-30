/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          navy:    '#1A365D',
          blue:    '#2B4C8C',
          accent:  '#4ECDC4',
          lime:    '#A8E063',
          glass:   'rgba(255,255,255,0.12)',
        },
      },
      animation: {
        'float-slow':   'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite',
        'float-fast':   'float 3.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':      { transform: 'translateY(-18px) rotate(1.5deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
