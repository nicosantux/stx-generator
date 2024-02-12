import { reactRules } from './react.eslint.js'

export const nextRules = {
  env: { browser: true, node: true },
  extends: ['next', 'next/core-web-vitals', ...reactRules.extends],
  parserOptions: { ...reactRules.parserOptions },
  rules: { ...reactRules.rules },
  settings: { ...reactRules.settings },
}
