import type { GeneratorFiles } from '../types/generator.type.js'

import fs from 'node:fs/promises'
import path from 'node:path'

import { GENERATORS_FILES } from '../constants/generator.constant.js'

import { writeJSON } from './json.util.js'

export const addGeneratorFiles = async (generator: GeneratorFiles) => {
  const files = GENERATORS_FILES[generator]

  Object.entries(files).map(([filename, { destination, file, json }]) =>
    json
      ? writeJSON(path.join(process.cwd(), destination, filename), file)
      : fs.writeFile(path.join(process.cwd(), destination, filename), file as string),
  )
}
