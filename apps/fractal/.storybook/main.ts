import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    // Add this one back when it support Storybook v7 as it could be nice to
    // have.
    // 'storybook-addon-designs',
    'storybook-addon-mock',
  ],
  core: {
    enableCrashReports: true,
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  features: {
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  refs: {
    react: {
      title: 'React',
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:6007/'
          : 'react/',
    },
  },
  staticDirs: [
    { from: '../assets', to: '/assets' },
    { from: '../public', to: '/public' },
  ],
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
}

export default config
