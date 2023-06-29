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
  // Don't use base presets from PandaCSS.
  eject: true,

  emitPackage: true,

  // Produce a short hashed class name in production only.
  hash: process.env.NODE_ENV === 'production',

  include: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],

  jsxFactory: 'fractal',
  jsxFramework: 'react',

  minify: process.env.NODE_ENV === 'production',

  // Speed up build time in development only.
  optimize: process.env.NODE_ENV === 'production',

  outdir: '@snowball-tech/panda-fractal-react',

  prefix: 'fractal',

  // Only import the base presets with useful resets and utilities.
  presets: ['@pandacss/preset-base'],

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
        checkboxIndicator: recipes.checkboxIndicator,
        checkboxLabel: recipes.checkboxLabel,
        checkboxRoot: recipes.checkboxRoot,
        typography: recipes.typography,
      },
    },
  },
})
