/* eslint-disable react-refresh/only-export-components */

import {
  ColorBaseBlack,
  ColorBaseWhite,
} from '@snowball-tech/design-tokens/dist/web/react/design-tokens'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import type { Preview } from '@storybook/react'
import { createGlobalStyle } from 'styled-components'

import DocumentationTemplate from './DocumentationTemplate.mdx'
import fractalTheme from './theme'

import '../src/styles/global.css'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: var(--font-family-normal);
    background-color: var(--color-brand-body);
  }
`

const preview = {
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles,
    }),
  ],

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
