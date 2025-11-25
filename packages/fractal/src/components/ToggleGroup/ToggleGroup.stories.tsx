import type { Meta, StoryObj } from '@storybook/react-vite'

import { useArgs } from 'storybook/preview-api'
import { fn, userEvent, within } from 'storybook/test'

import type { ComponentProps, ReactNode } from 'react'

import kebabCase from 'lodash/fp/kebabCase'

import { jedis, others, siths } from '@/mocks'
import { sleep } from '@/utils'

import { DEFAULT_VARIANT, Variants } from '../Toggle/Toggle.constants'
import { ToggleGroup } from './ToggleGroup'
import { ToggleGroupItem } from './ToggleGroupItem'

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
  args: {
    children: items,
    disabled: false,
    fullWidth: false,
    grouped: false,
    multiple: false,
    variant: DEFAULT_VARIANT,
  },
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
  component: ToggleGroup,
  decorators: [
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onValueChange = (newValue: string | Array<string>) => {
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
    controls: {
      exclude: ['value'],
    },
    docs: {
      subtitle:
        "🌋 The, hum... toggle switch isn't, hum... toggling, ahah! - Stanley - Meet the Robinson",
    },
  },

  title: 'Molecules/Toggle/ToggleGroup',
} satisfies Meta<ToggleGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    grouped: false,
    orientation: 'vertical',
    value: 'yoda',
    variant: DEFAULT_VARIANT,
  },
}

const separator = <hr className="mb-3 w-full" />

const Title = ({
  children,
  main = false,
}: {
  children: ReactNode
  main?: boolean
}) =>
  main ? (
    <h1 className="mt-4">{children}</h1>
  ) : (
    <h3 className="my-2">{children}</h3>
  )

export const Primary: Story = {
  render: () => (
    <>
      <h1>Horizontal</h1>
      {separator}

      <Title>Who is the best Jedi?</Title>
      <ToggleGroup
        defaultValue="yoda"
        orientation="horizontal"
        variant="primary"
      >
        {jedisItems}
      </ToggleGroup>

      <Title>Who are the best Jedis?</Title>
      <ToggleGroup
        defaultValue={['yoda', 'luke-skywalker']}
        multiple
        orientation="horizontal"
        variant="primary"
      >
        {jedisItems}
      </ToggleGroup>

      <Title>Who is the worst Sith?</Title>
      <ToggleGroup
        defaultValue="emperor-palpatine"
        disabled
        orientation="horizontal"
        variant="primary"
      >
        {sithsItems}
      </ToggleGroup>

      <Title>Who shot first?</Title>
      <ToggleGroup
        defaultValue="han-solo"
        fullWidth
        orientation="horizontal"
        variant="primary"
      >
        {othersItemsFullWidth}
      </ToggleGroup>

      <Title main>Vertical</Title>
      {separator}

      <Title>Who is the best Jedi?</Title>
      <ToggleGroup defaultValue="yoda" variant="primary">
        {jedisItems}
      </ToggleGroup>

      <Title>Who are the best Jedis?</Title>
      <ToggleGroup
        defaultValue={['yoda', 'luke-skywalker']}
        multiple
        variant="primary"
      >
        {jedisItems}
      </ToggleGroup>

      <Title>Who is the worst Sith?</Title>
      <ToggleGroup defaultValue="emperor-palpatine" disabled variant="primary">
        {sithsItemsFullWidth}
      </ToggleGroup>

      <Title>Who shot first?</Title>
      <ToggleGroup defaultValue="han-solo" fullWidth variant="primary">
        {othersItemsFullWidth}
      </ToggleGroup>
    </>
  ),
}

export const GroupedPrimary: Story = {
  render: () => (
    <>
      <h1>Horizontal</h1>
      {separator}

      <Title>Who is the best Jedi?</Title>
      <ToggleGroup
        defaultValue="yoda"
        grouped
        orientation="horizontal"
        variant="primary"
      >
        {jedisItems}
      </ToggleGroup>

      <Title>Who are the best Jedis?</Title>
      <ToggleGroup
        defaultValue={['yoda', 'luke-skywalker']}
        grouped
        multiple
        orientation="horizontal"
        variant="primary"
      >
        {jedisItems}
      </ToggleGroup>

      <Title>Who is the worst Sith?</Title>
      <ToggleGroup
        defaultValue="emperor-palpatine"
        disabled
        grouped
        orientation="horizontal"
        variant="primary"
      >
        {sithsItems}
      </ToggleGroup>

      <Title>Who shot first?</Title>
      <ToggleGroup
        defaultValue="han-solo"
        fullWidth
        grouped
        orientation="horizontal"
        variant="primary"
      >
        {othersItemsFullWidth}
      </ToggleGroup>

      <Title main>Vertical</Title>
      {separator}

      <Title>Who is the best Jedi?</Title>
      <ToggleGroup defaultValue="yoda" grouped variant="primary">
        {jedisItems}
      </ToggleGroup>

      <Title>Who are the best Jedis?</Title>
      <ToggleGroup
        defaultValue={['yoda', 'luke-skywalker']}
        grouped
        multiple
        variant="primary"
      >
        {jedisItems}
      </ToggleGroup>

      <Title>Who is the worst Sith?</Title>
      <ToggleGroup
        defaultValue="emperor-palpatine"
        disabled
        grouped
        variant="primary"
      >
        {sithsItemsFullWidth}
      </ToggleGroup>

      <Title>Who shot first?</Title>
      <ToggleGroup defaultValue="han-solo" fullWidth grouped variant="primary">
        {othersItemsFullWidth}
      </ToggleGroup>
    </>
  ),
}

export const Secondary: Story = {
  render: () => (
    <>
      <h1>Horizontal</h1>
      {separator}

      <Title>Who is the best Jedi?</Title>
      <ToggleGroup
        defaultValue="yoda"
        orientation="horizontal"
        variant="secondary"
      >
        {jedisItems}
      </ToggleGroup>

      <Title>Who are the best Jedis?</Title>
      <ToggleGroup
        defaultValue={['yoda', 'luke-skywalker']}
        multiple
        orientation="horizontal"
        variant="secondary"
      >
        {jedisItems}
      </ToggleGroup>

      <Title>Who is the worst Sith?</Title>
      <ToggleGroup
        defaultValue="emperor-palpatine"
        disabled
        orientation="horizontal"
        variant="secondary"
      >
        {sithsItems}
      </ToggleGroup>

      <Title>Who shot first?</Title>
      <ToggleGroup
        defaultValue="han-solo"
        fullWidth
        orientation="horizontal"
        variant="secondary"
      >
        {othersItemsFullWidth}
      </ToggleGroup>

      <Title main>Vertical</Title>
      {separator}

      <Title>Who is the best Jedi?</Title>
      <ToggleGroup defaultValue="yoda" variant="secondary">
        {jedisItems}
      </ToggleGroup>

      <Title>Who are the best Jedis?</Title>
      <ToggleGroup
        defaultValue={['yoda', 'luke-skywalker']}
        multiple
        variant="secondary"
      >
        {jedisItems}
      </ToggleGroup>

      <Title>Who is the worst Sith?</Title>
      <ToggleGroup
        defaultValue="emperor-palpatine"
        disabled
        variant="secondary"
      >
        {sithsItemsFullWidth}
      </ToggleGroup>

      <Title>Who shot first?</Title>
      <ToggleGroup defaultValue="han-solo" fullWidth variant="secondary">
        {othersItemsFullWidth}
      </ToggleGroup>
    </>
  ),
}

export const GroupedSecondary: Story = {
  render: () => (
    <>
      <h1>Horizontal</h1>
      {separator}

      <Title>Who is the best Jedi?</Title>
      <ToggleGroup
        defaultValue="yoda"
        grouped
        orientation="horizontal"
        variant="secondary"
      >
        {jedisItems}
      </ToggleGroup>

      <Title>Who are the best Jedis?</Title>
      <ToggleGroup
        defaultValue={['yoda', 'luke-skywalker']}
        grouped
        multiple
        orientation="horizontal"
        variant="secondary"
      >
        {jedisItems}
      </ToggleGroup>

      <Title>Who is the worst Sith?</Title>
      <ToggleGroup
        defaultValue="emperor-palpatine"
        disabled
        grouped
        orientation="horizontal"
        variant="secondary"
      >
        {sithsItems}
      </ToggleGroup>

      <Title>Who shot first?</Title>
      <ToggleGroup
        defaultValue="han-solo"
        fullWidth
        grouped
        orientation="horizontal"
        variant="secondary"
      >
        {othersItemsFullWidth}
      </ToggleGroup>

      <Title main>Vertical</Title>
      {separator}

      <Title>Who is the best Jedi?</Title>
      <ToggleGroup defaultValue="yoda" grouped variant="secondary">
        {jedisItems}
      </ToggleGroup>

      <Title>Who are the best Jedis?</Title>
      <ToggleGroup
        defaultValue={['yoda', 'luke-skywalker']}
        grouped
        multiple
        variant="secondary"
      >
        {jedisItems}
      </ToggleGroup>

      <Title>Who is the worst Sith?</Title>
      <ToggleGroup
        defaultValue="emperor-palpatine"
        disabled
        grouped
        variant="secondary"
      >
        {sithsItemsFullWidth}
      </ToggleGroup>

      <Title>Who shot first?</Title>
      <ToggleGroup
        defaultValue="han-solo"
        fullWidth
        grouped
        variant="secondary"
      >
        {othersItemsFullWidth}
      </ToggleGroup>
    </>
  ),
}

export const InteractivePrimary: Story = {
  args: {
    onValueChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const toggles = canvas.getAllByRole('radio')
    if (toggles.length > 0) {
      await userEvent.hover(toggles.at(0)!)
      await sleep(500)
      await userEvent.hover(toggles.at(1)!)
      await sleep(500)
      await userEvent.hover(toggles.at(2)!)
      await sleep(500)
      await userEvent.hover(toggles.at(3)!)
    }

    await userEvent.click(toggles.at(3)!)
  },
  render: () => (
    <ToggleGroup defaultValue="yoda" orientation="horizontal" variant="primary">
      {jedisItems}
    </ToggleGroup>
  ),
}
