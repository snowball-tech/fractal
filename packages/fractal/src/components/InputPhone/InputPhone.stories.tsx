import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps, ReactNode } from 'react'

import InputPhone from './InputPhone'
import type { PhoneNumber } from './InputPhone.types'

type InputPhoneProps = ComponentProps<typeof InputPhone>

const phoneNumberFormat = '{ countryCode?: string, number: string }'

const meta: Meta<InputPhoneProps> = {
  argTypes: {
    defaultValue: {
      table: {
        type: { summary: phoneNumberFormat },
      },
    },
    onChange: {
      control: false,
      table: {
        type: {
          summary: `(newPhoneNumber: ${phoneNumberFormat}, isValid?: boolean) => void`,
        },
      },
    },
  },
  args: {
    autoFocus: false,
    description: 'This is a description',
    disabled: false,
    label: 'This is the label',
    placeholder: 'This is the placeholder',
    readOnly: false,
    required: false,
    searchPlaceholder: 'This is the search placeholder',
    updateOnInvalid: true,
    withPrefix: true,
  },
  component: InputPhone,
  decorators: [
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onChange = (newPhoneNumber: PhoneNumber, isValid?: boolean) => {
        context.args.onChange?.(newPhoneNumber, isValid)

        // Check if the component is controlled.
        if (context.args.value !== undefined) {
          if (!isValid) {
            setArgs({
              error: 'The phone number is not valid',
              success: '',
              value: newPhoneNumber,
            })
          } else {
            setArgs({
              error: '',
              success: 'The phone number is valid',
              value: newPhoneNumber,
            })
          }
        }
      }

      return <Story args={{ ...context.args, onChange }} />
    },
  ],
  parameters: {
    componentSubtitle: '👽 E.T. phone home - E.T. - E.T. the Extra-Terrestrial',
    controls: {
      exclude: ['value'],
    },
  },

  title: 'Molecules/Input/Phone',
} satisfies Meta<InputPhoneProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { value: { number: '' } },
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
        <InputPhone label="Empty" />
        <InputPhone label="Required" required />
      </Wrapper>

      <Wrapper>
        <InputPhone
          defaultValue={{ countryCode: 'AC', number: '+24712345678' }}
          label="With value"
        />
        <InputPhone
          description="This is a description"
          label="With descriptions and placeholders"
          placeholder="This is a placeholder"
        />
      </Wrapper>

      <Wrapper>
        <InputPhone
          description="This is a description"
          disabled
          label="Disabled"
          placeholder="This is a placeholder"
        />
        <InputPhone
          defaultValue={{ countryCode: 'AC', number: '+24712345678' }}
          description="This is a description"
          disabled
          label="Disabled with value"
        />
        <InputPhone
          defaultValue={{ countryCode: 'AC', number: '+24712345678' }}
          description="This is a description"
          label="Read-only with value"
          readOnly
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputPhone
          defaultValue={{ countryCode: 'FR', number: '+33654' }}
          description="This is a description"
          error="The phone number is not valid"
          label="Invalid phone number"
        />
      </Wrapper>

      <Wrapper>
        <InputPhone
          defaultValue={{ countryCode: 'FR', number: '+33687542196' }}
          description="This is a description"
          label="Valid phone number"
          success="The phone number is valid"
        />
      </Wrapper>
    </>
  ),
}
