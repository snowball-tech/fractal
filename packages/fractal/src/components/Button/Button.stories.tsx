import {
  UilCancel as CancelIcon,
  UilBan as ForbiddenIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@iconscout/react-unicons'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Button from './Button'
import { DEFAULT_VARIANT, Variants } from './Button.constants'

type ButtonProps = ComponentProps<typeof Button>

const meta = {
  argTypes: {
    onClick: { control: false },
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
  },
  component: Button,
  parameters: {
    componentSubtitle: '???',
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
        Forbidden: <ForbiddenIcon />,
        Send: <SendIcon />,
        Star: <StarIcon />,
      },
      options: ['Cancel', 'Forbidden', 'Send', 'Star'],
    },
    iconPosition: {
      if: { arg: 'withIcon' },
    },
    onClick: { table: { disable: true } },
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

export const Buttons: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--size-spacing-2)',
      }}
    >
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
      <Button disabled label='"Display" disabled button' variant="display" />
      <Button
        disabled
        icon={<ForbiddenIcon />}
        label='"Display" disabled button with right icon'
        variant="display"
      />
      <Button
        disabled
        icon={<ForbiddenIcon />}
        iconPosition="left"
        label='"Display" disabled button with left icon'
        variant="display"
      />

      <hr />

      <Button label="Primary button" />
      <Button icon={<SendIcon />} label="Primary button with right icon" />
      <Button
        icon={<SendIcon />}
        iconPosition="left"
        label="Primary button with left icon"
      />
      <Button disabled label="Primary disabled button" />
      <Button
        disabled
        icon={<ForbiddenIcon />}
        label="Primary disabled button with right icon"
      />
      <Button
        disabled
        icon={<ForbiddenIcon />}
        iconPosition="left"
        label="Primary disabled button with left icon"
      />

      <hr />

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
      <Button disabled label="Secondary disabled button" variant="secondary" />
      <Button
        disabled
        icon={<ForbiddenIcon />}
        label="Secondary disabled button with right icon"
        variant="secondary"
      />
      <Button
        disabled
        icon={<ForbiddenIcon />}
        iconPosition="left"
        label="Secondary disabled button with left icon"
        variant="secondary"
      />
    </div>
  ),
}
