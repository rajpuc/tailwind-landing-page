/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        'primary':'#ee0181',
        'rajesh':'green'
      },
      fontFamily:{
        'poppins':'Poppins',
        'inter':'Inter',
        'rajesh':['ddd','Poppins'],
        'display':['Poppins','sans-serif'],
        'body':['Inter','sans-serif'],
      }
    },
  },
  plugins: [],
}

