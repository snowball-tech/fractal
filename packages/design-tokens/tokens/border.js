module.exports = {
  border: {
    none: {
      comment: 'Disable borders.',

      value: 'none',
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    1: {
      comment: 'A subtle border.',

      value: '{size.border.1.value} solid {color.border.default.value}',
    },
    2: {
      comment: 'A more obvious border.',

      value: '{size.border.2.value} solid {color.border.default.value}',
    },

    disabled: {
      comment: 'A subtle border to use on disabled elements (e.g. buttons).',

      value: '{size.border.1.value} solid {color.border.disabled.value}',
    },
  },
}
