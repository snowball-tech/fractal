import {
  ColorBaseBlack,
  ColorBaseWhite,
} from '@snowball-tech/design-tokens/dist/web/react/design-tokens'
import fractalTheme from '@snowball-tech/fractal/.storybook/theme'
import type { Preview } from '@storybook/react'

import DocumentationTemplate from './DocumentationTemplate.mdx'

import '@snowball-tech/fractal/global.css'

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
