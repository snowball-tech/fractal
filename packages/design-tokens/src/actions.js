const path = require('node:path')
const { execSync } = require('node:child_process')

const noop = require('lodash/fp/noop')
const StyleDictionary = require('style-dictionary')

StyleDictionary.registerAction({
  do: () => {
    const constantsPath = path.resolve(__dirname, './constants.js')

    const destinationDirectory = 'dist/web/react/'
    const destinationPath = path.resolve(
      __dirname,
      `../${destinationDirectory}`,
    )

    execSync(
      `yarn to-esm ${constantsPath} --output ${destinationPath} --extension .js --minify --no-comments --noHeader`,
    )
    console.log(`✔︎ ${destinationDirectory}constants.js (ESM)`)
  },
  name: 'react/copy-constants',
  undo: noop,
})
