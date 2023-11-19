import path from 'path'

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
    // eslint-disable-next-line global-require
    require('@tailwindcss/aspect-ratio'),
    // eslint-disable-next-line global-require
    require('@tailwindcss/container-queries'),
  ],

  safelist: [{ pattern: /^[fF]ractal/ }],

  theme: tailwindTheme,
} satisfies Config
