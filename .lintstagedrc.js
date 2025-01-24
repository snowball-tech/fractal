module.exports = {
  '!*.{js,cjs,mjs,jsx,ts,tsx,json,json5,jsonc,yml,yaml,md,mdx,css,html}': [
    'prettier --ignore-unknown --cache --write',
  ],
  '*.{js,cjs,mjs,ts,json,json5,jsonc,mdx,yml,yaml,md}': [
    'eslint --cache --fix',
    'prettier --ignore-unknown --cache --write',
  ],
  '*.{jsx,tsx,css,html}': [
    'eslint --cache --fix',
    'prettier --ignore-unknown --cache --write',
  ],
}
