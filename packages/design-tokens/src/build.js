const StyleDictionary = require('style-dictionary')

require('./actions')
require('./formats')
require('./transforms')

const config = require('../config')

const platforms = Object.keys(config.platforms)

let message = `Building design tokens on ${platforms.length} platform${
  platforms.length > 1 ? 's' : ''
}:`
message =
  platforms.length > 1
    ? `${message} ${platforms.slice(0, -1).join(', ')} and ${platforms.at(-1)}`
    : `${message} ${platforms[0]}`
console.info(`${message}...`)

const sdInstance = StyleDictionary.extend(config)

platforms.forEach((platform) => {
  sdInstance.buildPlatform(platform)
})

console.log('')
console.info(
  `${platforms.length} platform${platforms.length > 1 ? 's' : ''} built!`,
)
