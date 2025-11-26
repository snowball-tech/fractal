import type { Meta, StoryObj } from '@storybook/react-vite'

import { action } from 'storybook/actions'

import type { ComponentProps } from 'react'

import { InputRadio } from './InputRadio'
import { InputRadioGroup } from './InputRadioGroup'

type InputRadioProps = ComponentProps<typeof InputRadio>

const meta: Meta<{ required?: boolean } & InputRadioProps> = {
  args: {
    condensed: false,
    disabled: false,
    fullWidth: false,
    label: 'Jar Jar Binks',
    required: false,
    value: 'jar-jar-binks',
  },
  argTypes: {
    asChild: { table: { disable: true } },
  },
  component: InputRadio,
  parameters: {
    docs: { subtitle: '🎶 Video killed the radio star - The Buggles' },
  },

  title: 'Molecules/Inputs/InputRadio',
} satisfies Meta<{ required?: boolean } & InputRadioProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({
    condensed = false,
    disabled = false,
    fullWidth = false,
    label,
    required = false,
    value,
  }) => (
    <InputRadioGroup
      fullWidth={fullWidth}
      required={required}
      onValueChange={action('onValueChange')}
    >
      <InputRadio
        condensed={condensed}
        disabled={disabled}
        fullWidth={fullWidth}
        label={label}
        value={value}
      />
    </InputRadioGroup>
  ),
}
