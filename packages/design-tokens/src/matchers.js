// Those matcher are defined to customize transformation of tokens.

function isIgnored(token) {
  return token.original.ignore === true
}

function isSize(token) {
  return token.attributes.category === 'size' || token.original.group === 'size'
}

function isBreakpointOrBorderOrRadiusSize(token) {
  return (
    !isIgnored(token) &&
    isSize(token) &&
    ['border', 'breakpoint', 'radius'].includes(token.attributes.type)
  )
}

function isNotBreakpointNorBorderNorRadiusSize(token) {
  return (
    !isIgnored(token) &&
    isSize(token) &&
    !['border', 'breakpoint', 'radius'].includes(token.attributes.type)
  )
}

function isMediaQuery(token) {
  return (
    (!isIgnored(token) && token.attributes.category === 'mediaQuery') ||
    token.original.group === 'mediaQuery'
  )
}

module.exports = {
  isBreakpointOrBorderOrRadiusSize,
  isIgnored,
  isMediaQuery,
  isNotBreakpointNorBorderNorRadiusSize,
  isSize,
}
