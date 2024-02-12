import type { Generator } from '../types/generator.type.js'

export const GENERATORS_OPTIONS: Readonly<Record<Generator, string>> = {
  'github-actions': 'Github Actions',
  husky: 'Husky',
  next: 'Next.js TypeScript',
  node: 'Node.js TypeScript',
  react: 'React.js TypeScript',
  vscode: 'Visual Studio Code',
}
