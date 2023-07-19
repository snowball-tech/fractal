import {
  UilCancel as CancelIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@iconscout/react-unicons'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps, ReactNode } from 'react'

import Button from './Button'
import { DEFAULT_VARIANT, Variants } from './Button.constants'

type ButtonProps = ComponentProps<typeof Button>

const meta = {
  argTypes: {
    dir: { table: { disable: true } },
    onClick: { control: false },
    onLongClick: { control: false },
    variant: {
      options: Object.values(Variants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        type: { summary: Object.values(Variants).join('|') },
      },
    },
  },
  args: {
    disabled: false,
    icon: 'Send',
    iconPosition: 'right',
    label: 'Click me please!',
    type: 'button',
  },
  component: Button,
  parameters: {
    componentSubtitle:
      "🧑‍✈️ Hey, Auto, what's that flashing button? - Axiom's Captain B. McCrea - Wall-E",
  },

  title: 'Button',
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: StoryObj<ButtonProps & { withIcon: boolean }> = {
  argTypes: {
    icon: {
      if: { arg: 'withIcon' },
      mapping: {
        Cancel: <CancelIcon />,
        Send: <SendIcon />,
        Star: <StarIcon />,
      },
      options: ['Cancel', 'Send', 'Star'],
    },
    iconPosition: {
      if: { arg: 'withIcon' },
    },
    withIcon: {
      control: 'boolean',
      description: 'Add an icon to the button',
    },
  },
  args: {
    variant: DEFAULT_VARIANT,
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

export const Buttons: Story = {
  render: () => (
    <>
      <Wrapper>
        <Button label='"Display" button' variant="display" />
        <Button
          icon={<StarIcon />}
          label='"Display" button with right icon'
          variant="display"
        />
        <Button
          icon={<StarIcon />}
          iconPosition="left"
          label='"Display" button with left icon'
          variant="display"
        />
      </Wrapper>

      <Wrapper>
        <Button disabled label='"Display" disabled button' variant="display" />
        <Button
          disabled
          icon={<StarIcon />}
          label='"Display" disabled button with right icon'
          variant="display"
        />
        <Button
          disabled
          icon={<StarIcon />}
          iconPosition="left"
          label='"Display" disabled button with left icon'
          variant="display"
        />
      </Wrapper>

      <Wrapper>
        <Button
          fullWidth
          label='Full width "Display" button'
          variant="display"
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <Button label="Primary button" />
        <Button icon={<SendIcon />} label="Primary button with right icon" />
        <Button
          icon={<SendIcon />}
          iconPosition="left"
          label="Primary button with left icon"
        />
      </Wrapper>

      <Wrapper>
        <Button disabled label="Primary disabled button" />
        <Button
          disabled
          icon={<SendIcon />}
          label="Primary disabled button with right icon"
        />
        <Button
          disabled
          icon={<SendIcon />}
          iconPosition="left"
          label="Primary disabled button with left icon"
        />
      </Wrapper>

      <Wrapper>
        <Button fullWidth label="Full width primary button" />
      </Wrapper>

      {separator}

      <Wrapper>
        <Button label="Secondary button" variant="secondary" />
        <Button
          icon={<CancelIcon />}
          label="Secondary button with right icon"
          variant="secondary"
        />
        <Button
          icon={<CancelIcon />}
          iconPosition="left"
          label="Secondary button with left icon"
          variant="secondary"
        />
      </Wrapper>

      <Wrapper>
        <Button
          disabled
          label="Secondary disabled button"
          variant="secondary"
        />
        <Button
          disabled
          icon={<CancelIcon />}
          label="Secondary disabled button with right icon"
          variant="secondary"
        />
        <Button
          disabled
          icon={<CancelIcon />}
          iconPosition="left"
          label="Secondary disabled button with left icon"
          variant="secondary"
        />
      </Wrapper>

      <Wrapper>
        <Button
          fullWidth
          label="Full width secondary button"
          variant="secondary"
        />
      </Wrapper>
    </>
  ),
}
