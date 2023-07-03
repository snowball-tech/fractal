import { cx } from '@snowball-tech/fractal-panda/css'
import { button } from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'

import { DEFAULT_VARIANT } from './Button.constants'
import type { ButtonProps } from './Button.types'

/**
 * `Button` component is used to allow a user to make an interaction.
 */
export default function Button({
  children,
  disabled = false,
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
      {children}
    </button>
  )
}
