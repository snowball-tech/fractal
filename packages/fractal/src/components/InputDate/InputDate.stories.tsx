import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps, ReactNode } from 'react'

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
    descriptions: {
      table: {
        type: { summary: '{ day: string, month: string, year: string }' },
      },
    },
    onChange: {
      control: false,
      table: {
        type: { summary: `(newDate: ${dateFormat}) => void` },
      },
    },
    onFieldChange: {
      control: false,
      table: {
        type: {
          summary: `(type: 'day' | 'month' | 'year', newValue: number) => void`,
        },
      },
    },
    placeholders: {
      table: {
        type: { summary: '{ day: string, month: string, year: string }' },
      },
    },
    value: {
      table: {
        type: { summary: dateFormat },
      },
    },
  },
  args: {
    autoFocus: false,
    descriptions: {
      day: 'Day',
      month: 'Month',
      year: 'Year',
    },
    disabled: false,
    label: 'Your birth date',
    maxYear: 2023 - 18,
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

  title: 'Atoms/Input/Date',
} satisfies Meta<InputDateProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { value: { day: 11, month: 10, year: 1985 } },
}

const separator = (
  <hr
    style={{
      margin: 'var(--size-spacing-3) 0',
      width: '100%',
    }}
  />
)

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      alignItems: 'flex-start',
      display: 'flex',
      gap: 'var(--size-spacing-2)',
      marginBottom: 'var(--size-spacing-2)',
    }}
  >
    {children}
  </div>
)

export const Examples: Story = {
  render: () => (
    <>
      <Wrapper>
        <InputDate label="Empty" />
        <InputDate label="Required" required />
      </Wrapper>

      <Wrapper>
        <InputDate
          defaultValue={{ day: 20, month: 7, year: 2023 }}
          label="With value"
        />
        <InputDate
          descriptions={{
            day: 'The day',
            month: 'The month',
            year: 'The year',
          }}
          label="With descriptions and placeholders"
          placeholders={{
            day: 'Day',
            month: 'Month',
            year: 'Year',
          }}
        />
      </Wrapper>

      <Wrapper>
        <InputDate
          descriptions={{
            day: 'The day',
            month: 'The month',
            year: 'The year',
          }}
          disabled
          label="Disabled"
          placeholders={{
            day: 'DD',
            month: 'MM',
            year: 'YYYY',
          }}
        />
        <InputDate
          defaultValue={{ day: 20, month: 7, year: 2023 }}
          descriptions={{
            day: 'Day',
            month: 'Month',
            year: 'Year',
          }}
          disabled
          label="Disabled with value"
        />
        <InputDate
          defaultValue={{ day: 20, month: 7, year: 2023 }}
          descriptions={{
            day: 'Day',
            month: 'Month',
            year: 'Year',
          }}
          label="Read-only with value"
          readOnly
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputDate
          defaultValue={{ day: 50, month: 7, year: 1830 }}
          descriptions={{
            day: 'Day',
            month: 'Month',
            year: 'Year',
          }}
          label="Invalid values"
        />

        <InputDate
          defaultValue={{ day: 20, month: 7, year: 2023 }}
          descriptions={{
            day: 'Day',
            month: 'Month',
            year: 'Year',
          }}
          error="The date is not valid"
          label="Invalid date"
        />
      </Wrapper>

      <Wrapper>
        <InputDate
          defaultValue={{ day: 20, month: 7, year: 2023 }}
          descriptions={{
            day: 'Day',
            month: 'Month',
            year: 'Year',
          }}
          label="Valid date"
          success="The date is valid"
        />
      </Wrapper>
    </>
  ),
}
