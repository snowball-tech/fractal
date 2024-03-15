module.exports = {
  shadow: {
    none: {
      comment: 'Disable shadow.',

      value: 'none',
    },

    //
    brutal: {
      1: {
        comment:
          'A subtle shadow, always combined with radius or rounded shapes and with border-1.',

        value: '-2px 2px 0 0 rgba(0, 0, 0, 1)',
      },
      '1-light': {
        comment:
          'A subtle shadow, always combined with radius or rounded shapes and with border-1, used for light blocks.',

        value: '{shadow.brutal.1.value}',
      },
      '1-primary': {
        comment:
          'A subtle shadow in primary color, always combined with radius or rounded shapes and with border-1 or border-2.',

        value: '-2px 2px 0 0 {color.brand.primary.value}',
      },
      //
      '1-dark': {
        comment:
          'A subtle shadow, always combined with radius or rounded shapes and with border-1, used for dark blocks.',

        value: '{shadow.brutal.1-primary.value}',
      },
      '1-secondary': {
        comment:
          'A subtle shadow in secondary color, always combined with radius or rounded shapes and with border-1 or border-2.',

        value: '-2px 2px 0 0 {color.brand.secondary.value}',
      },

      2: {
        comment:
          'A proeminent shadow, always combined with radius or rounded shapes and with border-1 or border-2.',

        value: '-2px 4px 0 0 rgba(0, 0, 0, 1)',
      },
      '2-light': {
        comment:
          'A proeminent shadow, always combined with radius or rounded shapes and with border-1 or border-2, used for light blocks.',

        value: '{shadow.brutal.2.value}',
      },
      '2-primary': {
        comment:
          'A proeminent shadow in primary color, always combined with radius or rounded shapes and with border-1 or border-2.',

        value: '-2px 4px 0 0 {color.brand.primary.value}',
      },
      //
      '2-dark': {
        comment:
          'A proeminent shadow, always combined with radius or rounded shapes and with border-1 or border-2, used for dark blocks.',

        value: '{shadow.brutal.2-primary.value}',
      },
      '2-secondary': {
        comment:
          'A proeminent shadow in secondary color, always combined with radius or rounded shapes and with border-1 or border-2.',

        value: '-2px 4px 0 0 {color.brand.secondary.value}',
      },
    },
  },
}
