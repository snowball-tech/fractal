import { defineConfig } from '@pandacss/dev'

import fractalPreset from './fractal-panda.preset'

export default defineConfig({
  /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

  // Don't use default theme from PandaCSS.
  eject: true,
  // Only import the base presets with useful resets and utilities.
  presets: [fractalPreset],

  emitPackage: true,
  outdir: '@snowball-tech/fractal-panda',

  // Produce a short hashed class name in production only.
  hash:
    process.env.NODE_ENV === 'production' &&
    process.env.VERCEL_ENV !== 'development',
  // Speed up build time in development only.
  optimize:
    process.env.NODE_ENV === 'production' &&
    process.env.VERCEL_ENV !== 'development',
  minify:
    process.env.NODE_ENV === 'production' &&
    process.env.VERCEL_ENV !== 'development',

  include: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  exclude: [],

  prefix: 'fractal',
  jsxFactory: 'fractal',
  jsxFramework: 'react',

  /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
})
