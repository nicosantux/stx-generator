export const unicornRules = {
  /**
   * Enforce passing a `message` value when creating a built-in error.
   *
   * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
   */
  'unicorn/error-message': 'error',
  /**
   * Enforce a case style for filenames.
   *
   * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
   */
  'unicorn/filename-case': ['error', { case: 'kebabCase' }],
  /**
   * Disallow empty files.
   *
   * 🚫 Not fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md
   */
  'unicorn/no-empty-file': 'error',
  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   *
   * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
   */
  'unicorn/prefer-node-protocol': 'warn',
}
