import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Select from './Select'
import SelectItem from './SelectItem'

type SelectItemProps = ComponentProps<typeof SelectItem>

const meta: Meta<SelectItemProps> = {
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: 'Jar Jar Binks',
    disabled: false,
    value: 'jar-jar-binks',
  },
  component: SelectItem,

  title: 'Molecules/Select/SelectItem',
} satisfies Meta<SelectItemProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ children, disabled = false, value }) => (
    <div style={{ height: '1200px' }}>
      <Select placeholder="Click to open" onSelect={action('onSelect')}>
        <SelectItem disabled={disabled} value={value}>
          {children}
        </SelectItem>
      </Select>
    </div>
  ),
}
