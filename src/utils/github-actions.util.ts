import type { GithubWorkflow } from '../types/index.js'

import { text } from '@clack/prompts'

import { bumpVersion, createRelease, deployment } from '../templates/index.js'

import { addFile } from './add-file.util.js'
import { handleCancelPrompt } from './handle-cancel-prompt.util.js'

export const addGithubWorkflow = async (workflow: GithubWorkflow) => {
  if (workflow === 'bump-version') {
    await addBumpVersionWorkflow()

    return
  }

  if (workflow === 'create-release') {
    await addCreateReleaseWorkflow()

    return
  }

  await addDeploymentWorkflow()
}

const addBumpVersionWorkflow = async () => {
  const username = handleCancelPrompt(
    await text({
      message: 'Enter your git username:',
      placeholder: 'John Doe',
      validate(value) {
        if (!value.trim().length) return 'Username is required'
        if (value.trim().length < 3) return 'Username must have at least 3 characters'
      },
    }),
  )

  const email = handleCancelPrompt(
    await text({
      message: 'Enter your git email:',
      placeholder: 'johndoe@gmail.com',
      validate(value) {
        const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (!emailRegexp.test(value)) return 'Enter a valid email'
      },
    }),
  )

  await addFile(
    '.github/workflows/bump-version.yml',
    bumpVersion.replace('GIT_USERNAME', username).replace('GIT_EMAIL', email),
  )
}

const addCreateReleaseWorkflow = async () => {
  await addFile('.github/workflows/create-release.yml', createRelease)
}

const addDeploymentWorkflow = async () => {
  await addFile('.github/workflows/deployment.yml', deployment)
}
