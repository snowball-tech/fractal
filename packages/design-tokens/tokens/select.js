module.exports = {
  border: {
    select: {
      base: {
        comment: 'Border for selects.',

        value: '{border.input.base.value}',
      },
      hover: {
        comment: 'Border when hovering selects.',

        value: '{border.input.hover.value}',
      },
      //
      focus: {
        comment: 'Border when focusing selects.',

        value: '{size.border.1.value} solid {color.border.primary.value}',
      },
      //
      disabled: {
        comment: 'Border for disabled selects.',

        value: '{border.input.disabled.value}',
      },
    },

    //
    dropdown: {
      comment: "Border for selects' dropdown.",

      value: '{border.select.base.value}',
    },

    options: {
      base: {
        comment: "Border for selects' options.",

        value: '{border.none.value}',
      },
      hover: {
        comment: "Border when hovering selects' options.",

        value: '{border.options.base.value}',
      },
      //
      disabled: {
        comment: "Border for disabled selects' options.",

        value: '{border.options.base.value}',
      },
    },
  },

  color: {
    background: {
      select: {
        base: {
          comment: 'Background color to use on selects.',

          value: '{color.background.input.base.value}',
        },
        hover: {
          comment: 'Background color to use when hovering selects.',

          value: '{color.background.select.base.value}',
        },
        //
        focus: {
          comment: 'Background color to use when focusing selects.',

          value: '{color.background.select.base.value}',
        },
        //
        disabled: {
          comment: 'Background color to use for disabled selects.',

          value: '{color.background.input.disabled.value}',
        },
      },

      //
      dropdown: {
        comment: "Background color to use for selects' dropdown.",

        value: '{color.background.select.base.value}',
      },

      options: {
        base: {
          comment: "Background color to use for selects' options.",

          value: '{color.base.transparent.value}',
        },
        hover: {
          1: {
            comment:
              "Background color to use when hovering select's first (and 5n+1th) option",
            value: '{color.decorative.pink.90.value}',
          },
          2: {
            comment:
              "Background color to use when hovering select's second (and 5n+2th) option",
            value: '{color.decorative.yellow.90.value}',
          },
          3: {
            comment:
              "Background color to use when hovering select's third (and 5n+3th) option",
            value: '{color.decorative.green.90.value}',
          },
          4: {
            comment:
              "Background color to use when hovering select's fourth (and 5n+4th) option",
            value: '{color.decorative.blue.90.value}',
          },
          5: {
            comment:
              "Background color to use when hovering select's fifth (and 5n+5th) option",
            value: '{color.decorative.purple.90.value}',
          },
        },
        //
        disabled: {
          comment: "Background color to use for disabled selects' options.",

          value: '{color.background.options.base.value}',
        },
      },
    },

    icon: {
      select: {
        base: {
          comment: 'Dropdown arrow color to use on selects.',

          value: '{color.icon.input.base.value}',
        },
        hover: {
          comment: 'Dropdown arrow color to use when hovering selects.',

          value: '{color.icon.select.base.value}',
        },
        //
        focus: {
          comment: 'Dropdown arrow color to use when focusing selects.',

          value: '{color.icon.select.base.value}',
        },
        //
        disabled: {
          comment: 'Dropdown arrow color to use for disabled selects.',

          value: '{color.icon.input.disabled.value}',
        },
      },
    },

    text: {
      select: {
        base: {
          comment: 'Text color to use on selects.',

          value: '{color.text.input.base.value}',
        },
        hover: {
          comment: 'Text color to use when hovering selects.',

          value: '{color.text.select.base.value}',
        },
        //
        focus: {
          comment: 'Text color to use when focusing selects.',

          value: '{color.text.select.base.value}',
        },
        //
        disabled: {
          comment: 'Text color to use for disabled selects.',

          value: '{color.text.input.disabled.value}',
        },

        placeholder: {
          comment: 'Text color to use for selects placeholder.',

          value: '{color.text.input.placeholder.value}',
        },
      },

      //
      options: {
        base: {
          comment: "Text color to use for selects' options.",

          value: '{color.text.select.base.value}',
        },
        hover: {
          comment: "Text color to use when hovering selects' options.",

          value: '{color.text.options.base.value}',
        },
        //
        disabled: {
          comment: "Text color to use for disabled selects' options.",

          value: '{color.text.select.disabled.value}',
        },
      },
    },
  },

  shadow: {
    select: {
      base: {
        comment: 'Shadow for selects.',

        value: '{shadow.input.base.value}',
      },
      hover: {
        comment: 'Shadow when hovering selects.',

        value: 'inset 0 0 0 1px {color.border.default.value}',
      },
      //
      focus: {
        comment: 'Shadow when focusing selects.',

        value: 'inset 0 0 0 1px {color.border.primary.value}',
      },
      //
      disabled: {
        comment: 'Shadow for disabled selects.',

        value: '{shadow.select.base.value}',
      },
    },

    //
    dropdown: {
      comment: "Shadow for selects' dropdown.",

      value: '{shadow.none.value}',
    },

    options: {
      base: {
        comment: "Shadow for selects' options.",

        value: '{shadow.none.value}',
      },
      hover: {
        comment: "Shadow when hovering selects' options.",

        value: '{shadow.options.base.value}',
      },
      //
      disabled: {
        comment: "Shadow for disabled selects' options.",

        value: '{shadow.options.base.value}',
      },
    },
  },

  size: {
    select: {
      padding: {
        horizontal: {
          comment: 'Horizontal padding for selects.',

          value: '{size.input.padding.horizontal.value}',
        },
        vertical: {
          comment: 'Vertical padding for selects.',

          value: '{size.input.padding.vertical.value}',
        },
      },
    },

    //
    dropdown: {
      padding: {
        horizontal: {
          comment: "Horizontal padding for select's dropdown.",

          value: '{size.spacing.1.value}',
        },
        vertical: {
          comment: "Vertical padding for select's dropdown.",

          value: '{size.spacing.1.value}',
        },
      },

      //
      gap: {
        comment: 'Spacing to use between the select and the dropdown',

        value: '{size.spacing.1.value}',
      },
    },

    options: {
      padding: {
        horizontal: {
          comment: "Horizontal padding for select's options.",

          value: '{size.spacing.2.value}',
        },
        vertical: {
          comment: "Vertical padding for select's dropdown.",

          value: '{size.spacing.2.value}',
        },
      },
    },
  },
}
