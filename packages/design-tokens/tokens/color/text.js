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
        comment: 'Text color of most disabled elements.',

        value: '{color.base.grey.70.value}',
      },

      placeholder: {
        comment: 'Text color for placeholders.',

        value: '{color.base.grey.50.value}',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      error: {
        comment: 'Text color for error messages.',

        value: '{color.feedback.danger.50.value}',
      },
      success: {
        comment: 'Text color for success messages.',

        value: '{color.feedback.success.50.value}',
      },
      warning: {
        comment: 'Text color for warning messages.',

        value: '{color.feedback.warning.50.value}',
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      button: {
        display: {
          base: {
            comment: 'Text color to use on display buttons.',

            value: '{color.base.black.value}',
          },
          hover: {
            comment:
              'Text color to use when hovering/focusing display buttons.',

            value: '{color.text.button.display.base.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Text color to use when clicking/activating a display buttons.',

            value: '{color.text.button.display.base.value}',
          },
          disabled: {
            comment: 'Text color to use on disabled display buttons.',

            value: '{color.text.disabled.value}',
          },
        },
        primary: {
          base: {
            comment: 'Text color to use on primary buttons.',

            value: '{color.base.white.value}',
          },
          hover: {
            comment:
              'Text color to use when hovering/focusing primary buttons.',

            value: '{color.base.black.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Text color to use when clicking/activating a primary buttons.',

            value: '{color.text.button.primary.hover.value}',
          },
          disabled: {
            comment: 'Text color to use on disabled primary buttons.',

            value: '{color.text.button.primary.base.value}',
          },
        },
        secondary: {
          base: {
            comment: 'Text color to use on secondary buttons.',

            value: '{color.base.black.value}',
          },
          hover: {
            comment:
              'Text color to use when hovering/focusing secondary buttons.',

            value: '{color.text.button.secondary.base.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            comment:
              'Text color to use when clicking/activating a secondary buttons.',

            value: '{color.base.white.value}',
          },
          disabled: {
            comment: 'Text color to use on disabled secondary buttons.',

            value: '{color.text.disabled.value}',
          },
        },
      },

      input: {
        base: {
          comment: 'Text color to use on input fields.',

          value: '{color.text.dark.value}',
        },
        hover: {
          comment: 'Text color to use when hovering input fields.',

          value: '{color.text.input.base.value}',
        },
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        focus: {
          comment: 'Text color to use when focusing input fields.',

          value: '{color.text.input.base.value}',
        },
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        disabled: {
          comment: 'Text color to use for disabled input fields.',

          value: '{color.text.disabled.value}',
        },

        error: {
          comment: 'Text color to use for input fields with "error" feedback.',

          value: '{color.text.input.base.value}',
        },
        success: {
          comment:
            'Text color to use for input fields with "success" feedback.',

          value: '{color.text.input.base.value}',
        },
      },
    },
  },
}
