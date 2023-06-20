const ora = require('ora')
const StyleDictionary = require('style-dictionary')

require('./actions')
require('./formats')
require('./transforms')

const config = require('../config')

const platforms = Object.keys(config.platforms)

let message = `Building design tokens on ${platforms.length} platform${
  platforms.length > 1 ? 's' : ''
}:`
if (platforms.length > 1) {
  message = `${message} ${platforms.slice(0, -1).join(', ')} and ${
    platforms[platforms.length - 1]
  }`
} else {
  message = `${message} ${platforms[0]}`
}
ora().info(`${message}...`)

const sdInstance = StyleDictionary.extend(config)

platforms.forEach((platform) => {
  sdInstance.buildPlatform(platform)
})

console.log('')
ora().succeed(
  `${platforms.length} platform${platforms.length > 1 ? 's' : ''} built!`,
)
