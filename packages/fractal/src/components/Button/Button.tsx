import { cx } from '@snowball-tech/fractal-panda/css'
import { button, typography } from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

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
  type = 'button',
  variant = DEFAULT_VARIANT,
  ...props
}: ButtonProps) {
  const buttonClassNames = cx(button({ variant }), props.className)

  return (
    <button
      className={buttonClassNames}
      disabled={disabled}
      type={type}
      {...(isFunction(onClick) ? { onClick: (event) => onClick(event) } : {})}
      {...omit(['className'], props)}
    >
      {icon && iconPosition === 'left' && icon}

      <span className={typography({ variant: 'body-1' })}>{label}</span>

      {icon && iconPosition === 'right' && icon}
    </button>
  )
}
