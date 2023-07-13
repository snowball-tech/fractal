import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import InputPhone from './InputPhone'
import type { PhoneNumber } from './InputPhone.types'

type InputPhoneProps = ComponentProps<typeof InputPhone>

const meta: Meta<InputPhoneProps> = {
  argTypes: {
    onChange: {
      control: false,
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
          setArgs({ value: newPhoneNumber })
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

  title: 'InputPhone',
} satisfies Meta<InputPhoneProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { value: { countryCode: 'AC', number: '+247612457832' } },
}
