import { dirname, join } from 'path'

import type { StorybookConfig } from '@storybook/react-vite'
import remarkGfm from 'remark-gfm'

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('storybook-addon-mock'),
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],

  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  staticDirs: [
    { from: '../assets', to: '/assets' },
    { from: '../public', to: '/public' },
  ],

  stories: [
    '../stories/Introduction.mdx',
    '../stories/**/!(Introduction).mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  typescript: {
    check: false,
    // Valid options are: 'react-docgen', 'react-docgen-typescript' or `false`.
    // See https://github.com/storybookjs/storybook/tree/next/code/addons/docs/react#typescript-props-with-react-docgen
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      skipChildrenPropWithoutDoc: false,
    },
  },
}

export default config
