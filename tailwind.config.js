/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'bg-blue-impresilk':'#072761',
        'bg-light-blue-impresilk':'#258FC6',
        'bg-whats':'#2ac622',
        'bg-slide':'#000858 ',
        'bg-item':'rgba(0, 8, 51,0.9)',
        'bg-black-ct': '#2e2e2e'
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.4em',
    },
    dropShadow: {
      '3xl': '10px 16px 10px rgba(0,0,0,0.35)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.30)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    }
  },
  
  plugins: [],
}
}
