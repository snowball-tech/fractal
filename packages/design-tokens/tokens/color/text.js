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

        value: '{color.base.grey.50.value}',
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
    },
  },
}
