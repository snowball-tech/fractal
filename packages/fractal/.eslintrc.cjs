require('@snowball-tech/eslint-config/patch')

module.exports = {
  extends: [
    '@snowball-tech/eslint-config/base',
    '@snowball-tech/eslint-config/html',
    '@snowball-tech/eslint-config/json',
    '@snowball-tech/eslint-config/markdown',
    '@snowball-tech/eslint-config/yml',
    '@snowball-tech/eslint-config/secrets',
    '@snowball-tech/eslint-config/import',
    '@snowball-tech/eslint-config/typescript',
    '@snowball-tech/eslint-config/react',
    '@snowball-tech/eslint-config/lodash',
    '@snowball-tech/eslint-config/storybook',
    '@snowball-tech/eslint-config/perfectionist',
    '@snowball-tech/eslint-config/prettier',
  ],

  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },

  rules: {
    '@typescript-eslint/no-misused-promises': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
  },

  settings: {
    'import/ignore': [
      '@snowball-tech/fractal-panda',
      '@iconscout/react-unicons',
    ],
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json'],
      },
    },
  },
}
