import type { Option, PackageManger } from '../types/index.js'

import { confirm, outro, select } from '@clack/prompts'
import colors from 'picocolors'

import { PACKAGE_MANAGER } from '../constants/index.js'
import { nextDependencies } from '../dependencies/index.js'
import {
  createEslintConfig,
  editorconfig,
  eslintIgnore,
  prettierIgnore,
  prettierrc,
} from '../templates/index.js'
import {
  addFile,
  addLintAndFormatScripts,
  getProjectPackageManager,
  handleCancelPrompt,
  installDependencies,
} from '../utils/index.js'

export const next = async () => {
  let packageManager = await getProjectPackageManager()

  if (!packageManager) {
    packageManager = handleCancelPrompt(
      await select<Option<PackageManger>[], PackageManger>({
        message: 'Which package manager does your project use?',
        options: PACKAGE_MANAGER.map((value) => ({ label: value, value })),
      }),
    )
  }

  const addScripts = handleCancelPrompt(
    await confirm({
      message: 'Do you want to add lint and format scripts?',
      initialValue: true,
    }),
  )

  const tailwind = handleCancelPrompt(
    await confirm({
      message: 'Does your project use Tailwindcss?',
      initialValue: true,
    }),
  )

  if (addScripts) {
    await addLintAndFormatScripts()
  }

  if (tailwind) {
    prettierrc.plugins = ['prettier-plugin-tailwindcss']
    nextDependencies.push('prettier-plugin-tailwindcss')
  }

  await addFile('.editorconfig', editorconfig)
  await addFile('.prettierrc.json', prettierrc)
  await addFile('.prettierignore', prettierIgnore)
  await addFile('.eslintrc.json', createEslintConfig('next'))
  await addFile('.eslintignore', eslintIgnore)

  await installDependencies({ dependencies: nextDependencies, packageManager, saveDev: true })

  outro(
    colors.bgCyan(
      colors.black(
        ' Added .editorconfig, .eslintrc.json, .eslintingore, .prettierrc, .prettierignore ',
      ),
    ),
  )
}
