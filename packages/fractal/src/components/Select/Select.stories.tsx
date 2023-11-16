import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import isChromatic from 'chromatic/isChromatic'
import kebabCase from 'lodash/fp/kebabCase'
import type { ComponentProps, ReactNode } from 'react'

import { jedis, others, siths } from '@/mocks'
import { sleep } from '@/utils'

import { Select, SelectItem, SelectItemGroup, SelectItemSeparator } from '.'

type SelectProps = ComponentProps<typeof Select>

function asItem(list: Array<string>, disabled = false): ReactNode {
  return list.map((item) => {
    const value = kebabCase(item)

    return (
      <SelectItem key={value} disabled={disabled} value={value}>
        {item}
      </SelectItem>
    )
  })
}

const jedisItems = asItem(jedis)
const sithsItems = asItem(siths, true)
const othersItems = asItem(others)

const items = (
  <>
    {jedisItems}
    {sithsItems}
    {othersItems}
  </>
)

const itemsWithGroups = (
  <>
    <SelectItemGroup label="Jedis">{jedisItems}</SelectItemGroup>
    <SelectItemGroup label="Siths">{sithsItems}</SelectItemGroup>
    <SelectItemGroup label="Others">{othersItems}</SelectItemGroup>
  </>
)

const itemsWithGroupsAndSeparators = (
  <>
    <SelectItemGroup label="Jedis">{jedisItems}</SelectItemGroup>
    <SelectItemGroup label="Siths">{sithsItems}</SelectItemGroup>
    <SelectItemSeparator />
    {othersItems}
  </>
)

const meta: Meta<SelectProps> = {
  argTypes: {
    autoComplete: { table: { disable: true } },
    autoFocus: { table: { disable: true } },
    children: {
      control: 'radio',
      mapping: {
        'Grouped items': itemsWithGroups,
        'Mixed items': itemsWithGroupsAndSeparators,
        'Simple items': items,
      },
      options: ['Simple items', 'Grouped items', 'Mixed items'],
      table: {
        type: {
          summary:
            'SelectItem | SelectItemGroup | SelectItemSeparator | Array<SelectItem | SelectItemGroup | SelectItemSeparator>',
        },
      },
    },
    displayedValue: { control: false },
    dropdown: {
      table: {
        defaultValue: {
          summary: `{ collisionBoundary: [], hideWhenDetached: false, sticky: 'partial' }`,
        },
        type: {
          summary: `{ collisionBoundary: Element | null | Array<Element | null>, hideWhenDetached: boolean, sticky: 'always' | 'partial' }`,
        },
      },
    },
    onClose: { control: false },
    onOpen: { control: false },
    onSelect: { control: false },
  },
  args: {
    autoFocus: false,
    children: 'Simple items',
    description: "Be careful, it's a trap!",
    disabled: false,
    fullWidth: false,
    label: 'Who is the best Star Wars character?',
    placeholder: 'May the force be with you!',
    readOnly: false,
    required: false,
  },
  component: Select,
  decorators: [
    ...(isChromatic()
      ? [
          (storyFn: () => ReactNode) => (
            <div style={{ height: '1200px' }}>{storyFn()}</div>
          ),
        ]
      : []),
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onSelect = (newValue: string) => {
        context.args.onSelect?.(newValue)

        setArgs({ value: newValue })
      }

      return <Story args={{ ...context.args, onSelect }} />
    },
  ],
  parameters: {
    componentSubtitle:
      '🚀 Failure is not an option - Gene Kranz (NASA Flight Director) - Apollo 13',
    controls: {
      exclude: ['dropdown', 'open', 'value'],
    },
  },

  title: 'Molecules/Select',
} satisfies Meta<SelectProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const InteractiveOpen: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const select = canvas.getByRole('combobox')
    await userEvent.click(select)

    await sleep(500)
    await userEvent.hover(body.getByLabelText(/luke/i))
    await sleep(500)
    await userEvent.hover(body.getByLabelText(/mace/i))
    await sleep(500)
    await userEvent.hover(body.getByLabelText(/obi/i))
    await sleep(500)
    await userEvent.hover(body.getByLabelText(/qui/i))
    await sleep(500)
    await userEvent.hover(body.getByLabelText(/yoda/i))
    await sleep(500)
    await userEvent.hover(body.getByLabelText(/c3po/i))
  },
}

export const InteractiveSelected: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const select = canvas.getByRole('combobox')
    await userEvent.click(select)

    await sleep(500)
    await userEvent.hover(body.getByLabelText(/obi/i))
    await sleep(500)
    await userEvent.click(body.getByLabelText(/obi/i))
  },
}
