import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import InputRadio from './InputRadio'
import InputRadioGroup from './InputRadioGroup'

type InputRadioProps = ComponentProps<typeof InputRadio>

const meta: Meta<InputRadioProps> = {
  argTypes: {
    asChild: { table: { disable: true } },
  },
  args: {
    disabled: false,
    fullWidth: false,
    label: 'Jar Jar Binks',
    value: 'jar-jar-binks',
  },
  component: InputRadio,
  parameters: {
    componentSubtitle: '🎶 Video killed the radio star - The Buggles',
  },

  title: 'Molecules/Input/InputRadio',
} satisfies Meta<InputRadioProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ disabled = false, fullWidth = false, label, value }) => (
    <InputRadioGroup fullWidth onValueChange={action('onValueChange')}>
      <InputRadio
        disabled={disabled}
        fullWidth={fullWidth}
        label={label}
        value={value}
      />
    </InputRadioGroup>
  ),
}
