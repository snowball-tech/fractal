const StyleDictionary = require('style-dictionary')

const {
  isBreakpointOrBorderOrRadiusSize,
  isNotBreakpointNorBorderNorRadiusSize,
} = require('./matchers')

StyleDictionary.registerTransform({
  matcher: isNotBreakpointNorBorderNorRadiusSize,
  name: 'size/other/pxToRem',
  transformer: StyleDictionary.transform['size/pxToRem'].transformer,
  type: 'value',
})

StyleDictionary.registerTransform({
  matcher: isBreakpointOrBorderOrRadiusSize,
  name: 'size/breakpoint-border-radius/px',
  transformer: StyleDictionary.transform['size/px'].transformer,
  type: 'value',
})

module.exports = {}
