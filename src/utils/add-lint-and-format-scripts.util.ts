import { execCmd } from './index.js'

export const addLintAndFormatScripts = async () => {
  await execCmd('npm pkg set scripts.lint="eslint ."')
  await execCmd('npm pkg set scripts.lint:fix="eslint . --fix --ext .tsx,.ts,.jsx,.js,.cjs,.mjs"')
  await execCmd('npm pkg set scripts.format="prettier . --check"')
  await execCmd('npm pkg set scripts.format:fix="prettier . --write"')
}
