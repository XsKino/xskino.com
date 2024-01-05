/** @type {import("prettier").Config} */
export default {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  bracketSameLine: true,
  printWidth: 110,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
