import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Autocomplete, AutocompleteItem } from '.'

type AutocompleteItemProps = ComponentProps<typeof AutocompleteItem>

const meta: Meta<AutocompleteItemProps> = {
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: 'Jar Jar Binks',
    disabled: false,
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
  render: ({ children, disabled = false, value = '' }) => (
    <div style={{ height: '1200px' }}>
      <Autocomplete
        placeholder="Start typing to autocomplete"
        onChange={action('onChange')}
      >
        <AutocompleteItem disabled={disabled} value={value}>
          {children}
        </AutocompleteItem>
      </Autocomplete>
    </div>
  ),
}
