export const prettierIgnore = `dist
build
package-lock.json
pnpm-lock.yaml
yarn.lock`

export const prettierrc: Record<string, string | number | boolean | string[]> = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'auto',
  jsxSingleQuote: true,
  printWidth: 100,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
}
