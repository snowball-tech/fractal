module.exports = {
  border: {
    toggle: {
      primary: {
        base: {
          comment: 'Border for primary toggles.',

          value: '{border.button.display.base.value}',
        },
        hover: {
          comment: 'Border when hovering/focusing primary toggles.',

          value: '{border.button.display.hover.value}',
        },
        //
        active: {
          comment: 'Border when clicking/activating primary toggles.',

          value: '{border.button.display.active.value}',
        },
        toggled: {
          comment: 'Border when primary toggles are toggled.',

          value: '{border.1.value}',
        },
        //
        disabled: {
          comment: 'Border for disabled primary toggles.',

          value: '{border.button.display.disabled.value}',
        },
      },
    },
  },

  color: {
    background: {
      toggle: {
        primary: {
          base: {
            comment: 'Background color to use on primary toggles.',

            value: '{color.background.button.display.base.value}',
          },
          hover: {
            comment:
              'Background color to use when hovering/focusing primary toggles.',

            value: '{color.background.button.display.hover.value}',
          },
          //
          active: {
            comment:
              'Background color to use when clicking/activating a primary toggles.',

            value: '{color.background.button.display.active.value}',
          },
          toggled: {
            comment:
              'Background color to use when primary toggles are toggled.',

            value: '{color.background.button.secondary.active.value}',
          },
          //
          disabled: {
            comment: 'Background color to use on disabled primary toggles.',

            value: '{color.background.button.display.disabled.value}',
          },
        },
      },
    },

    icon: {
      toggle: {
        primary: {
          base: {
            comment: 'Icon color to use on primary toggles.',

            value: '{color.icon.button.display.base.value}',
          },
          hover: {
            comment:
              'Icon color to use when hovering/focusing primary toggles.',

            value: '{color.icon.button.display.hover.value}',
          },
          //
          active: {
            comment:
              'Icon color to use when clicking/activating a primary toggles.',

            value: '{color.icon.button.display.active.value}',
          },
          toggled: {
            comment:
              'Background color to use when primary toggles are toggled.',

            value: '{color.icon.button.secondary.active.value}',
          },
          //
          disabled: {
            comment: 'Icon color to use on disabled primary toggles.',

            value: '{color.icon.button.display.disabled.value}',
          },
        },
      },
    },

    text: {
      toggle: {
        primary: {
          base: {
            comment: 'Text color to use on primary toggles.',

            value: '{color.text.button.display.base.value}',
          },
          hover: {
            comment:
              'Text color to use when hovering/focusing primary toggles.',

            value: '{color.text.button.display.hover.value}',
          },
          //
          active: {
            comment:
              'Text color to use when clicking/activating a primary toggles.',

            value: '{color.text.button.display.active.value}',
          },
          toggled: {
            comment:
              'Background color to use when primary toggles are toggled.',

            value: '{color.text.button.secondary.active.value}',
          },
          //
          disabled: {
            comment: 'Text color to use on disabled primary toggles.',

            value: '{color.text.button.display.disabled.value}',
          },
        },
      },
    },
  },

  shadow: {
    toggle: {
      primary: {
        base: {
          comment: 'Shadow for primary toggles.',

          value: '{shadow.button.display.base.value}',
        },
        hover: {
          comment: 'Shadow when hovering/focusing primary toggles.',

          value: '{shadow.button.display.hover.value}',
        },
        //
        active: {
          comment: 'Shadow when clicking/activating primary toggles.',

          value: '{shadow.button.display.active.value}',
        },
        toggled: {
          comment: 'Background color to use when primary toggles are toggled.',

          value: '{shadow.toggle.primary.active.value}',
        },
        //
        disabled: {
          comment: 'Shadow for disabled primary toggles.',

          value: '{shadow.button.display.disabled.value}',
        },
      },
    },
  },

  size: {
    toggle: {
      padding: {
        horizontal: {
          comment: 'Horizontal padding for any toggle.',

          value: '{size.button.padding.horizontal.value}',
        },

        vertical: {
          comment: 'Vertical padding for any toggle.',

          value: '{size.button.padding.vertical.value}',
        },
      },

      //
      gap: {
        comment: 'Gap between text and icon.',

        value: '{size.button.gap.value}',
      },
    },
  },
}
