import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        accent: '#FFFFFF',
        blue: '#0060A4',
        'light-blue': '#8EBEDF',
        'dark-blue': '#00243D',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
        gold: '#D4AF37',
      },
    },
  },
  plugins: [],
};

export default config;