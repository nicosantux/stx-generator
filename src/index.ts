#!/usr/bin/env node

import { Argument, Command } from '@commander-js/extra-typings'

import { RUN_GENERATOR } from './generators/index.js'
import { GENERATOR } from './types/generator.type.js'
import { launchGenerator, showIntro } from './utils/index.js'

const program = new Command('stx-generator')
  .description('Generators for bootstrapping your project configurations.')
  .action(launchGenerator)

program
  .command('run')
  .description('Run a specific generator')
  .addArgument(new Argument('<generator>', 'The generator to run').choices(GENERATOR))
  .action(async (value) => {
    showIntro()
    await RUN_GENERATOR[value]()
  })
  .showHelpAfterError('\nRun stx-generator run -h for help\n')

program.parse(process.argv)
