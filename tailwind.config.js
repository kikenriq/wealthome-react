/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/bg-pattern.png')",
    }
  },
    colors: {
      "white": "#FFFFFF",
      'yellow': '#F6BD26',
      'primary-100': '#2179FF',
      'primary-90': '#1E6DE5',
      'primary-80': '#1B61CC',
      'primary-70': '#1755B2',
      'primary-40': '#0D3166',
      'primary-20': '#071833',
      'secondary-100': '#21FFFF',
      'secondary-20': '#073333',
      'neutral-100': '#FAFCFF',
      'neutral-98': '#F2F5FA',
      'neutral-95': '#E9ECF2',
      'neutral-90': '#DADFE5',
      'neutral-80': '#C2C6CC',
      'neutral-60': '#919499',
      'neutral-50': '#797C80',
      'neutral-40': '#616366',
      'neutral-30': '#494A4D',
      'neutral-20': '#303133',
      'neutral-10': '#18191A',
      'neutral-5': '#0C0C0D',
      'error-100': '#FF2134',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    boxShadow: {
      'shadow-1': '0px 2px 4px 0px #00000033',
      'shadow-2': '0px 5px 10px 0px #0000000D',
      'shadow-3': '0px 5px 10px 0px #00000033',
      'shadow-4': '0px 10px 20px 0px #0000001A',
    },
    borderRadius: {
      "--radius-small": "8px",
      "--radius-medium": "12px",
      "--radius-large": "16px",
      "--radius-extra-large": "32px",
      "--radius-full": "1000px",
      "--radius-circle": "50%",
    }
  },
  plugins: [],
}
