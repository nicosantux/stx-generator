import type { Generator, Option } from '../types/index.js'

import { select } from '@clack/prompts'

import { GENERATORS_OPTIONS } from '../constants/index.js'
import { RUN_GENERATOR } from '../generators/index.js'

import { handleCancelPrompt } from './handle-cancel-prompt.util.js'
import { showIntro } from './show-intro.util.js'

export const launchGenerator = async () => {
  showIntro()

  const option = handleCancelPrompt(
    await select<Option<Generator>[], Generator>({
      message: 'Select the generator you want to run',
      options: Object.entries(GENERATORS_OPTIONS).map(
        ([value, label]) => ({ label, value }) as { label: string; value: Generator },
      ),
    }),
  )

  await RUN_GENERATOR[option]()
}
