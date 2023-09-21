const baseHeight = 22
const baseWidth = 75

module.exports = {
  size: {
    logo: {
      fluid: {
        height: { value: 'auto' },
        width: { value: '100%' },
      },

      s: {
        height: { value: baseHeight },
        width: { value: baseWidth },
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      m: {
        height: { value: baseHeight * 2 },
        width: { value: baseWidth * 2 },
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      l: {
        height: { value: baseHeight * 3 },
        width: { value: baseWidth * 3 },
      },

      xl: {
        height: { value: baseHeight * 4 },
        width: { value: baseWidth * 4 },
      },
    },

    picto: {
      fluid: {
        height: { value: 'auto' },
        width: { value: '100%' },
      },

      s: {
        height: { value: baseHeight },
        width: { value: baseHeight },
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      m: {
        height: { value: baseHeight * 2 },
        width: { value: baseHeight * 2 },
      },

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      l: {
        height: { value: baseHeight * 3 },
        width: { value: baseHeight * 3 },
      },

      xl: {
        height: { value: baseHeight * 4 },
        width: { value: baseHeight * 4 },
      },
    },
  },
}
