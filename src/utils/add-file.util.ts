import fs from 'node:fs/promises'
import path from 'node:path'

import { writeJSON } from './json.util.js'

export const addFile = async (destination: string, file: unknown) => {
  destination.endsWith('json')
    ? await writeJSON(path.join(process.cwd(), destination), file)
    : await fs.writeFile(path.join(process.cwd(), destination), file as string)
}
