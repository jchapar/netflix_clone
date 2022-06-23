/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        red: '#e50914',
        darkColor: '#141414',
        lightColor: '#f4f4f4',
      },
    },
  },
  plugins: [],
};
