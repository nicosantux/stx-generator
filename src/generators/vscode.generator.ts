import fs from 'node:fs/promises'

import pc from 'picocolors'
import { confirm, outro } from '@clack/prompts'

import { extensions } from '../templates/index.js'
import { addGeneratorFiles, handleCancelPrompt } from '../utils/index.js'

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

  addGeneratorFiles('vscode')

  outro(
    pc.bgCyan(
      pc.black(' settings.json and extensions.json have been added to the .vscode folder '),
    ),
  )
}
