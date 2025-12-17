'use client'

import { Label as RxLabel } from '@radix-ui/react-label'
import * as RxRadio from '@radix-ui/react-radio-group'
import { UilCheck as CheckIcon } from '@tooni/iconscout-unicons-react'

import {
  type ForwardedRef,
  type MouseEvent,
  forwardRef,
  startTransition,
  useContext,
  useId,
  useImperativeHandle,
  useRef,
} from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'
import { onlyText } from '@/utils'

import type { InputRadioProps } from './InputRadio.types'

import { GROUP_NAME, Variants } from './InputRadio.constants'
import { InputRadioContext } from './InputRadioContext'

/**
 * `InputRadio` component is used to allow the user to make a single choice
 * amongst a group of multiple choices.
 *
 * You must use this component within the `InputRadioGroup` component.
 *
 * See https://www.radix-ui.com/primitives/docs/components/radio-group#item for
 * more information/
 */
export const InputRadio = forwardRef<HTMLButtonElement | null, InputRadioProps>(
  (
    {
      children,
      condensed = false,
      disabled = false,
      fullWidth = false,
      id,
      label,
      labelElement,
      value,
      ...props
    }: InputRadioProps,
    ref?: ForwardedRef<HTMLButtonElement | null>,
  ) => {
    const hasChildren = Boolean(children)
    if (!hasChildren && !label) {
      console.warn(
        'You must provide a `label` or `children` to the `InputRadio` component',
      )
    }

    const textLabel = isString(label)
      ? label
      : isEmpty(label)
        ? onlyText(children)
        : onlyText(label)

    const variantClassNames = {
      [Variants.Primary]: 'bg-white shadow-subtle border-1 border-normal',

      [Variants.Secondary]: 'bg-white border-1 border-normal',

      [Variants.Tertiary]: 'bg-transparent',
    }

    const generatedId = useId()
    const uniqueId = (id ?? generatedId) || generatedId

    const radioRef = useRef<HTMLButtonElement>(null)
    useImperativeHandle<HTMLButtonElement | null, HTMLButtonElement | null>(
      ref,
      () => radioRef.current,
    )

    const {
      condensed: groupCondensed,
      disabled: groupDisabled,
      required = false,
      variant,
    } = useContext(InputRadioContext)

    const isDisabled = disabled || groupDisabled
    const isCondensed = condensed || groupCondensed

    const actualLabelElement =
      labelElement ||
      (isString(hasChildren ? children : label) ? 'label' : 'div')

    const handleFocus = () => {
      startTransition(() => {
        radioRef.current?.blur()
      })
    }

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) {
        event.preventDefault()

        return
      }

      if (
        event.target !== radioRef.current &&
        (event.target as HTMLElement).parentElement !== radioRef.current
      ) {
        radioRef.current?.click()
      }

      handleFocus()
    }

    return (
      <Typography
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${variant}`,
          'group/radio',
          'flex w-full max-w-full cursor-default rounded-sm',
          variantClassNames[variant],
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}--disabled text-disabled`
            : 'text-dark',
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width` : 'sm:w-fit',
          required ? `${PREFIX}-${GROUP_NAME}--required` : '',
          props.className,
        )}
        element="div"
        onClick={actualLabelElement !== 'label' ? handleClick : undefined}
      >
        <RxRadio.Item
          id={uniqueId}
          ref={radioRef}
          aria-label={textLabel}
          className={cj(
            `${PREFIX}-${GROUP_NAME}__radio`,
            'flex min-h-6 rounded-xs border-none bg-unset p-unset pt-2 focus-visible:outline-none',
            isDisabled
              ? 'cursor-not-allowed'
              : 'cursor-pointer [&>:first-child]:data-state-checked:bg-primary group-hover/radio:[&>:first-child]:data-state-unchecked:bg-highlight',
          )}
          disabled={isDisabled}
          required={required}
          title={textLabel}
          value={value}
          onFocus={handleFocus}
          {...omit(['className'], props)}
        >
          <div
            className={cj(
              `${PREFIX}-${GROUP_NAME}__radio__mark`,
              'mx-2 flex h-3 max-h-3 min-h-3 w-3 min-w-3 max-w-3 items-center justify-center rounded-full border-2 pt-half',
              isDisabled ? 'border-disabled bg-transparent' : `border-normal`,
            )}
          >
            <RxRadio.Indicator>
              <CheckIcon />
            </RxRadio.Indicator>
          </div>
        </RxRadio.Item>

        <RxLabel
          asChild
          className={cj(
            `${PREFIX}-${GROUP_NAME}__radio__label`,
            'flex-1 overflow-auto break-words py-2 pr-2',
            isCondensed ? 'py-1' : 'py-2',
            isDisabled ? 'cursor-not-allowed' : `cursor-pointer`,
            required
              ? `${PREFIX}-${GROUP_NAME}__label--required after:text-feedback-danger-50 after:content-required`
              : '',
          )}
          htmlFor={uniqueId}
        >
          <Typography element={actualLabelElement}>
            {hasChildren ? children : label}
          </Typography>
        </RxLabel>
      </Typography>
    )
  },
)
InputRadio.displayName = 'InputRadio'

export default InputRadio
