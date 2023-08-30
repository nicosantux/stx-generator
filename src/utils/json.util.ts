import fs from 'node:fs/promises'

export const readJSON = async (path: string) => {
  return JSON.parse(await fs.readFile(path, 'utf8'))
}

export const writeJSON = async (destination: string, file: unknown) => {
  await fs.writeFile(destination, JSON.stringify(file, null, 2), 'utf8')
}
