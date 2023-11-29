import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import type { ComponentProps } from 'react'

import { Typography } from '@/components/Typography'
import { sleep } from '@/utils'

import { Tab, TabContent, Tabs } from '.'

type TabsProps = ComponentProps<typeof Tabs>

const tabs = (
  <>
    <Tab label="Jedis" name="jedis" />
    <Tab disabled label="Sith" name="sith" />
    <Tab label="Planets" name="planets" />
  </>
)
const children = (
  <div className="p-2">
    <TabContent name="jedis">
      <Typography variant="heading-4">
        Here is a non-exhaustive list of Jedis
      </Typography>

      <Typography element="ul">
        <li>Luke Skywalker</li>
        <li>Obi-wan Kenobi</li>
        <li>Mace Windoo</li>
        <li>Yoda</li>
      </Typography>
    </TabContent>

    <TabContent name="sith">
      <Typography variant="heading-4">
        Here is a non-exhaustive list of Siths
      </Typography>

      <Typography element="ul">
        <li>Darth Vader</li>
        <li>Darth Sidious</li>
        <li>Darth Maul</li>
      </Typography>
    </TabContent>

    <TabContent name="planets">
      <Typography variant="heading-4">
        Here is a non-exhaustive list of planets
      </Typography>

      <Typography element="ul">
        <li>Tatooine</li>
        <li>Coruscant</li>
        <li>Alderaan</li>
      </Typography>
    </TabContent>
  </div>
)

const meta: Meta<TabsProps> = {
  argTypes: {
    children: { table: { disable: true } },
    defaultTab: {
      control: 'radio',
      mapping: {
        Jedis: 'jedis',
        Planets: 'planets',
        Sith: 'sith',
      },
      options: ['Jedis', 'Sith', 'Planets'],
    },
    dir: { table: { disable: true } },
    tabs: { table: { disable: true } },
  },
  args: {
    children,
    defaultTab: 'Jedis',
    disabled: false,
    label: 'Star Wars',
    onTabChange: action('onTabChange'),
    orientation: 'horizontal',
    tabs,
  },
  component: Tabs,
  decorators: [
    function WithArgs(Story, context) {
      return (
        <div style={{ maxWidth: '600px' }}>
          <Story args={{ ...context.args }} />
        </div>
      )
    },
  ],

  parameters: {
    componentSubtitle:
      '👹 Stop the bar? - The car! Start the car! - Sheri Squibbles - Monsters University',
  },

  title: 'Molecules/Tabs',
} satisfies Meta<TabsProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const tab = canvas.getByRole('tab', { name: /planets/i })

    await userEvent.hover(tab)
    await sleep(500)
    await userEvent.click(tab)

    await tab.blur()
  },
}

export const Horizontal: Story = {
  render: () => (
    <Tabs defaultTab="jedis" orientation="horizontal" tabs={tabs}>
      {children}
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs defaultTab="jedis" orientation="vertical" tabs={tabs}>
      {children}
    </Tabs>
  ),
}
