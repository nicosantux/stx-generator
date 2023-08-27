module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', 'lower-case'],
    'body-max-line-length': [2, 'always', 72],
  },
}
