module.exports = {
  color: {
    brand: {
      comment: "Main Snowball's brand colors.",

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      body: {
        dark: { comment: 'Black', value: '{color.base.black}' },
        light: { comment: 'Yellowish White Tone 90', value: '#FFFBF4' },
      },

      primary: { comment: 'Tone 50', value: '#FF8ACD' },
      secondary: { comment: 'Tone 0', value: '{color.base.black}' },

      separator: {
        comment: 'Used for line separators',
        value: '{color.base.grey.70.value}',
      },
    },
  },
}
