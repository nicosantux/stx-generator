export const reactRules = {
  env: { browser: true },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    /**
     * Require destructuring and symmetric naming of `useState` hook value and setter variables.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
     */
    'react/hook-use-state': 'error',
    /**
     * Require consistent boolean attributes notation in JSX.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     */
    'react/jsx-boolean-value': 'warn',
    /**
     * Disallow unnecessary curly braces in JSX props and children.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
     */
    'react/jsx-curly-brace-presence': 'warn',
    /**
     * Require using shorthand form for React fragments, unless required.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
     */
    'react/jsx-fragments': 'warn',
    /**
     * Prevent problematic leaked values from being rendered.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
     */
    'react/jsx-no-leaked-render': 'warn',
    /**
     * Prevents usage of unsafe `target='_blank'`.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     */
    'react/jsx-no-target-blank': ['error', { allowReferrer: true }],
    /**
     * Disallow empty React fragments.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
     */
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    /**
     * Require props to be sorted alphabetically.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     */
    'react/jsx-sort-props': ['warn', { noSortAlphabetically: false }],
    /**
     * Disallow usage of Array index in keys.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     */
    'react/no-array-index-key': 'warn',
    /**
     * Disallow creating unstable components inside components.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
     */
    'react/no-unstable-nested-components': 'error',
    /**
     * Disallow closing tags for components without children.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    'react/self-closing-comp': 'warn',
    /**
     * Require consistent function type for function components.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/function-component-definition.md
     */
    'react/function-component-definition': 'warn',
  },
}
