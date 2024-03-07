import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import kebabCase from 'lodash/fp/kebabCase'
import type { ComponentProps, ReactNode } from 'react'

import { DEFAULT_VARIANT } from '@/components/Toggle/Toggle.constants'
import { jedis, others, siths } from '@/mocks'
import { sleep } from '@/utils'

import { ToggleGroup, ToggleGroupItem } from '.'
import { ToggleVariants } from '../Toggle'

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
      options: Object.values(ToggleVariants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        disable: true,
        type: { summary: Object.values(ToggleVariants).join('|') },
      },
    },
  },
  args: {
    children: items,
    disabled: false,
    fullWidth: false,
    multiple: false,
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

const Title = ({
  children,
  main = false,
}: {
  children: ReactNode
  main?: boolean
}) => {
  return main ? (
    <h1 style={{ marginTop: '2rem' }}>{children}</h1>
  ) : (
    <h3 style={{ marginBlock: '1rem' }}>{children}</h3>
  )
}

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

export const InteractivePrimary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const toggles = canvas.getAllByRole('radio')
    if (toggles.length > 0) {
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      await userEvent.hover(toggles.at(0)!)
      await sleep(500)
      await userEvent.hover(toggles.at(1)!)
      await sleep(500)
      await userEvent.hover(toggles.at(2)!)
      await sleep(500)
      await userEvent.hover(toggles.at(3)!)
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(toggles.at(3)!)
  },
  render: () => (
    <ToggleGroup defaultValue="yoda" orientation="horizontal" variant="primary">
      {jedisItems}
    </ToggleGroup>
  ),
}
