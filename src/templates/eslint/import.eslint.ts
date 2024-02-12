export const importRules = {
  /**
   * Disallow non-import statements appearing before import statements.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
   */
  'import/first': 'error',
  /**
   * Require a newline after the last import/require.
   *
   * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
   */
  'import/newline-after-import': 'warn',
  /**
   * Disallow cyclical dependencies between modules.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
   */
  'import/no-cycle': 'error',
  /**
   * Disallow the use of extraneous packages.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
   */
  'import/no-extraneous-dependencies': ['error', { includeTypes: true }],
  /**
   * Disallow mutable exports.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
   */
  'import/no-mutable-exports': 'error',
  /**
   * Disallow a module from importing itself.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
   */
  'import/no-self-import': 'error',
  /**
   * Ensures that there are no useless path segments.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
   */
  'import/no-useless-path-segments': 'error',
  /**
   * Enforce a module import order convention.
   *
   * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
   */
  'import/order': [
    'warn',
    {
      alphabetize: { order: 'asc', caseInsensitive: true },
      groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
      pathGroups: [{ pattern: '@/**', group: 'internal', position: 'after' }],
      pathGroupsExcludedImportTypes: ['builtin', 'internal'],
      warnOnUnassignedImports: true,
    },
  ],
}
