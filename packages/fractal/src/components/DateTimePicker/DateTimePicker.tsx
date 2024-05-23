'use client'

import ChevronLeftIcon from '@iconscout/react-unicons/icons/uil-angle-left-b'
import ChevronRightIcon from '@iconscout/react-unicons/icons/uil-angle-right-b'
import CalendarIcon from '@iconscout/react-unicons/icons/uil-calendar-alt'
import ClockIcon from '@iconscout/react-unicons/icons/uil-clock'
import { Label as RxLabel } from '@radix-ui/react-label'
import isDate from 'lodash/fp/isDate'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import pick from 'lodash/fp/pick'
import {
  type ForwardedRef,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import Calendar from 'react-calendar'
import TimeKeeper, { type TimeOutput } from 'react-timekeeper'

import { Button } from '@/components/Button'
import { Dialog } from '@/components/Dialog'
import { InputText } from '@/components/InputText'
import { Popover, type PopoverCombinedRefs } from '@/components/Popover'
import { Tab, TabContent, Tabs } from '@/components/Tabs'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX, Themes } from '@/constants'
import { useTheme } from '@/hooks'
import { cj, cn } from '@/styles/helpers'

import {
  DEFAULT_PICKER_VARIANT,
  DEFAULT_TIME_VARIANT,
  GROUP_NAME,
  Orientations,
  PickerVariants,
  TimeVariants,
} from './DateTimePicker.constants'
import type { CombinedRefs, DateTimePickerProps } from './DateTimePicker.types'

/**
 * `DateTimePicker` component is used to allow the user to enter a date and a
 * time with an optional picker.
 *
 * This component is based on the user experience offered by the MUI library.
 * See https://mui.com/x/react-date-pickers/date-time-picker for more
 * informations.
 */
export const DateTimePicker = forwardRef<CombinedRefs, DateTimePickerProps>(
  (
    {
      amPm = false,
      clearable = true,
      defaultOpen,
      defaultValue,
      description,
      disabled = false,
      error,
      fullWidth = false,
      i18n,
      id,
      label,
      maxDate,
      maxDateTime,
      maxTime,
      minDate,
      minDateTime,
      minTime,
      modal,
      name,
      onChange,
      onClear,
      onClose,
      onDateChange,
      onDismiss,
      onFieldChange,
      onNow,
      onOpen,
      onOpenChange,
      onTimeChange,
      onToday,
      open,
      orientation = Orientations.Responsive,
      pickerVariant = DEFAULT_PICKER_VARIANT,
      placeholder,
      popover,
      readOnly = false,
      required = false,
      staticPicker = false,
      success,
      theme: themeOverride,
      timeVariant = DEFAULT_TIME_VARIANT,
      value,
      withClose = true,
      withDatePicker = true,
      withNow = true,
      withPicker = true,
      withTimePicker = true,
      withToday = true,
      ...props
    }: DateTimePickerProps,
    ref: ForwardedRef<CombinedRefs>,
  ) => {
    const theme = useTheme(themeOverride)

    const generatedId = useId()
    const uniqueId = (id ?? generatedId) || generatedId

    const inputRef = useRef<HTMLInputElement | null>(null)
    const pickerRef = useRef<PopoverCombinedRefs | null>(null)
    const calendarRef = useRef<HTMLDivElement | null>(null)

    useImperativeHandle(ref, () => ({
      get calendar() {
        return calendarRef?.current ?? null
      },

      get input() {
        return inputRef?.current ?? null
      },

      get picker() {
        return pickerRef?.current ?? null
      },
    }))

    const hasErrorMessage = !isEmpty(error)
    const hasSuccessMessage = !isEmpty(success)

    const isInError = hasErrorMessage
    const isSuccessful = hasSuccessMessage && !isInError

    const writable = !disabled && !readOnly

    const [isPickerOpen, setIsPickerOpen] = useState(defaultOpen || open)
    const handlePickerOpenChange = (isOpened: boolean) => {
      if (!writable) {
        return
      }

      const wasOpened = isPickerOpen
      setIsPickerOpen(isOpened)

      if (isFunction(onOpenChange) && wasOpened !== isOpened) {
        onOpenChange(isOpened)
      }

      if (!wasOpened && isOpened && isFunction(onOpen)) {
        onOpen()
      }

      if (wasOpened && !isOpened && isFunction(onClose)) {
        onClose()
      }
    }
    const handleClose = () => {
      handlePickerOpenChange(false)

      if (isFunction(onDismiss)) {
        onDismiss()
      }
    }

    const handleClear = () => {
      if (!writable || !isFunction(onChange)) {
        return
      }

      if (isFunction(onClear)) {
        onClear()
      }

      onDateChange?.(null, null)
      onTimeChange?.(null, null)
      onChange?.(null)
    }

    useEffect(() => {
      if (defaultOpen || open) {
        handlePickerOpenChange(true)
      } else {
        handlePickerOpenChange(false)
      }
      // We don't want to reopen the dropdown based on the `handleOpenChange`
      // function. So we don't include it in the dependencies.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultOpen, open])

    const [tab, setTab] = useState<'date' | 'time'>('date')
    const handleTabChange = (newTab: string) => {
      setTab(newTab as typeof tab)
    }

    const handleDateChange = (
      newValue: [Date | null, Date | null] | Date | null,
    ) => {
      if (
        !writable ||
        (!isFunction(onChange) && !isFunction(onDateChange)) ||
        !isDate(newValue)
      ) {
        return
      }

      const currentValue = isDate(value) ? value : defaultValue

      const newDateTime = new Date(newValue.toISOString())
      newDateTime.setHours(isDate(currentValue) ? currentValue.getHours() : 0)
      newDateTime.setMinutes(
        isDate(currentValue) ? currentValue.getMinutes() : 0,
      )

      onDateChange?.(newValue, newDateTime)
      onChange?.(newDateTime)
    }

    const handleTimeChange = (newTime: TimeOutput) => {
      if (
        !writable ||
        (!isFunction(onChange) && !isFunction(onTimeChange)) ||
        isEmpty(newTime) ||
        !newTime.isValid
      ) {
        return
      }

      const currentValue = isDate(value) ? value : defaultValue
      const newDateTime = isDate(currentValue)
        ? new Date(currentValue)
        : new Date()
      newDateTime.setHours(newTime.hour)
      newDateTime.setMinutes(newTime.minute)

      onTimeChange?.(newTime, newDateTime)
      onChange?.(newDateTime)
    }

    const handleToday = () => {
      if (!writable) {
        return
      }

      if (isFunction(onToday)) {
        onToday()
      }

      handleDateChange(new Date())
    }
    const handleNow = () => {
      if (!writable) {
        return
      }

      if (isFunction(onNow)) {
        onNow()
      }

      const now = new Date()
      handleTimeChange({
        formatted12: now
          .toLocaleTimeString(undefined, {
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
          })
          .toLocaleLowerCase(),
        formatted24: now.toLocaleTimeString(undefined, {
          hour: 'numeric',
          hourCycle: 'h23',
          minute: 'numeric',
        }),
        formattedSimple: now.toLocaleTimeString(undefined, {
          hour: 'numeric',
          hourCycle: amPm ? 'h12' : 'h23',
          minute: 'numeric',
        }),
        hour: now.getHours(),
        hour12: now.getHours() % 12,
        isValid: true,
        meridiem: now.getHours() < 12 ? 'am' : 'pm',
        minute: now.getMinutes(),
      } satisfies TimeOutput)
    }

    const localeStringOptions: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      hour: '2-digit',
      hourCycle: amPm ? 'h12' : 'h23',
      minute: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }
    const localDateStringOptions: Intl.DateTimeFormatOptions = pick(
      ['day', 'month', 'year'],
      localeStringOptions,
    )
    const localTimeStringOptions: Intl.DateTimeFormatOptions = pick(
      ['hour', 'hourCycle', 'minute'],
      localeStringOptions,
    )

    const valueToUse = isDate(value) ? value : defaultValue
    const time = isDate(valueToUse)
      ? valueToUse.toLocaleTimeString(
          undefined,
          pick(['hour', 'hourCycle', 'minute'], localeStringOptions),
        )
      : '00:00'

    let actualMinDate = null
    if (minDateTime) {
      actualMinDate = minDateTime === 'now' ? new Date() : minDateTime
    } else if (minDate) {
      actualMinDate = minDate === 'today' ? new Date() : minDate
    }
    let actualMaxDate = null
    if (maxDateTime) {
      actualMaxDate = maxDateTime === 'now' ? new Date() : maxDateTime
    } else if (maxDate) {
      actualMaxDate = maxDate === 'today' ? new Date() : maxDate
    }

    let actualMinTime = null
    if (minDateTime) {
      actualMinTime = minDateTime === 'now' ? new Date() : minDateTime
    } else if (minTime) {
      actualMinTime = minTime === 'now' ? new Date() : minTime
    }
    let actualMaxTime = null
    if (maxDateTime) {
      actualMaxTime = maxDateTime === 'now' ? new Date() : maxDateTime
    } else if (maxTime) {
      actualMaxTime = maxTime === 'now' ? new Date() : maxTime
    }
    const disabledTimeRange =
      // eslint-disable-next-line no-nested-ternary
      disabled || readOnly
        ? { from: '00:00', to: '23:59' }
        : isDate(actualMinTime) || isDate(actualMaxTime)
          ? {
              from: isDate(actualMaxTime)
                ? `${actualMaxTime.getHours()}:${actualMaxTime.getMinutes()}`
                : '00:00',
              to: isDate(actualMinTime)
                ? `${actualMinTime.getHours()}:${actualMinTime.getMinutes()}`
                : '00:00',
            }
          : undefined

    const lightTheme = `
      --rgb-accent: var(--color-brand-primary-light);
      --rgb-background: var(--color-background-body-white);
      --rgb-hover-background: var(--color-decorative-pink-90);
      --rgb-color: var(--color-text-dark);
      --rgb-hover-color: var(--color-text-dark);
    `
    const darkTheme = `
      --rgb-accent: var(--color-brand-primary-dark);
      --rgb-background: var(--color-brand-body-dark);
      --rgb-hover-background: var(--color-decorative-pink-90);
      --rgb-color: var(--color-text-light);
      --rgb-hover-color: var(--color-text-dark);
    `
    const reset = useMemo(
      () => `
      background-color: ${staticPicker ? 'transparent' : 'var(--rgb-background)'};
      border: none;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      font-family: var(--typography-body-2-font-family);
      font-size: var(--typography-body-2-font-size);
      gap: var(--size-spacing-1);
      letter-spacing: 0;
      line-height: var(--typography-body-2-line-height);
      min-width: calc((var(--size-spacing-5) * 7) + var(--size-spacing-1));
      max-width: calc((var(--size-spacing-5) * 7) + var(--size-spacing-1));
      width: ${fullWidth ? '100%' : 'calc((var(--size-spacing-5) * 7) + var(--size-spacing-1))'};
      margin: 0 auto;
    `,
      [fullWidth, staticPicker],
    )

    const calendarStyle = useMemo(
      () => `
      .fractal-${GROUP_NAME}__picker__date--light {
        ${lightTheme}
      }

      .fractal-${GROUP_NAME}__picker__date--dark {
        ${darkTheme}
      }

      .react-calendar {
        ${reset}
      }

      .react-calendar button {
        background-color: transparent;
        color: var(--rgb-color);
        cursor: pointer;
        padding-block: 0;
        padding-inline: 0;
        text-align: left;
      }

      .react-calendar__navigation {
        align-items: center;
        display: flex;
        font-family: var(--typography-body-1-bold-font-family);
        font-size: var(--typography-body-1-bold-font-size);
        font-weight: var(--typography-body-1-bold-font-weight);
        justify-content: space-between;
        letter-spacing: 0;
        line-height: var(--typography-body-1-bold-line-height);
        padding-left: var(--size-spacing-1);
        padding-top: var(--size-spacing-1);
      }

      .react-calendar__navigation button {
        align-items: center;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        letter-spacing: inherit;
        line-height: inherit;
      }

      .react-calendar__navigation__label {
        align-items: center;
        display: flex;
        gap: var(--size-spacing-1);
        order: 0;
        text-transform: capitalize;
      }

      .react-calendar__navigation__label::after {
        content: '▼';
        font-size: xx-small;
      }

      button.react-calendar__navigation__arrow {
        border-radius: var(--size-radius-rounded);
        justify-content: center;
        padding: var(--size-spacing-1);
      }

      button.react-calendar__navigation__arrow:hover {
        background-color: var(--rgb-hover-background);
      }

      .react-calendar__navigation__prev2-button {
        display: none;
        order: 1;
      }

      .react-calendar__navigation__prev-button {
        display: flex;
        order: 2;
      }

      .react-calendar__navigation__next-button {
        display: flex;
        order: 3;
      }

      .react-calendar__navigation__next2-button {
        display: none;
        order: 4;
      }

      .react-calendar__month-view__weekdays {
        margin-bottom: var(--size-spacing-1);
      }

      .react-calendar__month-view__weekdays__weekday,
      button.react-calendar__tile {
        text-align: center;
      }

      .react-calendar__month-view button.react-calendar__tile {
        min-width: var(--size-spacing-5);
        ${
          fullWidth
            ? ''
            : `
              max-width: var(--size-spacing-5);
              width: var(--size-spacing-5);
            `
        }
      }

      .react-calendar__month-view__weekdays abbr {
        font-family: var(--typography-caption-bold-font-family);
        font-size: var(--typography-caption-bold-font-size);
        font-weight: var(--typography-caption-bold-font-weight);
        letter-spacing: 0;
        line-height: var(--typography-caption-bold-line-height);
        text-decoration: none;
        text-transform: uppercase;
      }

      button.react-calendar__month-view__days__day--neighboringMonth {
        color: var(--color-text-placeholder);
      }

      button.react-calendar__tile {
        align-items: center;
        border-radius: var(--size-radius-rounded);
        display: flex;
        font-family: var(--typography-body-2-font-family);
        font-size: var(--typography-body-2-font-size);
        font-weight: var(--typography-body-2-font-weight);
        height: var(--size-spacing-5);
        justify-content: center;
        letter-spacing: 0;
        line-height: var(--typography-body-2-line-height);
        max-height: var(--size-spacing-5);
        min-height: var(--size-spacing-5);
        text-transform: capitalize;
      }

      button.react-calendar__tile:disabled {
        color: var(--color-text-disabled);
        cursor: not-allowed;
      }

      button.react-calendar__tile:not(.react-calendar__tile--active, :disabled):hover {
        color: var(--rgb-hover-color);
        background-color: var(--rgb-hover-background);
      }

      button.react-calendar__tile--now {
        font-family: var(--typography-body-2-bold-font-family);
        font-size: var(--typography-body-2-bold-font-size);
        font-weight: var(--typography-body-2-bold-font-weight);
        letter-spacing: 0;
        line-height: var(--typography-body-2-bold-line-height);
      }

      button.react-calendar__tile--active {
        background-color: var(--rgb-accent);
      }
    `,
      [darkTheme, fullWidth, lightTheme, reset],
    )

    const clockStyle = useMemo(
      () => `
      .fractal-${GROUP_NAME}__picker__time--light {
        ${lightTheme}
      }

      .fractal-${GROUP_NAME}__picker__time--dark {
        ${darkTheme}
      }

      div.react-timekeeper {
        ${reset}

        --main-bg: transparent;
        --main-box-shadow: none;
        --main-font-family: inherit;

        --top-bg: transparent;
        --top-colon-color: var(--rgb-color);
        --top-text-color: var(--rgb-color);
        --top-meridiem-color: var(--rgb-color);
        --top-selected-color: var(--rgb-accent);

        --clock-wrapper-bg: transparent;
        --clock-bg: var(--color-base-grey-90);

        --hand-line-color: var(--rgb-accent);
        --hand-circle-center: var(--rgb-accent);
        --hand-circle-outer: var(--rgb-accent);
        --hand-minute-circle: var(--color-icon-dark);

        --numbers-text-color: var(--rgb-color);
        --numbers-text-color-disabled: var(--color-text-disabled);
        --numbers-font-size-reg: var(--typography-body-2-font-size);
        --numbers-font-size-inner: var(--typography-body-2-font-size);
        --numbers-font-size-outer: var(--typography-body-2-font-size);

        --meridiem-bg-color: transparent;
        --meridiem-text-color: var(--rgb-color);
        --meridiem-selected-bg-color: var(--rgb-accent);
        --meridiem-selected-text-color: var(--color-text-light);
      }

      div.react-timekeeper__top-bar {
        align-items: end;
        display: flex;
        font-family: var(--typography-display-1-font-family);
        font-size: var(--typography-display-1-font-size-md);
        font-weight: var(--typography-display-1-font-weight);
        justify-content: center;
        letter-spacing: 0;
        line-height: var(--typography-display-1-line-height-md);
        padding: 0;
      }

      div.react-timekeeper__top-bar > div {
        width: fit-content;
      }

      span.react-timekeeper__tb-hour,
      span.react-timekeeper__tb-colon,
      span.react-timekeeper__tb-minute {
        font-size: inherit;
        line-height: inherit;
      }

      div.react-timekeeper__clock-wrapper {
        padding: 0;
      }
    `,
      [darkTheme, lightTheme, reset],
    )

    const datePlaceholder = `--/--/----`
    const timePlaceholder = `--:--${amPm ? ' --' : ''}`
    const defaultPlaceholder =
      // eslint-disable-next-line no-nested-ternary
      withDatePicker && withTimePicker
        ? `${datePlaceholder} ${timePlaceholder}`
        : withDatePicker
          ? datePlaceholder
          : (withTimePicker && timePlaceholder) || undefined

    const input = (
      <InputText
        id={uniqueId}
        ref={inputRef}
        className={cj(
          `${PREFIX}-${GROUP_NAME}__input`,
          writable ? '[&_input]:cursor-pointer' : '',
        )}
        defaultValue={
          // eslint-disable-next-line no-nested-ternary
          isDate(defaultValue)
            ? // eslint-disable-next-line no-nested-ternary
              withDatePicker && withTimePicker
              ? defaultValue.toLocaleString(undefined, localeStringOptions)
              : withDatePicker
                ? defaultValue.toLocaleDateString(
                    undefined,
                    localDateStringOptions,
                  )
                : (withTimePicker &&
                    defaultValue.toLocaleTimeString(
                      undefined,
                      localTimeStringOptions,
                    )) ||
                  undefined
            : undefined
        }
        disabled={disabled}
        error={isInError}
        fullWidth={fullWidth}
        max={
          // eslint-disable-next-line no-nested-ternary
          maxDateTime === 'now'
            ? new Date().toISOString()
            : isDate(maxDateTime)
              ? maxDateTime.toISOString()
              : undefined
        }
        min={
          // eslint-disable-next-line no-nested-ternary
          minDateTime === 'now'
            ? new Date().toISOString()
            : isDate(minDateTime)
              ? minDateTime.toISOString()
              : undefined
        }
        name={name}
        placeholder={placeholder || defaultPlaceholder}
        readOnly={readOnly}
        required={required}
        success={isSuccessful}
        value={
          // eslint-disable-next-line no-nested-ternary
          isDate(value)
            ? // eslint-disable-next-line no-nested-ternary
              withDatePicker && withTimePicker
              ? value.toLocaleString(undefined, localeStringOptions)
              : withDatePicker
                ? value.toLocaleDateString(undefined, localDateStringOptions)
                : (withTimePicker &&
                    value.toLocaleTimeString(
                      undefined,
                      localTimeStringOptions,
                    )) ||
                  undefined
            : undefined
        }
        withSpinButton={false}
      />
    )

    const labelProps = {
      asChild: true,
      className: cj(
        `${PREFIX}-${GROUP_NAME}__label`,
        theme === Themes.Light ? 'text-dark' : 'text-light',
        disabled
          ? `${PREFIX}-${GROUP_NAME}__label--disabled cursor-default`
          : 'cursor-pointer',
        required
          ? `${PREFIX}-${GROUP_NAME}__label--required after:text-feedback-danger-50 after:content-required`
          : '',
      ),
      htmlFor: uniqueId,
    }

    const descriptionAndError = (
      <>
        {!isEmpty(description) && !hasErrorMessage && !hasSuccessMessage && (
          <Typography
            className={cj(
              `${PREFIX}-${GROUP_NAME}__description`,
              'cursor-default text-dark',
            )}
            element="div"
            variant="caption-median"
          >
            {description}
          </Typography>
        )}

        {(hasErrorMessage || hasSuccessMessage) && (
          <Typography
            className={cj(
              `${PREFIX}-${GROUP_NAME}__message ${PREFIX}-${GROUP_NAME}__message--${
                isInError ? 'error' : 'success'
              }`,
              (staticPicker &&
                (isInError ? 'text-error' : isSuccessful && 'text-success')) ||
                'text-dark',
              'cursor-default',
            )}
            element="div"
            variant="caption-median"
          >
            {isInError ? error : success}
          </Typography>
        )}
      </>
    )

    const staticDisplay = (
      <div
        className={cj(
          `${PREFIX}-${GROUP_NAME}__static-display`,
          (isEmpty(orientation) || orientation === Orientations.Responsive) &&
            !modal
            ? ''
            : `${PREFIX}-${GROUP_NAME}__static-display--${modal ? 'vertical' : orientation}`,
          'flex flex-col gap-1',
          // eslint-disable-next-line no-nested-ternary
          (isEmpty(orientation) || orientation === Orientations.Responsive) &&
            !modal
            ? 'justify-start md:justify-between md:pb-2 md:pt-1'
            : orientation === 'horizontal' && !modal
              ? 'justify-between pb-2 pt-1'
              : 'justify-start',
          pickerVariant === PickerVariants.SideBySide &&
            // eslint-disable-next-line no-nested-ternary
            ((isEmpty(orientation) ||
              orientation === Orientations.Responsive) &&
            !modal
              ? 'border-b-1 border-normal pb-2 md:border-b-0 md:border-r-1 md:pb-0 md:pr-2'
              : orientation === 'horizontal' && !modal
                ? 'border-r-1 border-normal pr-2'
                : 'border-b-1 border-normal pb-2'),
        )}
      >
        <div className="flex flex-col gap-1">
          {!modal && (
            <RxLabel {...labelProps}>
              <Typography element="label">{label}</Typography>
            </RxLabel>
          )}

          {descriptionAndError}
        </div>

        <div
          className={cj(
            'flex',
            // eslint-disable-next-line no-nested-ternary
            (isEmpty(orientation) || orientation === Orientations.Responsive) &&
              !modal
              ? 'flex-row items-end justify-between gap-2 md:flex-col md:items-start md:justify-start md:gap-0'
              : orientation === 'horizontal' && !modal
                ? 'flex-col'
                : 'flex-row items-end justify-between gap-2',
          )}
        >
          {withDatePicker && (
            <div
              className={cj(
                'flex flex-col',
                // eslint-disable-next-line no-nested-ternary
                (isEmpty(orientation) ||
                  orientation === Orientations.Responsive) &&
                  !modal
                  ? 'gap-1 md:gap-0'
                  : orientation === 'horizontal' && !modal
                    ? 'flex-col'
                    : 'gap-1',
              )}
            >
              <Typography element="div" variant="heading-3">
                {isDate(valueToUse) ? valueToUse.getFullYear() : '----'}
              </Typography>

              <Typography element="div" variant="heading-1">
                {isDate(valueToUse)
                  ? valueToUse.toLocaleDateString(undefined, {
                      day: '2-digit',
                      month: 'short',
                    })
                  : '--- --'}
              </Typography>
            </div>
          )}

          {withTimePicker && (
            <div className="flex flex-row items-start gap-half">
              <Typography element="div" variant="heading-1">
                {isDate(valueToUse)
                  ? valueToUse
                      .toLocaleTimeString(undefined, {
                        hour: amPm ? 'numeric' : '2-digit',
                        hourCycle: amPm ? 'h12' : 'h23',
                        minute: '2-digit',
                      })
                      .replace(/AM|PM/, '')
                  : '--:--'}
              </Typography>

              {amPm && (
                <Typography
                  className="pt-1"
                  element="div"
                  variant="body-1-bold"
                >
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {isDate(valueToUse)
                    ? (valueToUse.getHours() ?? 0) >= 12
                      ? 'PM'
                      : 'AM'
                    : '--'}
                </Typography>
              )}
            </div>
          )}
        </div>
      </div>
    )

    const datePicker = (
      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__picker__date-wrapper pb-2`,
          withTimePicker &&
            pickerVariant === PickerVariants.SideBySide &&
            (isEmpty(orientation) || orientation === Orientations.Responsive) &&
            !modal
            ? 'border-b-1 border-normal pb-2 md:border-b-0 md:border-r-1 md:pb-0 md:pl-2 md:pr-3'
            : '',
          withTimePicker &&
            pickerVariant === PickerVariants.SideBySide &&
            orientation === Orientations.Horizontal &&
            !modal
            ? 'border-r-1 border-normal pl-2 pr-3'
            : '',
          withTimePicker &&
            pickerVariant === PickerVariants.SideBySide &&
            (orientation === Orientations.Vertical || modal)
            ? 'border-b-1 border-normal pb-2'
            : '',
          fullWidth || !staticPicker ? 'w-full' : '',
        )}
        element="div"
      >
        <style>{calendarStyle}</style>

        <Calendar
          className={cj(
            `${PREFIX}-${GROUP_NAME}__picker__date`,
            `${PREFIX}-${GROUP_NAME}__picker__date--${theme}`,
            `${PREFIX}-${GROUP_NAME}__picker__calendar`,
            `${PREFIX}-${GROUP_NAME}__picker__calendar--${theme}`,
          )}
          defaultValue={defaultValue}
          inputRef={calendarRef}
          maxDate={actualMaxDate ?? undefined}
          minDate={actualMinDate ?? undefined}
          next2AriaLabel={i18n?.calendar?.fastNext}
          nextAriaLabel={i18n?.calendar?.next}
          nextLabel={<ChevronRightIcon />}
          prev2AriaLabel={i18n?.calendar?.fastPrevious}
          prevAriaLabel={i18n?.calendar?.previous}
          prevLabel={<ChevronLeftIcon />}
          tileDisabled={({ view }) =>
            view === 'month' && (disabled || readOnly)
          }
          value={value}
          onChange={handleDateChange}
          onClickDay={(newValue) => onFieldChange?.('day', newValue)}
          onClickMonth={(newValue) => onFieldChange?.('month', newValue)}
          onClickYear={(newValue) => onFieldChange?.('year', newValue)}
        />
      </Typography>
    )

    const timePicker = (
      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__picker__date-wrapper`,
          `${PREFIX}-${GROUP_NAME}__picker__time`,
          `${PREFIX}-${GROUP_NAME}__picker__time--${theme}`,
          `${PREFIX}-${GROUP_NAME}__picker__${timeVariant}`,
          `${PREFIX}-${GROUP_NAME}__picker__${timeVariant}--${theme}`,
          'pb-2',
        )}
        element="div"
      >
        {timeVariant === TimeVariants.Clock && (
          <>
            <style>{clockStyle}</style>

            <TimeKeeper
              disabledTimeRange={disabledTimeRange}
              hour24Mode={!amPm}
              switchToMinuteOnHourSelect
              time={time}
              onChange={handleTimeChange}
            />
          </>
        )}
      </Typography>
    )

    const pickers = (withDatePicker || withTimePicker) && (
      <div
        className={cj(
          `${PREFIX}-${GROUP_NAME}__picker`,
          `${PREFIX}-${GROUP_NAME}__picker--${theme}`,
          (isEmpty(orientation) || orientation === Orientations.Responsive) &&
            !modal
            ? `${PREFIX}-${GROUP_NAME}__picker--responsive`
            : `${PREFIX}-${GROUP_NAME}__picker--${modal ? 'vertical' : orientation}`,
          'flex',
          // eslint-disable-next-line no-nested-ternary
          (isEmpty(orientation) || orientation === Orientations.Responsive) &&
            !modal
            ? 'flex-col md:flex-row md:gap-2'
            : orientation === 'horizontal' && !modal
              ? 'flex-row gap-2'
              : 'flex-col',
          fullWidth || !staticPicker ? 'w-full' : '',
        )}
      >
        {withDatePicker &&
          withTimePicker &&
          pickerVariant === PickerVariants.Tabs && (
            <Tabs
              className={cj(
                '[&>div]:bg-transparent',
                fullWidth || !staticPicker ? 'w-full' : '',
              )}
              defaultTab="date"
              label={i18n?.tabs?.bar}
              tab={tab}
              tabs={
                <>
                  <Tab
                    icon={<CalendarIcon />}
                    iconOnly
                    label={i18n?.tabs?.date}
                    name="date"
                  />

                  <Tab
                    icon={<ClockIcon />}
                    iconOnly
                    label={i18n?.tabs?.time}
                    name="time"
                  />
                </>
              }
              onTabChange={handleTabChange}
            >
              <TabContent name="date">{datePicker}</TabContent>

              <TabContent name="time">{timePicker}</TabContent>
            </Tabs>
          )}

        {withDatePicker &&
          (!withTimePicker || pickerVariant === PickerVariants.SideBySide) &&
          datePicker}

        {withTimePicker &&
          (!withDatePicker || pickerVariant === PickerVariants.SideBySide) &&
          timePicker}
      </div>
    )

    const actions =
      (withDatePicker && withToday) ||
      (withTimePicker && withNow) ||
      clearable ||
      (!staticPicker && withClose) ? (
        <div
          className={cj(
            `${PREFIX}-${GROUP_NAME}__actions`,
            'flex justify-between gap-3 border-t-1 border-normal pt-2',
          )}
        >
          {((withDatePicker && withToday) || (withTimePicker && withNow)) && (
            <div className="flex gap-1">
              {withDatePicker && withToday && (
                <Button
                  className={cj(`${PREFIX}-${GROUP_NAME}__actions__today`)}
                  disabled={disabled || readOnly}
                  label={i18n?.buttons?.today}
                  theme={theme}
                  variant="text"
                  onClick={handleToday}
                />
              )}

              {withTimePicker && withNow && (
                <Button
                  className={cj(`${PREFIX}-${GROUP_NAME}__actions__now`)}
                  disabled={disabled || readOnly}
                  label={i18n?.buttons?.now}
                  theme={theme}
                  variant="text"
                  onClick={handleNow}
                />
              )}
            </div>
          )}

          {(clearable || (!staticPicker && withClose)) && (
            <div className="flex flex-1 justify-end gap-1">
              {clearable && (
                <Button
                  className={cj(`${PREFIX}-${GROUP_NAME}__actions__clear`)}
                  disabled={disabled || readOnly || !isDate(valueToUse)}
                  label={i18n?.buttons?.clear}
                  theme={theme}
                  variant="secondary"
                  onClick={handleClear}
                />
              )}

              {!staticPicker && withClose && (
                <Button
                  className={cj(`${PREFIX}-${GROUP_NAME}__actions__close`)}
                  label={i18n?.buttons?.close}
                  theme={theme}
                  onClick={handleClose}
                />
              )}
            </div>
          )}
        </div>
      ) : (
        false
      )

    return (
      <div
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${theme}`,
          'w-fit max-w-full',
          `${PREFIX}-${GROUP_NAME}--${writable ? '' : 'not-'}writable`,
          disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
          isInError ? `${PREFIX}-${GROUP_NAME}--with-error` : '',
          readOnly ? `${PREFIX}-${GROUP_NAME}--readonly` : '',
          required ? `${PREFIX}-${GROUP_NAME}--required` : '',
          isSuccessful ? `${PREFIX}-${GROUP_NAME}--with-success` : '',
          readOnly && !disabled ? 'cursor-default' : '',
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width w-full` : 'sm:w-fit',
          props.className,
        )}
        {...omit(['className'], props)}
      >
        {isEmpty(label) || staticPicker ? (
          false
        ) : (
          <RxLabel {...labelProps}>
            <Typography element="label">{label}</Typography>
          </RxLabel>
        )}

        {/* eslint-disable-next-line no-nested-ternary */}
        {staticPicker ? (
          <>
            <div
              className={cj(
                `${PREFIX}-${GROUP_NAME}__static-wrapper`,
                (isEmpty(orientation) ||
                  orientation === Orientations.Responsive) &&
                  !modal
                  ? ''
                  : `${PREFIX}-${GROUP_NAME}__static-wrapper--${modal ? 'vertical' : orientation}`,
                'flex gap-2',
                // eslint-disable-next-line no-nested-ternary
                (isEmpty(orientation) ||
                  orientation === Orientations.Responsive) &&
                  !modal
                  ? 'flex-col md:flex-row'
                  : orientation === 'horizontal' && !modal
                    ? 'flex-row'
                    : 'flex-col',
              )}
            >
              {staticDisplay}

              {pickers}
            </div>

            {actions}
          </>
        ) : // eslint-disable-next-line no-nested-ternary
        withPicker ? (
          modal ? (
            <Dialog
              ref={pickerRef}
              closeButtonLabel={i18n?.buttons?.close}
              disabled={disabled || readOnly}
              modal
              open={isPickerOpen}
              root={{ className: 'min-w-6' }}
              title={label}
              trigger={input}
              onDismiss={onDismiss}
              onToggle={handlePickerOpenChange}
              {...omit(
                [
                  'className',
                  'defaultopen',
                  'disabled',
                  'open',
                  'trigger',
                  'onDismiss',
                  'onTOggle',
                ],
                popover,
              )}
            >
              {staticDisplay}

              {pickers}

              {actions}
            </Dialog>
          ) : (
            <Popover
              ref={pickerRef}
              align="start"
              className={cn(
                `${PREFIX}-${GROUP_NAME}__popover`,
                popover?.className,
              )}
              disabled={disabled || readOnly}
              fullWidth={fullWidth}
              open={isPickerOpen}
              trigger={input}
              width={fullWidth ? 'full' : 'auto'}
              withArrow={false}
              withScroll={false}
              onOpenChange={handlePickerOpenChange}
              {...omit(
                [
                  'className',
                  'disabled',
                  'open',
                  'toggleOnTriggerClick',
                  'trigger',
                  'triggerAsButton',
                  'withArrow',
                  'onOpenChange',
                ],
                popover,
              )}
            >
              {pickers}

              {actions}
            </Popover>
          )
        ) : (
          input
        )}

        {!staticPicker && descriptionAndError}
      </div>
    )
  },
)
DateTimePicker.displayName = 'DateTimePicker'

export default DateTimePicker
