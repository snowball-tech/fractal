import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps, ReactNode } from 'react'

import InputCheckbox from './InputCheckbox'
import {
  Colors,
  DEFAULT_COLOR,
  DEFAULT_VARIANT,
  Variants,
} from './InputCheckbox.constants'

type InputCheckboxProps = ComponentProps<typeof InputCheckbox>

const checkStateType = { type: { summary: "boolean | 'indeterminate'" } }

const meta = {
  argTypes: {
    asChild: { table: { disable: true } },
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
      options: Object.values(Variants),
      table: {
        defaultValue: { summary: DEFAULT_VARIANT },
        type: { summary: Object.values(Variants).join('|') },
      },
    },
  },
  args: {
    disabled: false,
    label: 'This is a checkbox',
    required: false,
  },
  component: InputCheckbox,
  parameters: {
    componentSubtitle:
      '🦜 Checking in with the morning report. - Zazu - The Lion King',
    controls: {
      exclude: ['checked'],
    },
  },

  title: 'InputCheckbox',
} satisfies Meta<InputCheckboxProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    color: DEFAULT_COLOR,
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

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      alignItems: 'flex-end',
      display: 'flex',
      gap: 'var(--size-spacing-2)',
      marginBottom: 'var(--size-spacing-2)',
    }}
  >
    {children}
  </div>
)

export const Checkboxes: Story = {
  render: () => (
    <>
      <Wrapper>
        <InputCheckbox label="Primary" variant="primary" />
        <InputCheckbox label="Secondary" variant="secondary" />
        <InputCheckbox label="Tertiary" variant="tertiary" />
      </Wrapper>

      <Wrapper>
        <InputCheckbox disabled label={`Disabled primary`} />
        <InputCheckbox
          disabled
          label={`Disabled secondary`}
          variant="secondary"
        />
        <InputCheckbox
          disabled
          label={`Disabled tertiary`}
          variant="tertiary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox
          defaultChecked
          disabled
          label={`Disabled checked primary`}
        />
        <InputCheckbox
          defaultChecked
          disabled
          label={`Disabled checked secondary`}
          variant="secondary"
        />
        <InputCheckbox
          defaultChecked
          disabled
          label={`Disabled checked tertiary`}
          variant="tertiary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox label={`Required primary`} required />
        <InputCheckbox
          label={`Required secondary`}
          required
          variant="secondary"
        />
        <InputCheckbox
          label={`Required tertiary`}
          required
          variant="tertiary"
        />
      </Wrapper>

      <Wrapper>
        <InputCheckbox fullWidth label="Full width primary" />
      </Wrapper>
      <Wrapper>
        <InputCheckbox
          fullWidth
          label="Full width secondary"
          variant="secondary"
        />
      </Wrapper>
      <Wrapper>
        <InputCheckbox
          fullWidth
          label="Full width tertiary"
          variant="tertiary"
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <InputCheckbox
          color="pink"
          defaultChecked
          label={`"${Colors.Pink}" primary`}
        />
        <InputCheckbox
          color="pink"
          defaultChecked
          label={`"${Colors.Pink}" secondary`}
          variant="secondary"
        />
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
          label={`"${Colors.Yellow}" primary`}
        />
        <InputCheckbox
          color="yellow"
          defaultChecked
          label={`"${Colors.Yellow}" secondary`}
          variant="secondary"
        />
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
          label={`"${Colors.Green}" primary`}
        />
        <InputCheckbox
          color="green"
          defaultChecked
          label={`"${Colors.Green}" secondary`}
          variant="secondary"
        />
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
          label={`"${Colors.Blue}" primary`}
        />
        <InputCheckbox
          color="blue"
          defaultChecked
          label={`"${Colors.Blue}" secondary`}
          variant="secondary"
        />
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
          label={`"${Colors.Purple}" primary`}
        />
        <InputCheckbox
          color="purple"
          defaultChecked
          label={`"${Colors.Purple}" secondary`}
          variant="secondary"
        />
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
