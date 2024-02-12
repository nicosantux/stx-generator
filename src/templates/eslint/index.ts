import { importRules } from './import.eslint.js'
import { nextRules } from './next.eslint.js'
import { nodeRules } from './node.eslint.js'
import { reactRules } from './react.eslint.js'
import { stylisticRules } from './stylistic.eslint.js'
import { typescriptRules } from './typescript.eslint.js'
import { unicornRules } from './unicorn.eslint.js'
import { vanillaRules } from './vanilla.eslint.js'

export const ESLINT_CONFIG = {
  importRules,
  next: nextRules,
  node: nodeRules,
  react: reactRules,
  stylisticRules,
  typescriptRules,
  unicornRules,
  vanillaRules,
} as const
