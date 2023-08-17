const StyleDictionary = require('style-dictionary')

const isFinite = require('lodash/fp/isFinite')
const isString = require('lodash/fp/isString')

const {
  isBreakpointOrRadiusSize,
  isMediaQuery,
  isNotBreakpointNorRadiusSize,
} = require('./matchers')

StyleDictionary.registerTransform({
  matcher: isNotBreakpointNorRadiusSize,
  name: 'size/other/pxToRem',
  transformer: (token, options) => {
    if (isString(token.value) && token.value.endsWith('%')) {
      return token.value
    }

    const floatValue = parseFloat(token.value)
    if (!isFinite(floatValue)) {
      return token.value
    }

    if (floatValue === 0) {
      return '0'
    }

    const baseFontSize = (options && options.basePxFontSize) || 16

    return `${floatValue / baseFontSize}rem`
  },
  type: 'value',
})

StyleDictionary.registerTransform({
  matcher: isBreakpointOrRadiusSize,
  name: 'size/breakpoint-radius/px',
  transformer: (token) => {
    if (isString(token.value) && token.value.endsWith('%')) {
      return token.value
    }

    const floatValue = parseFloat(token.value)
    if (!isFinite(floatValue)) {
      return token.value
    }

    if (floatValue === 0) {
      return '0'
    }

    return `${floatValue}px`
  },
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
