import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import { fn, userEvent, within } from '@storybook/test'
import isArray from 'lodash/fp/isArray'
import type { ComponentProps, ReactNode } from 'react'

import { DEFAULT_THEME, Themes } from '@/constants'
import { sleep } from '@/utils'

import { DateTimePicker } from '.'
import {
  DEFAULT_ORIENTATION,
  DEFAULT_PICKER_VARIANT,
  DEFAULT_TIME_VARIANT,
  Orientations,
  PickerVariants,
} from './DateTimePicker.constants'

type DateTimePickerProps = ComponentProps<typeof DateTimePicker>

const i18n = {
  buttons: { clear: 'Clear', close: 'Close', now: 'Now', today: 'Today' },
  tabs: { bar: 'Tabs' },
}

const meta: Meta<DateTimePickerProps> = {
  argTypes: {
    theme: {
      control: 'radio',
      table: {
        defaultValue: { summary: DEFAULT_THEME },
        type: { summary: Object.values(Themes).join('|') },
      },
    },
  },
  args: {
    amPm: false,
    clearable: true,
    defaultOpen: false,
    description: 'This is a datetime input',
    disabled: false,
    fullWidth: false,
    i18n,
    label: 'Please pick a date and a time',
    modal: false,
    open: false,
    orientation: DEFAULT_ORIENTATION,
    pickerVariant: DEFAULT_PICKER_VARIANT,
    placeholder: '',
    readOnly: false,
    required: false,
    staticPicker: false,
    theme: Themes.Light,
    timeVariant: DEFAULT_TIME_VARIANT,
    value: new Date(),
    withClose: true,
    withDatePicker: true,
    withNow: true,
    withPicker: true,
    withTimePicker: true,
    withToday: true,
  },
  component: DateTimePicker,
  decorators: [
    // eslint-disable-next-line unicorn/prevent-abbreviations
    function WithArgs(Story, context) {
      // eslint-disable-next-line unicorn/prevent-abbreviations
      const [, setArgs] = useArgs<typeof context.args>()

      const onChange = (newDate: Date | null) => {
        if (isArray(newDate)) {
          return
        }

        context.args.onChange?.(newDate)

        // Check if the component is controlled.
        if (context.args.value !== undefined) {
          setArgs({ value: newDate })
        }
      }

      return <Story args={{ ...context.args, onChange }} />
    },
  ],
  parameters: {
    componentSubtitle:
      "🐇 The time! The time! Who's got the time? - White Rabbit - Alice in Wonderland",
  },

  title: 'Molecules/Date & Time picker',
} satisfies Meta<DateTimePickerProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
  },
}

export const InteractiveModal: Story = {
  args: {
    modal: true,
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Horizontal,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('button')
    await userEvent.click(input)

    await sleep(500)

    const tabs = body.getAllByRole('tab')
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    await userEvent.hover(tabs.at(1)!)
    await sleep(500)
    await userEvent.click(tabs.at(1)!)
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
  },
}

export const InteractiveModalManipulateAndClose: Story = {
  args: {
    modal: true,
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Horizontal,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('button')
    await userEvent.click(input)

    await sleep(500)

    const clearButton = body.getByLabelText('Clear')
    await userEvent.click(clearButton)
    await sleep(500)

    const nowButton = body.getByLabelText('Now')
    await userEvent.click(nowButton)
    await sleep(500)

    const closeButton = body.getAllByLabelText('Close').at(0)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(closeButton!)
    await sleep(500)
  },
}

export const InteractiveHorizontal: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Horizontal,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('button')
    await userEvent.click(input)

    await sleep(500)

    const tabs = body.getAllByRole('tab')
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    await userEvent.hover(tabs.at(1)!)
    await sleep(500)
    await userEvent.click(tabs.at(1)!)
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
  },
}

export const InteractiveHorizontalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Horizontal,
    pickerVariant: PickerVariants.SideBySide,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByRole('button')
    await userEvent.click(input)
  },
}

export const InteractiveVertical: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Vertical,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('button')
    await userEvent.click(input)

    await sleep(500)

    const tabs = body.getAllByRole('tab')
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    await userEvent.hover(tabs.at(1)!)
    await sleep(500)
    await userEvent.click(tabs.at(1)!)
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
  },
}

export const InteractiveVerticalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Vertical,
    pickerVariant: PickerVariants.SideBySide,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByRole('button')
    await userEvent.click(input)
  },
}

export const InteractiveStaticHorizontal: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Horizontal,
    staticPicker: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const tabs = canvas.getAllByRole('tab')
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    await userEvent.hover(tabs.at(1)!)
    await sleep(500)
    await userEvent.click(tabs.at(1)!)
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
  },
}

export const InteractiveStaticHorizontalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Horizontal,
    pickerVariant: PickerVariants.SideBySide,
    staticPicker: true,
  },
}

export const InteractiveStaticVertical: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Vertical,
    staticPicker: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const tabs = canvas.getAllByRole('tab')
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    await userEvent.hover(tabs.at(1)!)
    await sleep(500)
    await userEvent.click(tabs.at(1)!)
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
  },
}

export const InteractiveStaticVerticalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Vertical,
    pickerVariant: PickerVariants.SideBySide,
    staticPicker: true,
  },
}

export const InteractiveClearedStaticHorizontalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Horizontal,
    pickerVariant: PickerVariants.SideBySide,
    staticPicker: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const clearButton = canvas.getByLabelText('Clear')

    await sleep(500)

    await userEvent.hover(clearButton)
    await sleep(500)
    await userEvent.click(clearButton)
  },
}

export const InteractiveClearedStaticVerticalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Vertical,
    pickerVariant: PickerVariants.SideBySide,
    staticPicker: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const clearButton = canvas.getByLabelText('Clear')

    await sleep(500)

    await userEvent.hover(clearButton)
    await sleep(500)
    await userEvent.click(clearButton)
  },
}

export const InteractiveTodayStaticHorizontalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Horizontal,
    pickerVariant: PickerVariants.SideBySide,
    staticPicker: true,
    value: null,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const todayButton = canvas.getByLabelText('Today')

    await sleep(500)

    await userEvent.hover(todayButton)
    await sleep(500)
    await userEvent.click(todayButton)
  },
}

export const InteractiveTodayStaticVerticalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Vertical,
    pickerVariant: PickerVariants.SideBySide,
    staticPicker: true,
    value: null,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const todayButton = canvas.getByLabelText('Today')

    await sleep(500)

    await userEvent.hover(todayButton)
    await sleep(500)
    await userEvent.click(todayButton)
  },
}

export const InteractiveNowStaticHorizontalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Horizontal,
    pickerVariant: PickerVariants.SideBySide,
    staticPicker: true,
    value: null,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const nowButton = canvas.getByLabelText('Now')

    await sleep(500)

    await userEvent.hover(nowButton)
    await sleep(500)
    await userEvent.click(nowButton)
  },
}

export const InteractiveNowStaticVerticalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    orientation: Orientations.Vertical,
    pickerVariant: PickerVariants.SideBySide,
    staticPicker: true,
    value: null,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const nowButton = canvas.getByLabelText('Now')

    await sleep(500)

    await userEvent.hover(nowButton)
    await sleep(500)
    await userEvent.click(nowButton)
  },
}

const separator = <hr className="my-3 w-full" />

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="mb-2 flex flex-wrap items-start gap-2">{children}</div>
)

export const InPopover: Story = {
  render: () => (
    <>
      <Wrapper>
        <DateTimePicker i18n={i18n} label="Empty" />
        <DateTimePicker i18n={i18n} label="Required" required />
      </Wrapper>

      <Wrapper>
        <DateTimePicker
          description="This is a description"
          i18n={i18n}
          label="With description and placeholder"
          placeholder="This is a placeholder"
        />
      </Wrapper>

      <Wrapper>
        <DateTimePicker i18n={i18n} label="With value" value={new Date()} />
        <DateTimePicker
          amPm
          i18n={i18n}
          label="AM/PM mode"
          value={new Date()}
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <DateTimePicker
          i18n={i18n}
          label="Without picker"
          value={new Date()}
          withPicker={false}
        />
        <DateTimePicker
          i18n={i18n}
          label="Modal picker"
          modal
          value={new Date()}
        />
        <DateTimePicker
          i18n={i18n}
          label={'Without "Close" button'}
          value={new Date()}
          withClose={false}
        />
        <DateTimePicker
          clearable={false}
          i18n={i18n}
          label="Not clearable"
          value={new Date()}
        />
        <DateTimePicker
          clearable={false}
          i18n={i18n}
          label="No action button"
          value={new Date()}
          withClose={false}
        />
      </Wrapper>

      <Wrapper>
        <DateTimePicker
          i18n={i18n}
          label={'Without "Today" button'}
          value={new Date()}
          withToday={false}
        />
        <DateTimePicker
          i18n={i18n}
          label={'Without "Now" button'}
          value={new Date()}
          withNow={false}
        />
        <DateTimePicker
          i18n={i18n}
          label="No helper button"
          value={new Date()}
          withNow={false}
          withToday={false}
        />
        <DateTimePicker
          clearable={false}
          i18n={i18n}
          label="No button at all"
          value={new Date()}
          withClose={false}
          withNow={false}
          withToday={false}
        />
      </Wrapper>

      <Wrapper>
        <DateTimePicker
          i18n={i18n}
          label="Date picker only"
          value={new Date()}
          withTimePicker={false}
        />
        <DateTimePicker
          i18n={i18n}
          label="Time picker only"
          value={new Date()}
          withDatePicker={false}
        />
      </Wrapper>

      <Wrapper>
        <DateTimePicker
          i18n={i18n}
          label="Horizontal side by side pickers"
          orientation="horizontal"
          pickerVariant="side-by-side"
          value={new Date()}
        />
        <DateTimePicker
          i18n={i18n}
          label="Vertical side by side pickers"
          orientation="vertical"
          pickerVariant="side-by-side"
          value={new Date()}
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <DateTimePicker
          disabled
          i18n={i18n}
          label="Disabled"
          placeholder="DD/MM/YYYY HH:MM"
        />
        <DateTimePicker
          disabled
          i18n={i18n}
          label="Disabled with value"
          value={new Date()}
        />
        <DateTimePicker
          i18n={i18n}
          label="Read-only with value"
          readOnly
          value={new Date()}
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <DateTimePicker fullWidth i18n={i18n} label="Full width" />
        <DateTimePicker
          fullWidth
          i18n={i18n}
          label="Full width, horizontal side-by-side pickers"
          orientation="horizontal"
          pickerVariant="side-by-side"
        />
        <DateTimePicker
          fullWidth
          i18n={i18n}
          label="Full width, vertical side-by-side pickers"
          orientation="vertical"
          pickerVariant="side-by-side"
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <DateTimePicker
          error="There is an error"
          i18n={i18n}
          label="With error"
        />
      </Wrapper>

      <Wrapper>
        <DateTimePicker
          i18n={i18n}
          label="Valid date"
          success="The date is valid"
          value={new Date()}
        />
      </Wrapper>
    </>
  ),
}

const StaticWrapper = ({ children }: { children: ReactNode }) => (
  <div className="mb-2 flex flex-wrap items-start gap-4 border-b-1 border-normal bg-white pb-1">
    {children}
  </div>
)

export const StaticDisplay: Story = {
  render: () => (
    <>
      <blockquote className="mb-8 ml-0">
        <h5>ℹ️ Note</h5>
        <hr />
        <p>
          The white background is only there to make this page more readable.
          The static picker has a transparent background when using the
          component.
        </p>
      </blockquote>

      <StaticWrapper>
        <DateTimePicker i18n={i18n} label="Empty" staticPicker />
        <DateTimePicker i18n={i18n} label="Required" required staticPicker />
      </StaticWrapper>

      <StaticWrapper>
        <DateTimePicker
          description="This is a description"
          i18n={i18n}
          label="With description and placeholder"
          placeholder="This is a placeholder"
          staticPicker
        />
      </StaticWrapper>

      <StaticWrapper>
        <DateTimePicker
          i18n={i18n}
          label="With value"
          staticPicker
          value={new Date()}
        />
        <DateTimePicker
          amPm
          i18n={i18n}
          label="AM/PM mode"
          staticPicker
          value={new Date()}
        />
      </StaticWrapper>

      {separator}

      <StaticWrapper>
        <DateTimePicker
          clearable={false}
          i18n={i18n}
          label="Not clearable"
          staticPicker
          value={new Date()}
        />

        <DateTimePicker
          i18n={i18n}
          label={'Without "Today" button'}
          staticPicker
          value={new Date()}
          withToday={false}
        />
        <DateTimePicker
          i18n={i18n}
          label={'Without "Now" button'}
          staticPicker
          value={new Date()}
          withNow={false}
        />
        <DateTimePicker
          i18n={i18n}
          label="No helper button"
          staticPicker
          value={new Date()}
          withNow={false}
          withToday={false}
        />
        <DateTimePicker
          clearable={false}
          i18n={i18n}
          label="No button at all"
          staticPicker
          value={new Date()}
          withClose={false}
          withNow={false}
          withToday={false}
        />
      </StaticWrapper>

      <StaticWrapper>
        <DateTimePicker
          i18n={i18n}
          label="Date picker only"
          staticPicker
          value={new Date()}
          withTimePicker={false}
        />
        <DateTimePicker
          i18n={i18n}
          label="Time picker only"
          staticPicker
          value={new Date()}
          withDatePicker={false}
        />
      </StaticWrapper>

      <StaticWrapper>
        <DateTimePicker
          i18n={i18n}
          label="Horizontal side by side pickers"
          orientation="horizontal"
          pickerVariant="side-by-side"
          staticPicker
          value={new Date()}
        />
        <DateTimePicker
          i18n={i18n}
          label="Vertical side by side pickers"
          orientation="vertical"
          pickerVariant="side-by-side"
          staticPicker
          value={new Date()}
        />
      </StaticWrapper>

      {separator}

      <StaticWrapper>
        <DateTimePicker
          disabled
          i18n={i18n}
          label="Disabled"
          placeholder="DD/MM/YYYY HH:MM"
          staticPicker
        />
        <DateTimePicker
          disabled
          i18n={i18n}
          label="Disabled with value"
          staticPicker
          value={new Date()}
        />
        <DateTimePicker
          i18n={i18n}
          label="Read-only with value"
          readOnly
          staticPicker
          value={new Date()}
        />
      </StaticWrapper>

      {separator}

      <StaticWrapper>
        <DateTimePicker fullWidth i18n={i18n} label="Full width" staticPicker />
        <DateTimePicker
          fullWidth
          i18n={i18n}
          label="Full width, horizontal side-by-side pickers"
          orientation="horizontal"
          pickerVariant="side-by-side"
          staticPicker
        />
        <DateTimePicker
          fullWidth
          i18n={i18n}
          label="Full width, vertical side-by-side pickers"
          orientation="vertical"
          pickerVariant="side-by-side"
          staticPicker
        />
      </StaticWrapper>

      {separator}

      <StaticWrapper>
        <DateTimePicker
          error="There is an error"
          i18n={i18n}
          label="With error"
          staticPicker
        />
      </StaticWrapper>

      <StaticWrapper>
        <DateTimePicker
          i18n={i18n}
          label="Valid date"
          staticPicker
          success="The date is valid"
          value={new Date()}
        />
      </StaticWrapper>
    </>
  ),
}
