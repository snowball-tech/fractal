import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { userEvent, within } from '@storybook/test'

import type { ComponentProps } from 'react'

import { Typography } from '@/components/Typography'
import { sleep } from '@/utils'

import { Tab, TabContent, Tabs, TabSizes } from '.'
import { DEFAULT_SIZE } from './Tabs.constants'

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
    size: DEFAULT_SIZE,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      options: Object.values(TabSizes),
      table: {
        defaultValue: { summary: DEFAULT_SIZE },
        type: { summary: Object.values(TabSizes).join('|') },
      },
    },
  },
  component: Tab,

  parameters: {
    docs: {
      subtitle:
        '👽 Insert tab "A" into chromosome "B." - Prof. Jumba - Stitch! The movie',
    },
  },

  title: 'Molecules/Tabs/Tab',
} satisfies Meta<TabProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({
    disabled = false,
    label = 'Jedis',
    name = 'jedis',
    size = DEFAULT_SIZE,
  }) => (
    <Tabs
      tabs={
        <Tab
          disabled={disabled}
          label={label}
          name={name}
          size={size}
          onClick={action('onClick')}
        />
      }
      onTabChange={action('onTabChange')}
    >
      <TabContent name={name}>{content}</TabContent>
    </Tabs>
  ),
}

export const Small: Story = {
  render: () => (
    <Tabs
      tabs={
        <>
          <Tab label="Jedis" name="jedis" />
          <Tab label="Siths" name="siths" />
        </>
      }
    >
      <TabContent name="jedis">{content}</TabContent>
      <TabContent name="sith">Nothing to see here</TabContent>
    </Tabs>
  ),
}

export const Medium: Story = {
  render: () => (
    <Tabs
      tabs={
        <>
          <Tab label="Jedis" name="jedis" size="medium" />
          <Tab label="Siths" name="siths" size="medium" />
        </>
      }
    >
      <TabContent name="jedis">{content}</TabContent>
      <TabContent name="sith">Nothing to see here</TabContent>
    </Tabs>
  ),
}

export const Large: Story = {
  render: () => (
    <Tabs
      tabs={
        <>
          <Tab label="Jedis" name="jedis" size="large" />
          <Tab label="Siths" name="siths" size="large" />
        </>
      }
    >
      <TabContent name="jedis">{content}</TabContent>
      <TabContent name="sith">Nothing to see here</TabContent>
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
