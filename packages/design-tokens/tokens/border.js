module.exports = {
  border: {
    none: {
      comment: 'Disable borders.',

      value: 'none',
    },

    //
    1: {
      comment: 'A subtle border.',

      value: '{size.border.1.value} solid {color.border.default.value}',
    },
    2: {
      comment: 'A more obvious border.',

      value: '{size.border.2.value} solid {color.border.default.value}',
    },

    disabled: {
      comment:
        'A border to use on disabled elements (e.g. buttons, input, ...).',

      value: '{size.border.1.value} solid {color.border.disabled.value}',
    },

    transparent: {
      1: {
        comment: 'A transparent 1px border.',

        value: '{size.border.1.value} solid {color.base.transparent.value}',
      },
      2: {
        comment: 'A transparent 2px border.',

        value: '{size.border.2.value} solid {color.base.transparent.value}',
      },
    },
  },
}
