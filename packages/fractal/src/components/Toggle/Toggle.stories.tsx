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

import Toggle from './Toggle'
import { DEFAULT_VARIANT, Variants } from './Toggle.constants'

type ToggleProps = ComponentProps<typeof Toggle>

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
        disable: true,
        type: { summary: Object.values(Variants).join('|') },
      },
    },
  },
  args: {
    disabled: false,
    fullWidth: false,
    icon: 'None',
    label: 'Compact trash',
  },
  component: Toggle,
  parameters: {
    componentSubtitle:
      "🌋 The, hum... toggle switch isn't, hum... toggling, ahah! - Stanley - Meet the Robinson",
    controls: {
      exclude: ['toggled'],
    },
  },

  title: 'Molecules/Toggle/Toggle',
} satisfies Meta<ToggleProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

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

export const Primary: Story = {
  render: () => (
    <>
      <Wrapper>
        <Toggle label="Primary toggle" />
        <Toggle icon={<StarIcon />} label="Primary toggle with icon" />
        <Toggle defaultToggled label="Primary toggle toggled" />
      </Wrapper>

      <Wrapper>
        <Toggle disabled label="Primary disabled toggle" />
        <Toggle
          disabled
          icon={<CancelIcon />}
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
          icon={<StarIcon />}
          label="Full width primary toggle with icon"
        />
      </Wrapper>

      <Wrapper>
        <Toggle
          defaultToggled
          fullWidth
          icon={<CancelIcon />}
          label="Full width primary toggle with icon toggled"
        />
      </Wrapper>
    </>
  ),
}
