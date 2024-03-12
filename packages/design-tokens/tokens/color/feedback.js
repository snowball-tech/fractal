module.exports = {
  color: {
    feedback: {
      comment:
        'Feedback colors used for danger/error, warning and success states.',

      danger: {
        50: { comment: 'Tone 50', value: '#FF5454' },
        90: { comment: 'Tone 90', value: '#FFD6D6' },
      },
      error: {
        50: { comment: 'Tone 50', value: '{color.feedback.danger.50.value}' },
        90: { comment: 'Tone 90', value: '{color.feedback.danger.90.value}' },
      },
      success: {
        50: { comment: 'Tone 50', value: '#3CD39D' },
        90: { comment: 'Tone 90', value: '#CFFCE3' },
      },
      warning: {
        50: { comment: 'Tone 50', value: '#FF9F69' },
        90: { comment: 'Tone 90', value: '#FFEAD1' },
      },
    },
  },
}
