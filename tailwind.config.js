/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#745a27',
        'brand-primary-container': '#c9a96e',
        'brand-primary-fixed': '#ffdea4',
        'brand-primary-fixed-dim': '#e4c285',
        'brand-on-primary': '#ffffff',
        
        'brand-surface': '#f9f9f7',
        'brand-surface-container-lowest': '#ffffff',
        'brand-surface-container-low': '#f4f4f2',
        'brand-surface-container': '#eeeeec',
        'brand-surface-container-high': '#e8e8e6',
        
        'brand-on-surface': '#1a1c1b',
        'brand-on-surface-variant': '#4d463a',
        
        'brand-outline': '#7f7668',
        'brand-outline-variant': '#d0c5b5',
      },
      fontFamily: {
        'editorial': ['Newsreader', 'Cormorant Garamond', 'serif'],
        'functional': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'editorial-tight': '-0.02em',
        'blueprint': '0.1em',
      },
      lineHeight: {
        'readable': '1.6',
      },
      spacing: {
        'scale-8': '2.75rem',
        'scale-24': '8.5rem',
      },
      backgroundImage: {
        'gold-brush': 'linear-gradient(135deg, #745a27, #c9a96e)',
      },
      boxShadow: {
        'ambient': '0 40px 40px -10px rgba(26, 28, 27, 0.04)',
      }
    },
  },
  plugins: [],
}
