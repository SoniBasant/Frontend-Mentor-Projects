/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '426px',
      md: '769px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        Tomato: 'hsl(4, 100%, 67%)',
        DarkSlateGrey: 'hsl(234, 29%, 20%)',
        CharcoalGrey: 'hsl(235, 18%, 26%)',
        Grey: 'hsl(231, 7%, 60%)',
        White: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        robotoRegular: ['Regular'],
        robotoBold: ['Bold'],
      },
      fontSize: {
        'baseSize': '16px',
        'mediumSize': '14px',
        'belowSize': '12px',
      },
      boxShadow: {
        'colorShadow': '0px 5px 9px 6px rgba(255, 98, 87, 0.3)',
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
}

