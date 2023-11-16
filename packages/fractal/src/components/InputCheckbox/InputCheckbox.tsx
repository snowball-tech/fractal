import CheckIcon from '@iconscout/react-unicons/dist/icons/uil-check'
import * as RxCheckbox from '@radix-ui/react-checkbox'
import { composeRefs } from '@radix-ui/react-compose-refs'
import { Label as RxLabel } from '@radix-ui/react-label'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import {
  type ForwardedRef,
  type MouseEvent,
  forwardRef,
  useId,
  useRef,
} from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'

import {
  Colors,
  DEFAULT_COLOR,
  DEFAULT_VARIANT,
  GROUP_NAME,
  Variants,
} from './InputCheckbox.constants'
import type { InputCheckboxProps } from './InputCheckbox.types'

/**
 * `InputCheckbox` component is used to allow the user to make a binary choice.
 */
export const InputCheckbox = forwardRef<HTMLButtonElement, InputCheckboxProps>(
  (
    {
      checked,
      color = DEFAULT_COLOR,
      defaultChecked,
      disabled = false,
      fullWidth = false,
      id,
      label,
      name,
      onCheckedChange,
      required = false,
      value = 'on',
      variant = DEFAULT_VARIANT,
      ...props
    }: InputCheckboxProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const variantClassNames = {
      /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

      [Variants.Primary]: 'bg-white shadow-subtle border-1 border-normal',
      [Variants.Secondary]: 'bg-white border-1 border-normal',
      [Variants.Tertiary]: 'bg-[transparent]',

      /* eslint-enable sort-keys, sort-keys/sort-keys-fix,
perfectionist/sort-objects */
    }

    const colorClassNames = {
      checked: {
        [Colors.Blue]:
          '[&>:first-child]:data-[state=checked]:bg-decorative-blue-70',
        [Colors.Green]:
          '[&>:first-child]:data-[state=checked]:bg-decorative-green-70',
        [Colors.Pink]:
          '[&>:first-child]:data-[state=checked]:bg-decorative-pink-70',
        [Colors.Purple]:
          '[&>:first-child]:data-[state=checked]:bg-decorative-purple-70',
        [Colors.Yellow]:
          '[&>:first-child]:data-[state=checked]:bg-decorative-yellow-70',
      },
      hover: {
        [Colors.Blue]:
          'group-hover/checkbox:[&>:first-child]:data-[state=unchecked]:bg-decorative-blue-90',
        [Colors.Green]:
          'group-hover/checkbox:[&>:first-child]:data-[state=unchecked]:bg-decorative-green-90',
        [Colors.Pink]:
          'group-hover/checkbox:[&>:first-child]:data-[state=unchecked]:bg-decorative-pink-90',
        [Colors.Purple]:
          'group-hover/checkbox:[&>:first-child]:data-[state=unchecked]:bg-decorative-purple-90',
        [Colors.Yellow]:
          'group-hover/checkbox:[&>:first-child]:data-[state=unchecked]:bg-decorative-yellow-90',
      },
    }

    const generatedId = useId()
    const uniqueId = (id ?? generatedId) || generatedId

    const checkboxRef = useRef<HTMLButtonElement>(null)
    const combinedRef = composeRefs(ref, checkboxRef)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      if (event.target) {
        ;(event.target as HTMLButtonElement).blur()
      }
    }

    return (
      <div
        className={twMerge(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${color}`,
          `${PREFIX}-${GROUP_NAME}--${variant}`,
          'group/checkbox',
          'flex w-full cursor-default items-center rounded-sm',
          variantClassNames[variant],
          disabled
            ? `${PREFIX}-${GROUP_NAME}--disabled text-disabled`
            : 'text-dark',
          fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width` : 'sm:w-fit',
          required ? `${PREFIX}-${GROUP_NAME}--required` : '',
          props.className,
        )}
      >
        <RxCheckbox.Root
          id={uniqueId}
          ref={combinedRef}
          {...(checked !== undefined ? { checked } : {})}
          className={twJoin(
            `${PREFIX}-${GROUP_NAME}__box`,
            `${PREFIX}-${GROUP_NAME}__box--${color}`,
            'h-full min-h-6 flex-[0] rounded-xs border-none bg-[unset] px-[unset] py-[unset]',
            disabled
              ? 'cursor-not-allowed'
              : `cursor-pointer ${colorClassNames.checked[color]} ${colorClassNames.hover[color]}`,
          )}
          {...(defaultChecked !== undefined ? { defaultChecked } : {})}
          disabled={disabled}
          name={name || uniqueId}
          required={required}
          value={value}
          onClick={handleClick}
          {...(isFunction(onCheckedChange) ? { onCheckedChange } : {})}
          {...omit(['className'], props)}
        >
          <div
            className={twJoin(
              `${PREFIX}-${GROUP_NAME}__box__mark`,
              `${PREFIX}-${GROUP_NAME}__box__mark--${color}`,
              'mx-2 flex h-3 max-h-3 min-h-3 w-3 min-w-3 max-w-3 items-center justify-center rounded-xs border-2 pt-0.5',
              disabled ? 'border-disabled bg-transparent' : `border-normal`,
            )}
          >
            <RxCheckbox.Indicator>
              <CheckIcon />
            </RxCheckbox.Indicator>
          </div>
        </RxCheckbox.Root>

        <RxLabel
          asChild
          className={twJoin(
            `${PREFIX}-${GROUP_NAME}__label`,
            `${PREFIX}-${GROUP_NAME}__label--${color}`,
            'flex-1 overflow-auto break-words py-2 pr-2',
            disabled ? 'cursor-not-allowed' : `cursor-pointer`,
            required
              ? `${PREFIX}-${GROUP_NAME}__label--required after:text-feedback-danger-50 after:content-["_*"]`
              : '',
          )}
          htmlFor={uniqueId}
        >
          <Typography element="label">{label}</Typography>
        </RxLabel>
      </div>
    )
  },
)
InputCheckbox.displayName = 'InputCheckbox'

export default InputCheckbox
