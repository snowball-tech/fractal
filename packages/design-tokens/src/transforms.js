const StyleDictionary = require('style-dictionary')

const {
  isBreakpointOrRadiusSize,
  isMediaQuery,
  isNotBreakpointNorRadiusSize,
} = require('./matchers')

StyleDictionary.registerTransform({
  matcher: isNotBreakpointNorRadiusSize,
  name: 'size/other/pxToRem',
  transformer: StyleDictionary.transform['size/pxToRem'].transformer,
  type: 'value',
})

StyleDictionary.registerTransform({
  matcher: isBreakpointOrRadiusSize,
  name: 'size/breakpoint-radius/px',
  transformer: StyleDictionary.transform['size/px'].transformer,
  type: 'value',
})

StyleDictionary.registerTransform({
  matcher: isMediaQuery,
  name: 'media-query/quote',
  transformer: (token) => `'${token.value}'`,
  transitive: true,
  type: 'value',
})

module.exports = {}
