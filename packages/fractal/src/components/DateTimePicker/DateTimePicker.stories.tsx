import type { Meta, StoryObj } from '@storybook/react'

import { useArgs } from '@storybook/preview-api'
import { fn, userEvent, within } from '@storybook/test'
import isChromatic from 'chromatic/isChromatic'

import type { ComponentProps, ReactNode } from 'react'

import isArray from 'lodash/fp/isArray'

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

const defaultDate = new Date(1985, 9, 11, 14, 30, 42, 0)
const i18n = {
  buttons: {
    clear: 'Clear',
    close: 'Close',
    now: 'Now',
    today: 'Today',
  },
  tabs: { bar: 'Date & Time', date: 'Date', time: 'Time' },
}
const frenchI18n = {
  buttons: {
    clear: 'Effacer',
    close: 'Fermer',
    now: 'Maintenant',
    today: "Aujourd'hui",
  },
  tabs: { bar: 'Date et heure', date: 'Date', time: 'Heure' },
}

const meta: Meta<DateTimePickerProps> = {
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
    value: defaultDate,
    withClose: true,
    withDatePicker: true,
    withNow: true,
    withPicker: true,
    withTimePicker: true,
    withToday: true,
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: Object.values(Themes),
      table: {
        defaultValue: { summary: DEFAULT_THEME },
        type: { summary: Object.values(Themes).join('|') },
      },
    },
  },
  component: DateTimePicker,
  decorators: [
    ...(isChromatic()
      ? [
          (storyFunction: () => ReactNode) => (
            <div className="min-h-[1200px] w-[500px]">{storyFunction()}</div>
          ),
        ]
      : []),
    function WithArgs(Story, context) {
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
    mockingDate: isChromatic()
      ? new Date(2023, 4, 3, 14, 30, 42, 0)
      : undefined,
  },

  title: 'Molecules/Date & Time picker',
} satisfies Meta<DateTimePickerProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    onChange: fn(),
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
  },
}

export const InteractiveModal: Story = {
  args: {
    modal: true,
    onChange: fn(),
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
    orientation: Orientations.Horizontal,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('button')
    await userEvent.click(input)

    await sleep(500)

    const tabs = body.getAllByRole('tab')
    await userEvent.hover(tabs.at(1)!)
    await sleep(500)
    await userEvent.click(tabs.at(1)!)
  },
}

export const InteractiveModalManipulateAndClose: Story = {
  args: {
    modal: true,
    onChange: fn(),
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
    orientation: Orientations.Horizontal,
    value: defaultDate,
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

    const closeButton = body.getAllByLabelText('Close').at(-1)
    await userEvent.click(closeButton!)
    await sleep(500)
  },
}

export const InteractiveHorizontal: Story = {
  args: {
    onChange: fn(),
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
    orientation: Orientations.Horizontal,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('button')
    await userEvent.click(input)

    await sleep(500)

    const tabs = body.getAllByRole('tab')
    await userEvent.hover(tabs.at(1)!)
    await sleep(500)
    await userEvent.click(tabs.at(1)!)
  },
}

export const InteractiveHorizontalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
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
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
    orientation: Orientations.Vertical,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)

    const input = canvas.getByRole('button')
    await userEvent.click(input)

    await sleep(500)

    const tabs = body.getAllByRole('tab')
    await userEvent.hover(tabs.at(1)!)
    await sleep(500)
    await userEvent.click(tabs.at(1)!)
  },
}

export const InteractiveVerticalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
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
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
    orientation: Orientations.Horizontal,
    staticPicker: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const tabs = canvas.getAllByRole('tab')
    await userEvent.hover(tabs.at(1)!)
    await sleep(500)
    await userEvent.click(tabs.at(1)!)
  },
}

export const InteractiveStaticHorizontalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
    orientation: Orientations.Horizontal,
    pickerVariant: PickerVariants.SideBySide,
    staticPicker: true,
  },
}

export const InteractiveStaticVertical: Story = {
  args: {
    onChange: fn(),
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
    orientation: Orientations.Vertical,
    staticPicker: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const tabs = canvas.getAllByRole('tab')
    await userEvent.hover(tabs.at(1)!)
    await sleep(500)
    await userEvent.click(tabs.at(1)!)
  },
}

export const InteractiveStaticVerticalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
    orientation: Orientations.Vertical,
    pickerVariant: PickerVariants.SideBySide,
    staticPicker: true,
  },
}

export const InteractiveClearedStaticHorizontalSideBySide: Story = {
  args: {
    onChange: fn(),
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
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
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
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
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
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
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
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
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
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
    onClear: fn(),
    onClose: fn(),
    onDateChange: fn(),
    onDismiss: fn(),
    onFieldChange: fn(),
    onNow: fn(),
    onOpen: fn(),
    onOpenChange: fn(),
    onTimeChange: fn(),
    onToday: fn(),
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
        <DateTimePicker i18n={i18n} label="With value" value={defaultDate} />
        <DateTimePicker
          amPm
          i18n={i18n}
          label="AM/PM mode"
          value={defaultDate}
        />
      </Wrapper>

      <Wrapper>
        <DateTimePicker
          i18n={frenchI18n}
          label="Translated in french"
          value={defaultDate}
        />
      </Wrapper>

      {separator}

      <Wrapper>
        <DateTimePicker
          i18n={i18n}
          label="Without picker"
          value={defaultDate}
          withPicker={false}
        />
        <DateTimePicker
          i18n={frenchI18n}
          label="Modal picker"
          modal
          value={defaultDate}
        />
        <DateTimePicker
          i18n={i18n}
          label={'Without "Close" button'}
          value={defaultDate}
          withClose={false}
        />
        <DateTimePicker
          clearable={false}
          i18n={i18n}
          label="Not clearable"
          value={defaultDate}
        />
        <DateTimePicker
          clearable={false}
          i18n={i18n}
          label="No action button"
          value={defaultDate}
          withClose={false}
        />
      </Wrapper>

      <Wrapper>
        <DateTimePicker
          i18n={i18n}
          label={'Without "Today" button'}
          value={defaultDate}
          withToday={false}
        />
        <DateTimePicker
          i18n={i18n}
          label={'Without "Now" button'}
          value={defaultDate}
          withNow={false}
        />
        <DateTimePicker
          i18n={i18n}
          label="No helper button"
          value={defaultDate}
          withNow={false}
          withToday={false}
        />
        <DateTimePicker
          clearable={false}
          i18n={i18n}
          label="No button at all"
          value={defaultDate}
          withClose={false}
          withNow={false}
          withToday={false}
        />
      </Wrapper>

      <Wrapper>
        <DateTimePicker
          i18n={i18n}
          label="Date picker only"
          value={defaultDate}
          withTimePicker={false}
        />
        <DateTimePicker
          i18n={i18n}
          label="Time picker only"
          value={defaultDate}
          withDatePicker={false}
        />
      </Wrapper>

      <Wrapper>
        <DateTimePicker
          i18n={i18n}
          label="Horizontal side by side pickers"
          orientation="horizontal"
          pickerVariant="side-by-side"
          value={defaultDate}
        />
        <DateTimePicker
          i18n={i18n}
          label="Vertical side by side pickers"
          orientation="vertical"
          pickerVariant="side-by-side"
          value={defaultDate}
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
          value={defaultDate}
        />
        <DateTimePicker
          i18n={i18n}
          label="Read-only with value"
          readOnly
          value={defaultDate}
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
          value={defaultDate}
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
          value={defaultDate}
        />
        <DateTimePicker
          amPm
          i18n={i18n}
          label="AM/PM mode"
          staticPicker
          value={defaultDate}
        />
      </StaticWrapper>

      <StaticWrapper>
        <DateTimePicker
          i18n={frenchI18n}
          label="Translated in french"
          staticPicker
          value={defaultDate}
        />
      </StaticWrapper>

      {separator}

      <StaticWrapper>
        <DateTimePicker
          clearable={false}
          i18n={i18n}
          label="Not clearable"
          staticPicker
          value={defaultDate}
        />

        <DateTimePicker
          i18n={i18n}
          label={'Without "Today" button'}
          staticPicker
          value={defaultDate}
          withToday={false}
        />
        <DateTimePicker
          i18n={i18n}
          label={'Without "Now" button'}
          staticPicker
          value={defaultDate}
          withNow={false}
        />
        <DateTimePicker
          i18n={i18n}
          label="No helper button"
          staticPicker
          value={defaultDate}
          withNow={false}
          withToday={false}
        />
        <DateTimePicker
          clearable={false}
          i18n={i18n}
          label="No button at all"
          staticPicker
          value={defaultDate}
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
          value={defaultDate}
          withTimePicker={false}
        />
        <DateTimePicker
          i18n={i18n}
          label="Time picker only"
          staticPicker
          value={defaultDate}
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
          value={defaultDate}
        />
        <DateTimePicker
          i18n={i18n}
          label="Vertical side by side pickers"
          orientation="vertical"
          pickerVariant="side-by-side"
          staticPicker
          value={defaultDate}
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
          value={defaultDate}
        />
        <DateTimePicker
          i18n={i18n}
          label="Read-only with value"
          readOnly
          staticPicker
          value={defaultDate}
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
          value={defaultDate}
        />
      </StaticWrapper>
    </>
  ),
}
