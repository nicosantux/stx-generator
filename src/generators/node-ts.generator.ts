import type { Option, PackageManger } from '../types/index.js'

import { confirm, select, outro } from '@clack/prompts'
import colors from 'picocolors'

import { PACKAGE_MANAGER } from '../constants/index.js'
import {
  addFile,
  addLintAndFormatScripts,
  getProjectPackageManager,
  handleCancelPrompt,
  installDependencies,
} from '../utils/index.js'
import {
  editorconfig,
  eslintIgnore,
  eslintNode,
  prettierIgnore,
  prettierrc,
} from '../templates/index.js'
import { nodeDependencies } from '../dependencies/index.js'

export const nodeTs = async () => {
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

  if (addScripts) {
    await addLintAndFormatScripts()
  }

  await addFile('.editorconfig', editorconfig)
  await addFile('.prettierrc.json', prettierrc)
  await addFile('.prettierignore', prettierIgnore)
  await addFile('.eslintrc.json', eslintNode)
  await addFile('.eslintignore', eslintIgnore)

  await installDependencies({ dependencies: nodeDependencies, packageManager, saveDev: true })

  outro(
    colors.bgCyan(
      colors.black(
        ' Added .editorconfig, .eslintrc.json, .eslintingore, .prettierrc, .prettierignore ',
      ),
    ),
  )
}
