import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@iconscout/react-unicons'
import * as RxForm from '@radix-ui/react-form'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps, ReactNode } from 'react'

import InputText from './InputText'

type InputTextProps = ComponentProps<typeof InputText>

const meta = {
  argTypes: {
    onChange: {
      control: false,
      table: {
        type: { summary: '`(event: ChangeEvent<HTMLInputElement>) => void`' },
      },
    },
  },
  args: {
    description: 'This is the description',
    disabled: false,
    icon: 'Star',
    iconPosition: 'right',
    label: 'This is the label',
    placeholder: 'This is the placeholder',
    readOnly: false,
    required: false,
    type: 'text',
  },
  component: InputText,
  parameters: {
    componentSubtitle: '🤖 Malfunction, need input! - Johnny 5 - Short Circuit',
    controls: {
      exclude: ['standalone', 'value'],
    },
  },

  title: 'InputText',
} satisfies Meta<InputTextProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: StoryObj<InputTextProps & { withIcon: boolean }> = {
  argTypes: {
    icon: {
      if: { arg: 'withIcon' },
      mapping: {
        Cancel: <CancelIcon />,
        Check: <CheckCircleIcon />,
        Error: <ExclamationCircleIcon />,
        Send: <SendIcon />,
        Star: <StarIcon />,
      },
      options: ['Cancel', 'Check', 'Error', 'Forbidden', 'Star'],
    },
    iconPosition: {
      if: { arg: 'withIcon' },
    },
    onChange: { table: { disable: true } },
    withIcon: {
      control: 'boolean',
      description: 'Add an icon to the input text',
    },
  },
  args: {
    standalone: true,
    withIcon: false,
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

export const TextInputs: Story = {
  render: () => (
    <RxForm.Root
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Wrapper>
        <InputText />
        <InputText placeholder="This is the placeholder" />
        <InputText defaultValue="This is the value" />
      </Wrapper>

      <Wrapper>
        <InputText label="Input text with a label" />
        <InputText
          label="Input text with a label"
          placeholder="And the placeholder"
        />
        <InputText defaultValue="And a value" label="Input text with a label" />
      </Wrapper>

      <Wrapper>
        <InputText icon={<StarIcon />} label="Input text with right icon" />
        <InputText
          icon={<StarIcon />}
          label="Input text with right icon"
          placeholder="And the placeholder"
        />
        <InputText
          defaultValue="And a value"
          icon={<StarIcon />}
          label="Input text with right icon"
        />
      </Wrapper>

      <Wrapper>
        <InputText
          icon={<StarIcon />}
          iconPosition="left"
          label="Input text with left icon"
        />
        <InputText
          icon={<StarIcon />}
          iconPosition="left"
          label="Input text with left icon"
          placeholder="And the placeholder"
        />
        <InputText
          defaultValue="And a value"
          icon={<StarIcon />}
          iconPosition="left"
          label="Input text with left icon"
        />
      </Wrapper>

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
        <InputText
          defaultValue="This is a correct value"
          success="Congratulations!"
        />

        <InputText
          defaultValue="With the icon on the left"
          iconPosition="left"
          label="This is a correct value"
          success="Congratulations!"
        />
      </Wrapper>

      <Wrapper>
        <InputText
          defaultValue="This is an invalid value"
          error="Oops, there's an error!"
        />

        <InputText
          defaultValue="With the icon on the left"
          error="Oops, there's an error!"
          iconPosition="left"
          label="This is an invalid value"
        />
        <InputText
          error="You must enter a value!"
          label="Required input text"
          required
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText disabled />
        <InputText
          disabled
          placeholder="This is the placeholder for a disabled input text"
        />
        <InputText defaultValue="Disabled input text with a value" disabled />
      </Wrapper>

      <Wrapper>
        <InputText disabled label="Disabled input text" />
        <InputText
          disabled
          label="Disabled input text"
          placeholder="With the placeholder"
        />
        <InputText
          defaultValue="With a value"
          disabled
          label="Disabled input text"
        />
      </Wrapper>

      <Wrapper>
        <InputText
          disabled
          icon={<StarIcon />}
          label="Disabled input text with right icon"
        />
        <InputText
          disabled
          icon={<StarIcon />}
          label="Disabled input text with right icon"
          placeholder="And the placeholder"
        />
        <InputText
          defaultValue="And a value"
          disabled
          icon={<StarIcon />}
          label="Disabled input text with right icon"
        />
      </Wrapper>

      <Wrapper>
        <InputText
          disabled
          icon={<CancelIcon />}
          iconPosition="left"
          label="Disabled input text with left icon"
        />
        <InputText
          disabled
          icon={<CancelIcon />}
          iconPosition="left"
          label="Disabled input text with left icon"
          placeholder="And the placeholder"
        />
        <InputText
          defaultValue="And a value"
          disabled
          icon={<CancelIcon />}
          iconPosition="left"
          label="Disabled input text with left icon"
        />
      </Wrapper>

      <Wrapper>
        <InputText
          description="This is the description"
          disabled
          label="This is the label"
        />
        <InputText
          description="This is the description"
          disabled
          label="This is the label"
          placeholder="This is the placeholder"
        />
        <InputText
          defaultValue="This is the value"
          description="This is the description"
          disabled
          label="This is the label"
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputText readOnly />
        <InputText
          placeholder="This is the placeholder for a read-only input text"
          readOnly
        />
        <InputText defaultValue="Read-only input text with a value" readOnly />
      </Wrapper>

      <Wrapper>
        <InputText label="Read-only input text" readOnly />
        <InputText
          label="Read-only input text"
          placeholder="With the placeholder"
          readOnly
        />
        <InputText
          defaultValue="With a value"
          label="Read-only input text"
          readOnly
        />
      </Wrapper>

      <Wrapper>
        <InputText
          icon={<SendIcon />}
          label="Read-only input text with right icon"
          readOnly
        />
        <InputText
          icon={<SendIcon />}
          label="Read-only input text with right icon"
          placeholder="And the placeholder"
          readOnly
        />
        <InputText
          defaultValue="And a value"
          icon={<SendIcon />}
          label="Read-only input text with right icon"
          readOnly
        />
      </Wrapper>

      <Wrapper>
        <InputText
          icon={<StarIcon />}
          iconPosition="left"
          label="Read-only input text with left icon"
          readOnly
        />
        <InputText
          icon={<StarIcon />}
          iconPosition="left"
          label="Read-only input text with left icon"
          placeholder="And the placeholder"
          readOnly
        />
        <InputText
          defaultValue="And a value"
          icon={<StarIcon />}
          iconPosition="left"
          label="Read-only input text with left icon"
          readOnly
        />
      </Wrapper>

      <Wrapper>
        <InputText
          description="This is the description"
          label="This is the label"
          readOnly
        />
        <InputText
          description="This is the description"
          label="This is the label"
          placeholder="This is the placeholder"
          readOnly
        />
        <InputText
          defaultValue="This is the value"
          description="This is the description"
          label="This is the label"
          readOnly
        />
      </Wrapper>
    </RxForm.Root>
  ),
}
