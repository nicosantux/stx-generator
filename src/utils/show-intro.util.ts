import { intro } from '@clack/prompts'
import colors from 'picocolors'

export const showIntro = () => {
  intro(colors.bgCyan(colors.black(' Welcome to Santux Generator! ')))
}
