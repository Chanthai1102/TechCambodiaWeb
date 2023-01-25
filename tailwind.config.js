/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./article/**/*.{html,php}"],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      'sans': ['Kantumruy Pro', 'system-ui', ],
    },
    height: {
      'hero': '42rem',
      'full': '100%',
    },
    objectPosition:{
      'nav-item' : 'relative',
    },
    lineHeight: {
      'extra-loose': '2.5',
      'hero-tittle': '1.5',
    },
    extend: {
      backgroundImage: {
        'toyota': " url('/assets/image/toyota.jfif') ",
      },
    },
  },
  plugins: [],
}
