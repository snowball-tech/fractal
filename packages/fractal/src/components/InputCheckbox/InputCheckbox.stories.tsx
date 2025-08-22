import type { Meta, StoryObj } from '@storybook/react'

import { fn, userEvent, within } from '@storybook/test'

import type { ComponentProps, ReactNode } from 'react'

import { sleep } from '@/utils'

import { InputCheckbox, InputCheckboxVariants } from '.'
import {
  Colors,
  DEFAULT_COLOR,
  DEFAULT_VARIANT,
} from './InputCheckbox.constants'

type InputCheckboxProps = ComponentProps<typeof InputCheckbox>

const checkStateType = { type: { summary: "boolean | 'indeterminate'" } }

const meta = {
  args: {
    disabled: false,
    fullWidth: false,
    label: 'Han shot first',
    readOnly: false,
    required: false,
  },
  argTypes: {
    checked: { table: { ...checkStateType } },
    color: {
      options: Object.values(Colors),
      table: {
        defaultValue: { summary: DEFAULT_COLOR },
        type: { summary: Object.values(Colors).join('|') },
      },
    },
    defaultChecked: { control: 'boolean', table: { ...checkStateType } },
    onCheckedChange: {
      table: {
        control: false,
        type: { summary: "(checked: boolean | 'indeterminate') => void" },
      },
    },
    variant: {
      options: Object.values(InputCheckboxVariants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        type: { summary: Object.values(InputCheckboxVariants).join('|') },
      },
    },
  },
  component: InputCheckbox,
  parameters: {
    controls: {
      exclude: ['asChild', 'checked'],
    },
    docs: {
      subtitle:
        '🦜 Checking in with the morning report. - Zazu - The Lion King',
    },
  },

  title: 'Molecules/Input/InputCheckbox',
} satisfies Meta<InputCheckboxProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    color: DEFAULT_COLOR,
    variant: DEFAULT_VARIANT,
  },
}

const separator = <hr className="my-3 w-full" />

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="mb-2 flex flex-wrap items-end gap-2">{children}</div>
)

export const Primary: Story = {
  render: () => (
    <>
      <Wrapper>
        <InputCheckbox label="Primary" variant="primary" />
        <InputCheckbox
          defaultChecked
          label="Checked primary"
          variant="primary"
        />
        <InputCheckbox label="Required primary" required variant="primary" />
      </Wrapper>

      <Wrapper>
        <InputCheckbox disabled label="Disabled primary" variant="primary" />
        <InputCheckbox
          defaultChecked
          disabled
          label="Disabled checked primary"
          variant="primary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox label="Read-only primary" readOnly variant="primary" />
        <InputCheckbox
          defaultChecked
          label="Read-only checked primary"
          readOnly
          variant="primary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox fullWidth label="Full width primary" variant="primary" />
      </Wrapper>

      <Wrapper>
        <InputCheckbox fullWidth variant="primary">
          This is a<br />
          multiline
          <br />
          primary checkbox label
        </InputCheckbox>
      </Wrapper>

      {separator}

      <Wrapper>
        <InputCheckbox
          color="pink"
          defaultChecked
          label={`"${Colors.Pink}" primary`}
          variant="primary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          color="yellow"
          defaultChecked
          label={`"${Colors.Yellow}" primary`}
          variant="primary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          color="green"
          defaultChecked
          label={`"${Colors.Green}" primary`}
          variant="primary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          color="blue"
          defaultChecked
          label={`"${Colors.Blue}" primary`}
          variant="primary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          color="purple"
          defaultChecked
          label={`"${Colors.Purple}" primary`}
          variant="primary"
        />
      </Wrapper>
    </>
  ),
}

export const InteractivePrimary: Story = {
  args: {
    onCheckedChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.getByRole('checkbox'))
    await sleep(500)
    await userEvent.click(canvas.getByRole('checkbox'))
  },
  render: () => <InputCheckbox label="Primary" variant="primary" />,
}

export const Secondary: Story = {
  render: () => (
    <>
      <Wrapper>
        <InputCheckbox label="Secondary" variant="secondary" />
        <InputCheckbox
          defaultChecked
          label="Checked secondary"
          variant="secondary"
        />
        <InputCheckbox
          label="Required secondary"
          required
          variant="secondary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          disabled
          label="Disabled secondary"
          variant="secondary"
        />
        <InputCheckbox
          defaultChecked
          disabled
          label="Disabled checked secondary"
          variant="secondary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          label="Read-only secondary"
          readOnly
          variant="secondary"
        />
        <InputCheckbox
          defaultChecked
          label="Read-only checked secondary"
          readOnly
          variant="secondary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          fullWidth
          label="Full width secondary"
          variant="secondary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox fullWidth variant="secondary">
          This is a<br />
          multiline
          <br />
          secondary checkbox label
        </InputCheckbox>
      </Wrapper>

      {separator}

      <Wrapper>
        <InputCheckbox
          color="pink"
          defaultChecked
          label={`"${Colors.Pink}" secondary`}
          variant="secondary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          color="yellow"
          defaultChecked
          label={`"${Colors.Yellow}" secondary`}
          variant="secondary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          color="green"
          defaultChecked
          label={`"${Colors.Green}" secondary`}
          variant="secondary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          color="blue"
          defaultChecked
          label={`"${Colors.Blue}" secondary`}
          variant="secondary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          color="purple"
          defaultChecked
          label={`"${Colors.Purple}" secondary`}
          variant="secondary"
        />
      </Wrapper>
    </>
  ),
}

export const InteractiveSecondary: Story = {
  args: {
    onCheckedChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.getByRole('checkbox'))
    await sleep(500)
    await userEvent.click(canvas.getByRole('checkbox'))
  },
  render: () => <InputCheckbox label="Secondary" variant="secondary" />,
}

export const Tertiary: Story = {
  render: () => (
    <>
      <Wrapper>
        <InputCheckbox label="Tertiary" variant="tertiary" />
        <InputCheckbox
          defaultChecked
          label="Checked tertiary"
          variant="tertiary"
        />
        <InputCheckbox label="Required tertiary" required variant="tertiary" />
      </Wrapper>

      <Wrapper>
        <InputCheckbox disabled label="Disabled tertiary" variant="tertiary" />
        <InputCheckbox
          defaultChecked
          disabled
          label="Disabled checked tertiary"
          variant="tertiary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox label="Read-only tertiary" readOnly variant="tertiary" />
        <InputCheckbox
          defaultChecked
          label="Read-only checked tertiary"
          readOnly
          variant="tertiary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          fullWidth
          label="Full width tertiary"
          variant="tertiary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox fullWidth variant="tertiary">
          This is a<br />
          multiline
          <br />
          tertiary checkbox label
        </InputCheckbox>
      </Wrapper>

      {separator}

      <Wrapper>
        <InputCheckbox
          color="pink"
          defaultChecked
          label={`"${Colors.Pink}" tertiary`}
          variant="tertiary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          color="yellow"
          defaultChecked
          label={`"${Colors.Yellow}" tertiary`}
          variant="tertiary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          color="green"
          defaultChecked
          label={`"${Colors.Green}" tertiary`}
          variant="tertiary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          color="blue"
          defaultChecked
          label={`"${Colors.Blue}" tertiary`}
          variant="tertiary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          color="purple"
          defaultChecked
          label={`"${Colors.Purple}" tertiary`}
          variant="tertiary"
        />
      </Wrapper>
    </>
  ),
}

export const InteractiveTertiary: Story = {
  args: {
    onCheckedChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.getByRole('checkbox'))
    await sleep(500)
    await userEvent.click(canvas.getByRole('checkbox'))
  },
  render: () => <InputCheckbox label="Tertiary" variant="tertiary" />,
}
