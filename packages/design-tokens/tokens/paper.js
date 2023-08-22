module.exports = {
  color: {
    background: {
      paper: {
        comment: 'Background color for paper.',

        value: '{color.base.white.value}',
      },
    },

    text: {
      paper: {
        body: {
          comment: 'Text color for the body of any paper.',

          value: '{color.text.dark.value}',
        },
      },
    },
  },

  size: {
    paper: {
      padding: {
        horizontal: {
          comment: 'Horizontal padding for any paper.',

          value: '{size.spacing.2.value}',
        },

        vertical: {
          comment: 'Vertical padding for any paper.',

          value: '{size.spacing.2.value}',
        },
      },
    },
  },
}
