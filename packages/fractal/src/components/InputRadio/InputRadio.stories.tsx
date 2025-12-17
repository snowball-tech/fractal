import type { Meta, StoryObj } from '@storybook/react-vite'

import { action } from 'storybook/actions'

import type { ComponentProps } from 'react'

import { cn } from '@/styles/helpers'

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

export const ComplexChildren: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <InputRadioGroup onValueChange={action('onValueChange')}>
        <InputRadio value="toto">
          <div className="relative flex w-full items-center justify-between pr-2">
            <span>This is a label inside of a complex ReactNode children</span>

            <span
              className={cn(
                'font-mono absolute -top-one-and-half right-0 flex size-[6px] items-center justify-center rounded-[4px] border-1 border-grey-50 p-[6px] pb-[7px] text-caption font-weight-median leading-[0px] text-grey-30 [background-image:linear-gradient(125deg,var(--color-base-grey-70),var(--color-base-grey-90))] to-md:hidden',
              )}
            >
              1
            </span>
          </div>
        </InputRadio>
      </InputRadioGroup>
    </div>
  ),
}
