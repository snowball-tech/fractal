import path from 'node:path'

import type { Config } from 'tailwindcss'

import tailwindTheme from './tailwind.theme'

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
    require('@tailwindcss/aspect-ratio'),

    require('@tailwindcss/container-queries'),
  ],

  theme: tailwindTheme,
} satisfies Config
