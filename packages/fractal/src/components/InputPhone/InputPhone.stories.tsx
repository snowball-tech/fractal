import type { Meta, StoryObj } from '@storybook/react-vite'

import isChromatic from 'chromatic/isChromatic'
import { useArgs } from 'storybook/preview-api'
import { fn, userEvent, within } from 'storybook/test'

import type { ComponentProps, ReactNode } from 'react'

import { slowType } from '@/tests_helpers'
import { sleep } from '@/utils'

import type { PhoneNumber } from './InputPhone.types'

import { InputPhone } from '.'

type InputPhoneProps = ComponentProps<typeof InputPhone>

const phoneNumberFormat = '{ countryCode?: string, number: string }'

const meta: Meta<InputPhoneProps> = {
  args: {
    autoFocus: false,
    description: 'This is a description',
    disabled: false,
    emptyPrefixLabel: 'There is no phone prefix matching your search...',
    label: 'This is the label',
    placeholder: 'This is the placeholder',
    readOnly: false,
    required: false,
    searchPlaceholder: 'This is the search placeholder',
    updateOnInvalid: true,
    withPrefix: true,
  },
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
  component: InputPhone,
  decorators: [
    ...(isChromatic()
      ? [
          (storyFunction: () => ReactNode) => (
            <div className="h-[1200px]">{storyFunction()}</div>
          ),
        ]
      : []),
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onChange = (newPhoneNumber: PhoneNumber, isValid?: boolean) => {
        context.args.onChange?.(newPhoneNumber, isValid)

        // Check if the component is controlled.
        if (context.args.value !== undefined) {
          if (isValid) {
            setArgs({
              error: '',
              success: 'The phone number is valid',
              value: newPhoneNumber,
            })
          } else {
            setArgs({
              error: 'The phone number is not valid',
              success: '',
              value: newPhoneNumber,
            })
          }
        }
      }

      return <Story args={{ ...context.args, onChange }} />
    },
  ],

  parameters: {
    controls: {
      exclude: ['value'],
    },
    docs: {
      subtitle: '👽 E.T. phone home - E.T. - E.T. the Extra-Terrestrial',
    },
  },

  title: 'Molecules/Input/InputPhone',
} satisfies Meta<InputPhoneProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { value: { number: '' } },
}

export const Interactive: Story = {
  args: {
    onChange: fn(),
    value: { number: '' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const phoneInput = canvas.getByRole('textbox')
    await slowType('01 23 45 67 89', phoneInput)

    const prefixSelect = canvas.getByRole('combobox')
    await userEvent.click(prefixSelect)

    const searchPrefixInput = body.getByPlaceholderText(/search/u)
    await slowType('uni', searchPrefixInput)

    const menuItems = body.getAllByLabelText(/\(+/i)
    if (menuItems.length > 0) {
      await userEvent.hover(menuItems.at(0)!)
      await sleep(500)

      await userEvent.hover(menuItems.at(1)!)
      await sleep(500)

      await userEvent.hover(menuItems.at(2)!)
      await sleep(500)
    }
  },
}

const separator = <hr className="my-3 w-full" />

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="mb-2 flex flex-wrap items-start gap-2">{children}</div>
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
          defaultValue={{ countryCode: 'FR', number: '+33123456789' }}
          description="This is a description"
          label="Valid phone number"
          success="The phone number is valid"
        />
      </Wrapper>
    </>
  ),
}
