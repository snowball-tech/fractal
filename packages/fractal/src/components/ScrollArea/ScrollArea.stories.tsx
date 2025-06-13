import type { Meta, StoryObj } from '@storybook/react'

import type { ComponentProps } from 'react'

import { Typography } from '@/components/Typography'

import { ScrollArea } from '.'

type ScrollAreaProps = ComponentProps<typeof ScrollArea>

const meta = {
  args: {
    children: (
      <>
        <Typography>
          Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm.
          And well you should not.
        </Typography>

        <Typography>
          For my ally is the Force, and a powerful ally it is. Life creates it,
          makes it grow. Its energy surrounds us and binds us. Luminous beings
          are we, not this crude matter. You must feel the Force around you;
          here, between you, me, the tree, the rock, everywhere, yes. Even
          between the land and the ship.
        </Typography>

        <Typography>
          The following is just to have a
          verysuperlongworkthatwillmakethescrollareascrollhorizontaly. And we
          repeat to have a vertical scroll.
        </Typography>

        <Typography>
          Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm.
          And well you should not. For my ally is the Force, and a powerful ally
          it is. Life creates it, makes it grow. Its energy surrounds us and
          binds us. Luminous beings are we, not this crude matter. You must feel
          the Force around you; here, between you, me, the tree, the rock,
          everywhere, yes. Even between the land and the{' '}
        </Typography>
      </>
    ),
    horizontal: true,
    scrollbarOnHover: true,
    vertical: true,
  },
  argTypes: {
    children: { control: 'text' },
  },
  component: ScrollArea,
  parameters: {
    docs: {
      subtitle: `📣 Our next stop is the Pecs and Flex Gift where you can pick up the great hero's 30-minute work-out scroll - Tourist guide - Hercules`,
    },
  },

  title: 'Molecules/ScrollArea',
} satisfies Meta<ScrollAreaProps>

export default meta
type Story = StoryObj<typeof meta>

const contentClassNames = 'bg-grey-90 p-2 flex flex-col gap-2 size-fit'

export const Playground: Story = {
  render: ({ children }) => (
    <ScrollArea className="size-[200px]" contentClassName={contentClassNames}>
      {children}
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: ({ children }) => (
    <ScrollArea className="w-[200px]" contentClassName={contentClassNames}>
      {children}
    </ScrollArea>
  ),
}

export const Vertical: Story = {
  render: ({ children }) => (
    <ScrollArea className="h-[200px]" contentClassName={contentClassNames}>
      {children}
      {children}
      {children}
      {children}
      {children}
    </ScrollArea>
  ),
}
