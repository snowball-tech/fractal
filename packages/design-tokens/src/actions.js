const path = require('node:path')
const { execSync } = require('node:child_process')

const noop = require('lodash/fp/noop')
const StyleDictionary = require('style-dictionary')

StyleDictionary.registerAction({
  do: () => {
    const constantsPath = path.resolve(__dirname, './constants.js')

    const destinationDirectory = 'dist/web/typescript/'
    const destinationPath = path.resolve(
      __dirname,
      `../${destinationDirectory}`,
    )

    execSync(
      `yarn to-esm ${constantsPath} --output ${destinationPath} --extension .js --minify --no-comments --noHeader`,
    )
    console.log(`✔︎ ${destinationDirectory}constants.js (ESM)`)
  },
  name: 'typescript/copy-constants',
  undo: noop,
})

StyleDictionary.registerAction({
  do: () => {
    const destinationDirectory = 'dist/web/'

    execSync(`yarn run -T tsc --outDir ${destinationDirectory}`)
    console.log(
      `✔︎ ${destinationDirectory}/tailwindcss/tailwind.config.js (ESM)`,
    )
    console.log(
      `✔︎ ${destinationDirectory}/tailwindcss/tailwind.theme.js (ESM)`,
    )
  },
  name: 'tailwindcss/copy-config',
  undo: noop,
})
