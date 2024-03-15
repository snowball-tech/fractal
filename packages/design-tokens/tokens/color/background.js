module.exports = {
  color: {
    background: {
      body: {
        black: {
          comment: 'Black Tone 0',
          value: '{color.base.black.value}',
        },
        dark: {
          comment: 'Black',
          value: '{color.brand.body.dark.value}',
        },
        default: {
          comment: 'Default background color',
          value: '{color.brand.body.light.value}',
        },
        light: {
          comment: 'Yellowish White Tone 90',
          value: '{color.brand.body.light.value}',
        },
        primary: {
          comment: 'Primary color for background',
          value: '{color.brand.primary.value}',
        },
        secondary: {
          comment: 'Secondary color for background',
          value: '{color.brand.secondary.value}',
        },
        white: {
          comment: 'White Tone 100',
          value: '{color.base.white.value}',
        },
      },

      disabled: {
        comment:
          'Background color to use on most disabled elements (e.g. buttons).',

        value: '{color.base.grey.70.value}',
      },
    },
  },
}
