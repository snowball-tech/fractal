import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import AutocompleteItem from '@/components/Dropdown/DropdownItem'
import AutocompleteItemGroup from '@/components/Dropdown/DropdownItemGroup'

import Autocomplete from './Autocomplete'

type AutocompleteItemGroupProps = ComponentProps<typeof AutocompleteItemGroup>

const meta: Meta<AutocompleteItemGroupProps> = {
  argTypes: {
    children: {
      control: false,
      table: {
        type: {
          summary:
            'SelectItem | SelectItemSeparator | Array<SelectItem | SelectItemSeparator>',
        },
      },
    },
  },
  args: {
    label: 'Jedis',
  },
  component: AutocompleteItemGroup,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Autocomplete/AutocompleteItemGroup',
} satisfies Meta<AutocompleteItemGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ label }) => (
    <div style={{ height: '1200px' }}>
      <Autocomplete
        placeholder="Start typing to autocomplete"
        onChange={action('onChange')}
      >
        <AutocompleteItemGroup label={label}>
          <AutocompleteItem label="Luke Skywalker" value="luke-skywalker" />
          <AutocompleteItem label="Obi-Wan Kenobi" value="obi-wan-kenobi" />
          <AutocompleteItem label="Yoda" value="yoda" />
        </AutocompleteItemGroup>
      </Autocomplete>
    </div>
  ),
}
