module.exports = {
  color: {
    text: {
      dark: {
        comment: 'Color to use for texts over light background.',

        value: '{color.base.black.value}',
      },

      light: {
        comment: 'Color to use for texts over dark background.',

        value: '{color.base.white.value}',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      disabled: {
        comment: 'Color to use for texts of disabled elements',

        value: '#B7B1A6',
      },
    },
  },
}
