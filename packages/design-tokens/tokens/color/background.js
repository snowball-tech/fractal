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
            comment: 'Background color to use on display buttons.',

            value: '{color.base.white.value}',
          },
          hover: {
            comment:
              'Background color to use when hovering/focusing display buttons.',

            value: '{color.background.button.display.base.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Background color to use when clicking/activating a display buttons.',

            value: '{color.background.button.display.base.value}',
          },
          disabled: {
            comment: 'Background color to use on disabled display buttons.',

            value: '{color.background.button.display.base.value}',
          },
        },
        primary: {
          base: {
            comment: 'Background color to use on primary buttons.',

            value: '{color.base.black.value}',
          },
          hover: {
            comment:
              'Background color to use when hovering/focusing primary buttons.',

            value: '{color.base.white.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Background color to use when clicking/activating a primary buttons.',

            value: '{color.brand.primary.value}',
          },
          disabled: {
            comment: 'Background color to use on disabled primary buttons.',

            value: '{color.background.disabled.value}',
          },
        },
        secondary: {
          base: {
            comment: 'Background color to use on secondary buttons.',

            value: '{color.base.white.value}',
          },
          hover: {
            comment:
              'Background color to use when hovering/focusing secondary buttons.',

            value: '{color.background.button.secondary.base.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Background color to use when clicking/activating a secondary buttons.',

            value: '{color.base.black.value}',
          },
          disabled: {
            comment: 'Background color to use on disabled secondary buttons.',

            value: '{color.background.button.secondary.base.value}',
          },
        },
      },
    },
  },
}
