
/** @type {import('tailwindcss').Config} */
import starlightPlugin from '@astrojs/starlight-tailwind';

const defaultTheme = require('tailwindcss/defaultTheme');

// custom color theme
const accent = { 200: '#8FE3E8', 600: '#0A6190', 900: '#014063', 950: '#002B43' };
const gray = { 100: '#f3f7f9', 200: '#e7eff2', 300: '#bac4c8', 400: '#7b8f96', 500: '#495c62', 700: '#2a3b41', 800: '#182a2f', 900: '#121a1c' };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent, gray,
      },
      fontFamily: {
        sans: ['"Public Sans"', ...defaultTheme.fontFamily.sans],
        mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [starlightPlugin()],
};