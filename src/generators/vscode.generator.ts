import fs from 'node:fs/promises'

import { confirm, outro } from '@clack/prompts'
import colors from 'picocolors'

import { extensions, settings } from '../templates/index.js'
import { addFile, handleCancelPrompt } from '../utils/index.js'

export const vscode = async () => {
  const tailwind = handleCancelPrompt(
    await confirm({
      message: 'Does your project use Tailwindcss?',
      initialValue: true,
    }),
  )

  if (tailwind) {
    extensions.recommendations.push('bradlc.vscode-tailwindcss')
  }

  await fs.mkdir('.vscode', { recursive: true })

  await addFile('.vscode/settings.json', settings)
  await addFile('.vscode/extensions.json', extensions)

  outro(
    colors.bgCyan(
      colors.black(' settings.json and extensions.json have been added to the .vscode folder '),
    ),
  )
}
