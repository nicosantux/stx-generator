import { isCancel, cancel } from '@clack/prompts'

export const handleCancelPrompt = <T>(value: T | symbol) => {
  if (isCancel(value)) {
    cancel('Santux generator aborted')

    process.exit(0)
  }

  return value
}
