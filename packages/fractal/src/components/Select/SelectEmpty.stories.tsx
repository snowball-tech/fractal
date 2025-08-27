import type { Meta, StoryObj } from '@storybook/react-vite'

import type { ComponentProps } from 'react'

import { Select } from './Select'
import { SelectEmpty } from './SelectEmpty'

type SelectEmptyProps = ComponentProps<typeof SelectEmpty>

const meta: Meta<SelectEmptyProps> = {
  args: {
    children: 'No results! Sorry about that!',
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
  component: SelectEmpty,
  parameters: {
    chromatic: { delay: 2000 },
  },

  title: 'Molecules/Select/SelectEmpty',
} satisfies Meta<SelectEmptyProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ children }) => (
    <div className="h-[200px]">
      <Select placeholder="Select a value">
        <SelectEmpty>{children}</SelectEmpty>
      </Select>
    </div>
  ),
}
