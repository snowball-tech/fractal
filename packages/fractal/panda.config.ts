import { defineConfig } from '@pandacss/dev'
import {
  SizeBreakpointLg,
  SizeBreakpointMd,
  SizeBreakpointSm,
  SizeBreakpointXl,
  SizeBreakpointXs,
  SizeBreakpointXxl,
} from '@snowball-tech/design-tokens'

import { Breakpoints } from './src/constants'
import * as recipes from './src/recipes'

export default defineConfig({
  /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

  // Don't use default theme from PandaCSS.
  eject: true,
  // Only import the base presets with useful resets and utilities.
  presets: ['@pandacss/preset-base'],

  outdir: 'fractal-panda',

  // Produce a short hashed class name in production only.
  hash: process.env.NODE_ENV === 'production',
  // Speed up build time in development only.
  optimize: process.env.NODE_ENV === 'production',
  minify: process.env.NODE_ENV === 'production',

  include: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  exclude: [],

  prefix: 'fractal',
  jsxFactory: 'fractal',
  jsxFramework: 'react',

  theme: {
    breakpoints: {
      [Breakpoints.lg]: SizeBreakpointLg,
      [Breakpoints.md]: SizeBreakpointMd,
      [Breakpoints.sm]: SizeBreakpointSm,
      [Breakpoints.xl]: SizeBreakpointXl,
      [Breakpoints.xs]: SizeBreakpointXs,
      [Breakpoints.xxl]: SizeBreakpointXxl,
    },

    extend: {
      recipes: {
        button: recipes.button,
        checkboxIndicator: recipes.checkboxIndicator,
        checkboxLabel: recipes.checkboxLabel,
        checkboxRoot: recipes.checkboxRoot,
        typography: recipes.typography,
      },
    },
  },

  /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
})
