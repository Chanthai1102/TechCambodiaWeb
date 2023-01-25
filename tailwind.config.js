/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./article/**/*.{html,php}"],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    height: {
      hero: '42rem',
      full: '100%',
      '20': '5rem',
      '44': '11rem',
    },
    fontFamily: {
      'sans': ['Kantumruy Pro', 'system-ui', ],
    },
    extend: {
      colors: {
        'regal-blue': '#1060c4',
      },
    },
  },
  plugins: [],
}
