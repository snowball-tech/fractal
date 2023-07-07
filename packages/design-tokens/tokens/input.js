module.exports = {
  border: {
    input: {
      base: {
        comment: 'Border for input fields.',

        value: '{border.1.value}',
      },
      hover: {
        comment: 'Border when hovering input fields.',

        value: '{border.2.value}',
      },
      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      focus: {
        comment: 'Border when focusing input fields.',

        value: '{size.border.2.value} solid {color.border.primary.value}',
      },
      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      disabled: {
        comment: 'Border for disabled input fields.',

        value: '{border.disabled.value}',
      },

      error: {
        comment: 'Border for input fields with "error" feedback.',

        value: '{size.border.2.value} solid {color.feedback.danger.50.value}',
      },
      success: {
        comment: 'Border for input fields with "success" feedback.',

        value: '{size.border.2.value} solid {color.feedback.success.50.value}',
      },
    },
  },

  color: {
    background: {
      input: {
        base: {
          comment: 'Background color to use on input fields.',

          value: '{color.base.white.value}',
        },
        hover: {
          comment: 'Background color to use when hovering input fields.',

          value: '{color.background.input.base.value}',
        },
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        focus: {
          comment: 'Background color to use when focusing input fields.',

          value: '{color.background.input.base.value}',
        },
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        disabled: {
          comment: 'Background color to use for disabled input fields.',

          value: '{color.background.disabled.value}',
        },

        error: {
          comment:
            'Background color to use for input fields with "error" feedback.',

          value: '{color.background.input.base.value}',
        },
        success: {
          comment:
            'Background color to use for input fields with "success" feedback.',

          value: '{color.background.input.base.value}',
        },
      },
    },

    icon: {
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

    text: {
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

        placeholder: {
          comment: 'Text color to use for input fields placeholder.',

          value: '{color.text.placeholder.value}',
        },

        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
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

  shadow: {
    input: {
      base: {
        comment: 'Shadow for input fields.',

        value: '{shadow.none}',
      },
      hover: {
        comment: 'Shadow when hovering input fields.',

        value: '{shadow.input.base.value}',
      },
      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      focus: {
        comment: 'Shadow when focusing input fields.',

        value: '{shadow.input.base.value}',
      },
      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      disabled: {
        comment: 'Shadow for disabled input fields.',

        value: '{shadow.input.base.value}',
      },
    },
  },

  size: {
    input: {
      padding: {
        horizontal: {
          comment: 'Horizontal padding for any input.',

          value: '{size.spacing.2.value}',
        },
        vertical: {
          comment: 'Vertical padding for any input.',

          value: '{size.spacing.1.value}',
        },
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      gap: {
        comment: 'Gap between text and icon.',

        value: '{size.spacing.2.value}',
      },
    },
  },
}
