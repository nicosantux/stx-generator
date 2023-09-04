import type { Generator, GeneratorLintDeps } from '../types/generator.type.js'

import {
  commitlint,
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
import {
  huskyDependencies,
  nextDependencies,
  nodeDependencies,
  reactDependencies,
} from '../dependencies/index.js'

export const GENERATORS_OPTIONS: Record<Generator, string> = {
  'github-actions': 'Github Actions',
  husky: 'Husky',
  'next-ts': 'Next.js Typescript',
  'node-ts': 'Node.js Tyepscript',
  'react-ts': 'React.js Typescript',
  vscode: 'Visual Studio Code',
}

export const GENERATORS_LINT_DEPENDENCIES: Record<GeneratorLintDeps, string[]> = {
  husky: huskyDependencies,
  'next-ts': nextDependencies,
  'node-ts': nodeDependencies,
  'react-ts': reactDependencies,
}

export const GENERATORS_FILES: Record<
  Generator,
  Record<string, { destination: string; file: unknown; json: boolean }>
> = {
  'github-actions': {},
  husky: {
    '.commitlintrc.json': { destination: '', file: commitlint, json: true },
  },
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
