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
    const baseConfigFile = path.resolve(__dirname, './tailwind.config.ts')

    const destinationDirectory = 'dist/web/tailwindcss/'
    const destinationPath = path.resolve(
      __dirname,
      `../${destinationDirectory}`,
    )

    execSync(
      `yarn run -T tsc ${baseConfigFile} --outDir ${destinationDirectory} --skipLibCheck --esModuleInterop`,
    )
    console.log(`✔︎ ${destinationDirectory}tailwind.config.js (ESM)`)

    execSync(`cp ${baseConfigFile} ${destinationPath}`)
    console.log(`✔︎ ${destinationDirectory}tailwind.config.ts (TS)`)
  },
  name: 'tailwindcss/copy-config',
  undo: noop,
})
