// Those matcher are defined to customize transformation of tokens.

function isIgnored(token) {
  return token.original.ignore === true
}

function isSize(token) {
  return token.attributes.category === 'size' || token.original.group === 'size'
}

function isBreakpointOrRadiusSize(token) {
  return (
    !isIgnored(token) &&
    isSize(token) &&
    ['breakpoint', 'radius'].includes(token.attributes.type)
  )
}

function isNotBreakpointNorRadiusSize(token) {
  return (
    !isIgnored(token) &&
    isSize(token) &&
    !['breakpoint', 'radius'].includes(token.attributes.type)
  )
}

function isMediaQuery(token) {
  return (
    (!isIgnored(token) && token.attributes.category === 'mediaQuery') ||
    token.original.group === 'mediaQuery'
  )
}

module.exports = {
  isBreakpointOrRadiusSize,
  isIgnored,
  isMediaQuery,
  isNotBreakpointNorRadiusSize,
  isSize,
}
