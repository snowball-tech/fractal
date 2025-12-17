'use client'

import * as RxCheckbox from '@radix-ui/react-checkbox'
import { Label as RxLabel } from '@radix-ui/react-label'
import { UilCheck as CheckIcon } from '@tooni/iconscout-unicons-react'

import {
  type ForwardedRef,
  type MouseEvent,
  forwardRef,
  startTransition,
  useId,
  useImperativeHandle,
  useRef,
} from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'
import { onlyText } from '@/utils'

import type { InputCheckboxProps } from './InputCheckbox.types'

import {
  Colors,
  DEFAULT_COLOR,
  DEFAULT_VARIANT,
  GROUP_NAME,
  Variants,
} from './InputCheckbox.constants'

/**
 * `InputCheckbox` component is used to allow the user to make a binary choice.
 *
 * See https://www.radix-ui.com/primitives/docs/components/checkbox for more
 * information.
 */
export const InputCheckbox = forwardRef<
  HTMLButtonElement | null,
  InputCheckboxProps
>(
  (
    {
      checked,
      children,
      color = DEFAULT_COLOR,
      defaultChecked,
      disabled = false,
      fullWidth = false,
      id,
      label,
      labelElement,
      name,
      onCheckedChange,
      readOnly = false,
      required = false,
      value = 'on',
      variant = DEFAULT_VARIANT,
      ...props
    }: InputCheckboxProps,
    ref?: ForwardedRef<HTMLButtonElement | null>,
  ) => {
    const hasChildren = Boolean(children)
    if (!hasChildren && !label) {
      console.warn(
        'You must provide a `label` or `children` to the `InputCheckbox` component',
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

    const colorClassNames = {
      checked: {
        [Colors.Blue]:
          '[&>:first-child]:data-state-checked:bg-decorative-blue-70',

        [Colors.Green]:
          '[&>:first-child]:data-state-checked:bg-decorative-green-70',

        [Colors.Pink]:
          '[&>:first-child]:data-state-checked:bg-decorative-pink-70',

        [Colors.Purple]:
          '[&>:first-child]:data-state-checked:bg-decorative-purple-70',

        [Colors.Yellow]:
          '[&>:first-child]:data-state-checked:bg-decorative-yellow-70',
      },
      hover: {
        [Colors.Blue]:
          'group-hover/checkbox:[&>:first-child]:data-state-unchecked:bg-decorative-blue-90',

        [Colors.Green]:
          'group-hover/checkbox:[&>:first-child]:data-state-unchecked:bg-decorative-green-90',

        [Colors.Pink]:
          'group-hover/checkbox:[&>:first-child]:data-state-unchecked:bg-decorative-pink-90',

        [Colors.Purple]:
          'group-hover/checkbox:[&>:first-child]:data-state-unchecked:bg-decorative-purple-90',

        [Colors.Yellow]:
          'group-hover/checkbox:[&>:first-child]:data-state-unchecked:bg-decorative-yellow-90',
      },
    }

    const generatedId = useId()
    const uniqueId = (id ?? generatedId) || generatedId

    const checkboxRef = useRef<HTMLButtonElement>(null)
    useImperativeHandle<HTMLButtonElement | null, HTMLButtonElement | null>(
      ref,
      () => checkboxRef.current,
    )

    const actualLabelElement =
      labelElement ||
      (isString(hasChildren ? children : label) ? 'label' : 'div')

    const handleFocus = () => {
      startTransition(() => {
        checkboxRef.current?.blur()
      })
    }

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      if (readOnly || disabled) {
        event.preventDefault()

        return
      }

      if (
        event.target !== checkboxRef.current &&
        (event.target as HTMLElement).parentElement !== checkboxRef.current
      ) {
        checkboxRef.current?.click()
      }

      handleFocus()
    }

    return (
      <Typography
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${color}`,
          `${PREFIX}-${GROUP_NAME}--${variant}`,
          'group/checkbox',
          'flex w-full max-w-full cursor-default rounded-sm',
          variantClassNames[variant],
          disabled
            ? `${PREFIX}-${GROUP_NAME}--disabled text-disabled`
            : 'text-dark',
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width` : 'sm:w-fit',
          required ? `${PREFIX}-${GROUP_NAME}--required` : '',
          props.className,
        )}
        element="div"
        onClick={actualLabelElement !== 'label' ? handleClick : undefined}
      >
        <RxCheckbox.Root
          id={uniqueId}
          ref={checkboxRef}
          aria-label={textLabel}
          aria-readonly={readOnly}
          className={cj(
            `${PREFIX}-${GROUP_NAME}__box`,
            `${PREFIX}-${GROUP_NAME}__box--${color}`,
            'flex rounded-xs border-none bg-unset p-unset',
            variant === Variants.Tertiary ? 'pt-half' : 'min-h-6 pt-2',
            disabled
              ? 'cursor-not-allowed'
              : `${colorClassNames.checked[color]}`,
            !disabled && readOnly ? 'cursor-default' : '',
            !disabled && !readOnly
              ? `${colorClassNames.hover[color]} cursor-pointer`
              : '',
          )}
          disabled={disabled || readOnly}
          name={name || uniqueId}
          required={required}
          title={textLabel}
          value={value}
          {...(checked === undefined ? {} : { checked })}
          {...(defaultChecked === undefined ? {} : { defaultChecked })}
          {...(isFunction(onCheckedChange) ? { onCheckedChange } : {})}
          onFocus={handleFocus}
          {...omit(['className'], props)}
        >
          <div
            className={cj(
              `${PREFIX}-${GROUP_NAME}__box__mark`,
              `${PREFIX}-${GROUP_NAME}__box__mark--${color}`,
              'flex h-3 max-h-3 min-h-3 w-3 min-w-3 max-w-3 items-center justify-center rounded-xs border-2 pt-half',
              variant === Variants.Tertiary ? 'mr-2' : 'mx-2',
              disabled || readOnly
                ? 'border-disabled bg-transparent text-disabled'
                : `border-normal text-dark`,
            )}
          >
            <RxCheckbox.Indicator>
              <CheckIcon />
            </RxCheckbox.Indicator>
          </div>
        </RxCheckbox.Root>

        <RxLabel
          asChild
          className={cj(
            `${PREFIX}-${GROUP_NAME}__label`,
            `${PREFIX}-${GROUP_NAME}__label--${color}`,
            'flex-1 overflow-auto break-words',
            variant === Variants.Tertiary ? 'py-half' : 'py-2 pr-2',
            disabled ? 'cursor-not-allowed' : '',
            !disabled && readOnly ? 'cursor-default' : '',
            !disabled && !readOnly ? 'cursor-pointer' : '',
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
InputCheckbox.displayName = 'InputCheckbox'

export default InputCheckbox
