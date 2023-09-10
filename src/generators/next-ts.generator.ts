import type { Option, PackageManger } from '../types/index.js'

import { confirm, select, outro } from '@clack/prompts'
import pc from 'picocolors'

import { prettierIgnore, prettierrc, eslintIgnore, eslintNext } from '../templates/index.js'
import { PACKAGE_MANAGER } from '../constants/index.js'
import {
  addFile,
  addLintAndFormatScripts,
  getProjectPackageManager,
  handleCancelPrompt,
  installDependencies,
} from '../utils/index.js'
import { nextDependencies } from '../dependencies/index.js'

export const nextTs = async () => {
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
    eslintNext.extends.push('plugin:tailwindcss/recommended')
    nextDependencies.push('eslint-plugin-tailwindcss')
  }

  await addFile('.prettierrc.json', prettierrc)
  await addFile('.prettierignore', prettierIgnore)
  await addFile('.eslintrc.json', eslintNext)
  await addFile('.eslintignore', eslintIgnore)

  await installDependencies({ dependencies: nextDependencies, packageManager, saveDev: true })

  outro(
    pc.bgCyan(
      pc.black(
        ' Added .editorconfig, .eslintrc.json, .eslintingore, .prettierrc, .prettierignore ',
      ),
    ),
  )
}
