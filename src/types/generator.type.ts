export type Generator = 'github-actions' | 'husky' | 'next-ts' | 'node-ts' | 'react-ts' | 'vscode'

export type GeneratorLintDeps = Exclude<Generator, 'github-actions' | 'vscode'>
