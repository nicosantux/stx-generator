export const extensions = {
  recommendations: [
    'dbaeumer.vscode-eslint',
    'EditorConfig.EditorConfig',
    'esbenp.prettier-vscode',
  ],
}

export const settings = {
  'editor.formatOnSave': true,
  'editor.codeActionsOnSave': {
    'source.fixAll.eslint': true,
  },
}
