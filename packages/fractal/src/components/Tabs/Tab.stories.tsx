import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import type { ComponentProps } from 'react'

import { Typography } from '@/components/Typography'
import { sleep } from '@/utils'

import { Tab, TabContent, Tabs } from '.'

const content = (
  <>
    <Typography variant="heading-4">
      Here is a non-exhaustive list of jedis
    </Typography>

    <Typography element="ul">
      <li>Luke Skywalker</li>
      <li>Obi-wan Kenobi</li>
      <li>Mace Windoo</li>
      <li>Yoda</li>
    </Typography>
  </>
)

type TabProps = ComponentProps<typeof Tab>

const meta: Meta<TabProps> = {
  args: {
    disabled: false,
    label: 'Jedis',
    name: 'jedis',
  },
  component: Tab,

  parameters: {
    componentSubtitle:
      '👽 Insert tab "A" into chromosome "B." - Prof. Jumba - Stitch! The movie',
  },

  title: 'Molecules/Tabs/Tab',
} satisfies Meta<TabProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ disabled = false, label = 'Jedis', name = 'jedis' }) => (
    <Tabs
      tabs={
        <Tab
          disabled={disabled}
          label={label}
          name={name}
          onClick={action('onClick')}
        />
      }
      onTabChange={action('onTabChange')}
    >
      <TabContent name={name}>{content}</TabContent>
    </Tabs>
  ),
}

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const tab = canvas.getByRole('tab', { name: /jedis/i })

    await userEvent.hover(tab)
    await sleep(500)
    await userEvent.click(tab)

    await tab.blur()
  },
  render: () => (
    <Tabs tabs={<Tab label="Jedis" name="jedis" />}>
      <TabContent name="jedis">{content}</TabContent>
    </Tabs>
  ),
}
