import type { PackageManger } from '../types/index.js'

import fs from 'node:fs/promises'

export const getProjectPackageManager = async (): Promise<PackageManger | null> => {
  const dir = await fs.readdir(process.cwd())

  if (dir.includes('bun.lockb')) return 'bun'
  if (dir.includes('package-lock.json')) return 'npm'
  if (dir.includes('pnpm-lock.yaml')) return 'pnpm'
  if (dir.includes('yarn.lock')) return 'yarn'

  return null
}
