import type { Generator } from 'src/types/generator.type.js'

import { githubActions } from './github-actions.generator.js'
import { husky } from './husky.generator.js'
import { nextTs } from './next-ts.generator.js'
import { nodeTs } from './node-ts.generator.js'
import { reactTs } from './react-ts.generator.js'
import { vscode } from './vscode.generator.js'

export const RUN_GENERATOR: Record<Generator, () => Promise<void>> = {
  'github-actions': githubActions,
  'next-ts': nextTs,
  'node-ts': nodeTs,
  'react-ts': reactTs,
  husky,
  vscode,
}
