import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@iconscout/react-unicons'
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import type { ChangeEvent, ComponentProps, ReactNode } from 'react'

import InputText from './InputText'

type InputTextProps = ComponentProps<typeof InputText>

const meta: Meta<InputTextProps> = {
  argTypes: {
    defaultValue: { control: 'text' },
    error: { control: 'text' },
    onChange: {
      control: false,
    },
    onRawChange: {
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
  args: {
    autoFocus: false,
    description: 'These aren’t the droids you’re looking for!',
    disabled: false,
    fullWidth: false,
    label: 'You don’t need to see his identification!',
    placeholder: 'I don’t need to see his identification...',
    prefix: 'None',
    readOnly: false,
    required: false,
    suffix: 'None',
    type: 'text',
  },
  component: InputText,
  decorators: [
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onChange = (newValue: string) => {
        context.args.onChange?.(newValue)

        // Check if the component is controlled.
        if (context.args.value !== undefined) {
          setArgs({ value: newValue })
        }
      }

      const onRawChange = (event: ChangeEvent<HTMLInputElement>) => {
        context.args.onRawChange?.(event)
      }

      return <Story args={{ ...context.args, onChange, onRawChange }} />
    },
  ],
  parameters: {
    componentSubtitle: '🤖 Malfunction, need input! - Johnny 5 - Short Circuit',
    controls: {
      exclude: ['value'],
    },
  },

  title: 'Molecules/Input/Text',
} satisfies Meta<InputTextProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    value: '',
  },
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
      alignItems: 'flex-end',
      display: 'flex',
      gap: 'var(--size-spacing-2)',
      marginBottom: 'var(--size-spacing-2)',
    }}
  >
    {children}
  </div>
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

        <InputText
          defaultValue="With a prefix"
          label="This is a success"
          prefix={<StarIcon />}
          success="Congratulations!"
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

        <InputText
          defaultValue="With a prefix"
          error="Oops, there's an error!"
          label="There is an error"
          prefix={<StarIcon />}
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
