module.exports = {
  border: {
    stepper: {
      step: {
        base: {
          comment: "Border for stepper's step.",

          value: '{border.1.value}',
        },
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        active: {
          comment: "Border when a stepper's step is active.",

          value: '{border.stepper.step.base.value}',
        },
        completed: {
          comment: "Border when a stepper's step is completed.",

          value: '{border.stepper.step.base.value}',
        },
      },
    },
  },

  color: {
    background: {
      stepper: {
        step: {
          base: {
            comment: "Background color to use for stepper's step.",

            value: '{color.decorative.pink.90.value}',
          },
          // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
          active: {
            highlighted: {
              comment:
                "Background color to use when a stepper's step is active.",

              value: '{color.decorative.yellow.90.value}',
            },
            neutral: {
              comment:
                "Background color to use when a stepper's step is active.",

              value: '{color.brand.secondary.value}',
            },
          },
          completed: {
            comment:
              "Background color to use when a stepper's step is completed.",

            value: '{color.brand.secondary.value}',
          },
        },
      },
    },
  },
}
