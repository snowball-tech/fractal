/* eslint-disable no-secrets/no-secrets */

module.exports = {
  asset: {
    font: {
      PolySans: {
        display: {
          value: 'swap',
        },
        styles: ['normal', 'italic'],
        value: 'PolySans',
        weights: ['400', '600', '800'],
      },

      PolySansWide: {
        display: {
          value: 'swap',
        },
        styles: ['normal', 'italic'],
        value: 'PolySansWide',
        weights: ['400', '600', '800'],
      },
    },
  },

  font: {
    family: {
      normal: {
        value: '{asset.font.PolySans.value}, Segoe UI, Tahoma, Sans-Serif',
      },
      wide: {
        value: '{asset.font.PolySansWide.value}, Arial Black, Sans-Serif',
      },
    },

    weight: {
      bold: { value: 800 },
      median: { value: 600 },
      standard: { value: 400 },
    },
  },

  typography: {
    'display-1': {
      comment: 'Use for marketing *(only)* number one punchlines',

      fontFamily: {
        value: '{font.family.normal.value}',
      },
      fontSize: {
        group: 'size',
        value: 80,
        'value_breakpoint-md': 48,
      },
      fontWeight: {
        value: '{font.weight.bold.value}',
      },
      letterSpacing: {
        value: 0,
      },
      lineHeight: {
        group: 'size',
        value: 96,
        'value_breakpoint-md': 64,
      },
    },

    'display-2': {
      comment: 'Use for marketing *(only)* secondary punchlines',

      fontFamily: {
        value: '{font.family.normal.value}',
      },
      fontSize: {
        group: 'size',
        value: 72,
        'value_breakpoint-md': 40,
      },
      fontWeight: {
        value: '{font.weight.bold.value}',
      },
      letterSpacing: {
        value: 0,
      },
      lineHeight: {
        group: 'size',
        value: 80,
        'value_breakpoint-md': 48,
      },
    },

    'display-wide': {
      comment: 'Use for marketing *(only)* highlights',

      fontFamily: {
        value: '{font.family.wide.value}',
      },
      fontSize: {
        group: 'size',
        value: 56,
        'value_breakpoint-md': 32,
      },
      fontWeight: {
        value: '{font.weight.bold.value}',
      },
      letterSpacing: {
        value: 0,
      },
      lineHeight: {
        group: 'size',
        value: 64,
        'value_breakpoint-md': 40,
      },
    },

    'heading-1': {
      comment: 'Use for marketing and/or product H1',

      fontFamily: {
        value: '{font.family.normal.value}',
      },
      fontSize: {
        group: 'size',
        value: 40,
        'value_breakpoint-md': 32,
      },
      fontWeight: {
        value: '{font.weight.bold.value}',
      },
      letterSpacing: {
        value: 0,
      },
      lineHeight: {
        group: 'size',
        value: 56,
        'value_breakpoint-md': 44,
      },
    },

    'heading-2': {
      comment: 'Use for marketing and/or product H2',

      fontFamily: {
        value: '{font.family.normal.value}',
      },
      fontSize: {
        group: 'size',
        value: 32,
        'value_breakpoint-md': 28,
      },
      fontWeight: {
        value: '{font.weight.bold.value}',
      },
      letterSpacing: {
        value: 0,
      },
      lineHeight: {
        group: 'size',
        value: 40,
        'value_breakpoint-md': 40,
      },
    },

    'heading-3': {
      comment: 'Use for marketing and/or product H3',

      fontFamily: {
        value: '{font.family.normal.value}',
      },
      fontSize: {
        group: 'size',
        value: 24,
      },
      fontWeight: {
        value: '{font.weight.bold.value}',
      },
      letterSpacing: {
        value: 0,
      },
      lineHeight: {
        group: 'size',
        value: 32,
      },
    },

    'heading-3-link': {
      comment: 'Use for marketing and/or product H3 links',

      fontFamily: {
        value: '{typography.heading-3.fontFamily.value}',
      },
      fontSize: {
        group: 'size',
        value: '{typography.heading-3.fontSize.value}',
      },
      fontWeight: {
        value: '{typography.heading-3.fontWeight.value}',
      },
      letterSpacing: {
        value: '{typography.heading-3.letterSpacing.value}',
      },
      lineHeight: {
        group: 'size',
        value: '{typography.heading-3.lineHeight.value}',
      },
      textDecoration: {
        value: 'underline',
      },
    },

    'heading-4': {
      comment: 'Use for marketing and/or product H4',

      fontFamily: {
        value: '{font.family.normal.value}',
      },
      fontSize: {
        group: 'size',
        value: 20,
      },
      fontWeight: {
        value: '{font.weight.bold.value}',
      },
      letterSpacing: {
        value: 0,
      },
      lineHeight: {
        group: 'size',
        value: 24,
      },
    },

    'heading-4-link': {
      comment: 'Use for marketing and/or product H4 links',

      fontFamily: {
        value: '{typography.heading-4.fontFamily.value}',
      },
      fontSize: {
        group: 'size',
        value: '{typography.heading-4.fontSize.value}',
      },
      fontWeight: {
        value: '{typography.heading-4.fontWeight.value}',
      },
      letterSpacing: {
        value: '{typography.heading-4.letterSpacing.value}',
      },
      lineHeight: {
        group: 'size',
        value: '{typography.heading-4.lineHeight.value}',
      },
      textDecoration: {
        value: 'underline',
      },
    },

    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    'body-1': {
      comment: 'Use for marketing and/or product regular body text',

      fontFamily: {
        value: '{font.family.normal.value}',
      },
      fontSize: {
        group: 'size',
        value: 16,
      },
      fontWeight: {
        value: '{font.weight.standard.value}',
      },
      letterSpacing: {
        value: 0,
      },
      lineHeight: {
        group: 'size',
        value: 22,
      },
    },
    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    'body-1-median': {
      comment: 'Use for marketing and/or product median body text',

      fontFamily: {
        value: '{typography.body-1.fontFamily.value}',
      },
      fontSize: {
        group: 'size',
        value: '{typography.body-1.fontSize.value}',
      },
      fontWeight: {
        value: '{font.weight.median.value}',
      },
      letterSpacing: {
        value: '{typography.body-1.letterSpacing.value}',
      },
      lineHeight: {
        group: 'size',
        value: '{typography.body-1.lineHeight.value}',
      },
    },
    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    'body-1-bold': {
      comment: 'Use for marketing and/or product bold body text',

      fontFamily: {
        value: '{typography.body-1.fontFamily.value}',
      },
      fontSize: {
        group: 'size',
        value: '{typography.body-1.fontSize.value}',
      },
      fontWeight: {
        value: '{font.weight.bold.value}',
      },
      letterSpacing: {
        value: '{typography.body-1.letterSpacing.value}',
      },
      lineHeight: {
        group: 'size',
        value: '{typography.body-1.lineHeight.value}',
      },
    },
    'body-1-link': {
      comment: 'Use for marketing and/or product links on body text',

      fontFamily: {
        value: '{typography.body-1-bold.fontFamily.value}',
      },
      fontSize: {
        group: 'size',
        value: '{typography.body-1-bold.fontSize.value}',
      },
      fontWeight: {
        value: '{typography.body-1-bold.fontWeight.value}',
      },
      letterSpacing: {
        value: '{typography.body-1-bold.letterSpacing.value}',
      },
      lineHeight: {
        group: 'size',
        value: '{typography.body-1-bold.lineHeight.value}',
      },
      textDecoration: {
        value: 'underline',
      },
    },

    'body-2': {
      comment: 'Use for marketing and/or product regular low body text',

      fontFamily: {
        value: '{font.family.normal.value}',
      },
      fontSize: {
        group: 'size',
        value: 14,
      },
      fontWeight: {
        value: '{font.weight.standard.value}',
      },
      letterSpacing: {
        value: 0,
      },
      lineHeight: {
        group: 'size',
        value: 20,
      },
    },
    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    'body-2-median': {
      comment: 'Use for marketing and/or product median low body text',

      fontFamily: {
        value: '{typography.body-2.fontFamily.value}',
      },
      fontSize: {
        group: 'size',
        value: '{typography.body-2.fontSize.value}',
      },
      fontWeight: {
        value: '{font.weight.median.value}',
      },
      letterSpacing: {
        value: '{typography.body-2.letterSpacing.value}',
      },
      lineHeight: {
        group: 'size',
        value: '{typography.body-2.lineHeight.value}',
      },
    },
    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    'body-2-bold': {
      comment: 'Use for marketing and/or product bold low body text',

      fontFamily: {
        value: '{typography.body-2.fontFamily.value}',
      },
      fontSize: {
        group: 'size',
        value: '{typography.body-2.fontSize.value}',
      },
      fontWeight: {
        value: '{font.weight.bold.value}',
      },
      letterSpacing: {
        value: '{typography.body-2.letterSpacing.value}',
      },
      lineHeight: {
        group: 'size',
        value: '{typography.body-2.lineHeight.value}',
      },
    },
    'body-2-link': {
      comment: 'Use for marketing and/or product links on low body text',

      fontFamily: {
        value: '{typography.body-2-bold.fontFamily.value}',
      },
      fontSize: {
        group: 'size',
        value: '{typography.body-2-bold.fontSize.value}',
      },
      fontWeight: {
        value: '{typography.body-2-bold.fontWeight.value}',
      },
      letterSpacing: {
        value: '{typography.body-2-bold.letterSpacing.value}',
      },
      lineHeight: {
        group: 'size',
        value: '{typography.body-2-bold.lineHeight.value}',
      },
      textDecoration: {
        value: 'underline',
      },
    },

    caption: {
      // We don't want to be able to use this token, it's just here for
      // reference in the other tokens below.
      ignored: true,

      // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
      fontFamily: {
        value: '{font.family.normal.value}',
      },
      fontSize: {
        group: 'size',
        value: 12,
      },
      fontWeight: {
        value: '{font.weight.standard.value}',
      },
      letterSpacing: {
        value: 0,
      },
      lineHeight: {
        group: 'size',
        value: 16,
      },
    },
    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    'caption-median': {
      comment: 'Use for marketing and/or product labels and captions',

      fontFamily: {
        value: '{typography.caption.fontFamily.value}',
      },
      fontSize: {
        group: 'size',
        value: '{typography.caption.fontSize.value}',
      },
      fontWeight: {
        value: '{font.weight.median.value}',
      },
      letterSpacing: {
        value: '{typography.caption.letterSpacing.value}',
      },
      lineHeight: {
        group: 'size',
        value: '{typography.caption.lineHeight.value}',
      },
    },
    // eslint-disable-next-line sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects
    'caption-bold': {
      comment: 'Use for marketing and/or product bold labels and captions',

      fontFamily: {
        value: '{typography.caption.fontFamily.value}',
      },
      fontSize: {
        group: 'size',
        value: '{typography.caption.fontSize.value}',
      },
      fontWeight: {
        value: '{font.weight.bold.value}',
      },
      letterSpacing: {
        value: '{typography.caption.letterSpacing.value}',
      },
      lineHeight: {
        group: 'size',
        value: '{typography.caption.lineHeight.value}',
      },
    },
    'caption-link': {
      comment:
        'Use for marketing and/or product links on labels and/or captions',

      fontFamily: {
        value: '{typography.caption-bold.fontFamily.value}',
      },
      fontSize: {
        group: 'size',
        value: '{typography.caption-bold.fontSize.value}',
      },
      fontWeight: {
        value: '{typography.caption-bold.fontWeight.value}',
      },
      letterSpacing: {
        value: '{typography.caption-bold.letterSpacing.value}',
      },
      lineHeight: {
        group: 'size',
        value: '{typography.caption-bold.lineHeight.value}',
      },
      textDecoration: {
        value: 'underline',
      },
    },
  },
}
