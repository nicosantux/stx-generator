export const eslintIgnore = `build
dist
coverage
dist
node_modules`

export const eslintNext = {}

export const eslintNode = {}

export const eslintReact = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['react', 'import', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'no-console': 'warn',
    eqeqeq: 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { args: 'after-used', ignoreRestSiblings: false, argsIgnorePattern: '^_.*?$' },
    ],
    'import/order': [
      'warn',
      {
        groups: ['type', 'builtin', 'object', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [{ pattern: '~/**', group: 'external', position: 'after' }],
        'newlines-between': 'always',
      },
    ],
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': ['warn', { noSortAlphabetically: false }],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: 'import', next: ['block-like', 'export', 'const', 'let'] },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
  },
}
