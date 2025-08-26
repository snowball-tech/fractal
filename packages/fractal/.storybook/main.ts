import path from 'node:path'

import type { StorybookConfig } from '@storybook/react-vite'

import remarkGfm from 'remark-gfm'

function getAbsolutePath(value: string) {
  return path.dirname(require.resolve(path.join(value, 'package.json')))
}

const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    {
      name: getAbsolutePath('@storybook/addon-docs'),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    getAbsolutePath('storybook-addon-mock-date'),
  ],

  docs: {
    defaultName: 'Documentation',
  },

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  staticDirs: [{ from: '../public', to: '/public' }],

  stories: [
    '../stories/Introduction.mdx',
    '../stories/**/!(Introduction).mdx',
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
