import type { GithubWorkflow } from '../types/index.js'

export const GITHUB_WORKFLOWS: Record<GithubWorkflow, string> = {
  'bump-version': 'Bump version',
  'create-release': 'Create release',
  deployment: 'Deployment',
}
