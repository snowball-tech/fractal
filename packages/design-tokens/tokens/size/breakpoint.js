const { breakpoints } = require('../../src/constants')

module.exports = {
  size: {
    breakpoint: {
      [breakpoints.xs]: {
        group: 'size',
        value: 0,
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      [breakpoints.sm]: {
        group: 'size',
        value: 640,
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      [breakpoints.md]: {
        group: 'size',
        value: 768,
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      [breakpoints.lg]: {
        group: 'size',
        value: 1024,
      },

      [breakpoints.xl]: {
        group: 'size',
        value: 1280,
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      [breakpoints['2xl']]: {
        group: 'size',
        value: 1536,
      },
    },
  },
}
