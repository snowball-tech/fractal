module.exports = {
  color: {
    text: {
      dark: {
        comment: 'Text color over light background.',

        value: '{color.base.black.value}',
      },

      light: {
        comment: 'Text color over dark background.',

        value: '{color.base.white.value}',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      disabled: {
        comment: 'Text color of most disabled elements',

        value: '#B7B1A6',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      button: {
        display: {
          base: {
            comment: 'Text color to use on display elements (e.g. buttons).',

            value: '{color.base.black.value}',
          },
          hover: {
            comment:
              'Background color to use when hovering/focusing display elements (e.g. buttons).',

            value: '{color.text.button.display.base.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Background color to use when clicking/activating a display elements (e.g. buttons).',

            value: '{color.text.button.display.base.value}',
          },
          disabled: {
            comment:
              'Background color to use on disabled display elements (e.g. buttons).',

            value: '{color.base.grey.50.value}',
          },
        },
        primary: {
          base: {
            comment: 'Text color to use on primary elements (e.g. buttons).',

            value: '{color.base.white.value}',
          },
          hover: {
            comment:
              'Background color to use when hovering/focusing primary elements (e.g. buttons).',

            value: '{color.base.black.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Background color to use when clicking/activating a primary elements (e.g. buttons).',

            value: '{color.text.button.primary.hover.value}',
          },
          disabled: {
            comment:
              'Background color to use on disabled primary elements (e.g. buttons).',

            value: '{color.text.button.primary.base.value}',
          },
        },
        secondary: {
          base: {
            comment:
              'Background color to use on secondary elements (e.g. buttons).',

            value: '{color.base.black.value}',
          },
          hover: {
            comment:
              'Background color to use when hovering/focusing secondary elements (e.g. buttons).',

            value: '{color.text.button.secondary.base.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Background color to use when clicking/activating a secondary elements (e.g. buttons).',

            value: '{color.base.white.value}',
          },
          disabled: {
            comment:
              'Background color to use on disabled secondary elements (e.g. buttons).',

            value: '{color.base.grey.50.value}',
          },
        },
      },
    },
  },
}
