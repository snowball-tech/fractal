import { action } from '@storybook/addon-actions'
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import kebabCase from 'lodash/fp/kebabCase'
import noop from 'lodash/fp/noop'
import type { ComponentProps, ReactNode } from 'react'

import { jedis, others, siths } from '@/mocks'

import Dropdown from './Dropdown'
import DropdownRadioGroup from './DropdownRadioGroup'
import DropdownRadioItem from './DropdownRadioItem'

type DropdownRadioGroupProps = ComponentProps<typeof DropdownRadioGroup>

function asRadio(list: Array<string>): ReactNode {
  return list.map((item, index) => {
    const value = kebabCase(item)
    const disabled = (index + 1) % 3 === 0

    return (
      <DropdownRadioItem
        key={value}
        disabled={disabled}
        label={item}
        value={value}
      />
    )
  })
}

const jedisItems = asRadio(jedis)
const sithsItems = asRadio(siths)
const othersItems = asRadio(others)

const items = (
  <>
    {jedisItems}
    {sithsItems}
    {othersItems}
  </>
)

const meta: Meta<DropdownRadioGroupProps> = {
  argTypes: {
    asChild: { table: { disable: true } },
    children: {
      control: false,
      table: {
        type: { summary: 'DropdownRadioItem | Array<DropdownRadioItem>' },
      },
    },
    onValueChange: {
      table: {
        control: false,
        type: { summary: '(newValue: string) => void' },
      },
    },
  },
  args: {
    children: items,
    disabled: false,
  },
  component: DropdownRadioGroup,
  decorators: [
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onValueChange = (newValue: string) => {
        action('onValueChange')(newValue)

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
  },

  title: 'Molecules/Dropdown/DropdownRadio/DropdownRadioGroup',
} satisfies Meta<DropdownRadioGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ disabled = false, onValueChange = noop }) => (
    <Dropdown trigger="Jedis">
      <DropdownRadioGroup
        disabled={disabled}
        value="luke"
        onValueChange={onValueChange}
      >
        <DropdownRadioItem label="Luke Skywalker" value="luke" />
        <DropdownRadioItem label="Obi-Wan Kenobi" value="obi-wan" />
        <DropdownRadioItem label="Yoda" value="yoda" />
      </DropdownRadioGroup>
    </Dropdown>
  ),
}
