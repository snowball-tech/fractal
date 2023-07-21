import {
  UilThumbsUp as ThumbsUpIcon,
  UilTimes as TimesIcon,
} from '@iconscout/react-unicons'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps, ReactNode } from 'react'

import Toggle from './Toggle'
import { DEFAULT_VARIANT, Variants } from './Toggle.constants'

type ToggleProps = ComponentProps<typeof Toggle>

const meta = {
  argTypes: {
    variant: {
      options: Object.values(Variants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        disable: true,
        type: { summary: Object.values(Variants).join('|') },
      },
    },
  },
  args: {
    disabled: false,
    fullWidth: false,
    label: 'Compact trash',
  },
  component: Toggle,
  parameters: {
    componentSubtitle:
      "🌋 The, hum... toggle switch isn't, hum... toggling, ahah! - Stanley - Meet the Robinson",
  },

  title: 'Molecules/Toggle/Toggle',
} satisfies Meta<ToggleProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: StoryObj<ToggleProps & { withIcon: boolean }> = {
  argTypes: {
    icon: {
      if: { arg: 'withIcon' },
      mapping: {
        ThumbsUp: <ThumbsUpIcon />,
        Times: <TimesIcon />,
      },
      options: ['ThumbsUp', 'Times'],
    },
    withIcon: {
      control: 'boolean',
      description: 'Add an icon to the toggle',
    },
  },
  args: {
    withIcon: false,
  },
}

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

export const Primary: Story = {
  render: () => (
    <>
      <Wrapper>
        <Toggle label="Primary toggle" />
        <Toggle icon={<ThumbsUpIcon />} label="Primary toggle with icon" />
        <Toggle defaultToggled label="Primary toggle toggled" />
      </Wrapper>

      <Wrapper>
        <Toggle disabled label="Primary disabled toggle" />
        <Toggle
          disabled
          icon={<TimesIcon />}
          label="Primary disabled toggle with icon"
        />
        <Toggle
          defaultToggled
          disabled
          label="Primary disabled toggle toggled"
        />
      </Wrapper>

      <Wrapper>
        <Toggle fullWidth label="Full width primary toggle" />
      </Wrapper>

      <Wrapper>
        <Toggle
          fullWidth
          icon={<ThumbsUpIcon />}
          label="Full width primary toggle with icon"
        />
      </Wrapper>

      <Wrapper>
        <Toggle
          defaultToggled
          fullWidth
          icon={<ThumbsUpIcon />}
          label="Full width primary toggle with icon toggled"
        />
      </Wrapper>
    </>
  ),
}
