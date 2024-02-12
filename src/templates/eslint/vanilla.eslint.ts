export const vanillaRules = {
  /**
   * Require triple equals (`===` and `!==`).
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/eqeqeq
   */
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  /**
   * Disallow await inside of loops.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-await-in-loop
   */
  'no-await-in-loop': 'error',
  /**
   * Disallow the use of console.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-console
   */
  'no-console': 'error',
  /**
   * Disallow using an `else` if the `if` block contains a return.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-else-return
   */
  'no-else-return': 'warn',
  /**
   * Disallow shorthand type conversions e.g. `Boolean(foo)` instead of `!!foo`.
   *
   * 🔧 Partially Fixable - https://eslint.org/docs/rules/no-implicit-coercion
   */
  'no-implicit-coercion': 'error',
  /**
   * Disallow reassignment of function parameters.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-param-reassign
   */
  'no-param-reassign': 'error',
  /**
   * Disallows unnecessary `return await`.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-return-await
   */
  'no-return-await': 'error',
  /**
   * Disallow comparisons where both sides are exactly the same.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-self-compare
   */
  'no-self-compare': 'error',
  /**
   * Disallow initializing variables to `undefined`.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-undef-init
   */
  'no-undef-init': 'warn',
  /**
   * Disallow ternary operators when simpler alternatives exist.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-unneeded-ternary
   */
  'no-unneeded-ternary': 'error',
  /**
   * Require `let` or `const` instead of `var`.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-var
   */
  'no-var': 'error',
  /**
   * Require object literal shorthand syntax.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/object-shorthand
   */
  'object-shorthand': 'warn',
  /**
   * Require default to `const` instead of `let`.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/prefer-const
   */
  'prefer-const': 'warn',
  /**
   * Require use of an object spread over Object.assign.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/prefer-object-spread
   */
  'prefer-object-spread': 'warn',
  /**
   * Require using rest parameters instead of `arguments`.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-rest-params
   */
  'prefer-rest-params': 'error',
  /**
   * Require using spread syntax instead of `.apply()`.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-spread
   */
  'prefer-spread': 'error',
  /**
   * Require using template literals instead of string concatenation.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/prefer-template
   */
  'prefer-template': 'warn',
}
