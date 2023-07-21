import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import kebabCase from 'lodash/fp/kebabCase'
import type { ComponentProps, ReactNode } from 'react'

import { jedis, others, siths } from '@/mocks'

import { DEFAULT_VARIANT, Variants } from '../Toggle/Toggle.constants'
import ToggleGroup from './ToggleGroup'
import ToggleGroupItem from './ToggleGroupItem'

type ToggleGroupProps = ComponentProps<typeof ToggleGroup>

function asToggle(list: Array<string>, fullWidth = false): ReactNode {
  return list.map((item, index) => {
    const value = kebabCase(item)
    const disabled = (index + 1) % 3 === 0

    return (
      <ToggleGroupItem
        key={value}
        disabled={disabled}
        fullWidth={fullWidth}
        label={item}
        value={value}
      />
    )
  })
}

const jedisItems = asToggle(jedis)
const jedisItemsFullWidth = asToggle(jedis, true)
const sithsItems = asToggle(siths)
const sithsItemsFullWidth = asToggle(siths, true)
const othersItemsFullWidth = asToggle(others, true)

const items = (
  <>
    {jedisItemsFullWidth}
    {sithsItemsFullWidth}
    {othersItemsFullWidth}
  </>
)

const meta: Meta<ToggleGroupProps> = {
  argTypes: {
    asChild: { table: { disable: true } },
    children: {
      control: false,
      table: { type: { summary: 'ToggleGroupItem | Array<ToggleGroupItem>' } },
    },
    onValueChange: {
      table: {
        control: false,
        type: { summary: '(newValue: string) => void' },
      },
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
    children: items,
    disabled: false,
    fullWidth: false,
    type: 'single',
  },
  component: ToggleGroup,
  decorators: [
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onValueChange = (newValue: Array<string> | string) => {
        context.args.onValueChange?.(newValue)

        // Check if the component is controlled.
        if (context.args.value !== undefined) {
          setArgs({ value: newValue })
        }
      }

      return <Story args={{ ...context.args, onValueChange }} />
    },
  ],
  parameters: {
    componentSubtitle:
      "🌋 The, hum... toggle switch isn't, hum... toggling, ahah! - Stanley - Meet the Robinson",
    controls: {
      exclude: ['value'],
    },
  },

  title: 'Molecules/Toggle/ToggleGroup',
} satisfies Meta<ToggleGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    orientation: 'vertical',
    value: 'yoda',
    variant: DEFAULT_VARIANT,
  },
}

const separator = (
  <hr
    style={{
      margin: 'var(--size-spacing-3) 0',
      marginTop: 0,
      width: '100%',
    }}
  />
)

export const Primary: Story = {
  render: () => (
    <>
      <h1>Horizontal</h1>
      {separator}

      <h3>Who is the best Jedi?</h3>
      <ToggleGroup
        defaultValue="yoda"
        orientation="horizontal"
        variant="primary"
      >
        {jedisItems}
      </ToggleGroup>

      <h3>Who are the best Jedis?</h3>
      <ToggleGroup
        defaultValue={['yoda', 'luke-skywalker']}
        orientation="horizontal"
        type="multiple"
        variant="primary"
      >
        {jedisItems}
      </ToggleGroup>

      <h3>Who is the worst Sith?</h3>
      <ToggleGroup
        defaultValue="emperor-palpatine"
        disabled
        orientation="horizontal"
        variant="primary"
      >
        {sithsItems}
      </ToggleGroup>

      <h3>Who shot first?</h3>
      <ToggleGroup
        defaultValue="han-solo"
        fullWidth
        orientation="horizontal"
        variant="primary"
      >
        {othersItemsFullWidth}
      </ToggleGroup>

      <h1>Vertical</h1>
      {separator}

      <h3>Who is the best Jedi?</h3>
      <ToggleGroup defaultValue="yoda" variant="primary">
        {jedisItems}
      </ToggleGroup>

      <h3>Who are the best Jedis?</h3>
      <ToggleGroup
        defaultValue={['yoda', 'luke-skywalker']}
        type="multiple"
        variant="primary"
      >
        {jedisItems}
      </ToggleGroup>

      <h3>Who is the worst Sith?</h3>
      <ToggleGroup defaultValue="emperor-palpatine" disabled variant="primary">
        {sithsItemsFullWidth}
      </ToggleGroup>

      <h3>Who shot first?</h3>
      <ToggleGroup defaultValue="han-solo" fullWidth variant="primary">
        {othersItemsFullWidth}
      </ToggleGroup>
    </>
  ),
}
