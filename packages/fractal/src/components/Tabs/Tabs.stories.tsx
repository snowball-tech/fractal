import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  UilHeartBreak as BrokenHeartIcon,
  UilGlobe as GlobeIcon,
  UilHeartAlt as HeartIcon,
} from '@tooni/iconscout-unicons-react'
import { action } from 'storybook/actions'
import { fn, userEvent, within } from 'storybook/test'

import type { ComponentProps } from 'react'

import { Typography } from '@/components/Typography'
import { sleep } from '@/utils'

import { Tab, TabContent, Tabs } from '.'
import {
  DEFAULT_ORIENTATION,
  DEFAULT_POSITION,
  DEFAULT_VARIANT,
  Orientations,
  Positions,
  Variants,
} from './Tabs.constants'

type TabsProps = ComponentProps<typeof Tabs>

const textTabs = (
  <>
    <Tab className="min-w-10" label="Jedis" name="jedis" />
    <Tab className="min-w-10" disabled label="Sith" name="sith" />
    <Tab className="min-w-10" label="Planets" name="planets" />
  </>
)
const iconTabs = (
  <>
    <Tab className="min-w-10" icon={<HeartIcon />} name="jedis" />
    <Tab className="min-w-10" disabled icon={<BrokenHeartIcon />} name="sith" />
    <Tab className="min-w-10" icon={<GlobeIcon />} name="planets" />
  </>
)
const mixedTabs = (
  <>
    <Tab className="min-w-10" label="Jedis" name="jedis" />
    <Tab className="min-w-10" disabled label="Sith" name="sith" />
    <Tab
      className="min-w-10"
      icon={<GlobeIcon />}
      label="Planets"
      name="planets"
    />
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
  args: {
    children,
    defaultTab: 'Jedis',
    disabled: false,
    fullWidth: true,
    label: 'Star Wars',
    onTabChange: action('onTabChange'),
    orientation: DEFAULT_ORIENTATION,
    tabs: 'Mixed',
    tabsPosition: DEFAULT_POSITION,
    variant: DEFAULT_VARIANT,
  },
  argTypes: {
    children: {
      control: false,
      table: {
        type: {
          summary: 'TabContent | Array<TabContent>',
        },
      },
    },
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
    orientation: {
      options: Object.values(Orientations),
      table: {
        defaultValue: { summary: DEFAULT_ORIENTATION },
        type: { summary: Object.values(Orientations).join('|') },
      },
    },
    tabs: {
      control: 'radio',
      mapping: {
        Icons: iconTabs,
        Mixed: mixedTabs,
        Texts: textTabs,
      },
      options: ['Texts', 'Icons', 'Mixed'],
      table: {
        type: {
          summary: 'Tab | Array<Tab>',
        },
      },
    },
    tabsPosition: {
      options: Object.values(Positions),
      table: {
        defaultValue: { summary: DEFAULT_POSITION },
        type: { summary: Object.values(Positions).join('|') },
      },
    },
    variant: {
      options: Object.values(Variants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        type: { summary: Object.values(Variants).join('|') },
      },
    },
  },
  component: Tabs,
  decorators: [
    function WithArgs(Story, context) {
      return <Story args={{ ...context.args }} />
    },
  ],

  parameters: {
    docs: {
      subtitle:
        '👹 Stop the bar? - The car! Start the car! - Sheri Squibbles - Monsters University',
    },
  },

  title: 'Molecules/Tabs',
} satisfies Meta<TabsProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Interactive: Story = {
  args: {
    onTabChange: fn(),
  },
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
  render: ({ tabs = mixedTabs, tabsPosition = DEFAULT_POSITION }) => (
    <Tabs
      defaultTab="jedis"
      orientation="horizontal"
      tabs={tabs}
      tabsPosition={tabsPosition}
    >
      {children}
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: ({ tabs = mixedTabs, tabsPosition = DEFAULT_POSITION }) => (
    <Tabs
      defaultTab="jedis"
      orientation="vertical"
      tabs={tabs}
      tabsPosition={tabsPosition}
    >
      {children}
    </Tabs>
  ),
}
