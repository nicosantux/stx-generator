/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Generator } from '../types/index.js'

import { ESLINT_CONFIG } from './eslint/index.js'

export const eslintIgnore = `*.config.*
build
coverage
dist
dist
node_modules`

export const createEslintConfig = (generator: Extract<Generator, 'next' | 'node' | 'react'>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const config: Record<string, any> = {
    env: { es2023: true },
    extends: [
      'eslint:recommended',
      'prettier',
      'plugin:@typescript-eslint/recommended-type-checked',
      'plugin:@typescript-eslint/strict-type-checked',
      'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { project: true, ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['@stylistic', '@typescript-eslint', 'import', 'unicorn'],
    reportUnusedDisableDirectives: true,
    rules: {
      ...ESLINT_CONFIG.vanillaRules,
      ...ESLINT_CONFIG.importRules,
      ...ESLINT_CONFIG.stylisticRules,
      ...ESLINT_CONFIG.typescriptRules,
      ...ESLINT_CONFIG.unicornRules,
    },
  }

  Object.entries(ESLINT_CONFIG[generator]).forEach(([key, value]) => {
    if (config[key]) {
      config[key] = Array.isArray(config[key])
        ? config[key].concat(value)
        : { ...config[key], ...value }
    } else {
      config[key] = value
    }
  })

  if (generator === 'next') {
    config.rules['import/order'][1].pathGroups.push({
      pattern: '{next,next/**,react,react-dom,react-dom/**}',
      group: 'builtin',
      position: 'before',
    })
  }

  if (generator === 'react') {
    config.rules['import/order'][1].pathGroups.push({
      pattern: '{react,react-dom,react-dom/**}',
      group: 'builtin',
      position: 'before',
    })
  }

  return config
}
