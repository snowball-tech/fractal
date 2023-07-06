module.exports = {
  color: {
    text: {
      dark: {
        comment: 'Icon color over light background.',

        value: '{color.base.black.value}',
      },

      light: {
        comment: 'Icon color over dark background.',

        value: '{color.base.white.value}',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      disabled: {
        comment: 'Icon color of most disabled elements.',

        value: '{color.base.grey.70.value}',
      },

      error: {
        comment: 'Icon color for error messages.',

        value: '{color.feedback.error.50.value}',
      },
      success: {
        comment: 'Icon color for success messages.',

        value: '{color.feedback.success.50.value}',
      },
      warning: {
        comment: 'Icon color for warning messages.',

        value: '{color.feedback.warning.50.value}',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      button: {
        display: {
          base: {
            comment: 'Icon color to use on display buttons.',

            value: '{color.base.black.value}',
          },
          hover: {
            comment:
              'Icon color to use when hovering/focusing display buttons.',

            value: '{color.icon.button.display.base.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Icon color to use when clicking/activating a display buttons.',

            value: '{color.icon.button.display.base.value}',
          },
          disabled: {
            comment: 'Icon color to use on disabled display buttons.',

            value: '{color.icon.disabled.value}',
          },
        },
        primary: {
          base: {
            comment: 'Icon color to use on primary buttons.',

            value: '{color.base.white.value}',
          },
          hover: {
            comment:
              'Icon color to use when hovering/focusing primary buttons.',

            value: '{color.base.black.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Icon color to use when clicking/activating a primary buttons.',

            value: '{color.icon.button.primary.hover.value}',
          },
          disabled: {
            comment: 'Icon color to use on disabled primary buttons.',

            value: '{color.icon.button.primary.base.value}',
          },
        },
        secondary: {
          base: {
            comment: 'Icon color to use on secondary buttons.',

            value: '{color.base.black.value}',
          },
          hover: {
            comment:
              'Icon color to use when hovering/focusing secondary buttons.',

            value: '{color.icon.button.secondary.base.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Icon color to use when clicking/activating a secondary buttons.',

            value: '{color.base.white.value}',
          },
          disabled: {
            comment: 'Background color to use on disabled secondary buttons.',

            value: '{color.icon.disabled.value}',
          },
        },
      },

      input: {
        base: {
          comment: 'Icon color to use on input fields.',

          value: '{color.icon.dark.value}',
        },
        hover: {
          comment: 'Icon color to use when hovering input fields.',

          value: '{color.icon.input.base.value}',
        },
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        focus: {
          comment: 'Icon color to use when focusing input fields.',

          value: '{color.icon.input.base.value}',
        },
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        disabled: {
          comment: 'Icon color to use for disabled input fields.',

          value: '{color.icon.disabled.value}',
        },

        error: {
          comment: 'Icon color to use for input fields with "error" feedback.',

          value: '{color.icon.error.value}',
        },
        success: {
          comment:
            'Icon color to use for input fields with "success" feedback.',

          value: '{color.icon.success.value}',
        },
      },
    },
  },
}
