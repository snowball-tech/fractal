import { UilCheck as CheckIcon } from '@iconscout/react-unicons'
import * as RxCheckbox from '@radix-ui/react-checkbox'
import { css, cva, cx } from '@snowball-tech/fractal-panda/css'
import {
  inputCheckbox,
  inputCheckboxCheckmark,
  inputCheckboxLabel,
} from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'
import uniqueId from 'lodash/fp/uniqueId'

import { Typography } from '@/components/Typography'

import { DEFAULT_VARIANT } from './InputCheckbox.constants'
import type { InputCheckboxProps } from './InputCheckbox.types'

const checkboxContainerClassName = cva({
  base: {
    alignItems: 'center',
    backgroundColor: 'var(--color-base-white)',
    border: 'var(--border-1)',
    borderRadius: 'var(--size-radius-s)',
    color: 'var(--color-text-dark)',
    display: 'flex',
    gap: 'var(--size-spacing-2)',
    p: 'var(--size-spacing-1)',
    pr: 'var(--size-spacing-2)',
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: 'var(--color-background-disabled)',
        border: 'var(--border-disabled)',
        color: 'var(--color-background-disabled)',
        cursor: 'var(--cursor-disabled)',
      },
    },
  },
})

/**
 * `Checkbox` component is used to allow a user to make a binary choice.
 */
export default function InputCheckbox({
  checked,
  defaultChecked,
  disabled = false,
  id = uniqueId('fractal-input-checkbox-'),
  label,
  name,
  onCheckedChange,
  required = false,
  value = 'on',
  variant = DEFAULT_VARIANT,
}: InputCheckboxProps) {
  return (
    <div className={cx('group', checkboxContainerClassName({ disabled }))}>
      <RxCheckbox.Root
        id={id}
        {...(checked !== undefined ? { checked } : {})}
        className={inputCheckbox({ variant })}
        {...(defaultChecked !== undefined ? { defaultChecked } : {})}
        disabled={disabled}
        name={name}
        required={required}
        value={value}
        {...(isFunction(onCheckedChange)
          ? { onCheckedChange: (checkedState) => onCheckedChange(checkedState) }
          : {})}
      >
        <RxCheckbox.Indicator
          className={inputCheckboxCheckmark({ disabled, variant })}
        >
          <CheckIcon />
        </RxCheckbox.Indicator>
      </RxCheckbox.Root>

      <label
        className={inputCheckboxLabel({ disabled, required, variant })}
        htmlFor={id}
      >
        <Typography className={css({ m: 0 })} variant="body-1">
          {label}
        </Typography>
      </label>
    </div>
  )
}
