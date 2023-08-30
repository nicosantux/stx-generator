import fs from 'node:fs/promises'
import path from 'node:path'

import pc from 'picocolors'
import { confirm, outro } from '@clack/prompts'

import { extensions, settings } from '../templates/index.js'
import { handleCancelPrompt, writeJSON } from '../utils/index.js'

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

  await writeJSON(path.join(process.cwd(), '.vscode/extensions.json'), extensions)
  await writeJSON(path.join(process.cwd(), '.vscode/settings.json'), settings)

  outro(
    pc.bgCyan(
      pc.black(' settings.json and extensions.json have been added to the .vscode folder '),
    ),
  )
}
