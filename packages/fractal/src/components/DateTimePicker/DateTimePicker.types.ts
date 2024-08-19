import type { HTMLAttributes } from 'react'
import { TimeOutput } from 'react-timekeeper'

import { DialogProps } from '@/components/Dialog'
import { PopoverCombinedRefs, PopoverProps } from '@/components/Popover'
import { Themes } from '@/constants'

import {
  Orientations,
  PickerVariants,
  TimeVariants,
} from './DateTimePicker.constants'

export type CombinedRefs = {
  calendar: HTMLDivElement | null
  input: HTMLInputElement | null
  picker: null | PopoverCombinedRefs
}

export interface DateTimePickerProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    | 'defaultValue'
    | 'onBlur'
    | 'onChange'
    | 'onFocus'
    | 'onKeyDown'
    | 'onKeyUp'
    | 'placeholder'
  > {
  /**
   * Indicates if the datetime input should use a 12h (`true`) or 24h (`false`)
   * format for the time part.
   */
  amPm?: boolean
  /** Indicates if the datetime can be cleared. */
  clearable?: boolean
  /**
   * The open state of the datetime picker when it is initially rendered.
   *
   * Use this when you do not need to control its open state.
   *
   * This has no effect if `withPicker` is `false` or if `staticPicker` is
   * `true`.
   */
  defaultOpen?: boolean
  /**
   * The value of the datetime input when it is initially rendered.
   *
   * Use this when you do not need to control its value.
   */
  defaultValue?: Date | null
  /** An helpful message to describe the datetime input to the user. */
  description?: string
  /** Prevents the user from interacting with the datetime input. */
  disabled?: boolean
  /**
   * An error message to display below the datetime input if there is an
   * error.
   *
   * This will also change the display of the input to give an error feedback
   * (red border).
   *
   * Note that the description (if there is one) will be replaced by the error
   * message when provided.
   */
  error?: string
  /** Indicates if the datetime input should take all the available width. */
  fullWidth?: boolean
  /** The translated labels for all the element of the datetime picker. */
  i18n?: {
    buttons?: {
      clear?: string
      close?: string
      now?: string
      today?: string
    }
    calendar?: {
      fastNext?: string
      fastPrevious?: string
      next?: string
      previous?: string
    }
    tabs?: { bar?: string; date?: string; time?: string }
  }
  /**
   * A unique HTML id for the datetime input.
   *
   * This allows to link the datetime input with a label.
   *
   * If none is given, one will be generated automatically.
   */
  id?: string
  /** The label of the datetime input. */
  label?: string
  /**
   * Indicate the latest date pickable.
   *
   * You can either pass a date or the string 'today' to indicate that the
   * latest date pickable is today.
   */
  maxDate?: 'today' | Date
  /**
   * The maximum date and time that can be entered.
   *
   * You can either pass a date or the string 'now' to indicate that the
   * maximum date and time that can be entered is now.
   *
   * To limit the time for each day, use `maxTime`.
   */
  maxDateTime?: 'now' | Date
  /**
   * Indicate the latest time pickable for each day.
   *
   * You can either pass a Date (only the time part will be used) or the string
   * 'now' to indicate that the latest time pickable is now.
   *
   * To limit the time at a certain date, use `maxDateTime`.
   */
  maxTime?: 'now' | Date
  /**
   * Indicate the earliest date pickable.
   *
   * You can either pass a date or the string 'today' to indicate that the
   * earliest date pickable is today.
   */
  minDate?: 'today' | Date
  /**
   * The minimum date and time that can be entered.
   *
   * You can either pass a date or the string 'now' to indicate that the
   * minimum date and time that can be entered is now.
   *
   * To limit the time for each day, use `minTime`.
   */
  minDateTime?: 'now' | Date
  /**
   * Indicate the earliest time pickable for each day.
   *
   * You can either pass a Date (only the time part will be used) or the string
   * 'now' to indicate that the earliest time pickable is now.
   *
   * To limit the time at a certain date, use `minDateTime`.
   */
  minTime?: 'now' | Date
  /**
   * Indicates if the datetime picker should be displayed as a modal (i.e.
   * blocking any other interaction on the page).
   *
   * It's usually recommended on mobile usages.
   */
  modal?: boolean
  /**
   * The name of the datetime input.
   *
   * It is used to reference the datetime input in a form submission.
   *
   * If none is given, the ID (provided or auto-generated) will be used.
   */
  name?: string
  /**
   * The controlled open state of the datetime picker.
   *
   * Must be used in conjunction with `onToggle`.
   *
   * This has no effect if `withPicker` is `false` or if `staticPicker` is
   * `true`.
   */
  open?: boolean
  /** The orientations of the datetime picker. */
  orientation?: `${Orientations}`
  /**
   * Indicates how to display the date and time pickers:
   * - `tabs`: the date and time pickers are displayed in tabs
   * - `side-by-side`: the date and time pickers are displayed side by side
   *
   * This only has an effect if both `withDatePicker` and `withTimePicker` are
   * `true` (and if you enabled the picker with `withPicker`).
   */
  pickerVariant?: `${PickerVariants}`
  /** A string to display the datetime input is empty.   */
  placeholder?: string
  /**
   * Options to customize the popover (in non modal mode) / dialog (in modal
   * mode).
   */
  popover?:
    | Partial<
        Omit<
          DialogProps,
          | 'children'
          | 'defaultOpen'
          | 'disabled'
          | 'onDismiss'
          | 'onToggle'
          | 'open'
          | 'trigger'
        >
      >
    | Partial<
        Omit<
          PopoverProps,
          | 'children'
          | 'disabled'
          | 'onOpenChange'
          | 'open'
          | 'toggleOnTriggerClick'
          | 'trigger'
          | 'triggerAsButton'
          | 'withArrow'
        >
      >
  /** Prevents the user to change the value of the datetime input. */
  readOnly?: boolean
  /** Indicates if the datetime input must be filled. */
  required?: boolean
  /**
   * Indicates if the picker should be displayed instead of displaying an input
   * having the picker as a popover (that is triggered by clicking on an icon on
   * the right of the datetime input).
   */
  staticPicker?: boolean
  /**
   * A message to display when the datetime input has a valid value.
   *
   * This will also change the display of the input to give an success feedback
   * (green border).
   */
  success?: string
  /**
   * Force the theme of the datetime picker.
   *
   * If none is given, it will use the one provided by the Context/Provider.
   */
  theme?: Themes
  /**
   * The variant to use to pick the time.
   *
   * - `clock`: a clock to pick the time (similar to what you find on Android
   *   mobile devices)
   */
  timeVariant?: `${TimeVariants}`
  /**
   * The controlled value of the datetime input.
   *
   * Must be used in conjunction with `onChange`.
   */
  value?: Date | null
  /**
   * Indicates if you want to display the "Close" button at the bottom of the
   * (non static) picker.
   */
  withClose?: boolean
  /** Indicates if you want to allow to pick a date. */
  withDatePicker?: boolean
  /**
   * Indicates if you want to display the "Now" shortcut button at the bottom
   * of the picker.
   */
  withNow?: boolean
  /** Indicates if you want a datetimepicker along with the field. */
  withPicker?: boolean
  /** Indicates if you want to allow to pick a time. */
  withTimePicker?: boolean
  /**
   * Indicates if you want to display the "Today" shortcut button at the bottom
   * of the picker.
   */
  withToday?: boolean
  /** Event handler called when the full datetime value is changed. */
  onChange?: (newDate: Date | null) => void
  /** Event handler called when the datetime picker value is cleared. */
  onClear?: () => void
  /** Event handler called when the datetime picker is closed. */
  onClose?: () => void
  /** Event handler called when the date value of the datetime is changed. */
  onDateChange?: (newDate: Date | null, newDateTime: Date | null) => void
  /**
   * Event handler called when the datetime picker is dismissed (i.e. the
   * "Close" button, if any, is clicked).
   */
  onDismiss?: () => void
  /**
   * Event handler called when one of the field of the datetime input is
   * changed.
   */
  onFieldChange?: (
    type: 'ampm' | 'day' | 'hour' | 'minute' | 'month' | 'second' | 'year',
    newValue: Date | null,
  ) => void
  /** Event handler called when the "Now" button is used. */
  onNow?: () => void
  /** Event handler called when the datetime picker is opened. */
  onOpen?: () => void
  /**
   * Event handler called when the datetime picker is opened or closed.
   */
  onOpenChange?: (open: boolean) => void
  /** Event handler called when the time value of the datetime is changed. */
  onTimeChange?: (newTime: null | TimeOutput, newDateTime: Date | null) => void
  /** Event handler called when the "Today" button is used. */
  onToday?: () => void
}
