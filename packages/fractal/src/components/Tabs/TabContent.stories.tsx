import type { Meta, StoryObj } from '@storybook/react-vite'

import { action } from 'storybook/actions'
import { userEvent, within } from 'storybook/test'

import type { ComponentProps } from 'react'

import { Typography } from '@/components/Typography/Typography'
import { sleep } from '@/utils'

import { Tab } from './Tab'
import { TabContent } from './TabContent'
import { Tabs } from './Tabs'

const content =
  'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.'

type TabContentProps = ComponentProps<typeof TabContent>

const meta: Meta<TabContentProps> = {
  args: {
    children: content,
    forceMount: false,
    name: 'tab',
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
  component: TabContent,

  parameters: {
    docs: {
      subtitle:
        '❤️‍🔥 I am the head algorithm of BuzzzTube which means I curate the content - Yesss - Ralph Breaks the Internet',
    },
  },

  title: 'Molecules/Tabs/TabContent',
} satisfies Meta<TabContentProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ children = content, name = 'tab' }) => (
    <Tabs
      defaultTab={name}
      tabs={<Tab label="Tab" name={name} onClick={action('onClick')} />}
      onTabChange={action('onTabChange')}
    >
      <TabContent name={name}>
        <Typography>{children}</Typography>
      </TabContent>
    </Tabs>
  ),
}

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const tab = canvas.getByRole('tab', { name: /^Tab$/ })

    await userEvent.hover(tab)
    await sleep(500)
    await userEvent.click(tab)

    await tab.blur()
  },
  render: () => (
    <Tabs defaultTab="tab" tabs={<Tab label="Tab" name="tab" />}>
      <TabContent name="tab">
        <Typography>{content}</Typography>
      </TabContent>
    </Tabs>
  ),
}
