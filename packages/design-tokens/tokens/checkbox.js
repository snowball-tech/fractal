module.exports = {
  border: {
    checkbox: {
      primary: {
        comment: 'Border for primary variant of checkbox/radio fields.',

        value: '{border.1.value}',
      },
      secondary: {
        comment: 'Border for secondary variant of checkbox/radio fields.',

        value: '{border.checkbox.primary.value}',
      },
      tertiary: {
        comment: 'Border for secondary variant of checkbox/radio fields.',

        value: '{border.none.value}',
      },
    },
  },

  color: {
    background: {
      checkbox: {
        primary: {
          comment:
            'Background color to use for primary variant of checkbox/radio fields.',

          value: '{color.base.white}',
        },
        secondary: {
          comment:
            'Background color to use for secondary variant of checkbox/radio fields.',

          value: '{color.background.checkbox.primary.value}',
        },
        tertiary: {
          comment:
            'Background color to use for secondary variant of checkbox/radio fields.',

          value: '{color.base.transparent.value}',
        },

        //
        disabled: {
          comment:
            'Background color to use for disabled checkbox/radio fields.',

          value: 'inherit',
        },
      },
      radio: {
        hover: {
          comment:
            'Background color to use when hovering a radio button in a group',

          value: '{color.decorative.pink.90.value}',
        },

        //
        checked: {
          comment:
            'Background color to use when a radio button in a group is selected',

          value: '{color.brand.primary.value}',
        },
      },
    },

    box: {
      checkbox: {
        primary: {
          comment:
            'Box color to use for primary variant of checkbox/radio fields.',

          value: '{color.text.checkbox.primary.value}',
        },
        secondary: {
          comment:
            'Box color to use for secondary variant of checkbox/radio fields.',

          value: '{color.text.checkbox.secondary.value}',
        },
        tertiary: {
          comment:
            'Box color to use for secondary variant of checkbox/radio fields.',

          value: '{color.text.checkbox.tertiary.value}',
        },

        //
        disabled: {
          comment: 'Box color to use for disabled checkbox/radio fields.',

          value: '{color.base.grey.70.value}',
        },
      },
    },

    mark: {
      checkbox: {
        primary: {
          comment:
            'Checkmark color to use for primary variant of checkbox/radio fields.',

          value: '{color.text.checkbox.primary.value}',
        },
        secondary: {
          comment:
            'Checkmark color to use for secondary variant of checkbox/radio fields.',

          value: '{color.text.checkbox.secondary.value}',
        },
        tertiary: {
          comment:
            'Checkmark color to use for secondary variant of checkbox/radio fields.',

          value: '{color.text.checkbox.tertiary.value}',
        },

        //
        disabled: {
          comment: 'Box color to use for disabled checkbox/radio fields.',

          value: '{color.text.checkbox.disabled.value}',
        },
      },
    },

    text: {
      checkbox: {
        primary: {
          comment:
            'Text (label) color to use for primary variant of checkbox/radio fields.',

          value: '{color.text.dark.value}',
        },
        secondary: {
          comment:
            'Text (label) color to use for secondary variant of checkbox/radio fields.',

          value: '{color.text.checkbox.primary.value}',
        },
        tertiary: {
          comment:
            'Text (label) color to use for secondary variant of checkbox/radio fields.',

          value: '{color.text.checkbox.primary.value}',
        },

        //
        disabled: {
          comment: 'Box color to use for disabled checkbox/radio fields.',

          value: '{color.base.grey.70.value}',
        },
      },
    },
  },

  shadow: {
    checkbox: {
      checkbox: {
        primary: {
          comment: 'Shadow for primary variant of checkbox/radio fields.',

          value: '{shadow.brutal.1.value}',
        },
        secondary: {
          comment: 'Shadow for secondary variant of checkbox/radio fields.',

          value: '{shadow.none.value}',
        },
        tertiary: {
          comment: 'Shadow for secondary variant of checkbox/radio fields.',

          value: '{shadow.none.value}',
        },
      },
    },
  },

  size: {
    checkbox: {
      padding: {
        horizontal: {
          comment: 'Horizontal padding for checkbox/radio fields.',

          value: '{size.spacing.2.value}',
        },
        vertical: {
          comment: 'Vertical padding for checkbox/radio fields.',

          value: '{size.spacing.2.value}',
        },
      },

      //
      gap: {
        comment: 'Gap between checkbox and label.',

        value: '{size.spacing.2.value}',
      },
    },
  },
}
