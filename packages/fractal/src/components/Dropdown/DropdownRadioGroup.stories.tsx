import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { useArgs } from '@storybook/preview-api'

import type { ComponentProps, ReactNode } from 'react'

import kebabCase from 'lodash/fp/kebabCase'
import noop from 'lodash/fp/noop'

import { jedis, others, siths } from '@/mocks'

import { Dropdown, DropdownRadioGroup, DropdownRadioItem } from '.'

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
  args: {
    children: items,
    condensed: false,
    disabled: false,
    rainbow: true,
  },
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
  render: ({
    condensed = false,
    disabled = false,
    onValueChange = noop,
    rainbow = true,
  }) => (
    <div className="h-[1200px]">
      <Dropdown condensed={condensed} trigger="Jedis">
        <DropdownRadioGroup
          disabled={disabled}
          rainbow={rainbow}
          value="luke"
          onValueChange={onValueChange}
        >
          <DropdownRadioItem label="Luke Skywalker" value="luke" />
          <DropdownRadioItem label="Obi-Wan Kenobi" value="obi-wan" />
          <DropdownRadioItem label="Yoda" value="yoda" />
        </DropdownRadioGroup>
      </Dropdown>
    </div>
  ),
}
