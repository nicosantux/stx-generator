import type { Generator, GeneratorFiles, GeneratorLintDeps } from '../types/generator.type.js'

import {
  editorconfig,
  eslintIgnore,
  eslintNext,
  eslintNode,
  eslintReact,
  extensions,
  prettierIgnore,
  prettierrc,
  settings,
} from '../templates/index.js'
import { nextDependencies, nodeDependencies, reactDependencies } from '../dependencies/index.js'

export const GENERATORS_OPTIONS: Record<Generator, string> = {
  'github-actions': 'Github Actions',
  husky: 'Huksy',
  'next-ts': 'Next.js Typescript',
  'node-ts': 'Node.js Tyepscript',
  'react-ts': 'React.js Typescript',
  vscode: 'Visual Studio Code',
}

export const GENERATORS_LINT_DEPENDENCIES: Record<GeneratorLintDeps, string[]> = {
  'next-ts': nextDependencies,
  'node-ts': nodeDependencies,
  'react-ts': reactDependencies,
}

export const GENERATORS_FILES: Record<
  GeneratorFiles,
  Record<string, { destination: string; file: unknown; json: boolean }>
> = {
  'github-actions': {},
  'next-ts': {
    '.prettierrc': { destination: '', file: prettierrc, json: true },
    '.prettierignore': { destination: '', file: prettierIgnore, json: false },
    '.eslintrc.json': { destination: '', file: eslintNext, json: true },
    '.eslintrcignore': { destination: '', file: eslintIgnore, json: false },
    '.editorconfig': { destination: '', file: editorconfig, json: false },
  },
  'node-ts': {
    '.prettierrc': { destination: '', file: prettierrc, json: true },
    '.prettierignore': { destination: '', file: prettierIgnore, json: false },
    '.eslintrc.json': { destination: '', file: eslintNode, json: true },
    '.eslintrcignore': { destination: '', file: eslintIgnore, json: false },
    '.editorconfig': { destination: '', file: editorconfig, json: false },
  },
  'react-ts': {
    '.prettierrc': { destination: '', file: prettierrc, json: true },
    '.prettierignore': { destination: '', file: prettierIgnore, json: false },
    '.eslintrc.json': { destination: '', file: eslintReact, json: true },
    '.eslintrcignore': { destination: '', file: eslintIgnore, json: false },
    '.editorconfig': { destination: '', file: editorconfig, json: false },
  },
  vscode: {
    'extensions.json': { destination: '.vscode', file: extensions, json: true },
    'settings.json': { destination: '.vscode', file: settings, json: true },
  },
}
