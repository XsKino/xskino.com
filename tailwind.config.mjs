import { colors } from './src/styles/colorThemes'
import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors
    }
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors
        },
        dark: {
          colors
        }
      }
    })
  ]
}
