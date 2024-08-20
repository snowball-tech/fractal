const isEmpty = require('lodash/fp/isEmpty')

const { breakpoints } = require('../../src/constants')

const breakpointsValues = {
  [breakpoints.xxs]: {
    value: 0,
  },

  [breakpoints.xs]: {
    value: 350,
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
}

const mediaQuery = {
  from: {},
  max: {},
  only: {},
  to: {},
}
Object.values(breakpoints).forEach((breakpoint, index) => {
  const nextBreakpoint = Object.values(breakpoints)[index + 1]

  const upTo = {}
  Object.values(breakpoints).forEach((secondaryBreakpoint, index_) => {
    if (index_ > index) {
      upTo[secondaryBreakpoint] = {
        value: `(min-width: {size.breakpoint.${breakpoint}.value}) and (max-width: ${
          breakpointsValues[secondaryBreakpoint].value - 1
        }px)`,
      }

      if (index_ === index + 1) {
        mediaQuery.only[breakpoint] = upTo[secondaryBreakpoint]
      }
    }
  })

  mediaQuery[breakpoint] = {
    value: `(min-width: {size.breakpoint.${breakpoint}.value})`,
  }
  mediaQuery.from[breakpoint] = mediaQuery[breakpoint]

  if (!isEmpty(nextBreakpoint)) {
    mediaQuery.max[nextBreakpoint] = {
      value: `(max-width: ${breakpointsValues[nextBreakpoint].value - 1}px)`,
    }
    mediaQuery.to[nextBreakpoint] = mediaQuery.max[nextBreakpoint]
  }
  mediaQuery[breakpoint] = { upTo }
  console.log(mediaQuery)
})

module.exports = {
  mediaQuery,

  size: {
    breakpoint: breakpointsValues,
  },
}
