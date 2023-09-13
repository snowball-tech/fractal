import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import type { ChangeEvent, ComponentProps, ReactNode } from 'react'

import Textarea from './Textarea'

type TextareaProps = ComponentProps<typeof Textarea>

const meta: Meta<TextareaProps> = {
  argTypes: {
    defaultValue: { control: 'text' },
    error: { control: 'text' },
    onChange: {
      control: false,
    },
    success: { control: 'text' },
  },
  args: {
    autoFocus: false,
    description: 'These aren’t the droids you’re looking for!',
    disabled: false,
    fullWidth: false,
    label: 'You don’t need to see his identification!',
    placeholder: 'I don’t need to see his identification...',
    readOnly: false,
    required: false,
  },
  component: Textarea,
  decorators: [
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onChange = (
        event: ChangeEvent<HTMLTextAreaElement>,
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
    componentSubtitle:
      '🦡 Security! Sweep the area! - Dr Madge Honey Badger - Zootopia',
    controls: {
      exclude: ['value'],
    },
  },

  title: 'Molecules/Textarea',
} satisfies Meta<TextareaProps>

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
      flexWrap: 'wrap',
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
        <Textarea />
        <Textarea placeholder="This is the placeholder" />
        <Textarea defaultValue="This is the value" />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea label="Textarea with a label" />
        <Textarea
          label="Textarea with a label"
          placeholder="And the placeholder"
        />
        <Textarea defaultValue="And a value" label="Textarea with a label" />
        <Textarea label="Required textarea with a label" required />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea
          description="This is the description"
          label="This is the label"
        />
        <Textarea
          description="This is the description"
          label="This is the label"
          placeholder="This is the placeholder"
        />
        <Textarea
          defaultValue="This is the value"
          description="This is the description"
          label="This is the label"
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea
          defaultValue="A value"
          description="And a description"
          fullWidth
          label="This is a full width textarea with a label"
        />
      </Wrapper>
    </>
  ),
}

export const DisabledAndReadOnly: Story = {
  render: () => (
    <>
      <Wrapper>
        <Textarea disabled />
        <Textarea disabled placeholder="This is the disabled placeholder" />
        <Textarea defaultValue="This is the disabled value" disabled />
        <Textarea defaultValue="This is the read-only value" readOnly />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea disabled label="Disabled textarea with a label" />
        <Textarea
          disabled
          label="Disabled textarea with a label"
          placeholder="And the placeholder"
        />
        <Textarea
          defaultValue="And a value"
          disabled
          label="Disabled textarea with a label"
        />
        <Textarea
          defaultValue="And a value"
          label="Read-only textarea with a label"
          readOnly
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue="And a value"
          disabled
          label="Required disabled textarea with a label"
          required
        />

        <Textarea
          defaultValue="And a value"
          label="Required read-only textarea with a label"
          readOnly
          required
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea
          description="This is the description"
          disabled
          label="This is the label when disabled"
        />
        <Textarea
          description="This is the description"
          disabled
          label="This is the label when disabled"
          placeholder="This is the placeholder"
        />
        <Textarea
          defaultValue="This is the value"
          description="This is the description"
          disabled
          label="This is the label when disabled"
        />
        <Textarea
          defaultValue="This is the value"
          description="This is the description"
          label="This is the label when in read-only"
          readOnly
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea
          defaultValue="A value"
          description="And a description"
          disabled
          fullWidth
          label="This is a disabled full width textarea with a label"
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue="A value"
          description="And a description"
          fullWidth
          label="This is a read-only full width textarea with a label"
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
        <Textarea
          defaultValue="This is a correct value"
          success="With a success message!"
        />

        <Textarea
          defaultValue="This is a correct value"
          description="This is the description, not a success message"
          success
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue="This is a correct value"
          fullWidth
          label="This is a success"
          success="With a success message!"
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <Textarea
          defaultValue="This is an invalid value"
          error="This is an error message!"
        />

        <Textarea
          defaultValue="This is an invalid value"
          description="This is the description, not an error message"
          error
        />
      </Wrapper>

      <Wrapper>
        <Textarea
          defaultValue="This is an invalid value"
          error="This is an error message!"
          fullWidth
          label="There is an error"
        />
      </Wrapper>
    </>
  ),
}
