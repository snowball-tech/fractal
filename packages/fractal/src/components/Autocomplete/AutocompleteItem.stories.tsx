import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Autocomplete from './Autocomplete'
import AutocompleteItem from './AutocompleteItem'

type AutocompleteItemProps = ComponentProps<typeof AutocompleteItem>

const meta: Meta<AutocompleteItemProps> = {
  argTypes: {
    asChild: { table: { disable: true } },
    children: { control: 'text' },
  },
  args: {
    children: 'Jar Jar Binks',
    disabled: false,
    value: 'jar-jar-binks',
  },
  component: AutocompleteItem,
  parameters: {
    chromatic: { delay: 1000 },
  },

  title: 'Molecules/Autocomplete/AutocompleteItem',
} satisfies Meta<AutocompleteItemProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ children, disabled = false, value = '' }) => (
    <Autocomplete
      open
      placeholder="Start typing to autocomplete"
      onChange={action('onChange')}
    >
      <AutocompleteItem disabled={disabled} value={value}>
        {children}
      </AutocompleteItem>
    </Autocomplete>
  ),
}
