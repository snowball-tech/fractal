import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { InputRadio, InputRadioGroup } from '.'

type InputRadioProps = ComponentProps<typeof InputRadio>

const meta: Meta<{ required?: boolean } & InputRadioProps> = {
  argTypes: {
    asChild: { table: { disable: true } },
  },
  args: {
    condensed: false,
    disabled: false,
    fullWidth: false,
    label: 'Jar Jar Binks',
    required: false,
    value: 'jar-jar-binks',
  },
  component: InputRadio,
  parameters: {
    componentSubtitle: '🎶 Video killed the radio star - The Buggles',
  },

  title: 'Molecules/Input/InputRadio',
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
