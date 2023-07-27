import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilSearchAlt as SearchIcon,
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
    icon: {
      mapping: {
        Cancel: <CancelIcon />,
        Check: <CheckCircleIcon />,
        Error: <ExclamationCircleIcon />,
        None: undefined,
        Search: <SearchIcon />,
        Send: <SendIcon />,
        Star: <StarIcon />,
      },
      options: ['None', 'Cancel', 'Check', 'Error', 'Send', 'Star'],
    },
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
    fullWidth: false,
    icon: 'Send',
    iconOnly: false,
    iconPosition: 'right',
    label: 'Punch it, Chewie!',
    type: 'button',
  },
  component: Button,
  parameters: {
    componentSubtitle:
      "🧑‍✈️ Hey, Auto, what's that flashing button? - Axiom's Captain B. McCrea - Wall-E",
  },

  title: 'Molecules/Button',
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    variant: DEFAULT_VARIANT,
  },
}

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

export const Display: Story = {
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
        <Button
          icon={<StarIcon />}
          iconOnly
          label='"Display" button with icon only'
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
        <Button
          disabled
          icon={<StarIcon />}
          iconOnly
          label='"Display" disabled button with icon only'
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
    </>
  ),
}

export const Primary: Story = {
  render: () => (
    <>
      <Wrapper>
        <Button label="Primary button" variant="primary" />
        <Button icon={<SendIcon />} label="Primary button with right icon" />
        <Button
          icon={<SendIcon />}
          iconPosition="left"
          label="Primary button with left icon"
        />
        <Button
          icon={<SendIcon />}
          iconOnly
          label="Primary button with icon only"
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
        <Button
          disabled
          icon={<SendIcon />}
          iconOnly
          label="Primary disabled button with icon only"
        />
      </Wrapper>

      <Wrapper>
        <Button fullWidth label="Full width primary button" />
      </Wrapper>
    </>
  ),
}

export const Secondary: Story = {
  render: () => (
    <>
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
        <Button
          icon={<CancelIcon />}
          iconOnly
          label="Secondary button with icon only"
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
        <Button
          disabled
          icon={<CancelIcon />}
          iconOnly
          label="Secondary disabled button with icon only"
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
