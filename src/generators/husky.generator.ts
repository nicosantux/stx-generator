import type { Option, PackageManger } from '../types/index.js'

import { confirm, select, spinner as createSpinner, outro } from '@clack/prompts'
import pc from 'picocolors'

import { commitlint } from '../templates/commitlint.template.js'
import {
  addFile,
  execCmd,
  getProjectPackageManager,
  handleCancelPrompt,
  installDependencies,
} from '../utils/index.js'
import { PACKAGE_MANAGER } from '../constants/index.js'
import { huskyDependencies } from '../dependencies/index.js'

export const husky = async () => {
  try {
    await execCmd('git status')
  } catch (_) {
    const initializeGit = handleCancelPrompt(
      await confirm({
        message: 'You are not in a git repository. Do you want to initialize git?',
        initialValue: true,
      }),
    )

    if (!initializeGit) {
      outro('Santux generator canceled')

      process.exit(0)
    }

    await execCmd('git init')
  }

  let packageManager = await getProjectPackageManager()

  if (!packageManager) {
    packageManager = handleCancelPrompt(
      await select<Option<PackageManger>[], PackageManger>({
        message: 'Which package manager does your project use?',
        options: PACKAGE_MANAGER.map((value) => ({ label: value, value })),
      }),
    )
  }

  await addFile('.commitlintrc.json', commitlint)

  await installDependencies({ dependencies: huskyDependencies, packageManager, saveDev: true })

  const spinner = createSpinner()

  spinner.start(`Installing git hooks`)

  await execCmd('npx husky install')

  await execCmd('npm pkg set scripts.prepare="husky install"')

  await execCmd('npm pkg set scripts.commitlint="commitlint --edit"')

  const cmd = "npx husky add .husky/commit-msg 'pkg run commitlint ${1}'"

  await execCmd(cmd.replace('pkg', packageManager))

  spinner.stop(`Git hooks installed`)

  outro(pc.bgCyan(pc.black(' Added commit-msg git hook and .commitlintrc.json ')))
}
