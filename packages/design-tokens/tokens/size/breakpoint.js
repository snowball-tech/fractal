const { breakpoints } = require('../../src/constants')

const mediaQuery = {
  from: {},
  to: {},
}
Object.values(breakpoints).forEach((breakpoint, i) => {
  const upTo = {}
  Object.values(breakpoints).forEach((secondaryBreakpoint, j) => {
    if (j > i) {
      upTo[secondaryBreakpoint] = {
        value: `(min-width: {size.breakpoint.${breakpoint}.value}) and (max-width: {size.breakpoint.${secondaryBreakpoint}.value})`,
      }
    }
  })

  mediaQuery.from[breakpoint] = {
    value: `(min-width: {size.breakpoint.${breakpoint}.value})`,
  }
  mediaQuery.to[breakpoint] = {
    value: `(max-width: {size.breakpoint.${breakpoint}.value})`,
  }
  mediaQuery[breakpoint] = { upTo }
})

module.exports = {
  mediaQuery,

  size: {
    breakpoint: {
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

      [breakpoints['2xl']]: {
        value: 1536,
      },
      /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
    },
  },
}
