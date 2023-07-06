module.exports = {
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
