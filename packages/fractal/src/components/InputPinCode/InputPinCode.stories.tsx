import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import { fn, userEvent, within } from '@storybook/test'
import type {
  ChangeEvent,
  ClipboardEvent,
  ComponentProps,
  ReactNode,
} from 'react'

import { sleep } from '@/utils'

import { InputPinCode } from '.'

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
    // eslint-disable-next-line unicorn/prevent-abbreviations
    function WithArgs(Story, context) {
      // eslint-disable-next-line unicorn/prevent-abbreviations
      const [, setArgs] = useArgs<typeof context.args>()

      const onChange = (
        event: ChangeEvent<HTMLInputElement> | ClipboardEvent<HTMLInputElement>,
        newCode: string,
      ) => {
        context.args.onChange?.(event, newCode)

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
      exclude: ['value'],
    },
  },

  title: 'Molecules/Input/InputPinCode',
} satisfies Meta<InputPinCodeProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { value: '' },
}

export const Interactive: Story = {
  args: {
    onBlur: fn(),
    onChange: fn(),
    onComplete: fn(),
    onFieldChange: fn(),
    onFocus: fn(),
    onKeyDown: fn(),
    value: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const inputs = canvas.getAllByRole('spinbutton')

    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    await userEvent.click(inputs.at(0)!)
    await sleep(500)
    await userEvent.type(inputs.at(0)!, '0')

    await sleep(500)
    await userEvent.type(inputs.at(1)!, '1')

    await sleep(500)
    await userEvent.type(inputs.at(2)!, '2')

    await sleep(500)
    await userEvent.type(inputs.at(3)!, '3')

    await userEvent.click(inputs.at(4)!)
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
  },
}

const separator = <hr className="my-3 w-full" />

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="mb-2 flex flex-wrap items-start gap-2">{children}</div>
)

export const Examples = () => {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  const [{ value = '' }, setArgs] = useArgs()

  const handleChange = (_: unknown, newCode: string) => {
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
