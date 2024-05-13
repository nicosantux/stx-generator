export const huskyDependencies = ['husky', '@commitlint/cli', '@commitlint/config-conventional']

const baseEslintDependencies = [
  '@stylistic/eslint-plugin',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint@8.56.0',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-unicorn',
  'prettier',
]

export const nextDependencies = baseEslintDependencies.concat([
  'eslint-config-next',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
])

export const nodeDependencies = baseEslintDependencies

export const reactDependencies = baseEslintDependencies.concat([
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
])
