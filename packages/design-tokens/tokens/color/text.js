module.exports = {
  color: {
    text: {
      dark: {
        comment: 'Text color over light background.',

        value: '{color.base.black.value}',
      },
      default: {
        comment: 'Default text color (over light background).',

        value: '{color.base.black.value}',
      },
      light: {
        comment: 'Text color over dark background.',

        value: '{color.base.white.value}',
      },
      primary: {
        comment: 'Primary text color (over light background).',

        value: '{color.brand.primary.value}',
      },
      'primary-dark': {
        comment: 'Primary text color over dark background.',

        value: '{color.brand.primary-dark.value}',
      },
      'primary-light': {
        comment: 'Primary text color over light background.',

        value: '{color.brand.primary-light.value}',
      },
      secondary: {
        comment: 'Secondary text color (over light background).',

        value: '{color.brand.secondary.value}',
      },
      'secondary-dark': {
        comment: 'Secondary text color over dark background.',

        value: '{color.brand.secondary-dark.value}',
      },
      'secondary-light': {
        comment: 'Secondary text color over light background.',

        value: '{color.brand.secondary-light.value}',
      },

      //
      disabled: {
        comment: 'Text color of most disabled elements.',

        value: '{color.base.grey.50.value}',
      },

      placeholder: {
        comment: 'Text color for placeholders.',

        value: '{color.base.grey.30.value}',
      },

      //
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
