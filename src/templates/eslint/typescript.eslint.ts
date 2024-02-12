export const typescriptRules = {
  /**
   * Require consistent usage of type exports.
   *
   * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-exports/
   */
  '@typescript-eslint/consistent-type-exports': [
    'warn',
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  /**
   * Require consistent usage of type imports.
   *
   * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-imports/
   */
  '@typescript-eslint/consistent-type-imports': ['warn', { fixStyle: 'inline-type-imports' }],
  /**
   * Require default parameters to be last.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/default-param-last/
   */
  '@typescript-eslint/default-param-last': 'error',
  /**
   * Require a consistent member declaration order.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/member-ordering
   */
  '@typescript-eslint/member-ordering': [
    'error',
    { interfaces: { order: 'natural-case-insensitive' } },
  ],
  /**
   * Require using function property types in method signatures.
   *
   * 🔧 Fixable - https://typescript-eslint.io/rules/method-signature-style/
   */
  '@typescript-eslint/method-signature-style': 'warn',
  /**
   * Require consistent naming conventions.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/naming-convention/
   */
  '@typescript-eslint/naming-convention': [
    'error',
    {
      format: ['PascalCase'],
      selector: ['typeLike', 'enumMember'],
    },
    {
      custom: {
        match: false,
        regex: '^I[A-Z]|^(Interface|Props|State)$',
      },
      format: ['PascalCase'],
      selector: 'interface',
    },
  ],
  /**
   * Require expressions of type void to appear in statement position.
   *
   * 🔧 Fixable - https://typescript-eslint.io/rules/no-confusing-void-expression/
   */
  '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
  /**
   * Disallow creation of functions within loops.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/no-loop-func/
   */
  '@typescript-eslint/no-loop-func': 'error',
  /**
   * Disallow members of unions and intersections that do nothing or override type information.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/no-redundant-type-constituents/
   */
  '@typescript-eslint/no-redundant-type-constituents': 'warn',
  /**
   * Disallow unnecessary namespace qualifiers.
   *
   * 🔧 Fixable - https://typescript-eslint.io/rules/no-unnecessary-qualifier/
   */
  '@typescript-eslint/no-unnecessary-qualifier': 'warn',
  /**
   * Disallow unused variables.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/no-unused-vars/
   */
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: false,
      vars: 'all',
      varsIgnorePattern: '^_',
    },
  ],
  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/prefer-nullish-coalescing/
   */
  '@typescript-eslint/prefer-nullish-coalescing': [
    'error',
    { ignorePrimitives: { bigint: true, boolean: true, number: true, string: true } },
  ],
  /**
   * Require Array#sort and Array#toSorted calls to provide a compare function.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/require-array-sort-compare/
   */
  '@typescript-eslint/require-array-sort-compare': 'error',
  /**
   * Require exhaustive checks when using union types in switch statements.
   *
   * 🚫 Not fixable - https://typescript-eslint.io/rules/switch-exhaustiveness-check/
   */
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
}
