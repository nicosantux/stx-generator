import type { PackageManger } from '../types/index.js'

import { spinner as createSpinner } from '@clack/prompts'
import pc from 'picocolors'

import { execCmd } from './index.js'

type InstallDependencies = {
  dependencies: string[]
  packageManager: PackageManger
  saveDev?: boolean
}

export const installDependencies = async ({
  dependencies,
  packageManager,
  saveDev,
}: InstallDependencies) => {
  const spinner = createSpinner()

  const installCmd = packageManager === 'npm' ? 'install' : 'add'
  const saveExact = packageManager === 'bun' ? '--exact' : '-E'

  spinner.start(`Installing dependencies via ${packageManager}`)

  await execCmd(
    `${packageManager} ${installCmd} ${dependencies.join(' ')} ${saveExact} ${saveDev ? '-D' : ''}`,
  )

  spinner.stop(
    `${pc.bgCyan(pc.black(' Dependencies installed: '))}
${pc.gray('│')}
${dependencies.map((dep) => `${pc.gray('│ ')} ${dep}`).join('\n')}`,
  )
}
