module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#15141b',
        secondery: '#181921',
        icon:'#504F56',
        hr:'#343437',
        white: '#ffffff',
        orange: '#f96c0f',
        hovColor:'#201E2B'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
}
}
