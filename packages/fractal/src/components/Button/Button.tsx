import { cx } from '@snowball-tech/fractal-panda/css'
import { button } from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'

import { Typography } from '../Typography'
import { DEFAULT_VARIANT } from './Button.constants'
import type { ButtonProps } from './Button.types'

/**
 * `Button` component is used to allow a user to make an interaction.
 */
export default function Button({
  disabled = false,
  icon,
  iconPosition = 'right',
  label,
  onClick,
  variant = DEFAULT_VARIANT,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(props.className, button({ variant }))}
      disabled={disabled}
      {...(isFunction(onClick) ? { onClick: (event) => onClick(event) } : {})}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}

      <Typography variant="body-1">{label}</Typography>

      {icon && iconPosition === 'right' && icon}
    </button>
  )
}
