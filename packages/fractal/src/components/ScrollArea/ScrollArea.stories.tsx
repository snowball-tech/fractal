import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import { ScrollArea } from '.'

type ScrollAreaProps = ComponentProps<typeof ScrollArea>

const meta = {
  argTypes: {
    asChild: { table: { disable: true } },
    children: { control: 'text' },
  },
  args: {
    children:
      'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship. The following is just to have a verysuperlongworkthatwillmakethescrollareascrollhorizontaly. And we repeat to have a vertical scroll. Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ',
    orientation: 'both',
    scrollHideDelay: 600,
    type: 'hover',
  },
  component: ScrollArea,
  parameters: {
    componentSubtitle: `📣 Our next stop is the Pecs and Flex Gift where you can pick up the great hero's 30-minute work-out scroll - Tourist guide - Hercules`,
  },

  title: 'Molecules/ScrollArea',
} satisfies Meta<ScrollAreaProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ children, orientation = 'both' }) => (
    <ScrollArea
      className="bg-grey-90 p-2"
      orientation={orientation}
      style={{
        height: '200px',
        width: '200px',
      }}
    >
      {children}
    </ScrollArea>
  ),
}
