import type { Meta, StoryObj } from '@storybook/react-vite'

import { UilEllipsisV as MoreMenuIcon } from '@tooni/iconscout-unicons-react'
import { fn } from 'storybook/test'

import type { ComponentProps } from 'react'

import { Button } from '@/components/Button/Button'

import { Tooltip } from './Tooltip'

type TooltipProps = ComponentProps<typeof Tooltip>

const meta = {
  args: {
    align: undefined,
    children: 'Hover me',
    content: 'This is a tooltip',
    disabled: false,
    side: undefined,
    withArrow: true,
    wrapInButton: false,
  },
  argTypes: {
    content: { control: 'text' },
    trigger: {
      control: 'radio',
      mapping: {
        Button: <Button label="Hover me" />,
        'Icon Button': (
          <Button
            icon={<MoreMenuIcon />}
            iconOnly
            label="Hover me"
            variant="text"
          />
        ),
        Text: 'Hover me',
      },
      options: ['Text', 'Button', 'Icon Button'],
    },
  },
  component: Tooltip,
  parameters: {
    docs: {
      subtitle: `🎩 A tip of the hat from Dr. Facilier. - Dr. Facilier - The Princess and the Frog`,
    },
  },

  title: 'Molecules/Tooltip',
} satisfies Meta<TooltipProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    onDisplayChange: fn(),
    onHide: fn(),
    onInteractOutside: fn(),
    onShow: fn(),
  },
}
