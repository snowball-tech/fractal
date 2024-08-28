import type { Meta, StoryObj } from '@storybook/react'

import { fn, userEvent, within } from '@storybook/test'
import {
  UilCancel as CancelIcon,
  UilCheckCircle as CheckCircleIcon,
  UilExclamationCircle as ExclamationCircleIcon,
  UilSearchAlt as SearchIcon,
  UilMessage as SendIcon,
  UilEnvelopeStar as StarIcon,
} from '@tooni/iconscout-unicons-react'

import type { ComponentProps, ReactNode } from 'react'

import { sleep } from '@/utils'

import { Toggle, ToggleVariants } from '.'
import { DEFAULT_VARIANT } from './Toggle.constants'

type ToggleProps = ComponentProps<typeof Toggle>

const meta = {
  args: {
    disabled: false,
    fullWidth: false,
    icon: 'None',
    iconOnly: false,
    label: 'Compact trash',
  },
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
      options: Object.values(ToggleVariants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        disable: true,
        type: { summary: Object.values(ToggleVariants).join('|') },
      },
    },
  },
  component: Toggle,
  parameters: {
    controls: {
      exclude: ['toggled'],
    },
    docs: {
      subtitle:
        "🌋 The, hum... toggle switch isn't, hum... toggling, ahah! - Stanley - Meet the Robinson",
    },
  },

  title: 'Molecules/Toggle/Toggle',
} satisfies Meta<ToggleProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="mb-2 flex flex-wrap items-end gap-2">{children}</div>
)

export const Primary: Story = {
  render: () => (
    <>
      <Wrapper>
        <Toggle label="Primary toggle" />
        <Toggle icon={<StarIcon />} label="Primary toggle with icon" />
        <Toggle
          icon={<StarIcon />}
          iconOnly
          label="Primary toggle with icon only"
        />
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
          disabled
          icon={<CancelIcon />}
          iconOnly
          label="Primary disabled toggle with icon only"
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

export const InteractivePrimary: Story = {
  args: {
    onToggle: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.getByRole('button'))

    await sleep(500)
    await userEvent.click(canvas.getByRole('button'))
  },
  render: () => <Toggle label="Primary toggle" />,
}
