import type { Option, PackageManger } from '../types/index.js'

import { confirm, spinner as createSpinner, outro, select } from '@clack/prompts'
import colors from 'picocolors'

import { PACKAGE_MANAGER } from '../constants/index.js'
import { huskyDependencies } from '../dependencies/index.js'
import { commitlint } from '../templates/commitlint.template.js'
import {
  addFile,
  execCmd,
  getProjectPackageManager,
  handleCancelPrompt,
  installDependencies,
} from '../utils/index.js'

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

  await execCmd('npx husky init')

  await execCmd('npm pkg set scripts.commitlint="commitlint --edit"')

  await addFile('.husky/commit-msg', `${packageManager} run commitlint \${1}`)

  spinner.stop(`Git hooks installed`)

  outro(colors.bgCyan(colors.black(' Added commit-msg git hook and .commitlintrc.json ')))
}
