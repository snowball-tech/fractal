module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-html'],

  overrides: [
    {
      customSyntax: 'postcss-styled-syntax',
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    },
  ],

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
