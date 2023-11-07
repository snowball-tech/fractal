module.exports = {
  color: {
    icon: {
      dark: {
        comment: 'Icon color over light background.',

        value: '{color.base.black.value}',
      },

      light: {
        comment: 'Icon color over dark background.',

        value: '{color.base.white.value}',
      },

      //
      disabled: {
        comment: 'Icon color of most disabled elements.',

        value: '{color.base.grey.50.value}',
      },

      error: {
        comment: 'Icon color for error messages.',

        value: '{color.feedback.danger.50.value}',
      },
      success: {
        comment: 'Icon color for success messages.',

        value: '{color.feedback.success.50.value}',
      },
      warning: {
        comment: 'Icon color for warning messages.',

        value: '{color.feedback.warning.50.value}',
      },
    },
  },
}
