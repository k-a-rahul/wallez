/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'mainbg':'#8ba8b7',
        'secondbg':'#6c90a3',
        'btnbg':'#7eb4aa',
        'btnhover':'#a2b9c5',
        'cardbg':'#8b92b7'
      },
      keyframes: {
        'translate-x': {
          '0%': { transform: 'translateX(0%)' },
          '25%': { transform: 'translateX(-1%)' },
          '50%': { transform: 'translateX(1%)' },
        },
        'translate-y-2': {
          '0%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        
      },
      animation: {
        'translate-x': 'translate-x .5s linear infinite',
        'translate-y-2': 'translate-y-2 1s alternate-reverse infinite',
      },
      
    },
  },
  plugins: [],
};
