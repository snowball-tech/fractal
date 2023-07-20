import type { Meta, StoryObj } from '@storybook/react'
import kebabCase from 'lodash/fp/kebabCase'
import type { ComponentProps, ReactNode } from 'react'

import { jedis, others, siths } from '@/mocks'

import InputRadio from './InputRadio'
import { DEFAULT_VARIANT, Variants } from './InputRadio.constants'
import InputRadioGroup from './InputRadioGroup'

type InputRadioGroupProps = ComponentProps<typeof InputRadioGroup>

function asRadio(list: Array<string>, fullWidth = false): ReactNode {
  return list.map((item, index) => {
    const value = kebabCase(item)
    const disabled = (index + 1) % 3 === 0

    return (
      <InputRadio
        key={value}
        disabled={disabled}
        fullWidth={fullWidth}
        label={item}
        value={value}
      />
    )
  })
}

const jedisItems = asRadio(jedis)
const jedisItemsFullWidth = asRadio(jedis, true)
const sithsItems = asRadio(siths)
const sithsItemsFullWidth = asRadio(siths, true)
const othersItems = asRadio(others)
const othersItemsFullWidth = asRadio(others, true)

const items = (
  <>
    {jedisItemsFullWidth}
    {sithsItemsFullWidth}
    {othersItemsFullWidth}
  </>
)

const meta = {
  argTypes: {
    asChild: { table: { disable: true } },
    children: {
      table: { type: { summary: 'InputRadio | Array<InputRadio>' } },
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
        type: { summary: Object.values(Variants).join('|') },
      },
    },
  },
  args: {
    children: items,
    disabled: false,
    fullWidth: false,
    required: false,
  },
  component: InputRadioGroup,
  parameters: {
    componentSubtitle: '🎶 Video killed the radio star - The Buggles',
    controls: {
      exclude: ['value'],
    },
  },

  title: 'Atoms/Input/Radio',
} satisfies Meta<InputRadioGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    orientation: 'vertical',
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
      <InputRadioGroup
        defaultValue="yoda"
        orientation="horizontal"
        variant="primary"
      >
        {jedisItems}
      </InputRadioGroup>

      <h3>Who is the worst Sith?</h3>
      <InputRadioGroup
        defaultValue="emperor-palpatine"
        disabled
        orientation="horizontal"
        variant="primary"
      >
        {sithsItems}
      </InputRadioGroup>

      <h3>Who shot first?</h3>
      <InputRadioGroup
        defaultValue="han-solo"
        fullWidth
        orientation="horizontal"
        variant="primary"
      >
        {othersItemsFullWidth}
      </InputRadioGroup>

      <h1>Vertical</h1>
      {separator}

      <h3>Who is the best Jedi?</h3>
      <InputRadioGroup defaultValue="yoda" variant="primary">
        {jedisItems}
      </InputRadioGroup>

      <h3>Who is the worst Sith?</h3>
      <InputRadioGroup
        defaultValue="emperor-palpatine"
        disabled
        variant="primary"
      >
        {sithsItemsFullWidth}
      </InputRadioGroup>

      <h3>Who shot first?</h3>
      <InputRadioGroup defaultValue="han-solo" fullWidth variant="primary">
        {othersItemsFullWidth}
      </InputRadioGroup>
    </>
  ),
}

export const Secondary: Story = {
  render: () => (
    <>
      <h1>Horizontal</h1>
      {separator}

      <h3>Who is the best Jedi?</h3>
      <InputRadioGroup
        defaultValue="yoda"
        orientation="horizontal"
        variant="secondary"
      >
        {jedisItems}
      </InputRadioGroup>

      <h3>Who is the worst Sith?</h3>
      <InputRadioGroup
        defaultValue="emperor-palpatine"
        disabled
        orientation="horizontal"
        variant="secondary"
      >
        {sithsItems}
      </InputRadioGroup>

      <h3>Who shot first?</h3>
      <InputRadioGroup
        defaultValue="han-solo"
        fullWidth
        orientation="horizontal"
        variant="secondary"
      >
        {othersItems}
      </InputRadioGroup>

      <h1>Vertical</h1>
      {separator}

      <h3>Who is the best Jedi?</h3>
      <InputRadioGroup defaultValue="yoda" variant="secondary">
        {jedisItems}
      </InputRadioGroup>

      <h3>Who is the worst Sith?</h3>
      <InputRadioGroup
        defaultValue="emperor-palpatine"
        disabled
        variant="secondary"
      >
        {sithsItemsFullWidth}
      </InputRadioGroup>

      <h3>Who shot first?</h3>
      <InputRadioGroup defaultValue="han-solo" fullWidth variant="secondary">
        {othersItems}
      </InputRadioGroup>
    </>
  ),
}

export const Tertiary: Story = {
  render: () => (
    <>
      <h1>Horizontal</h1>
      {separator}

      <h3>Who is the best Jedi?</h3>
      <InputRadioGroup
        defaultValue="yoda"
        orientation="horizontal"
        variant="tertiary"
      >
        {jedisItems}
      </InputRadioGroup>

      <h3>Who is the worst Sith?</h3>
      <InputRadioGroup
        defaultValue="emperor-palpatine"
        disabled
        orientation="horizontal"
        variant="tertiary"
      >
        {sithsItems}
      </InputRadioGroup>

      <h3>Who shot first?</h3>
      <InputRadioGroup
        defaultValue="han-solo"
        fullWidth
        orientation="horizontal"
        variant="tertiary"
      >
        {othersItems}
      </InputRadioGroup>

      <h1>Vertical</h1>
      {separator}

      <h3>Who is the best Jedi?</h3>
      <InputRadioGroup defaultValue="yoda" variant="tertiary">
        {jedisItems}
      </InputRadioGroup>

      <h3>Who is the worst Sith?</h3>
      <InputRadioGroup
        defaultValue="emperor-palpatine"
        disabled
        variant="tertiary"
      >
        {sithsItemsFullWidth}
      </InputRadioGroup>

      <h3>Who shot first?</h3>
      <InputRadioGroup defaultValue="han-solo" fullWidth variant="tertiary">
        {othersItems}
      </InputRadioGroup>
    </>
  ),
}
