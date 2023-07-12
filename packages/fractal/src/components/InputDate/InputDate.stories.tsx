import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import InputDate from './InputDate'
import type { DateFormat } from './InputDate.types'

type InputDateProps = ComponentProps<typeof InputDate>

const dateFormat = '{ day: number, month: number, year: number }'

const meta: Meta<InputDateProps> = {
  argTypes: {
    defaultValue: {
      table: {
        type: { summary: dateFormat },
      },
    },
    onChange: {
      control: false,
      table: {
        type: { summary: `(newDate: ${dateFormat}) => void` },
      },
    },
    value: {
      table: {
        type: { summary: dateFormat },
      },
    },
  },
  args: {
    descriptions: {
      day: 'Day',
      month: 'Month',
      year: 'Year',
    },
    disabled: false,
    label: 'This is the label',
    placeholders: {
      day: 'DD',
      month: 'MM',
      year: 'YYYY',
    },
    readOnly: false,
    required: false,
  },
  component: InputDate,
  decorators: [
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onChange = (newDate: DateFormat) => {
        context.args.onChange?.(newDate)

        // Check if the component is controlled.
        if (context.args.value !== undefined) {
          setArgs({ value: newDate })
        }
      }

      return <Story args={{ ...context.args, onChange }} />
    },
  ],
  parameters: {
    componentSubtitle:
      "🧌 Well, I don't think that date could've gone any worse - Bob Razowski - Monsters, Inc.",
    controls: {
      exclude: ['value'],
    },
  },

  title: 'InputDate',
} satisfies Meta<InputDateProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { value: {} },
}
