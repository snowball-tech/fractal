import type { Meta, StoryObj } from '@storybook/react-vite'

import type { ComponentProps } from 'react'

import Autocomplete from './Autocomplete'
import AutocompleteEmpty from './AutocompleteEmpty'

type AutocompleteEmptyProps = ComponentProps<typeof AutocompleteEmpty>

const meta: Meta<AutocompleteEmptyProps> = {
  args: {
    children: 'No results! Sorry about that!',
  },
  argTypes: {
    children: {
      control: 'text',
    },
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
    <div className="h-[200px]">
      <Autocomplete placeholder="Start typing to autocomplete">
        <AutocompleteEmpty>{children}</AutocompleteEmpty>
      </Autocomplete>
    </div>
  ),
}
