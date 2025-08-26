import type { Meta, StoryObj } from '@storybook/react-vite'

import { action } from 'storybook/actions'

import type { ComponentProps } from 'react'

import AutocompleteItem from '@/components/Dropdown/DropdownItem'
import AutocompleteItemGroup from '@/components/Dropdown/DropdownItemGroup'

import Autocomplete from './Autocomplete'

type AutocompleteItemGroupProps = ComponentProps<typeof AutocompleteItemGroup>

const meta: Meta<AutocompleteItemGroupProps> = {
  args: {
    condensed: false,
    disabled: false,
    label: 'Jedis',
  },
  argTypes: {
    children: {
      control: false,
      table: {
        type: {
          summary:
            'DropdownItem | DropdownItemGroup | DropdownItemSeparator | Array<DropdownItem | DropdownItemGroup | DropdownItemSeparator>',
        },
      },
    },
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
  render: ({ condensed = false, disabled = false, label }) => (
    <div className="h-[1200px]">
      <Autocomplete
        placeholder="Start typing to autocomplete"
        onChange={action('onChange')}
      >
        <AutocompleteItemGroup
          condensed={condensed}
          disabled={disabled}
          label={label}
        >
          <AutocompleteItem label="Luke Skywalker" value="luke-skywalker" />
          <AutocompleteItem label="Obi-Wan Kenobi" value="obi-wan-kenobi" />
          <AutocompleteItem label="Yoda" value="yoda" />
        </AutocompleteItemGroup>
      </Autocomplete>
    </div>
  ),
}
