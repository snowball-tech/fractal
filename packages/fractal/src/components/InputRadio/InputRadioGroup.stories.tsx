import type { Meta, StoryObj } from '@storybook/react-vite'

import { useArgs } from 'storybook/preview-api'
import { fn, userEvent, within } from 'storybook/test'

import type { ComponentProps, ReactNode } from 'react'

import kebabCase from 'lodash/fp/kebabCase'

import { jedis, others, siths } from '@/mocks'
import { sleep } from '@/utils'

import { InputRadio } from './InputRadio'
import { DEFAULT_VARIANT, Variants } from './InputRadio.constants'
import { InputRadioGroup } from './InputRadioGroup'

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
const othersItemsFullWidth = asRadio(others, true)

const items = (
  <>
    {jedisItemsFullWidth}
    {sithsItemsFullWidth}
    {othersItemsFullWidth}
  </>
)

const meta: Meta<InputRadioGroupProps> = {
  args: {
    children: items,
    condensed: false,
    disabled: false,
    fullWidth: false,
    required: false,
  },
  argTypes: {
    asChild: { table: { disable: true } },
    children: {
      control: false,
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
  component: InputRadioGroup,
  decorators: [
    function WithArgs(Story, context) {
      const [, setArgs] = useArgs<typeof context.args>()

      const onValueChange = (newValue: string) => {
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
  },

  title: 'Molecules/Input/InputRadio/InputRadioGroup',
} satisfies Meta<InputRadioGroupProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    condensed: false,
    orientation: 'vertical',
    value: '',
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
      <InputRadioGroup
        defaultValue="yoda"
        orientation="horizontal"
        variant="primary"
      >
        {jedisItems}

        <InputRadio value="other">
          Another Jedi
          <br />
          whose I can&apos;t remember
          <br />
          the name
        </InputRadio>
      </InputRadioGroup>

      <Title>Who is the worst Sith?</Title>
      <InputRadioGroup
        defaultValue="emperor-palpatine"
        disabled
        orientation="horizontal"
        variant="primary"
      >
        {sithsItems}

        <InputRadio value="other">
          Another Sith
          <br />
          whose I can&apos;t remember
          <br />
          the name
        </InputRadio>
      </InputRadioGroup>

      <Title>Who shot first?</Title>
      <InputRadioGroup
        defaultValue="han-solo"
        fullWidth
        orientation="horizontal"
        variant="primary"
      >
        {othersItemsFullWidth}

        <InputRadio value="other">
          Someone else
          <br />
          who I can&apos;t remember
          <br />
          the name
        </InputRadio>
      </InputRadioGroup>

      <Title main>Vertical</Title>
      {separator}

      <Title>Who is the best Jedi?</Title>
      <InputRadioGroup defaultValue="yoda" variant="primary">
        {jedisItems}

        <InputRadio value="other">
          Another Jedi
          <br />
          whose I can&apos;t remember
          <br />
          the name
        </InputRadio>
      </InputRadioGroup>

      <Title>Who is the worst Sith?</Title>
      <InputRadioGroup
        defaultValue="emperor-palpatine"
        disabled
        variant="primary"
      >
        {sithsItemsFullWidth}

        <InputRadio fullWidth value="other">
          Another Sith
          <br />
          whose I can&apos;t remember
          <br />
          the name
        </InputRadio>
      </InputRadioGroup>

      <Title>Who shot first?</Title>
      <InputRadioGroup defaultValue="han-solo" fullWidth variant="primary">
        {othersItemsFullWidth}

        <InputRadio fullWidth value="other">
          Someone else
          <br />
          who I can&apos;t remember
          <br />
          the name
        </InputRadio>
      </InputRadioGroup>
    </>
  ),
}

export const InteractivePrimary: Story = {
  args: {
    onValueChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const radios = canvas.getAllByRole('radio')

    await userEvent.hover(radios.at(0)!)
    await sleep(500)
    await userEvent.hover(radios.at(1)!)
    await sleep(500)
    await userEvent.hover(radios.at(2)!)
    await sleep(500)
    await userEvent.hover(radios.at(3)!)
    await sleep(500)
    await userEvent.click(radios.at(3)!)

    radios.at(3)!.blur()
  },
  render: () => (
    <InputRadioGroup
      defaultValue="yoda"
      orientation="horizontal"
      variant="primary"
    >
      {jedisItems}
    </InputRadioGroup>
  ),
}

export const Secondary: Story = {
  render: () => (
    <>
      <h1>Horizontal</h1>
      {separator}

      <Title>Who is the best Jedi?</Title>
      <InputRadioGroup
        defaultValue="yoda"
        orientation="horizontal"
        variant="secondary"
      >
        {jedisItems}
      </InputRadioGroup>

      <Title>Who is the worst Sith?</Title>
      <InputRadioGroup
        defaultValue="emperor-palpatine"
        disabled
        orientation="horizontal"
        variant="secondary"
      >
        {sithsItems}
      </InputRadioGroup>

      <Title>Who shot first?</Title>
      <InputRadioGroup
        defaultValue="han-solo"
        fullWidth
        orientation="horizontal"
        variant="secondary"
      >
        {othersItemsFullWidth}
      </InputRadioGroup>

      <Title main>Vertical</Title>
      {separator}

      <Title>Who is the best Jedi?</Title>
      <InputRadioGroup defaultValue="yoda" variant="secondary">
        {jedisItems}
      </InputRadioGroup>

      <Title>Who is the worst Sith?</Title>
      <InputRadioGroup
        defaultValue="emperor-palpatine"
        disabled
        variant="secondary"
      >
        {sithsItemsFullWidth}
      </InputRadioGroup>

      <Title>Who shot first?</Title>
      <InputRadioGroup defaultValue="han-solo" fullWidth variant="secondary">
        {othersItemsFullWidth}
      </InputRadioGroup>
    </>
  ),
}

export const InteractiveSecondary: Story = {
  args: {
    onValueChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const radios = canvas.getAllByRole('radio')

    await userEvent.hover(radios.at(0)!)
    await sleep(500)
    await userEvent.hover(radios.at(1)!)
    await sleep(500)
    await userEvent.hover(radios.at(2)!)
    await sleep(500)
    await userEvent.hover(radios.at(3)!)
    await sleep(500)
    await userEvent.click(radios.at(3)!)

    radios.at(3)!.blur()
  },
  render: () => (
    <InputRadioGroup
      defaultValue="yoda"
      orientation="horizontal"
      variant="secondary"
    >
      {jedisItems}
    </InputRadioGroup>
  ),
}

export const Tertiary: Story = {
  render: () => (
    <>
      <h1>Horizontal</h1>
      {separator}

      <Title>Who is the best Jedi?</Title>
      <InputRadioGroup
        defaultValue="yoda"
        orientation="horizontal"
        variant="tertiary"
      >
        {jedisItems}
      </InputRadioGroup>

      <Title>Who is the worst Sith?</Title>
      <InputRadioGroup
        defaultValue="emperor-palpatine"
        disabled
        orientation="horizontal"
        variant="tertiary"
      >
        {sithsItems}
      </InputRadioGroup>

      <Title>Who shot first?</Title>
      <InputRadioGroup
        defaultValue="han-solo"
        fullWidth
        orientation="horizontal"
        variant="tertiary"
      >
        {othersItemsFullWidth}
      </InputRadioGroup>

      <Title main>Vertical</Title>
      {separator}

      <Title>Who is the best Jedi?</Title>
      <InputRadioGroup defaultValue="yoda" variant="tertiary">
        {jedisItems}
      </InputRadioGroup>

      <Title>Who is the worst Sith?</Title>
      <InputRadioGroup
        defaultValue="emperor-palpatine"
        disabled
        variant="tertiary"
      >
        {sithsItemsFullWidth}
      </InputRadioGroup>

      <Title>Who shot first?</Title>
      <InputRadioGroup defaultValue="han-solo" fullWidth variant="tertiary">
        {othersItemsFullWidth}
      </InputRadioGroup>
    </>
  ),
}

export const InteractiveTertiary: Story = {
  args: {
    onValueChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const radios = canvas.getAllByRole('radio')

    await userEvent.hover(radios.at(0)!)
    await sleep(500)
    await userEvent.hover(radios.at(1)!)
    await sleep(500)
    await userEvent.hover(radios.at(2)!)
    await sleep(500)
    await userEvent.hover(radios.at(3)!)
    await sleep(500)
    await userEvent.click(radios.at(3)!)

    radios.at(3)!.blur()
  },
  render: () => (
    <InputRadioGroup
      defaultValue="yoda"
      orientation="horizontal"
      variant="tertiary"
    >
      {jedisItems}
    </InputRadioGroup>
  ),
}
