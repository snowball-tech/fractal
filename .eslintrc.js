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
    '@snowball-tech/eslint-config/jest',
    '@snowball-tech/eslint-config/testing-library',
    '@snowball-tech/eslint-config/lodash',
    '@snowball-tech/eslint-config/perfectionist',
    '@snowball-tech/eslint-config/prettier',
  ],

  parserOptions: {
    project: [
      './tsconfig.json',
    ],
    tsconfigRootDir: __dirname,
  },

  root: true,

  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
        typescript: {
          project: [
            './tsconfig.json',
          ],
        },
      },
    },
  },
}
