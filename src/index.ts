#!/usr/bin/env node

import type { Generator, Option } from './types/index.js'

import { intro, select } from '@clack/prompts'
import colors from 'picocolors'

import { handleCancelPrompt } from './utils/index.js'
import { GENERATORS_OPTIONS } from './constants/generator.constant.js'
import { RUN_GENERATOR } from './generators/index.js'

intro(colors.bgCyan(colors.black(' Welcome to Santux Generator! ')))

const option = handleCancelPrompt(
  await select<Option<Generator>[], Generator>({
    message: 'Select the generator you want to run',
    options: Object.entries(GENERATORS_OPTIONS).map(
      ([value, label]) => ({ label, value }) as { label: string; value: Generator },
    ),
  }),
)

RUN_GENERATOR[option]()
