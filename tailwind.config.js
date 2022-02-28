module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1225px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    maxWidth:{
      '1/2': '37.5rem'
    },
    
    extend: {
      colors:{
      primary: "#000000",
       theme: "#1DA1F2",
       textColor: "#FFFFFF",
       borderColor: "#2F3336",
       gray:"#6E767D",
       dark_gray:"#202327"

      },
      spacing: {
        '13': '37.5rem',
        '75':  '31rem'
      },
    },
  },
  plugins: [],
}
