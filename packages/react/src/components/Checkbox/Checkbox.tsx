import { UilCheck as CheckIcon } from '@iconscout/react-unicons'
import * as RxCheckbox from '@radix-ui/react-checkbox'
import { css, cx } from '@snowball-tech/panda-fractal-react/css'
import {
  checkboxIndicator,
  checkboxLabel,
  checkboxRoot,
} from '@snowball-tech/panda-fractal-react/recipes'
import uniqueId from 'lodash/fp/uniqueId'
import { useState } from 'react'

import { Typography } from '../Typography'
import { DEFAULT_VARIANT } from './Checkbox.constants'
import type { CheckboxProps } from './Checkbox.types'

const checkboxContainer = css({
  alignItems: 'center',
  backgroundColor: 'var(--color-base-white)',
  border: 'var(--size-border-1) solid var(--color-border-default)',
  borderRadius: '8px',
  display: 'flex',
  gap: 'var(--size-spacing-2)',
  p: 'var(--size-spacing-1)',
  pr: 'var(--size-spacing-2)',
})

/**
 * `Checkbox` component is used to allow a user to make a binary choice.
 */
export default function Checkbox({
  id = uniqueId('fractal-checkbox-'),
  label,
  variant = DEFAULT_VARIANT,
}: CheckboxProps) {
  const [htmlId] = useState(id)

  return (
    <div className={cx('group', checkboxContainer)}>
      <RxCheckbox.Root id={htmlId} className={checkboxRoot({ variant })}>
        <RxCheckbox.Indicator className={checkboxIndicator({ variant })}>
          <CheckIcon />
        </RxCheckbox.Indicator>
      </RxCheckbox.Root>

      <label className={checkboxLabel({ variant })} htmlFor={htmlId}>
        <Typography variant="body-1">{label}</Typography>
      </label>
    </div>
  )
}
