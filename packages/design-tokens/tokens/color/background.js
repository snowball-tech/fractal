module.exports = {
  color: {
    background: {
      body: {
        light: { comment: 'Yellowish White Tone 90', value: '#FFFBF4' },
      },

      disabled: {
        comment:
          'Background color to use on most disabled elements (e.g. buttons).',

        value: '{color.base.grey.70.value}',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      button: {
        display: {
          base: {
            comment:
              'Background color to use on display elements (e.g. buttons).',

            value: '{color.base.white.value}',
          },
          hover: {
            comment:
              'Background color to use when hovering/focusing display elements (e.g. buttons).',

            value: '{color.background.button.display.base.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Background color to use when clicking/activating a display elements (e.g. buttons).',

            value: '{color.background.button.display.base.value}',
          },
          disabled: {
            comment:
              'Background color to use on disabled display elements (e.g. buttons).',

            value: '{color.background.button.display.base.value}',
          },
        },
        primary: {
          base: {
            comment:
              'Background color to use on primary elements (e.g. buttons).',

            value: '{color.base.black.value}',
          },
          hover: {
            comment:
              'Background color to use when hovering/focusing primary elements (e.g. buttons).',

            value: '{color.base.white.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Background color to use when clicking/activating a primary elements (e.g. buttons).',

            value: '{color.brand.primary.value}',
          },
          disabled: {
            comment:
              'Background color to use on disabled primary elements (e.g. buttons).',

            value: '{color.background.disabled.value}',
          },
        },
        secondary: {
          base: {
            comment:
              'Background color to use on secondary elements (e.g. buttons).',

            value: '{color.base.white.value}',
          },
          hover: {
            comment:
              'Background color to use when hovering/focusing secondary elements (e.g. buttons).',

            value: '{color.background.button.secondary.base.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Background color to use when clicking/activating a secondary elements (e.g. buttons).',

            value: '{color.base.black.value}',
          },
          disabled: {
            comment:
              'Background color to use on disabled secondary elements (e.g. buttons).',

            value: '{color.background.button.secondary.base.value}',
          },
        },
      },
    },
  },
}
