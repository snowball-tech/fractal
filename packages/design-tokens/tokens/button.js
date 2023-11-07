module.exports = {
  border: {
    button: {
      display: {
        base: {
          comment: 'Border for display buttons.',

          value: '{border.1.value}',
        },
        hover: {
          comment: 'Border when hovering/focusing display buttons.',

          value: '{border.button.display.base.value}',
        },
        //
        active: {
          comment: 'Border when clicking/activating display buttons.',

          value: '{border.button.display.base.value}',
        },
        disabled: {
          comment: 'Border for disabled display buttons.',

          value: '{border.disabled.value}',
        },
      },

      primary: {
        base: {
          comment: 'Border for primary buttons.',

          value: '{border.transparent.2.value}',
        },
        hover: {
          comment: 'Border when hovering/focusing primary buttons.',

          value: '{border.2.value}',
        },
        //
        active: {
          comment: 'Border when clicking/activating primary buttons.',

          value: '{border.button.primary.base.value}',
        },
        disabled: {
          comment: 'Border for disabled primary buttons.',

          value: '{border.button.primary.base.value}',
        },
      },

      secondary: {
        base: {
          comment: 'Border for secondary buttons.',

          value: '{border.1.value}',
        },
        hover: {
          comment: 'Border when hovering/focusing secondary buttons.',

          value: '{border.button.secondary.base.value}',
        },
        //
        active: {
          comment: 'Border when clicking/activating secondary buttons.',

          value: '{border.button.secondary.base.value}',
        },
        disabled: {
          comment: 'Border for disabled secondary buttons.',

          value: '{border.disabled.value}',
        },
      },

      text: {
        base: {
          comment: 'Border for text buttons.',

          value: '{border.none.value}',
        },
        hover: {
          comment: 'Border when hovering/focusing text buttons.',

          value: '{border.button.text.base.value}',
        },
        //
        active: {
          comment: 'Border when clicking/activating text buttons.',

          value: '{border.button.text.base.value}',
        },
        disabled: {
          comment: 'Border for disabled text buttons.',

          value: '{border.button.text.base.value}',
        },
      },
    },
  },

  color: {
    background: {
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
          //
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
          //
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
          //
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

        text: {
          base: {
            comment: 'Background color to use on text buttons.',

            value: '{color.base.transparent.value}',
          },
          hover: {
            comment:
              'Background color to use when hovering/focusing text buttons.',

            value: '{color.background.button.text.base.value}',
          },
          //
          active: {
            comment:
              'Background color to use when clicking/activating a text buttons.',

            value: '{color.background.button.text.base.value}',
          },
          disabled: {
            comment: 'Background color to use on disabled text buttons.',

            value: '{color.background.button.text.base.value}',
          },
        },
      },
    },

    icon: {
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
          //
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
          //
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
          //
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

        text: {
          base: {
            comment: 'Icon color to use on text buttons.',

            value: '{color.brand.secondary.value}',
          },
          hover: {
            comment: 'Icon color to use when hovering/focusing text buttons.',

            value: '{color.icon.button.text.base.value}',
          },
          //
          active: {
            comment:
              'Icon color to use when clicking/activating a text buttons.',

            value: '{color.icon.button.text.base.value}',
          },
          disabled: {
            comment: 'Background color to use on disabled text buttons.',

            value: '{color.icon.disabled.value}',
          },
        },
      },
    },

    text: {
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
          //
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
          //
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
          //
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

        text: {
          base: {
            comment: 'Text color to use on text buttons.',

            value: '{color.brand.secondary.value}',
          },
          hover: {
            comment: 'Text color to use when hovering/focusing text buttons.',

            value: '{color.text.button.text.base.value}',
          },
          //
          active: {
            comment:
              'Text color to use when clicking/activating a text buttons.',

            value: '{color.brand.secondary.value}',
          },
          disabled: {
            comment: 'Text color to use on disabled text buttons.',

            value: '{color.text.disabled.value}',
          },
        },
      },
    },
  },

  shadow: {
    button: {
      display: {
        base: {
          comment: 'Shadow for display buttons.',

          value: '{shadow.brutal.1.value}',
        },
        hover: {
          comment: 'Shadow when hovering/focusing display buttons.',

          value: '{shadow.brutal.2.value}',
        },
        //
        active: {
          comment: 'Shadow when clicking/activating display buttons.',

          value: '{shadow.none.value}',
        },
        disabled: {
          comment: 'Shadow for disabled display buttons.',

          value: '{shadow.none.value}',
        },
      },

      primary: {
        base: {
          comment: 'Shadow for primary buttons.',

          value: '{shadow.none.value}',
        },
        hover: {
          comment: 'Shadow when hovering/focusing primary buttons.',

          value: '{shadow.button.primary.base.value}',
        },
        //
        active: {
          comment: 'Shadow when clicking/activating primary buttons.',

          value: '{shadow.button.primary.base.value}',
        },
        disabled: {
          comment: 'Shadow for disabled primary buttons.',

          value: '{shadow.button.primary.base.value}',
        },
      },

      secondary: {
        base: {
          comment: 'Shadow for secondary buttons.',

          value: '{shadow.none.value}',
        },
        hover: {
          comment: 'Shadow when hovering/focusing secondary buttons.',

          value: 'inset 0 0 0 1px {color.border.default.value}',
        },
        //
        active: {
          comment: 'Shadow when clicking/activating secondary buttons.',

          value: '{shadow.button.secondary.hover.value}',
        },
        disabled: {
          comment: 'Shadow for disabled secondary buttons.',

          value: '{shadow.button.secondary.base.value}',
        },
      },

      text: {
        base: {
          comment: 'Shadow for text buttons.',

          value: '{shadow.none.value}',
        },
        hover: {
          comment: 'Shadow when hovering/focusing text buttons.',

          value: 'shadow.button.text.base.value',
        },
        //
        active: {
          comment: 'Shadow when clicking/activating text buttons.',

          value: '{shadow.button.text.base.value}',
        },
        disabled: {
          comment: 'Shadow for disabled text buttons.',

          value: '{shadow.button.text.base.value}',
        },
      },
    },
  },

  size: {
    button: {
      padding: {
        horizontal: {
          comment: 'Horizontal padding for any button.',

          value: '{size.spacing.3.value}',
        },

        vertical: {
          comment: 'Vertical padding for any button.',

          value: '{size.spacing.1.value}',
        },
      },

      //
      gap: {
        comment: 'Gap between text and icon.',

        value: '{size.spacing.2.value}',
      },
    },
  },
}
