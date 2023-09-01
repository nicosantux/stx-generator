import type { PackageManger, GeneratorLintDeps } from '../types/index.js'

import { spinner as createSpinner } from '@clack/prompts'
import pc from 'picocolors'

import { GENERATORS_LINT_DEPENDENCIES } from '../constants/index.js'

import { execCmd } from './index.js'

type InstallDependencies = {
  generator: GeneratorLintDeps
  packageManager: PackageManger
  tailwind?: boolean
}

export const installDependencies = async ({
  generator,
  packageManager,
  tailwind = false,
}: InstallDependencies) => {
  const spinner = createSpinner()

  const installCmd = packageManager === 'npm' ? 'install' : 'add'

  const tailwindPlugin = tailwind ? 'eslint-plugin-tailwindcss' : ''

  spinner.start(`Installing dependencies via ${packageManager}`)

  await execCmd(
    `${packageManager} ${installCmd} -D -E ${GENERATORS_LINT_DEPENDENCIES[generator].join(
      ' ',
    )} ${tailwindPlugin}`,
  )

  spinner.stop(
    `${pc.bgCyan(pc.black(' Dependencies installed: '))}
${pc.gray('│')}
${GENERATORS_LINT_DEPENDENCIES[generator].map((dep) => `${pc.gray('│ ')} ${dep}`).join('\n')}`,
  )
}
