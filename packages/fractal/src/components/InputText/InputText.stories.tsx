import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilDizzyMeh as DizzyFaceIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@tooni/iconscout-unicons-react'
import { useArgs } from 'storybook/preview-api'
import { fn, userEvent, within } from 'storybook/test'

import type { ChangeEvent, ComponentProps, ReactNode } from 'react'

import { slowType } from '@/tests_helpers'
import { sleep } from '@/utils'

import { InputText } from './InputText'

type InputTextProps = ComponentProps<typeof InputText>

const meta: Meta<InputTextProps> = {
  args: {
    autoFocus: false,
    button: {
      icon: <DizzyFaceIcon />,
      iconPosition: 'right',
      label: 'Use force',
      position: 'right',
    },
    description: 'These aren’t the droids you’re looking for!',
    disabled: false,
    extraSmall: false,
    fullWidth: false,
    label: 'You don’t need to see his identification!',
    placeholder: 'I don’t need to see his identification...',
    prefix: 'None',
    readOnly: false,
    required: false,
    suffix: 'None',
    type: 'text',
    withButton: false,
  },
  argTypes: {
    defaultValue: { control: 'text' },
    error: { control: 'text' },
    onChange: {
      control: false,
    },
    prefix: {
      mapping: {
        Cancel: <CancelIcon />,
        Check: <CheckCircleIcon />,
        Error: <ExclamationCircleIcon />,
        None: undefined,
        Send: <SendIcon />,
        Star: <StarIcon />,
      },
      options: ['None', 'Cancel', 'Check', 'Error', 'Send', 'Star'],
    },
    success: { control: 'text' },
    suffix: {
      mapping: {
        Cancel: <CancelIcon />,
        Check: <CheckCircleIcon />,
        Error: <ExclamationCircleIcon />,
        None: undefined,
        Send: <SendIcon />,
        Star: <StarIcon />,
      },
      options: ['None', 'Cancel', 'Check', 'Error', 'Send', 'Star'],
    },
  },
  component: InputText,
  decorators: [
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onChange = (
        event: ChangeEvent<HTMLInputElement>,
        newValue: string,
      ) => {
        context.args.onChange?.(event, newValue)

        // Check if the component is controlled.
        if (context.args.value !== undefined) {
          setArgs({ value: newValue })
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
      subtitle: '🤖 Malfunction, need input! - Johnny 5 - Short Circuit',
    },
  },

  title: 'Molecules/Input/InputText',
} satisfies Meta<InputTextProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    value: '',
  },
}

export const Interactive: Story = {
  args: {
    onButtonClick: fn(),
    onChange: fn(),
    value: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByRole('textbox')

    await userEvent.hover(input)
    await sleep(500)

    await slowType('Hello world!', input)
  },
}

const separator = <hr className="my-3 w-full" />

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="mb-2 flex flex-wrap items-end gap-2">{children}</div>
)

export const Basics: Story = {
  render: () => (
    <>
      <Wrapper>
        <InputText />
        <InputText placeholder="This is the placeholder" />
        <InputText defaultValue="This is the value" />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText label="Input text with a label" />
        <InputText
          label="Input text with a label"
          placeholder="And the placeholder"
        />
        <InputText defaultValue="And a value" label="Input text with a label" />
        <InputText label="Required input text with a label" required />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText
          description="This is the description"
          label="This is the label"
        />
        <InputText
          description="This is the description"
          label="This is the label"
          placeholder="This is the placeholder"
        />
        <InputText
          defaultValue="This is the value"
          description="This is the description"
          label="This is the label"
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText label="Input text with suffix icon" suffix={<StarIcon />} />
        <InputText
          label="Input text with suffix icon"
          placeholder="And a placeholder"
          suffix={<StarIcon />}
        />
        <InputText
          defaultValue="And a value"
          label="Input text with suffix icon"
          suffix={<StarIcon />}
        />
      </Wrapper>

      <Wrapper>
        <InputText label="Input text with prefix icon" prefix={<StarIcon />} />
        <InputText
          label="Input text with prefix icon"
          placeholder="And a placeholder"
          prefix={<StarIcon />}
        />
        <InputText
          defaultValue="And a value"
          label="Input text with prefix icon"
          prefix={<StarIcon />}
        />
      </Wrapper>

      <Wrapper>
        <InputText
          label="Input text with prefix and suffix icon"
          prefix={<StarIcon />}
          suffix={<SendIcon />}
        />
        <InputText
          label="Input text with prefix and suffix icon"
          placeholder="And a placeholder"
          prefix={<StarIcon />}
          suffix={<SendIcon />}
        />
        <InputText
          defaultValue="And a value"
          label="Input text with prefix and suffix icon"
          prefix={<StarIcon />}
          suffix={<SendIcon />}
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText
          defaultValue="A value"
          description="And a description"
          fullWidth
          label="This is a full width input text with a label"
        />
      </Wrapper>
    </>
  ),
}

export const DisabledAndReadOnly: Story = {
  render: () => (
    <>
      <Wrapper>
        <InputText disabled />
        <InputText disabled placeholder="This is the disabled placeholder" />
        <InputText defaultValue="This is the disabled value" disabled />
        <InputText defaultValue="This is the read-only value" readOnly />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText disabled label="Disabled input text with a label" />
        <InputText
          disabled
          label="Disabled input text with a label"
          placeholder="And the placeholder"
        />
        <InputText
          defaultValue="And a value"
          disabled
          label="Disabled input text with a label"
        />
        <InputText
          defaultValue="And a value"
          label="Read-only input text with a label"
          readOnly
        />
      </Wrapper>

      <Wrapper>
        <InputText
          defaultValue="And a value"
          disabled
          label="Required disabled input text with a label"
          required
        />

        <InputText
          defaultValue="And a value"
          label="Required read-only input text with a label"
          readOnly
          required
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText
          description="This is the description"
          disabled
          label="This is the label when disabled"
        />
        <InputText
          description="This is the description"
          disabled
          label="This is the label when disabled"
          placeholder="This is the placeholder"
        />
        <InputText
          defaultValue="This is the value"
          description="This is the description"
          disabled
          label="This is the label when disabled"
        />
        <InputText
          defaultValue="This is the value"
          description="This is the description"
          label="This is the label when in read-only"
          readOnly
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText
          disabled
          label="Disabled input text with suffix icon"
          suffix={<StarIcon />}
        />
        <InputText
          disabled
          label="Disabled input text with suffix icon"
          placeholder="And a placeholder"
          suffix={<StarIcon />}
        />
        <InputText
          defaultValue="And a value"
          disabled
          label="Disabled input text with suffix icon"
          suffix={<StarIcon />}
        />
        <InputText
          defaultValue="And a value"
          label="Read-only input text with suffix icon"
          readOnly
          suffix={<StarIcon />}
        />
      </Wrapper>

      <Wrapper>
        <InputText
          disabled
          label="Disabled input text with prefix icon"
          prefix={<StarIcon />}
        />
        <InputText
          disabled
          label="Disabled input text with prefix icon"
          placeholder="And a placeholder"
          prefix={<StarIcon />}
        />
        <InputText
          defaultValue="And a value"
          disabled
          label="Disabled input text with prefix icon"
          prefix={<StarIcon />}
        />
        <InputText
          defaultValue="And a value"
          label="Read-only input text with prefix icon"
          prefix={<StarIcon />}
          readOnly
        />
      </Wrapper>

      <Wrapper>
        <InputText
          disabled
          label="Disabled input text with prefix and suffix icon"
          prefix={<StarIcon />}
          suffix={<SendIcon />}
        />
        <InputText
          disabled
          label="Disabled input text with prefix and suffix icon"
          placeholder="And a placeholder"
          prefix={<StarIcon />}
          suffix={<SendIcon />}
        />
        <InputText
          defaultValue="And a value"
          disabled
          label="Disabled input text with prefix and suffix icon"
          prefix={<StarIcon />}
          suffix={<SendIcon />}
        />
        <InputText
          defaultValue="And a value"
          label="Read-only input text with prefix and suffix icon"
          prefix={<StarIcon />}
          readOnly
          suffix={<SendIcon />}
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText
          defaultValue="A value"
          description="And a description"
          disabled
          fullWidth
          label="This is a disabled full width input text with a label"
        />
      </Wrapper>

      <Wrapper>
        <InputText
          defaultValue="A value"
          description="And a description"
          fullWidth
          label="This is a read-only full width input text with a label"
          readOnly
        />
      </Wrapper>
    </>
  ),
}

export const Validations: Story = {
  render: () => (
    <>
      <Wrapper>
        <InputText
          defaultValue="This is a correct value"
          success="With a success message!"
        />

        <InputText
          defaultValue="This is a correct value"
          description="This is the description, not a success message"
          success
        />
      </Wrapper>

      <Wrapper>
        <InputText
          defaultValue="With a prefix"
          label="This is a success"
          prefix={<StarIcon />}
          success="Congratulations!"
        />

        <InputText
          defaultValue="With a suffix"
          label="This is a success"
          success="Congratulations!"
          suffix={<StarIcon />}
        />

        <InputText
          defaultValue="With a prefix and a suffix"
          label="This is a success"
          prefix={<StarIcon />}
          success="Congratulations!"
          suffix={<CheckCircleIcon />}
        />
      </Wrapper>

      <Wrapper>
        <InputText
          defaultValue="This is a correct value"
          fullWidth
          label="This is a success"
          success="With a success message!"
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText
          defaultValue="This is an invalid value"
          error="This is an error message!"
        />

        <InputText
          defaultValue="This is an invalid value"
          description="This is the description, not an error message"
          error
        />
      </Wrapper>

      <Wrapper>
        <InputText
          defaultValue="With a prefix"
          error="Oops, there's an error!"
          label="There is an error"
          prefix={<StarIcon />}
        />

        <InputText
          defaultValue="With a suffix"
          error="Oops, there's an error!"
          label="There is an error"
          suffix={<StarIcon />}
        />

        <InputText
          defaultValue="With a prefix and a suffix"
          error="Oops, there's an error!"
          label="There is an error"
          prefix={<StarIcon />}
          suffix={<ExclamationCircleIcon />}
        />
      </Wrapper>

      <Wrapper>
        <InputText
          defaultValue="This is an invalid value"
          error="This is an error message!"
          fullWidth
          label="There is an error"
        />
      </Wrapper>
    </>
  ),
}

export const WithButton: Story = {
  render: () => (
    <>
      <Wrapper>
        <InputText button={{ label: 'This is a button' }} withButton />
        <InputText
          button={{ label: 'This is a button' }}
          placeholder="This is the placeholder"
          withButton
        />
        <InputText
          button={{ label: 'This is a button' }}
          defaultValue="This is the value"
          withButton
        />
      </Wrapper>

      <Wrapper>
        <InputText
          button={{
            icon: <DizzyFaceIcon />,
            label: 'This is a button with a right icon',
          }}
          withButton
        />
        <InputText
          button={{
            icon: <DizzyFaceIcon />,
            iconPosition: 'left',
            label: 'This is a button with a left icon',
          }}
          placeholder="This is the placeholder"
          withButton
        />
        <InputText
          button={{
            icon: <DizzyFaceIcon />,
            iconOnly: true,
            label: 'This is a button with only an icon',
          }}
          defaultValue="This is the value"
          withButton
        />
      </Wrapper>

      <Wrapper>
        <InputText
          button={{ disabled: true, label: 'This is a button' }}
          withButton
        />
        <InputText
          button={{ disabled: true, label: 'This is a button' }}
          placeholder="This is the placeholder"
          withButton
        />
        <InputText
          button={{ disabled: true, label: 'This is a button' }}
          defaultValue="This is the value"
          withButton
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText
          button={{ label: 'This is a button' }}
          label="Input text with a label"
          withButton
        />
        <InputText
          button={{ label: 'This is a button' }}
          label="Input text with a label"
          placeholder="And the placeholder"
          withButton
        />
        <InputText
          button={{ label: 'This is a button' }}
          defaultValue="And a value"
          label="Input text with a label"
          withButton
        />
        <InputText
          button={{ label: 'This is a button' }}
          label="Required input text with a label"
          required
          withButton
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText
          button={{ label: 'This is a button' }}
          description="This is the description"
          label="This is the label"
          withButton
        />
        <InputText
          button={{ label: 'This is a button' }}
          description="This is the description"
          label="This is the label"
          placeholder="This is the placeholder"
          withButton
        />
        <InputText
          button={{ label: 'This is a button' }}
          defaultValue="This is the value"
          description="This is the description"
          label="This is the label"
          withButton
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText
          button={{ label: 'This is a button' }}
          label="Input text with suffix icon"
          suffix={<StarIcon />}
          withButton
        />
        <InputText
          button={{ label: 'This is a button' }}
          label="Input text with suffix icon"
          placeholder="And a placeholder"
          suffix={<StarIcon />}
          withButton
        />
        <InputText
          button={{ label: 'This is a button' }}
          defaultValue="And a value"
          label="Input text with suffix icon"
          suffix={<StarIcon />}
          withButton
        />
      </Wrapper>

      <Wrapper>
        <InputText
          button={{ label: 'This is a button' }}
          label="Input text with prefix icon"
          prefix={<StarIcon />}
          withButton
        />
        <InputText
          button={{ label: 'This is a button' }}
          label="Input text with prefix icon"
          placeholder="And a placeholder"
          prefix={<StarIcon />}
          withButton
        />
        <InputText
          button={{ label: 'This is a button' }}
          defaultValue="And a value"
          label="Input text with prefix icon"
          prefix={<StarIcon />}
          withButton
        />
      </Wrapper>

      <Wrapper>
        <InputText
          button={{ label: 'This is a button' }}
          label="Input text with prefix and suffix icon"
          prefix={<StarIcon />}
          suffix={<SendIcon />}
          withButton
        />
        <InputText
          button={{ label: 'This is a button' }}
          label="Input text with prefix and suffix icon"
          placeholder="And a placeholder"
          prefix={<StarIcon />}
          suffix={<SendIcon />}
          withButton
        />
        <InputText
          button={{ label: 'This is a button' }}
          defaultValue="And a value"
          label="Input text with prefix and suffix icon"
          prefix={<StarIcon />}
          suffix={<SendIcon />}
          withButton
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText
          button={{ label: 'This is a button' }}
          defaultValue="A value"
          description="And a description"
          fullWidth
          label="This is a full width input text with a label"
          withButton
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText
          button={{ label: 'This is a button' }}
          defaultValue="This is the disabled value"
          disabled
          withButton
        />
        <InputText
          button={{ label: 'This is a button' }}
          defaultValue="This is the read-only value"
          readOnly
          withButton
        />
      </Wrapper>

      <Wrapper>
        <InputText
          button={{
            icon: <DizzyFaceIcon />,
            label: 'This is a disabled button with a right icon',
          }}
          disabled
          withButton
        />
        <InputText
          button={{
            icon: <DizzyFaceIcon />,
            iconPosition: 'left',
            label: 'This is a disabled button with a left icon',
          }}
          defaultValue="With a value"
          disabled
          withButton
        />
        <InputText
          button={{
            icon: <DizzyFaceIcon />,
            iconOnly: true,
            label: 'This is a disabled button with only an icon',
          }}
          defaultValue="With a value"
          disabled
          withButton
        />
      </Wrapper>

      <Wrapper>
        <InputText
          button={{ disabled: false, label: 'This is a button' }}
          defaultValue="This is the disabled value"
          disabled
          withButton
        />
        <InputText
          button={{ disabled: false, label: 'This is a button' }}
          defaultValue="This is the read-only value"
          readOnly
          withButton
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText
          button={{ label: 'This is a button' }}
          defaultValue="This is a correct value"
          success="With a success message!"
          withButton
        />

        <InputText
          button={{ label: 'This is a button' }}
          defaultValue="This is an invalid value"
          error="This is an error message!"
          withButton
        />
      </Wrapper>
    </>
  ),
}
