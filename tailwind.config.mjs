import { colors } from './src/styles/colorThemes'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    darkMode: 'class',
    extend: {
      colors
    }
  },
  plugins: []
}
