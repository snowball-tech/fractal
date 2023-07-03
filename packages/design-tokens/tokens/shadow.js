module.exports = {
  shadow: {
    none: {
      comment: 'Disable shadow.',

      value: 'none',
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    brutal: {
      1: {
        comment:
          'A subtle shadow, always combined with radius or rounded shapes and with border-1.',

        value: '-2px 2px 0 0 rgba(0, 0, 0, 1)',
      },
      2: {
        comment:
          'A proeminent shadow, always combined with radius or rounded shapes and with border-1 or border-2.',

        value: '-2px 4px 0 0 rgba(0, 0, 0, 1)',
      },
    },

    button: {
      display: {
        base: {
          comment: 'Shadow for display elements (e.g. buttons).',

          value: '{shadow.brutal.1.value}',
        },
        hover: {
          comment:
            'Shadow when hovering/focusing display elements (e.g. buttons).',

          value: '{shadow.brutal.2.value}',
        },
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        active: {
          comment:
            'Shadow when clicking/activating display elements (e.g. buttons).',

          value: '{shadow.none.value}',
        },
        disabled: {
          comment: 'Shadow for disabled display elements (e.g. buttons).',

          value: '{shadow.none.value}',
        },
      },
      primary: {
        base: {
          comment: 'Shadow for primary elements (e.g. buttons).',

          value: '{shadow.none.value}',
        },
        hover: {
          comment:
            'Shadow when hovering/focusing primary elements (e.g. buttons).',

          value: '{shadow.button.primary.base.value}',
        },
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        active: {
          comment:
            'Shadow when clicking/activating primary elements (e.g. buttons).',

          value: '{shadow.button.primary.base.value}',
        },
        disabled: {
          comment: 'Shadow for disabled primary elements (e.g. buttons).',

          value: '{shadow.button.primary.base.value}',
        },
      },
      secondary: {
        base: {
          comment: 'Shadow for secondary elements (e.g. buttons).',

          value: '{shadow.none.value}',
        },
        hover: {
          comment:
            'Shadow when hovering/focusing secondary elements (e.g. buttons).',

          value: '{shadow.button.secondary.base.value}',
        },
        // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
        active: {
          comment:
            'Shadow when clicking/activating secondary elements (e.g. buttons).',

          value: '{shadow.button.secondary.base.value}',
        },
        disabled: {
          comment: 'Shadow for disabled secondary elements (e.g. buttons).',

          value: '{shadow.button.secondary.base.value}',
        },
      },
    },
  },
}
