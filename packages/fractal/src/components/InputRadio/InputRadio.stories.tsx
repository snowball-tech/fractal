import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import InputRadio from './InputRadio'
import { DEFAULT_VARIANT, Variants } from './InputRadio.constants'
import InputRadioGroup from './InputRadioGroup'

type InputRadioGroupProps = ComponentProps<typeof InputRadioGroup>

const children = (
  <>
    <InputRadio label="Luke Skywalker" value="skywalker" />
    <InputRadio label="Obi-Wan Kenobi" value="kenobi" />
    <InputRadio label="Yoda" value="yoda" />
    <InputRadio label="Mace Windoo" value="windoo" />
    <InputRadio label="Qui-Gon Jin" value="jin" />
  </>
)

const childrenWithDisabled = (
  <>
    <InputRadio label="Luke Skywalker" value="skywalker" />
    <InputRadio label="Obi-Wan Kenobi" value="kenobi" />
    <InputRadio disabled label="Yoda" value="yoda" />
    <InputRadio label="Mace Windoo" value="windoo" />
    <InputRadio disabled label="Qui-Gon Jin" value="jin" />
  </>
)

const fullWidthChildren = (
  <>
    <InputRadio fullWidth label="Luke Skywalker" value="skywalker" />
    <InputRadio fullWidth label="Obi-Wan Kenobi" value="kenobi" />
    <InputRadio fullWidth label="Yoda" value="yoda" />
    <InputRadio fullWidth label="Mace Windoo" value="windoo" />
    <InputRadio fullWidth label="Qui-Gon Jin" value="jin" />
  </>
)

const meta = {
  argTypes: {
    asChild: { table: { disable: true } },
    onValueChange: {
      table: {
        control: false,
        type: { summary: '(value: string) => void' },
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
    children: fullWidthChildren,
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

  title: 'InputRadio',
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
      width: '100%',
    }}
  />
)

export const Primary: Story = {
  render: () => (
    <>
      <InputRadioGroup
        defaultValue="skywalker"
        orientation="horizontal"
        variant="primary"
      >
        {children}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup
        defaultValue="skywalker"
        disabled
        orientation="horizontal"
        variant="primary"
      >
        {children}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup
        defaultValue="skywalker"
        orientation="horizontal"
        variant="primary"
      >
        {childrenWithDisabled}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup
        defaultValue="skywalker"
        fullWidth
        orientation="horizontal"
        variant="primary"
      >
        {fullWidthChildren}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup defaultValue="skywalker" variant="primary">
        {children}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup defaultValue="skywalker" variant="primary">
        {fullWidthChildren}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup defaultValue="skywalker" fullWidth variant="primary">
        {fullWidthChildren}
      </InputRadioGroup>
    </>
  ),
}

export const Secondary: Story = {
  render: () => (
    <>
      <InputRadioGroup
        defaultValue="skywalker"
        orientation="horizontal"
        variant="secondary"
      >
        {children}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup
        defaultValue="skywalker"
        disabled
        orientation="horizontal"
        variant="secondary"
      >
        {children}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup
        defaultValue="skywalker"
        orientation="horizontal"
        variant="secondary"
      >
        {childrenWithDisabled}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup
        defaultValue="skywalker"
        fullWidth
        orientation="horizontal"
        variant="secondary"
      >
        {fullWidthChildren}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup defaultValue="skywalker" variant="secondary">
        {fullWidthChildren}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup defaultValue="skywalker" fullWidth variant="secondary">
        {fullWidthChildren}
      </InputRadioGroup>
    </>
  ),
}

export const Tertiary: Story = {
  render: () => (
    <>
      <InputRadioGroup
        defaultValue="skywalker"
        orientation="horizontal"
        variant="tertiary"
      >
        {children}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup
        defaultValue="skywalker"
        disabled
        orientation="horizontal"
        variant="tertiary"
      >
        {children}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup
        defaultValue="skywalker"
        orientation="horizontal"
        variant="tertiary"
      >
        {childrenWithDisabled}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup
        defaultValue="skywalker"
        fullWidth
        orientation="horizontal"
        variant="tertiary"
      >
        {fullWidthChildren}
      </InputRadioGroup>

      {separator}

      <InputRadioGroup defaultValue="skywalker" variant="tertiary">
        {fullWidthChildren}
      </InputRadioGroup>
    </>
  ),
}
