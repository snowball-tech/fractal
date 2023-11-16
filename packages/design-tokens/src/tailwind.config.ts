import path from 'path'

import {
  SizeBreakpointLg,
  SizeBreakpointMd,
  SizeBreakpointSm,
  SizeBreakpointXl,
  SizeBreakpointXs,
  SizeBreakpointXxl,
} from '@snowball-tech/design-tokens'
import omit from 'lodash/fp/omit'
import pick from 'lodash/fp/pick'
import type { Config } from 'tailwindcss'

const baseColors = {
  black: 'var(--color-base-black)',
  grey: {
    30: 'var(--color-base-grey-30)',
    50: 'var(--color-base-grey-50)',
    70: 'var(--color-base-grey-70)',
    90: 'var(--color-base-grey-90)',
  },
  white: 'var(--color-base-white)',
}

const brandColors = {
  primary: 'var(--color-brand-primary)',
  secondary: 'var(--color-brand-secondary)',
}

const percentages = {
  '1/2': '50%',
  '1/3': '33.333333%',
  '1/4': '25%',
  '1/5': '20%',
  '1/6': '16.666667%',
  '1/12': '8.333333%',
  '2/3': '66.666667%',
  '2/4': '50%',
  '2/5': '40%',
  '2/6': '33.333333%',
  '2/12': '16.666667%',
  '3/4': '75%',
  '3/5': '60%',
  '3/6': '50%',
  '3/12': '25%',
  '4/5': '80%',
  '4/6': '66.666667%',
  '4/12': '33.333333%',
  '5/6': '83.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
}

export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    path.join(
      path.dirname(require.resolve('@snowball-tech/fractal')),
      '**/*.{html,js,ts,jsx,tsx}',
    ),
  ],

  corePlugins: {
    columns: false,
  },

  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/aspect-ratio'),
    // eslint-disable-next-line global-require
    require('@tailwindcss/container-queries'),
  ],

  safelist: [{ pattern: /^[fF]ractal/ }],

  theme: {
    backgroundColor: ({ theme }) => ({
      ...theme('colors'),
      ...theme('colors.body'),
      disabled: 'var(--color-background-disabled)',
      'disabled-light': 'var(--color-base-grey-90)',
      separator: 'var(--color-base-grey-70)',
    }),

    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: 'var(--color-border-default)',
      disabled: 'var(--color-border-disabled)',
      error: 'var(--color-feedback-danger-50)',
      normal: 'var(--color-border-default)',
      success: 'var(--color-feedback-success-50)',
      warning: 'var(--color-feedback-warning-50)',
    }),

    borderRadius: {
      '0': 'var(--size-radius-0)',
      DEFAULT: 'var(--size-radius-0)',
      full: 'var(--size-radius-rounded)',
      md: 'var(--size-radius-m)',
      none: 'var(--size-radius-0)',
      rounded: 'var(--size-radius-rounded)',
      sm: 'var(--size-radius-s)',
      square: 'var(--size-radius-0)',
      xs: 'var(--size-radius-xs)',
    },

    borderWidth: {
      '0': '0px',
      '0.5': 'var(--size-spacing-half)',
      '1': 'var(--size-border-1)',
      '2': 'var(--size-border-2)',
      DEFAULT: '0px',
      half: 'var(--size-spacing-half)',
    },

    boxShadow: {
      '1': 'var(--shadow-brutal-1)',
      '2': 'var(--shadow-brutal-2)',
      DEFAULT: 'var(--shadow-none)',
      brutal: 'var(--shadow-brutal-2)',
      'brutal-1': 'var(--shadow-brutal-1)',
      'brutal-2': 'var(--shadow-brutal-2)',
      disabled: 'var(--shadow-none)',
      error: 'inset 0 0 0 1px var(--color-feedback-danger-50)',
      hover: 'inset 0 0 0 1px var(--color-border-default)',
      none: 'var(--shadow-none)',
      primary: 'inset 0 0 0 1px var(--color-brand-primary)',
      subtle: 'var(--shadow-brutal-1)',
      success: 'inset 0 0 0 1px var(--color-feedback-success-50)',
      warning: 'inset 0 0 0 1px var(--color-feedback-warning-50)',
    },

    colors: {
      ...baseColors,
      ...brandColors,
      base: baseColors,
      body: {
        dark: 'var(--color-background-body-dark)',
        light: 'var(--color-background-body-light)',
      },
      brand: {
        ...brandColors,
        DEFAULT: 'var(--color-brand-primary)',
      },
      current: 'currentColor',
      decorative: {
        blue: {
          50: 'var(--color-decorative-blue-50)',
          70: 'var(--color-decorative-blue-70)',
          90: 'var(--color-decorative-blue-90)',
        },
        green: {
          50: 'var(--color-decorative-green-50)',
          70: 'var(--color-decorative-green-70)',
          90: 'var(--color-decorative-green-90)',
        },
        pink: {
          70: 'var(--color-decorative-pink-70)',
          90: 'var(--color-decorative-pink-90)',
        },
        purple: {
          50: 'var(--color-decorative-purple-50)',
          70: 'var(--color-decorative-purple-70)',
          90: 'var(--color-decorative-purple-90)',
        },
        yellow: {
          50: 'var(--color-decorative-yellow-50)',
          70: 'var(--color-decorative-yellow-70)',
          90: 'var(--color-decorative-yellow-90)',
        },
      },
      feedback: {
        danger: {
          50: 'var(--color-feedback-danger-50)',
          90: 'var(--color-feedback-danger-90)',
        },
        success: {
          50: 'var(--color-feedback-success-50)',
          90: 'var(--color-feedback-success-90)',
        },
        warning: {
          50: 'var(--color-feedback-warning-50)',
          90: 'var(--color-feedback-warning-90)',
        },
      },
      transparent: 'var(--color-base-transparent)',
    },

    fontFamily: {
      DEFAULT: 'var(--font-family-normal)',

      'family-normal': 'var(--font-family-normal)',
      'family-wide': 'var(--font-family-wide)',

      /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

      'display-1': 'var(--typography-display-1-font-family)',
      'display-2': 'var(--typography-display-2-font-family)',
      'display-wide': 'var(--typography-display-wide-font-family)',

      'heading-1': 'var(--typography-heading-1-font-family)',
      'heading-2': 'var(--typography-heading-2-font-family)',
      'heading-3': 'var(--typography-heading-3-font-family)',
      'heading-4': 'var(--typography-heading-4-font-family)',

      'body-1': 'var(--typography-body-1-font-family)',
      'body-2': 'var(--typography-body-2-font-family)',

      caption: 'var(--typography-caption-font-family)',

      /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
    },

    fontSize: {
      DEFAULT: 'var(--size-spacing-2)',

      /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

      'display-1-xs': 'var(--typography-display-1-font-size-xs)',
      'display-1-md': 'var(--typography-display-1-font-size-md)',
      'display-2-xs': 'var(--typography-display-2-font-size-xs)',
      'display-2-md': 'var(--typography-display-2-font-size-md)',
      'display-wide-xs': 'var(--typography-display-wide-font-size-xs)',
      'display-wide-md': 'var(--typography-display-wide-font-size-md)',

      'heading-1-xs': 'var(--typography-heading-1-font-size-xs)',
      'heading-1-md': 'var(--typography-heading-1-font-size-md)',
      'heading-2-xs': 'var(--typography-heading-2-font-size-xs)',
      'heading-2-md': 'var(--typography-heading-2-font-size-md)',
      'heading-3': 'var(--typography-heading-3-font-size)',
      'heading-4': 'var(--typography-heading-4-font-size)',

      'body-1': 'var(--typography-body-1-font-size)',
      'body-2': 'var(--typography-body-2-font-size)',

      caption: 'var(--typography-caption-font-size)',

      /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
    },

    fontWeight: {
      DEFAULT: 'var(--font-weight-standard)',
      weight: 'var(--font-weight-standard)',

      'weight-bold': 'var(--font-weight-bold)',
      'weight-median': 'var(--font-weight-median)',
      'weight-medium': 'var(--font-weight-median)',
      'weight-normal': 'var(--font-weight-standard)',
      'weight-standard': 'var(--font-weight-standard)',

      /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

      'weight-display-1': 'var(--typography-display-1-font-weight)',
      'weight-display-2': 'var(--typography-display-2-font-weight)',
      'weight-display-wide': 'var(--typography-display-wide-font-weight)',

      'weight-heading-1': 'var(--typography-heading-1-font-weight)',
      'weight-heading-2': 'var(--typography-heading-2-font-weight)',
      'weight-heading-3': 'var(--typography-heading-3-font-weight)',
      'weight-heading-4': 'var(--typography-heading-4-font-weight)',

      'weight-body-1': 'var(--typography-body-1-font-weight)',
      'weight-body-1-bold': 'var(--typography-body-1-bold-font-weight)',
      'weight-body-1-median': 'var(--typography-body-1-median-font-weight)',
      'weight-body-1-link': 'var(--typography-body-1-link-font-weight)',
      'weight-body-2': 'var(--typography-body-2-font-weight)',
      'weight-body-2-bold': 'var(--typography-body-2-bold-font-weight)',
      'weight-body-2-median': 'var(--typography-body-2-median-font-weight)',
      'weight-body-2-link': 'var(--typography-body-2-link-font-weight)',

      'weight-caption-bold': 'var(--typography-caption-bold-font-weight)',
      'weight-caption-median': 'var(--typography-caption-median-font-weight)',
      'weight-caption-link': 'var(--typography-caption-link-font-weight)',

      /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
    },

    height: ({ breakpoints, theme }) => ({
      ...theme('spacing'),
      ...percentages,
      dvh: '100dvh',
      fit: 'fit-content',
      full: '100%',
      lvh: '100lvh',
      max: 'max-content',
      min: 'min-content',
      screen: '100vh',
      svh: '100svh',
      ...breakpoints(
        omit(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'], theme('screens')),
      ),
    }),

    lineHeight: {
      DEFAULT: 'var(--typography-body-1-line-height)',

      /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

      'display-1-xs': 'var(--typography-display-1-line-height-xs)',
      'display-1-md': 'var(--typography-display-1-line-height-md)',
      'display-2-xs': 'var(--typography-display-2-line-height-xs)',
      'display-2-md': 'var(--typography-display-2-line-height-md)',
      'display-wide-xs': 'var(--typography-display-wide-line-height-xs)',
      'display-wide-md': 'var(--typography-display-wide-line-height-md)',

      'heading-1-xs': 'var(--typography-heading-1-line-height-xs)',
      'heading-1-md': 'var(--typography-heading-1-line-height-md)',
      'heading-2': 'var(--typography-heading-2-line-height)',
      'heading-3': 'var(--typography-heading-3-line-height)',
      'heading-4': 'var(--typography-heading-4-line-height)',

      'body-1': 'var(--typography-body-1-line-height)',
      'body-2': 'var(--typography-body-2-line-height)',

      caption: 'var(--typography-caption-line-height)',

      /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
    },

    maxHeight: ({ breakpoints, theme }) => ({
      ...theme('spacing'),
      ...percentages,
      dvh: '100dvh',
      fit: 'fit-content',
      full: '100%',
      lvh: '100lvh',
      max: 'max-content',
      min: 'min-content',
      none: 'none',
      screen: '100vh',
      svh: '100svh',
      ...breakpoints(
        omit(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'], theme('screens')),
      ),
    }),

    maxWidth: ({ breakpoints, theme }) => ({
      ...theme('spacing'),
      ...percentages,
      fit: 'fit-content',
      full: '100%',
      max: 'max-content',
      min: 'min-content',
      none: 'none',
      prose: '65ch',
      ...breakpoints(
        pick(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'], theme('screens')),
      ),
    }),

    minHeight: ({ breakpoints, theme }) => ({
      ...theme('spacing'),
      ...percentages,
      dvh: '100dvh',
      fit: 'fit-content',
      full: '100%',
      lvh: '100lvh',
      max: 'max-content',
      min: 'min-content',
      screen: '100vh',
      svh: '100svh',
      ...breakpoints(
        omit(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'], theme('screens')),
      ),
    }),

    minWidth: ({ breakpoints, theme }) => ({
      ...theme('spacing'),
      ...percentages,
      fit: 'fit-content',
      full: '100%',
      max: 'max-content',
      min: 'min-content',
      ...breakpoints(
        pick(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'], theme('screens')),
      ),
    }),

    placeholderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: 'var(--color-text-placeholder)',
    }),

    ringColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: 'var(--color-brand-primary)',
    }),

    screens: {
      /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

      // Width breakpoints.
      xs: SizeBreakpointXs,
      sm: SizeBreakpointSm,
      md: SizeBreakpointMd,
      lg: SizeBreakpointLg,
      xl: SizeBreakpointXl,
      xxl: SizeBreakpointXxl,

      // Height breakpoints.
      'h-xxxl': { raw: '(max-height: 800px)' },
      'h-xxxl-only': { raw: '(min-height: 751px) and (max-height: 800px)' },
      'h-xxl': { raw: '(max-height: 750px)' },
      'h-xxl-only': { raw: '(min-height: 701px) and (max-height: 750px)' },
      'h-xl': { raw: '(max-height: 700px)' },
      'h-xl-only': { raw: '(min-height: 651px) and (max-height: 700px)' },
      'h-lg': { raw: '(max-height: 650px)' },
      'h-lg-only': { raw: '(min-height: 601px) and (max-height: 650px)' },
      'h-md': { raw: '(max-height: 600px)' },
      'h-md-only': { raw: '(min-height: 551px) and (max-height: 600px)' },
      'h-sm': { raw: '(max-height: 550px)' },
      'h-sm-only': { raw: '(min-height: 521px) and (max-height: 550px)' },
      'h-xs': { raw: '(max-height: 520px)' },
      'h-xs-only': { raw: '(min-height: 501px) and (max-height: 520px)' },
      'h-xxs': { raw: '(max-height: 500px)' },

      // Other
      narrow: { raw: '(max-width: 333px) and (max-height: 570px)' },
      thin: { raw: '(max-width: 768px) and (max-height: 600px)' },

      /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
    },

    spacing: {
      '0': 'var(--size-spacing-0)',

      px: 'var(--size-spacing-px)',

      quarter: 'var(--size-spacing-quarter)',
      //
      '0.25': 'var(--size-spacing-quarter)',

      half: 'var(--size-spacing-half)',
      //
      '0.5': 'var(--size-spacing-half)',

      '1': 'var(--size-spacing-1)',
      '1.5': 'calc(var(--size-spacing-1) + var(--size-spacing-half))',
      '2': 'var(--size-spacing-2)',
      '3': 'var(--size-spacing-3)',
      '4': 'var(--size-spacing-4)',
      '5': 'var(--size-spacing-5)',
      '6': 'var(--size-spacing-6)',
      '7': 'var(--size-spacing-7)',
      '8': 'var(--size-spacing-8)',
      '9': 'var(--size-spacing-9)',
      '10': 'var(--size-spacing-10)',
      '11': 'var(--size-spacing-11)',
      '12': 'var(--size-spacing-12)',
      '13': 'var(--size-spacing-13)',
      '14': 'var(--size-spacing-14)',
      '15': 'var(--size-spacing-15)',
      '16': 'var(--size-spacing-16)',
      '17': 'var(--size-spacing-17)',
      '18': 'var(--size-spacing-18)',
      '19': 'var(--size-spacing-19)',
      '20': 'var(--size-spacing-20)',
    },

    stroke: ({ theme }) => ({
      ...theme('borderColor'),
      DEFAULT: 'var(--color-base-grey-70)',
      none: 'none',
      separator: 'var(--color-base-grey-70)',
    }),

    textColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: 'var(--color-text-dark)',
      dark: 'var(--color-text-dark)',
      disabled: 'var(--color-text-disabled)',
      error: 'var(--color-text-error)',
      light: 'var(--color-text-light)',
      placeholder: 'var(--color-text-placeholder)',
      success: 'var(--color-text-success)',
      warning: 'var(--color-text-warning)',
    }),

    textDecorationColor: ({ theme }) => theme('textColor'),

    transitionDelay: {
      0: '0s',
      1: '1s',
      1.5: '1.5s',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      500: '500ms',
      600: '600ms',
      700: '700ms',
      1000: '1000ms',
      1500: '1500ms',
      DEFAULT: '150ms',
    },

    transitionDuration: {
      0: '0s',
      1: '1s',
      1.5: '1.5s',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      500: '500ms',
      600: '600ms',
      700: '700ms',
      1000: '1000ms',
      1500: '1500ms',
      DEFAULT: '150ms',
    },

    transitionProperty: {
      DEFAULT:
        'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      all: 'all',
      background: 'background-color',
      'background-color': 'background-color',
      bg: 'background-color',
      'bg-color': 'background-color',
      'border-color': 'border-color',
      colors:
        'color, background-color, border-color, text-decoration-color, fill, stroke',
      'margin-top': 'margin-top',
      'max-width': 'max-width',
      mt: 'margin-top',
      none: 'none',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },

    width: ({ breakpoints, theme }) => ({
      ...theme('spacing'),
      ...percentages,
      fit: 'fit-content',
      full: '100%',
      max: 'max-content',
      min: 'min-content',
      ...breakpoints(
        pick(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'], theme('screens')),
      ),
    }),
  },
} satisfies Config
