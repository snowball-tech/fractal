module.exports = {
  allowEmptyInput: true,

  extends: ['stylelint-config-standard', 'stylelint-config-html'],

  ignoreFiles: [
    '.*',
    '!.*.cjs',
    '!.*.js',
    '!.*.jsx',
    '!.*.mjs',
    '!.*.ts',
    '!.*.tsx',
    '!.github',
    '!.storybook',
    '!.vscode',
    '.pnp.*',
    '*.lock',
    '*.tsbuildinfo',
    '**/dist',
    '**/build',
    '**/out',
    '**/storybook-static',
    '**/coverage',
    '**/node_modules',
    '*.mdx',
    'LICENSE',
  ],

  overrides: [
    {
      customSyntax: 'postcss-styled-syntax',
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    },
  ],

  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,

  rules: {
    'declaration-empty-line-before': null,
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(--?[a-z0-9]+)*$',
      {
        message: (selector) =>
          `Expected class selector "${selector}" to be kebab-case/BEM-style`,
      },
    ],
    'selector-id-pattern': [
      '^([a-z][a-z0-9]*)(--?[a-z0-9]+)*$',
      {
        message: (selector) =>
          `Expected id selector "${selector}" to be kebab-case/BEM-style`,
      },
    ],
  },
}
