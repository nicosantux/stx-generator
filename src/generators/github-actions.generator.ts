import type { GithubWorkflow, Option } from '../types/index.js'

import fs from 'node:fs/promises'

import { multiselect, outro } from '@clack/prompts'
import colors from 'picocolors'

import { GITHUB_WORKFLOWS } from '../constants/index.js'
import { addGithubWorkflow, handleCancelPrompt } from '../utils/index.js'

export const githubActions = async () => {
  const ghActions = handleCancelPrompt(
    await multiselect<Option<GithubWorkflow>[], GithubWorkflow>({
      message: 'Select the workflows you want to add',
      options: Object.entries(GITHUB_WORKFLOWS).map(
        ([value, label]) => ({ label, value }) as { label: string; value: GithubWorkflow },
      ),
      required: true,
    }),
  )

  await fs.mkdir('.github', { recursive: true })
  await fs.mkdir('.github/workflows', { recursive: true })

  const workflowsPromises = []

  for (const workflow of ghActions) {
    workflowsPromises.push(addGithubWorkflow(workflow))
  }

  await Promise.all(workflowsPromises)

  outro(
    colors.bgCyan(
      colors.black(
        ` ${new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(
          ghActions,
        )} workflow has been added `,
      ),
    ),
  )
}
