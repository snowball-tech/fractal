module.exports = {
  border: {
    none: {
      comment: 'Disable borders.',

      value: 'none',
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    1: {
      comment: 'A subtle border.',

      value: '{size.border.1.value} solid {color.border.default.value}',
    },
    2: {
      comment: 'A more obvious border.',

      value: '{size.border.2.value} solid {color.border.default.value}',
    },

    disabled: {
      comment: 'A subtle border to use on disabled elements (e.g. buttons).',

      value: '{size.border.1.value} solid {color.border.disabled.value}',
    },

    transparent: {
      1: {
        comment: 'A subtle border.',

        value: '{size.border.1.value} solid {color.base.transparent.value}',
      },
      2: {
        comment: 'A more obvious border.',

        value: '{size.border.2.value} solid {color.base.transparent.value}',
      },
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    button: {
      display: {
        base: {
          comment: 'Border for display buttons.',

          value: '{border.1.value}',
        },
        hover: {
          comment: 'Shadow when hovering/focusing display buttons.',

          value: '{border.button.display.base.value}',
        },
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        active: {
          comment: 'Shadow when clicking/activating display buttons.',

          value: '{border.button.display.base.value}',
        },
        disabled: {
          comment: 'Shadow for disabled display buttons.',

          value: '{border.disabled.value}',
        },
      },
      primary: {
        base: {
          comment: 'Shadow for primary buttons.',

          value: '{border.transparent.value}',
        },
        hover: {
          comment: 'Shadow when hovering/focusing primary buttons.',

          value: '{border.2.value}',
        },
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        active: {
          comment: 'Shadow when clicking/activating primary buttons.',

          value: '{border.button.primary.base.value}',
        },
        disabled: {
          comment: 'Shadow for disabled primary buttons.',

          value: '{shadow.button.primary.base.value}',
        },
      },
      secondary: {
        base: {
          comment: 'Shadow for secondary buttons.',

          value: '{border.1.value}',
        },
        hover: {
          comment: 'Shadow when hovering/focusing secondary buttons.',

          value: '{border.2.value}',
        },
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        active: {
          comment: 'Shadow when clicking/activating secondary buttons.',

          value: '{border.transparent.value}',
        },
        disabled: {
          comment: 'Shadow for disabled secondary buttons.',

          value: '{border.disabled.value}',
        },
      },
    },
  },
}
