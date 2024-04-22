import {
  ColorBaseBlack,
  ColorBaseWhite,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens'
import type { Preview } from '@storybook/react'
import isChromatic from 'chromatic/isChromatic'

import DocumentationTemplate from './DocumentationTemplate.mdx'
import fractalTheme from './theme'

import '../src/styles/global.css'

const preview: Preview = {
  decorators: isChromatic()
    ? [(storyFunction) => <div className="p-2">{storyFunction()}</div>]
    : [],

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
        method: 'alphabetical',
        order: [
          'Fractal',
          'Atoms',
          'Molecules',
          'Organisms',
          'Templates',
          'Pages',
          '[Work In Progress]',
        ],
      },
    },

    pseudo: {
      rootSelector: 'body',
    },
  },
}

export default preview
