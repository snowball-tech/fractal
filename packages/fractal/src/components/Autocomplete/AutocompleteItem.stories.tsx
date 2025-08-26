import type { Meta, StoryObj } from '@storybook/react-vite'

import { action } from 'storybook/actions'

import type { ComponentProps } from 'react'

import AutocompleteItem from '@/components/Dropdown/DropdownItem'

import Autocomplete from './Autocomplete'

type AutocompleteItemProps = ComponentProps<typeof AutocompleteItem>

const meta: Meta<AutocompleteItemProps> = {
  args: {
    disabled: false,
    label: 'Jar Jar Binks',
    value: 'jar-jar-binks',
  },
  component: AutocompleteItem,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Autocomplete/AutocompleteItem',
} satisfies Meta<AutocompleteItemProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ disabled = false, label = '', value = '' }) => (
    <div className="h-[1200px]">
      <Autocomplete
        placeholder="Start typing to autocomplete"
        onChange={action('onChange')}
      >
        <AutocompleteItem disabled={disabled} label={label} value={value} />
      </Autocomplete>
    </div>
  ),
}
