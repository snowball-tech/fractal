import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { Dropdown, DropdownRadioGroup, DropdownRadioItem } from '.'

type DropdownRadioItemProps = ComponentProps<typeof DropdownRadioItem>

const meta: Meta<DropdownRadioItemProps> = {
  argTypes: {
    asChild: { table: { disable: true } },
  },
  args: {
    disabled: false,
    label: 'Jar Jar Binks',
    value: 'jar-jar-binks',
  },
  component: DropdownRadioItem,

  title: 'Molecules/Dropdown/DropdownRadio/DropdownRadioItem',
} satisfies Meta<DropdownRadioItemProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ disabled = false, label, value }) => (
    <div style={{ height: '1200px' }}>
      <Dropdown trigger="Click me">
        <DropdownRadioGroup onValueChange={action('onValueChange')}>
          <DropdownRadioItem disabled={disabled} label={label} value={value} />
        </DropdownRadioGroup>
      </Dropdown>
    </div>
  ),
}
