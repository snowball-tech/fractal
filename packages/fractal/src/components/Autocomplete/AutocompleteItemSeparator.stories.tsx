import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Autocomplete from './Autocomplete'
import AutocompleteItem from './AutocompleteItem'
import AutocompleteItemSeparator from './AutocompleteItemSeparator'

type AutocompleteItemSeparatorProps = ComponentProps<
  typeof AutocompleteItemSeparator
>

const meta: Meta<AutocompleteItemSeparatorProps> = {
  component: AutocompleteItemSeparator,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Autocomplete/AutocompleteItemSeparator',
} satisfies Meta<AutocompleteItemSeparatorProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div style={{ height: '1200px' }}>
      <Autocomplete
        placeholder="Start typing to autocomplete"
        onChange={action('onChange')}
      >
        <AutocompleteItem value="yoda">Yoda</AutocompleteItem>
        <AutocompleteItemSeparator />
        <AutocompleteItem value="darth-sidious">Darth Sidious</AutocompleteItem>
      </Autocomplete>
    </div>
  ),
}
