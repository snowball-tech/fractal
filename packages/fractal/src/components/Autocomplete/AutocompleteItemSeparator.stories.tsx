import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import AutocompleteItem from '@/components/Dropdown/DropdownItem'
import AutocompleteItemSeparator from '@/components/Dropdown/DropdownItemSeparator'

import Autocomplete from './Autocomplete'

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
    <div className="h-[1200px]">
      <Autocomplete
        placeholder="Start typing to autocomplete"
        onChange={action('onChange')}
      >
        <AutocompleteItem label="Yoda" value="yoda" />
        <AutocompleteItemSeparator />
        <AutocompleteItem label="Darth Sidious" value="darth-sidious" />
      </Autocomplete>
    </div>
  ),
}
