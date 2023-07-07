module.exports = {
  shadow: {
    none: {
      comment: 'Disable shadow.',

      value: 'none',
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    brutal: {
      1: {
        comment:
          'A subtle shadow, always combined with radius or rounded shapes and with border-1.',

        value: '-2px 2px 0 0 rgba(0, 0, 0, 1)',
      },
      2: {
        comment:
          'A proeminent shadow, always combined with radius or rounded shapes and with border-1 or border-2.',

        value: '-2px 4px 0 0 rgba(0, 0, 0, 1)',
      },
    },
  },
}
