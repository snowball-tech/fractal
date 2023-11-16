import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Select, SelectEmpty } from '.'

type SelectEmptyProps = ComponentProps<typeof SelectEmpty>

const meta: Meta<SelectEmptyProps> = {
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'No results! Sorry about that!',
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
    <div style={{ height: '200px' }}>
      <Select placeholder="Select a value">
        <SelectEmpty>{children}</SelectEmpty>
      </Select>
    </div>
  ),
}
