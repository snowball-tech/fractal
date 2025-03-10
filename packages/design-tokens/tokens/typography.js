const { breakpoints } = require('../src/constants')

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
        value: '"{asset.font.PolySans.value}", Arial, system-ui, sans-serif',
      },
      wide: {
        value:
          '"{asset.font.PolySansWide.value}", "Arial Black", system-ui, sans-serif',
      },
    },

    weight: {
      bold: { value: 800 },
      median: { value: 600 },
      standard: { value: 400 },
    },
  },

  typography: {
    display: {
      1: {
        comment: 'Use for marketing *(only)* number one punchlines',

        fontFamily: {
          value: '{font.family.normal.value}',
        },
        fontSize: {
          [breakpoints.xxs]: {
            group: 'size',
            value: 48,
          },

          [breakpoints.md]: {
            group: 'size',
            value: 80,
          },
        },
        fontWeight: {
          value: '{font.weight.bold.value}',
        },
        letterSpacing: {
          value: 0,
        },
        lineHeight: {
          [breakpoints.xxs]: {
            group: 'size',
            value: 67,
          },

          [breakpoints.md]: {
            group: 'size',
            value: 112,
          },
        },
      },

      2: {
        comment: 'Use for marketing *(only)* secondary punchlines',

        fontFamily: {
          value: '{font.family.normal.value}',
        },
        fontSize: {
          [breakpoints.xxs]: {
            group: 'size',
            value: 40,
          },

          [breakpoints.md]: {
            group: 'size',
            value: 72,
          },
        },
        fontWeight: {
          value: '{font.weight.bold.value}',
        },
        letterSpacing: {
          value: 0,
        },
        lineHeight: {
          [breakpoints.xxs]: {
            group: 'size',
            value: 56,
          },

          [breakpoints.md]: {
            group: 'size',
            value: 101,
          },
        },
      },

      wide: {
        comment: 'Use for marketing *(only)* highlights',

        fontFamily: {
          value: '{font.family.wide.value}',
        },
        fontSize: {
          [breakpoints.xxs]: {
            group: 'size',
            value: 32,
          },

          [breakpoints.md]: {
            group: 'size',
            value: 56,
          },
        },
        fontWeight: {
          value: '{font.weight.bold.value}',
        },
        letterSpacing: {
          value: 0,
        },
        lineHeight: {
          [breakpoints.xxs]: {
            group: 'size',
            value: 45,
          },

          [breakpoints.md]: {
            group: 'size',
            value: 78,
          },
        },
      },
    },

    heading: {
      1: {
        comment: 'Use for marketing and/or product H1',

        fontFamily: {
          value: '{font.family.normal.value}',
        },
        fontSize: {
          [breakpoints.xxs]: {
            group: 'size',
            value: 32,
          },

          [breakpoints.md]: {
            group: 'size',
            value: 40,
          },
        },
        fontWeight: {
          value: '{font.weight.bold.value}',
        },
        letterSpacing: {
          value: 0,
        },
        lineHeight: {
          [breakpoints.xxs]: {
            group: 'size',
            value: 45,
          },

          [breakpoints.md]: {
            group: 'size',
            value: 56,
          },
        },
      },

      2: {
        comment: 'Use for marketing and/or product H2',

        fontFamily: {
          value: '{font.family.normal.value}',
        },
        fontSize: {
          [breakpoints.xxs]: {
            group: 'size',
            value: 28,
          },

          [breakpoints.md]: {
            group: 'size',
            value: 32,
          },
        },
        fontWeight: {
          value: '{font.weight.bold.value}',
        },
        letterSpacing: {
          value: 0,
        },
        lineHeight: {
          [breakpoints.xxs]: {
            group: 'size',
            value: 39,
          },

          [breakpoints.md]: {
            group: 'size',
            value: 45,
          },
        },
      },

      3: {
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
          value: 34,
        },
      },

      '3-link': {
        comment: 'Use for marketing and/or product H3 links',

        fontFamily: {
          value: '{typography.heading.3.fontFamily.value}',
        },
        fontSize: {
          group: 'size',
          value: '{typography.heading.3.fontSize.value}',
        },
        fontWeight: {
          value: '{typography.heading.3.fontWeight.value}',
        },
        letterSpacing: {
          value: '{typography.heading.3.letterSpacing.value}',
        },
        lineHeight: {
          group: 'size',
          value: '{typography.heading.3.lineHeight.value}',
        },
        textDecoration: {
          value: 'underline',
        },
      },

      4: {
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
          value: 28,
        },
      },

      '4-link': {
        comment: 'Use for marketing and/or product H4 links',

        fontFamily: {
          value: '{typography.heading.4.fontFamily.value}',
        },
        fontSize: {
          group: 'size',
          value: '{typography.heading.4.fontSize.value}',
        },
        fontWeight: {
          value: '{typography.heading.4.fontWeight.value}',
        },
        letterSpacing: {
          value: '{typography.heading.4.letterSpacing.value}',
        },
        lineHeight: {
          group: 'size',
          value: '{typography.heading.4.lineHeight.value}',
        },
        textDecoration: {
          value: 'underline',
        },
      },
    },

    body: {
      1: {
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
          value: 26,
        },
      },

      '1-median': {
        comment: 'Use for marketing and/or product median body text',

        fontFamily: {
          value: '{typography.body.1.fontFamily.value}',
        },
        fontSize: {
          group: 'size',
          value: '{typography.body.1.fontSize.value}',
        },
        fontWeight: {
          value: '{font.weight.median.value}',
        },
        letterSpacing: {
          value: '{typography.body.1.letterSpacing.value}',
        },
        lineHeight: {
          group: 'size',
          value: '{typography.body.1.lineHeight.value}',
        },
      },

      '1-bold': {
        comment: 'Use for marketing and/or product bold body text',

        fontFamily: {
          value: '{typography.body.1.fontFamily.value}',
        },
        fontSize: {
          group: 'size',
          value: '{typography.body.1.fontSize.value}',
        },
        fontWeight: {
          value: '{font.weight.bold.value}',
        },
        letterSpacing: {
          value: '{typography.body.1.letterSpacing.value}',
        },
        lineHeight: {
          group: 'size',
          value: '{typography.body.1.lineHeight.value}',
        },
      },

      '1-link': {
        comment: 'Use for marketing and/or product links on body text',

        fontFamily: {
          value: '{typography.body.1-median.fontFamily.value}',
        },
        fontSize: {
          group: 'size',
          value: '{typography.body.1-median.fontSize.value}',
        },
        fontWeight: {
          value: '{typography.body.1-median.fontWeight.value}',
        },
        letterSpacing: {
          value: '{typography.body.1-median.letterSpacing.value}',
        },
        lineHeight: {
          group: 'size',
          value: '{typography.body.1-median.lineHeight.value}',
        },
        textDecoration: {
          value: 'underline',
        },
      },

      2: {
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
          value: 23,
        },
      },

      '2-median': {
        comment: 'Use for marketing and/or product median low body text',

        fontFamily: {
          value: '{typography.body.2.fontFamily.value}',
        },
        fontSize: {
          group: 'size',
          value: '{typography.body.2.fontSize.value}',
        },
        fontWeight: {
          value: '{font.weight.median.value}',
        },
        letterSpacing: {
          value: '{typography.body.2.letterSpacing.value}',
        },
        lineHeight: {
          group: 'size',
          value: '{typography.body.2.lineHeight.value}',
        },
      },

      '2-bold': {
        comment: 'Use for marketing and/or product bold low body text',

        fontFamily: {
          value: '{typography.body.2.fontFamily.value}',
        },
        fontSize: {
          group: 'size',
          value: '{typography.body.2.fontSize.value}',
        },
        fontWeight: {
          value: '{font.weight.bold.value}',
        },
        letterSpacing: {
          value: '{typography.body.2.letterSpacing.value}',
        },
        lineHeight: {
          group: 'size',
          value: '{typography.body.2.lineHeight.value}',
        },
      },

      '2-link': {
        comment: 'Use for marketing and/or product links on low body text',

        fontFamily: {
          value: '{typography.body.2-median.fontFamily.value}',
        },
        fontSize: {
          group: 'size',
          value: '{typography.body.2-median.fontSize.value}',
        },
        fontWeight: {
          value: '{typography.body.2-median.fontWeight.value}',
        },
        letterSpacing: {
          value: '{typography.body.2-median.letterSpacing.value}',
        },
        lineHeight: {
          group: 'size',
          value: '{typography.body.2-median.lineHeight.value}',
        },
        textDecoration: {
          value: 'underline',
        },
      },
    },

    caption: {
      // We don't want to be able to use this token, it's just here for
      // reference in the other tokens below.
      ignored: true,

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
        value: 20,
      },
    },

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
        value: '{typography.caption-median.fontFamily.value}',
      },
      fontSize: {
        group: 'size',
        value: '{typography.caption-median.fontSize.value}',
      },
      fontWeight: {
        value: '{typography.caption-median.fontWeight.value}',
      },
      letterSpacing: {
        value: '{typography.caption-median.letterSpacing.value}',
      },
      lineHeight: {
        group: 'size',
        value: '{typography.caption-median.lineHeight.value}',
      },
      textDecoration: {
        value: 'underline',
      },
    },
  },
}
