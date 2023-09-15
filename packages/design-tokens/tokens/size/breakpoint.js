const isEmpty = require('lodash/fp/isEmpty')

const { breakpoints } = require('../../src/constants')

const breakpointsValues = {
  /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
  [breakpoints.xs]: {
    value: 0,
  },

  [breakpoints.sm]: {
    value: 640,
  },

  [breakpoints.md]: {
    value: 768,
  },

  [breakpoints.lg]: {
    value: 1024,
  },

  [breakpoints.xl]: {
    value: 1280,
  },

  [breakpoints.xxl]: {
    value: 1536,
  },
  /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
}

const mediaQuery = {
  from: {},
  to: {},
}
Object.values(breakpoints).forEach((breakpoint, i) => {
  const nextBreakpoint = Object.values(breakpoints)[i + 1]

  const upTo = {}
  Object.values(breakpoints).forEach((secondaryBreakpoint, j) => {
    if (j > i) {
      upTo[secondaryBreakpoint] = {
        value: `(min-width: {size.breakpoint.${breakpoint}.value}) and (max-width: ${
          breakpointsValues[secondaryBreakpoint].value - 1
        }px)`,
      }
    }
  })

  mediaQuery.from[breakpoint] = {
    value: `(min-width: {size.breakpoint.${breakpoint}.value})`,
  }

  if (!isEmpty(nextBreakpoint)) {
    mediaQuery.to[breakpoint] = {
      value: `(max-width: ${breakpointsValues[nextBreakpoint].value - 1}px)`,
    }
  }
  mediaQuery[breakpoint] = { upTo }
})

module.exports = {
  mediaQuery,

  size: {
    breakpoint: breakpointsValues,
  },
}
