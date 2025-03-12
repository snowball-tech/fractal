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
        value: '"{asset.font.PolySans.value}", system-ui, Arial, sans-serif',
      },
      wide: {
        value:
          '"{asset.font.PolySansWide.value}", "Arial Black", system-ui, sans-serif',
      },

      email: {
        normal: {
          value: 'system-ui, Arial, sans-serif',
        },
        wide: {
          value: '"Arial Black", system-ui, sans-serif',
        },
      },
    },

    weight: {
      bold: { value: 800 },
      median: { value: 600 },
      standard: { value: 400 },
    },

    letterSpacing: {
      // You might set this to 0.2px if you use Arial instead of system-ui.
      email: { value: 0 },
      normal: { value: 0 },
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
          value: '{font.letterSpacing.normal.value}',
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

        email: {
          fontFamily: {
            value: '{font.family.email.normal.value}',
          },
          fontSize: {
            [breakpoints.xxs]: {
              group: 'size',
              value: `{typography.display.1.fontSize.${breakpoints.xxs}.value}`,
            },

            [breakpoints.md]: {
              group: 'size',
              value: `{typography.display.1.fontSize.${breakpoints.md}.value}`,
            },
          },
          fontWeight: {
            value: '{typography.display.1.fontWeight.value}',
          },
          letterSpacing: {
            // This is not a typo, all titles should have "0" letter spacing.
            value: '{font.letterSpacing.normal.value}',
          },
          lineHeight: {
            [breakpoints.xxs]: {
              group: 'size',
              value: `{typography.display.1.lineHeight.${breakpoints.xxs}.value}`,
            },

            [breakpoints.md]: {
              group: 'size',
              value: `{typography.display.1.lineHeight.${breakpoints.md}.value}`,
            },
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
          value: '{font.letterSpacing.normal.value}',
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

        email: {
          fontFamily: {
            value: '{font.family.email.normal.value}',
          },
          fontSize: {
            [breakpoints.xxs]: {
              group: 'size',
              value: `{typography.display.2.fontSize.${breakpoints.xxs}.value}`,
            },

            [breakpoints.md]: {
              group: 'size',
              value: `{typography.display.2.fontSize.${breakpoints.md}.value}`,
            },
          },
          fontWeight: {
            value: '{typography.display.2.fontWeight.value}',
          },
          letterSpacing: {
            // This is not a typo, all titles should have "0" letter spacing.
            value: '{font.letterSpacing.normal.value}',
          },
          lineHeight: {
            [breakpoints.xxs]: {
              group: 'size',
              value: `{typography.display.2.lineHeight.${breakpoints.xxs}.value}`,
            },

            [breakpoints.md]: {
              group: 'size',
              value: `{typography.display.2.lineHeight.${breakpoints.md}.value}`,
            },
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
          value: '{font.letterSpacing.normal.value}',
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

        email: {
          fontFamily: {
            value: '{font.family.email.wide.value}',
          },
          fontSize: {
            [breakpoints.xxs]: {
              group: 'size',
              value: `{typography.display.wide.fontSize.${breakpoints.xxs}.value}`,
            },

            [breakpoints.md]: {
              group: 'size',
              value: `{typography.display.wide.fontSize.${breakpoints.md}.value}`,
            },
          },
          fontWeight: {
            value: '{typography.display.wide.fontWeight.value}',
          },
          letterSpacing: {
            // This is not a typo, all titles should have "0" letter spacing.
            value: '{font.letterSpacing.normal.value}',
          },
          lineHeight: {
            [breakpoints.xxs]: {
              group: 'size',
              value: `{typography.display.wide.lineHeight.${breakpoints.xxs}.value}`,
            },

            [breakpoints.md]: {
              group: 'size',
              value: `{typography.display.wide.lineHeight.${breakpoints.md}.value}`,
            },
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
          value: '{font.letterSpacing.normal.value}',
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

        email: {
          fontFamily: {
            value: '{font.family.email.normal.value}',
          },
          fontSize: {
            [breakpoints.xxs]: {
              group: 'size',
              value: `{typography.heading.1.fontSize.${breakpoints.xxs}.value}`,
            },

            [breakpoints.md]: {
              group: 'size',
              value: `{typography.heading.1.fontSize.${breakpoints.md}.value}`,
            },
          },
          fontWeight: {
            value: '{typography.heading.1.fontWeight.value}',
          },
          letterSpacing: {
            // This is not a typo, all titles should have "0" letter spacing.
            value: '{font.letterSpacing.normal.value}',
          },
          lineHeight: {
            [breakpoints.xxs]: {
              group: 'size',
              value: `{typography.heading.1.lineHeight.${breakpoints.xxs}.value}`,
            },

            [breakpoints.md]: {
              group: 'size',
              value: `{typography.heading.1.lineHeight.${breakpoints.md}.value}`,
            },
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
          value: '{font.letterSpacing.normal.value}',
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

        email: {
          fontFamily: {
            value: '{font.family.email.normal.value}',
          },
          fontSize: {
            [breakpoints.xxs]: {
              group: 'size',
              value: `{typography.heading.2.fontSize.${breakpoints.xxs}.value}`,
            },

            [breakpoints.md]: {
              group: 'size',
              value: `{typography.heading.2.fontSize.${breakpoints.md}.value}`,
            },
          },
          fontWeight: {
            value: '{typography.heading.2.fontWeight.value}',
          },
          letterSpacing: {
            // This is not a typo, all titles should have "0" letter spacing.
            value: '{font.letterSpacing.normal.value}',
          },
          lineHeight: {
            [breakpoints.xxs]: {
              group: 'size',
              value: `{typography.heading.2.lineHeight.${breakpoints.xxs}.value}`,
            },

            [breakpoints.md]: {
              group: 'size',
              value: `{typography.heading.2.lineHeight.${breakpoints.md}.value}`,
            },
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
          value: '{font.letterSpacing.normal.value}',
        },
        lineHeight: {
          group: 'size',
          value: 34,
        },

        email: {
          fontFamily: {
            value: '{font.family.email.normal.value}',
          },
          fontSize: {
            value: '{typography.heading.3.fontSize.value}',
          },
          fontWeight: {
            value: '{typography.heading.3.fontWeight.value}',
          },
          letterSpacing: {
            // This is not a typo, all titles should have "0" letter spacing.
            value: '{font.letterSpacing.normal.value}',
          },
          lineHeight: {
            value: '{typography.heading.3.lineHeight.value}',
          },
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

        email: {
          fontFamily: {
            value: '{typography.heading.3.email.fontFamily.value}',
          },
          fontSize: {
            value: '{typography.heading.3-link.fontSize.value}',
          },
          fontWeight: {
            value: '{typography.heading.3-link.fontWeight.value}',
          },
          letterSpacing: {
            // This is not a typo, all titles should have "0" letter spacing.
            value: '{font.letterSpacing.normal.value}',
          },
          lineHeight: {
            value: '{typography.heading.3-link.lineHeight.value}',
          },
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
          value: '{font.letterSpacing.normal.value}',
        },
        lineHeight: {
          group: 'size',
          value: 28,
        },

        email: {
          fontFamily: {
            value: '{font.family.email.normal.value}',
          },
          fontSize: {
            value: '{typography.heading.4.fontSize.value}',
          },
          fontWeight: {
            value: '{typography.heading.4.fontWeight.value}',
          },
          letterSpacing: {
            // This is not a typo, all titles should have "0" letter spacing.
            value: '{font.letterSpacing.normal.value}',
          },
          lineHeight: {
            value: '{typography.heading.4.lineHeight.value}',
          },
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

        email: {
          fontFamily: {
            value: '{typography.heading.4.email.fontFamily.value}',
          },
          fontSize: {
            value: '{typography.heading.4-link.fontSize.value}',
          },
          fontWeight: {
            value: '{typography.heading.4-link.fontWeight.value}',
          },
          letterSpacing: {
            // This is not a typo, all titles should have "0" letter spacing.
            value: '{font.letterSpacing.normal.value}',
          },
          lineHeight: {
            value: '{typography.heading.4-link.lineHeight.value}',
          },
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
          value: '{font.letterSpacing.normal.value}',
        },
        lineHeight: {
          group: 'size',
          value: 26,
        },

        email: {
          fontFamily: {
            value: '{font.family.email.normal.value}',
          },
          fontSize: {
            value: '{typography.body.1.fontSize.value}',
          },
          fontWeight: {
            value: '{typography.body.1.fontWeight.value}',
          },
          letterSpacing: {
            value: '{font.letterSpacing.email.value}',
          },
          lineHeight: {
            value: '{typography.body.1.lineHeight.value}',
          },
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

        email: {
          fontFamily: {
            value: '{typography.body.1.email.fontFamily.value}',
          },
          fontSize: {
            value: '{typography.body.1-median.fontSize.value}',
          },
          fontWeight: {
            value: '{typography.body.1-median.fontWeight.value}',
          },
          letterSpacing: {
            value: '{typography.body.1.email.letterSpacing.value}',
          },
          lineHeight: {
            value: '{typography.body.1-median.lineHeight.value}',
          },
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

        email: {
          fontFamily: {
            value: '{typography.body.1.email.fontFamily.value}',
          },
          fontSize: {
            value: '{typography.body.1-bold.fontSize.value}',
          },
          fontWeight: {
            value: '{typography.body.1-bold.fontWeight.value}',
          },
          letterSpacing: {
            value: '{typography.body.1.email.letterSpacing.value}',
          },
          lineHeight: {
            value: '{typography.body.1-bold.lineHeight.value}',
          },
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

        email: {
          fontFamily: {
            value: '{typography.body.1-median.email.fontFamily.value}',
          },
          fontSize: {
            value: '{typography.body.1-link.fontSize.value}',
          },
          fontWeight: {
            value: '{typography.body.1-link.fontWeight.value}',
          },
          letterSpacing: {
            value: '{typography.body.1-median.email.letterSpacing.value}',
          },
          lineHeight: {
            value: '{typography.body.1-link.lineHeight.value}',
          },
          textDecoration: {
            value: '{typography.body.1-link.textDecoration.value}',
          },
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
          value: '{font.letterSpacing.normal.value}',
        },
        lineHeight: {
          group: 'size',
          value: 23,
        },

        email: {
          fontFamily: {
            value: '{font.family.email.normal.value}',
          },
          fontSize: {
            value: '{typography.body.2.fontSize.value}',
          },
          fontWeight: {
            value: '{typography.body.2.fontWeight.value}',
          },
          letterSpacing: {
            value: '{font.letterSpacing.email.value}',
          },
          lineHeight: {
            value: '{typography.body.2.lineHeight.value}',
          },
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

        email: {
          fontFamily: {
            value: '{typography.body.2.email.fontFamily.value}',
          },
          fontSize: {
            value: '{typography.body.2-median.fontSize.value}',
          },
          fontWeight: {
            value: '{typography.body.2-median.fontWeight.value}',
          },
          letterSpacing: {
            value: '{typography.body.2.email.letterSpacing.value}',
          },
          lineHeight: {
            value: '{typography.body.2-median.lineHeight.value}',
          },
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

        email: {
          fontFamily: {
            value: '{typography.body.2.email.fontFamily.value}',
          },
          fontSize: {
            value: '{typography.body.2-bold.fontSize.value}',
          },
          fontWeight: {
            value: '{typography.body.2-bold.fontWeight.value}',
          },
          letterSpacing: {
            value: '{typography.body.2.email.letterSpacing.value}',
          },
          lineHeight: {
            value: '{typography.body.2-bold.lineHeight.value}',
          },
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

        email: {
          fontFamily: {
            value: '{typography.body.2-median.email.fontFamily.value}',
          },
          fontSize: {
            value: '{typography.body.2-link.fontSize.value}',
          },
          fontWeight: {
            value: '{typography.body.2-link.fontWeight.value}',
          },
          letterSpacing: {
            value: '{typography.body.2-median.email.letterSpacing.value}',
          },
          lineHeight: {
            value: '{typography.body.2-link.lineHeight.value}',
          },
          textDecoration: {
            value: '{typography.body.2-link.textDecoration.value}',
          },
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

      email: {
        fontFamily: {
          value: '{font.family.email.normal.value}',
        },
        fontSize: {
          value: '{typography.caption.fontSize.value}',
        },
        fontWeight: {
          value: '{typography.caption.fontWeight.value}',
        },
        letterSpacing: {
          value: '{font.letterSpacing.email.value}',
        },
        lineHeight: {
          value: '{typography.caption.lineHeight.value}',
        },
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

      email: {
        fontFamily: {
          value: '{typography.caption.email.fontFamily.value}',
        },
        fontSize: {
          value: '{typography.caption-median.fontSize.value}',
        },
        fontWeight: {
          value: '{typography.caption-median.fontWeight.value}',
        },
        letterSpacing: {
          value: '{typography.caption.email.letterSpacing.value}',
        },
        lineHeight: {
          value: '{typography.caption-median.lineHeight.value}',
        },
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

      email: {
        fontFamily: {
          value: '{typography.caption.email.fontFamily.value}',
        },
        fontSize: {
          value: '{typography.caption-bold.fontSize.value}',
        },
        fontWeight: {
          value: '{typography.caption-bold.fontWeight.value}',
        },
        letterSpacing: {
          value: '{typography.caption.email.letterSpacing.value}',
        },
        lineHeight: {
          value: '{typography.caption-bold.lineHeight.value}',
        },
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

      email: {
        fontFamily: {
          value: '{typography.caption-median.email.fontFamily.value}',
        },
        fontSize: {
          value: '{typography.caption-link.fontSize.value}',
        },
        fontWeight: {
          value: '{typography.caption-link.fontWeight.value}',
        },
        letterSpacing: {
          value: '{typography.caption-median.email.letterSpacing.value}',
        },
        lineHeight: {
          value: '{typography.caption-link.lineHeight.value}',
        },
        textDecoration: {
          value: '{typography.caption-link.textDecoration.value}',
        },
      },
    },
  },
}
