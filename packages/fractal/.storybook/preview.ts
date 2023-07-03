import {
  ColorBaseBlack,
  ColorBaseWhite,
} from '@snowball-tech/design-tokens/dist/web/react/design-tokens'
import type { Preview } from '@storybook/react'

import DocumentationTemplate from './DocumentationTemplate.mdx'
import fractalTheme from './theme'

import '../src/styles/global.css'

// try {
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore this file does not exists in dev mode but does when building
//   // storybook
//   await import('../dist/fractal.css')
// } catch (e) {
//   // Nothing to do here.
// }

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    docs: {
      page: DocumentationTemplate,
      theme: {
        ...fractalTheme,

        textColor: ColorBaseBlack,
        textInverseColor: ColorBaseWhite,
      },
    },
  },
} as Preview

export default preview
