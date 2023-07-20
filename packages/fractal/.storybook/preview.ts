import {
  ColorBaseBlack,
  ColorBaseWhite,
} from '@snowball-tech/design-tokens/dist/web/react/design-tokens'
import type { Preview } from '@storybook/react'

import DocumentationTemplate from './DocumentationTemplate.mdx'
import fractalTheme from './theme'

import '../src/styles/global.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
      controls: {
        sort: 'requiredFirst',
      },
      page: DocumentationTemplate,
      theme: {
        ...fractalTheme,

        textColor: ColorBaseBlack,
        textInverseColor: ColorBaseWhite,
      },
    },

    options: {
      storySort: {
        order: [
          'Guidelines',
          'Atoms',
          'Molecules',
          'Organisms',
          'Templates',
          'Pages',
        ],
      },
    },
  },
}

export default preview
