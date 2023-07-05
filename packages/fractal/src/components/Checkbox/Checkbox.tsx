import { UilCheck as CheckIcon } from '@iconscout/react-unicons'
import * as RxCheckbox from '@radix-ui/react-checkbox'
import { css, cva, cx } from '@snowball-tech/fractal-panda/css'
import {
  checkboxIndicator,
  checkboxLabel,
  checkboxRoot,
} from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'
import uniqueId from 'lodash/fp/uniqueId'
import { useState } from 'react'

import { Typography } from '@/components/Typography'

import { DEFAULT_VARIANT } from './Checkbox.constants'
import type { CheckboxProps } from './Checkbox.types'

const checkboxContainer = cva({
  base: {
    alignItems: 'center',
    backgroundColor: 'var(--color-base-white)',
    border: 'var(--border-1)',
    borderRadius: 'var(--size-radius-medium)',
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
        cursor: 'not-allowed',
      },
    },
  },
})

/**
 * `Checkbox` component is used to allow a user to make a binary choice.
 */
export default function Checkbox({
  checked,
  defaultChecked,
  disabled = false,
  id = uniqueId('fractal-checkbox-'),
  label,
  name,
  onCheckedChange,
  required = false,
  value = 'on',
  variant = DEFAULT_VARIANT,
}: CheckboxProps) {
  const [htmlId] = useState(id)

  return (
    <div className={cx('group', checkboxContainer({ disabled }))}>
      <RxCheckbox.Root
        id={htmlId}
        {...(checked !== undefined ? { checked } : {})}
        className={checkboxRoot({ variant })}
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
          className={checkboxIndicator({ disabled, variant })}
        >
          <CheckIcon />
        </RxCheckbox.Indicator>
      </RxCheckbox.Root>

      <label
        className={checkboxLabel({ disabled, required, variant })}
        htmlFor={htmlId}
      >
        <Typography className={css({ m: 0 })} variant="body-1">
          {label}
        </Typography>
      </label>
    </div>
  )
}
