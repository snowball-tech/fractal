import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import Select from './Select'
import SelectItem from './SelectItem'
import SelectItemGroup from './SelectItemGroup'
import SelectItemSeparator from './SelectItemSeparator'

type SelectProps = ComponentProps<typeof Select>

const jedis = (
  <>
    <SelectItem value="kenobi">Obi-Wan Kenobi</SelectItem>
    <SelectItem value="skywalker">Luke Skywalker</SelectItem>
  </>
)

const siths = (
  <>
    <SelectItem value="palpatine">Emperor Palpatine</SelectItem>
    <SelectItem value="sidious">Darth Sidious</SelectItem>
    <SelectItem value="vader">Darth Vader</SelectItem>
  </>
)

const others = (
  <>
    <SelectItem value="amidala">Padme Amidala</SelectItem>
    <SelectItem value="r2d2">R2D2</SelectItem>
    <SelectItem disabled value="c3po">
      C3PO
    </SelectItem>
    <SelectItem value="chewbacca">Chewbacca</SelectItem>
    <SelectItem value="solo">Han Solo</SelectItem>
    <SelectItem disabled value="jabba">
      Jabba the Hut
    </SelectItem>
  </>
)

const items = (
  <>
    {jedis}
    {siths}
    {others}
  </>
)

const itemsWithGroups = (
  <>
    <SelectItemGroup label="Jedis">{jedis}</SelectItemGroup>

    <SelectItemGroup label="Siths">{siths}</SelectItemGroup>

    <SelectItemGroup label="Others">{others}</SelectItemGroup>
  </>
)

const itemsWithGroupsAndSeparators = (
  <>
    <SelectItemGroup label="Jedis">{jedis}</SelectItemGroup>

    <SelectItemGroup label="Siths">{siths}</SelectItemGroup>

    <SelectItemSeparator />

    {others}
  </>
)

const meta = {
  argTypes: {
    autoComplete: { table: { disable: true } },
    autoFocus: { table: { disable: true } },
    children: {
      description:
        "The `<SelectItem>`s, `<SelectGroup />`s and `<SelectSeparator />` to display to the user in the select's dropdown",
      table: { type: { summary: 'ReactNode' } },
    },
    dir: { table: { disable: true } },
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
    description: 'This is the description',
    disabled: false,
    label: 'This is the label',
    placeholder: 'This is the placeholder',
    required: false,
  },
  component: Select,
  parameters: {
    componentSubtitle:
      '🚀 Failure is not an option - Gene Kranz (NASA Flight Director) - Apollo 13',
    controls: {
      exclude: ['dropdown', 'value'],
    },
  },

  title: 'Select',
} satisfies Meta<SelectProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  argTypes: {
    children: {
      control: 'radio',
      mapping: {
        'Grouped items': itemsWithGroups,
        'Mixed items': itemsWithGroupsAndSeparators,
        'Simple items': items,
      },
      options: ['Simple items', 'Grouped items', 'Mixed items'],
    },
  },
  args: {
    children: 'Simple items',
  },
}
