export type Generator = 'github-actions' | 'husky' | 'next-ts' | 'node-ts' | 'react-ts' | 'vscode'

export type GeneratorLintDeps = Extract<Generator, 'next-ts' | 'node-ts' | 'react-ts'>

export type GeneratorFiles = Exclude<Generator, 'husky'>
