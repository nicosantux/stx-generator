import type { PackageManger } from '../types/index.js'

import { spinner as createSpinner } from '@clack/prompts'
import colors from 'picocolors'

import { execCmd } from './index.js'

interface InstallDependencies {
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
    `${colors.bgCyan(colors.black(' Dependencies installed: '))}
${colors.gray('│')}
${dependencies.map((dep) => `${colors.gray('│ ')} ${dep}`).join('\n')}`,
  )
}
