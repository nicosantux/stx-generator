import type { Generator } from '../types/generator.type.js'

import { githubActions } from './github-actions.generator.js'
import { husky } from './husky.generator.js'
import { next } from './next.generator.js'
import { node } from './node.generator.js'
import { react } from './react.generator.js'
import { vscode } from './vscode.generator.js'

export const RUN_GENERATOR: Record<Generator, () => Promise<void>> = {
  'github-actions': githubActions,
  next,
  node,
  react,
  husky,
  vscode,
}
