import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-mock',
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
    '../stories/**/*.mdx',
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
    skipBabel: true,
  },
}

export default config
