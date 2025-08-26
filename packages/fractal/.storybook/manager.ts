import { addons } from 'storybook/manager-api'

import fractalTheme from './theme'

addons.setConfig({
  sidebar: {
    filters: {
      patterns: (item) => !item.name.startsWith('Interactive'),
    },
  },
  theme: fractalTheme,
})
