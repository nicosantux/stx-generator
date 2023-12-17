export const extensions = {
  recommendations: [
    'dbaeumer.vscode-eslint',
    'EditorConfig.EditorConfig',
    'esbenp.prettier-vscode',
  ],
}

export const settings = {
  'editor.defaultFormatter': 'esbenp.prettier-vscode',
  'editor.formatOnSave': true,
  'editor.codeActionsOnSave': {
    'source.fixAll': 'explicit',
  },
}
