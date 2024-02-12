export type Generator = 'github-actions' | 'husky' | 'next' | 'node' | 'react' | 'vscode'

export type GeneratorLintDeps = Exclude<Generator, 'github-actions' | 'vscode'>
