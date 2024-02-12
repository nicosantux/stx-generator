export const stylisticRules = {
  /**
   * Requires or disallows blank lines between the given 2 kinds of statements.
   *
   * 🔧 Fixable - https://eslint.style/rules/js/padding-line-between-statements
   */
  'padding-line-between-statements': [
    'warn',
    {
      blankLine: 'always',
      prev: 'directive',
      next: '*',
    },
    {
      blankLine: 'always',
      prev: '*',
      next: 'block-like',
    },
    {
      blankLine: 'always',
      prev: 'block-like',
      next: '*',
    },
    {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    },
    {
      blankLine: 'always',
      prev: ['const', 'let', 'var'],
      next: '*',
    },
    {
      blankLine: 'any',
      prev: ['singleline-const', 'singleline-let', 'singleline-var'],
      next: ['singleline-const', 'singleline-let', 'singleline-var'],
    },
  ],
}
