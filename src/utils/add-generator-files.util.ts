import type { Generator } from '../types/generator.type.js'

import fs from 'node:fs/promises'
import path from 'node:path'

import { GENERATORS_FILES } from '../constants/generator.constant.js'

import { writeJSON } from './json.util.js'

export const addGeneratorFiles = async (generator: Generator, tailwind: boolean = false) => {
  const files = GENERATORS_FILES[generator]

  Object.entries(files).map(([filename, { destination, file, json }]) => {
    if (isESLintConfig(file) && tailwind) {
      file.extends.push('plugin:tailwindcss/recommended')
    }

    if (isVscodeExtensions(file) && tailwind) {
      file.recommendations.push('bradlc.vscode-tailwindcss')
    }

    json
      ? writeJSON(path.join(process.cwd(), destination, filename), file)
      : fs.writeFile(path.join(process.cwd(), destination, filename), file as string)
  })
}

const isESLintConfig = (file: unknown): file is { extends: string[] } => {
  return !!file && typeof file === 'object' && 'extends' in file
}

const isVscodeExtensions = (file: unknown): file is { recommendations: string[] } => {
  return !!file && typeof file === 'object' && 'recommendations' in file
}
