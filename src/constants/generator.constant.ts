import type { Generator } from '../types/generator.type.js'

export const GENERATORS_OPTIONS: Readonly<Record<Generator, string>> = {
  'github-actions': 'Github Actions',
  husky: 'Husky',
  'next-ts': 'Next.js Typescript',
  'node-ts': 'Node.js Tyepscript',
  'react-ts': 'React.js Typescript',
  vscode: 'Visual Studio Code',
}
