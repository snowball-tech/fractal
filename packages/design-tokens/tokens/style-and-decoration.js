module.exports = {
  decoration: {
    text: {
      none: {
        comment: 'Display a text without any decoration.',

        value: 'none',
      },

      striked: {
        comment: 'Display a striked text.',

        value: 'line-through',
      },

      underline: {
        comment: 'Display an underlined text.',

        value: 'underline',
      },

      wavy: {
        comment: 'Display a text with a wavy underline.',

        value: 'wavy',
      },
    },
  },

  style: {
    text: {
      default: {
        comment: 'Display a text normally.',

        value: 'normal',
      },

      italic: {
        comment: 'Display a text in italic.',

        value: 'italic',
      },

      placeholder: {
        comment: 'Text style for placeholders.',

        value: '{style.text.normal.value}',
      },
    },
  },
}
