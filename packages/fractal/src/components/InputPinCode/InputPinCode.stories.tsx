import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps, ReactNode } from 'react'

import InputPinCode from './InputPinCode'

type InputPinCodeProps = ComponentProps<typeof InputPinCode>

const meta: Meta<InputPinCodeProps> = {
  args: {
    autoFocus: false,
    description: 'Even an older code will checks out',
    disabled: false,
    label: 'Clearance code',
    length: 6,
    placeholders: 'X',
    readOnly: false,
    required: false,
  },
  component: InputPinCode,
  decorators: [
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onChange = (newCode: string) => {
        context.args.onChange?.(newCode)

        // Check if the component is controlled.
        if (context.args.value !== undefined) {
          setArgs({ value: newCode })
        }
      }

      return <Story args={{ ...context.args, onChange }} />
    },
  ],
  parameters: {
    componentSubtitle:
      '🥷 Do they have a code clearance? - Darth Vader - Star Wars: Episode VI - Return of the Jedi.',
    controls: {
      exclude: ['onRawChange', 'value'],
    },
  },

  title: 'Molecules/Input/InputPinCode',
} satisfies Meta<InputPinCodeProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { value: '' },
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

export const Examples = () => {
  const [{ value = '' }, setArgs] = useArgs()

  const handleChange = (newCode: string) => {
    setArgs({ value: newCode })
  }

  return (
    <>
      <Wrapper>
        <InputPinCode label="Empty" value={value} onChange={handleChange} />
        <InputPinCode
          label="Required"
          required
          value={value}
          onChange={handleChange}
        />
        <InputPinCode
          label="With more digits"
          length={8}
          value={value}
          onChange={handleChange}
        />
      </Wrapper>

      <Wrapper>
        <InputPinCode label="With value" value="1234" />
        <InputPinCode
          description="And a description"
          label="With placeholders"
          placeholders="X"
          value={value}
          onChange={handleChange}
        />
        <InputPinCode
          description="And a description"
          label="With dedicated placeholders"
          placeholders="ABCD"
          value={value}
          onChange={handleChange}
        />
      </Wrapper>

      <Wrapper>
        <InputPinCode
          description="With a description"
          disabled
          label="Disabled"
          placeholders="0"
        />
        <InputPinCode
          defaultValue="123456"
          description="And a description"
          disabled
          label="Disabled with value"
        />
        <InputPinCode
          defaultValue="123456"
          description="And a description"
          label="Read-only with value"
          readOnly
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputPinCode
          description="With a description"
          error="The code is not valid"
          label="Invalid code"
          value="1234"
        />
      </Wrapper>

      <Wrapper>
        <InputPinCode
          description="With a description"
          label="Valid code"
          success="The code is valid"
          value="1234"
        />
      </Wrapper>
    </>
  )
}
