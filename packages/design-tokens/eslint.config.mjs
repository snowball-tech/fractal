// eslint-disable-next-line import/no-relative-packages
import defaultConfig from '../../eslint.config.mjs'

export default [
  ...defaultConfig,

  {
    files: ['src/tailwind.config.ts'],

    rules: {
      'import/no-unresolved': 'off',
    },
  },
]
