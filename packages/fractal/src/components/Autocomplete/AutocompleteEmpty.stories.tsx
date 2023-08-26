import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Autocomplete from './Autocomplete'
import AutocompleteEmpty from './AutocompleteEmpty'

type AutocompleteEmptyProps = ComponentProps<typeof AutocompleteEmpty>

const meta: Meta<AutocompleteEmptyProps> = {
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'No results! Sorry about that!',
  },
  component: AutocompleteEmpty,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Autocomplete/AutocompleteEmpty',
} satisfies Meta<AutocompleteEmptyProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ children }) => (
    <Autocomplete placeholder="Start typing to autocomplete">
      <AutocompleteEmpty>{children}</AutocompleteEmpty>
    </Autocomplete>
  ),
}
