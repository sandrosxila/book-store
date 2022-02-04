module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors:{
        primary: '#000',
        secondary: '#262626',
        transparent: 'transparent',
      },
      fontFamily: {
        'sans': ['Hind', 'sans-serif'],
      },
      fontSize: {
        'xs': '1.33rem',
        'sm': '1.5rem',
        'md': '1.67rem',
        'lg': '2.08rem',
        'xl': '2.5rem',
        '2xl': '2.92rem',
      }
    },
  },
  plugins: [],
}
