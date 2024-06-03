/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        customPurple:'#F7F2FF',
        customDarkPurple:'#6625D2',
        custonRed:'#f04e34',
        customP:'#e9defb',
      },
      fontFamily:{
        'sans':['Poppins', 'sans-serif'],
      },
      padding:{
        '170px':'170px',
        '56px':'56px'
      },
      textShadow: {
        'default': '2px 2px 3px rgba(0, 0, 0, 0.5)',
        
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 3.5px rgba(0, 0, 0, 0.5)',
        },
        
        
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

