module.exports = {
  color: {
    brand: {
      comment: "Main Snowball's brand colors.",

      //
      body: {
        dark: { comment: 'Black', value: '{color.base.black}' },
        light: { comment: 'Yellowish White Tone 90', value: '#FFFBF4' },
      },

      highlight: {
        comment: 'Tone 90',
        value: '{color.decorative.pink.90.value}',
      },
      primary: { comment: 'Tone 90', value: '#FF8ACD' },
      secondary: {
        comment: 'Black Tone 0',
        value: '{color.base.black.value}',
      },

      separator: {
        comment: 'Used for line separators',
        value: '{color.base.grey.70.value}',
      },
    },
  },
}
