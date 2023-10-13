import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

      colors: {
        green: '#247356',
        'green-dark': '#005C53',
        gray: '#A9A9A9',
        'gray-light': '#d3dce6',
        white: '#FFFCFF',
        black: '#1E1E1E',
        yellow: '#BC9212',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },

      extend: {},
    },
  },
  plugins: [],
};
export default config;
