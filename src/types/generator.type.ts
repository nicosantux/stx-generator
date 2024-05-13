export const GENERATOR = ['github-actions', 'husky', 'next', 'node', 'react', 'vscode'] as const

export type Generator = (typeof GENERATOR)[number]

export type GeneratorLintDeps = Exclude<Generator, 'github-actions' | 'vscode'>
