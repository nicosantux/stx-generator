import path from 'node:path'

import { readJSON, writeJSON } from './index.js'

export const addLintAndFormatScripts = async () => {
  const packageJSON = await readJSON(path.join(process.cwd(), 'package.json'))

  packageJSON.scripts.lint = 'eslint .'
  packageJSON.scripts['lint:fix'] = 'eslint . --fix --ext .tsx,.ts,.js,.cjs,.mjs'
  packageJSON.scripts.format = 'prettier --write .'

  writeJSON(path.join(process.cwd(), 'package.json'), packageJSON)
}
