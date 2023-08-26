import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Autocomplete from './Autocomplete'
import AutocompleteItem from './AutocompleteItem'
import AutocompleteItemGroup from './AutocompleteItemGroup'

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
    chromatic: { delay: 1000 },
  },

  title: 'Molecules/Autocomplete/AutocompleteItemGroup',
} satisfies Meta<AutocompleteItemGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ label }) => (
    <Autocomplete
      open
      placeholder="Start typing to autocomplete"
      onChange={action('onChange')}
    >
      <AutocompleteItemGroup label={label}>
        <AutocompleteItem value="luke-skywalker">
          Luke Skywalker
        </AutocompleteItem>
        <AutocompleteItem value="obi-wan-kenobi">
          Obi-Wan Kenobi
        </AutocompleteItem>
        <AutocompleteItem value="yoda">Yoda</AutocompleteItem>
      </AutocompleteItemGroup>
    </Autocomplete>
  ),
}
