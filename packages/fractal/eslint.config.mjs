/* eslint-disable import/extensions */

import base from '@snowball-tech/eslint-snowball-config/configs/base.js'
import html from '@snowball-tech/eslint-snowball-config/configs/html.js'
import importConfig from '@snowball-tech/eslint-snowball-config/configs/import.js'
import json from '@snowball-tech/eslint-snowball-config/configs/json.js'
import lodash from '@snowball-tech/eslint-snowball-config/configs/lodash.js'
import markdown from '@snowball-tech/eslint-snowball-config/configs/markdown.js'
import perfectionist from '@snowball-tech/eslint-snowball-config/configs/perfectionist.js'
import prettier from '@snowball-tech/eslint-snowball-config/configs/prettier.js'
import react from '@snowball-tech/eslint-snowball-config/configs/react.js'
import secrets from '@snowball-tech/eslint-snowball-config/configs/secrets.js'
import tailwind from '@snowball-tech/eslint-snowball-config/configs/tailwind.js'
import typescript from '@snowball-tech/eslint-snowball-config/configs/typescript.js'
import yml from '@snowball-tech/eslint-snowball-config/configs/yml.js'

export default [
  ...base,
  ...html,
  ...json,
  ...markdown,
  ...yml,
  ...secrets,
  ...importConfig,
  ...react,
  ...typescript,
  ...lodash,
  ...perfectionist,
  ...tailwind,
  ...prettier,

  {
    files: ['README.md/*.{js,ts,tsx}'],

    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]
