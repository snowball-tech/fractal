import { Pressable } from '@ark-ui/react'
import { cx } from '@snowball-tech/fractal-panda/css'
import { button, typography } from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef } from 'react'

import { PREFIX } from '@/constants'

import { DEFAULT_VARIANT } from './Button.constants'
import { GROUP_NAME } from './Button.recipe'
import type { ButtonProps } from './Button.types'

/**
 * `Button` component is used to allow a user to make an interaction.
 */
function Button(
  {
    disabled = false,
    fullWidth = false,
    icon,
    iconPosition = 'right',
    label,
    onClick,
    onLongClick,
    type = 'button',
    variant = DEFAULT_VARIANT,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const buttonClassNames = cx(
    `${PREFIX}-${GROUP_NAME}`,
    button({ variant }),
    fullWidth ? 'full-width' : '',
    disabled ? 'disabled' : '',
    !isEmpty(icon) ? `icon-${iconPosition}` : '',
    props.className,
  )

  return (
    <Pressable
      {...(props.id !== undefined ? { id: props.id } : {})}
      ref={ref}
      className={buttonClassNames}
      {...(props.dir !== undefined ? { dir: props.dir } : {})}
      disabled={disabled}
      preventFocusOnPress
      type={type}
      {...(isFunction(onClick) ? { onPress: (event) => onClick(event) } : {})}
      {...(isFunction(onLongClick)
        ? { onLongPress: (event) => onLongClick(event) }
        : {})}
      {...omit(['className', 'dir', 'id'], props)}
    >
      {icon && iconPosition === 'left' && icon}

      <span className={typography({ variant: 'body-1' })}>{label}</span>

      {icon && iconPosition === 'right' && icon}
    </Pressable>
  )
}

export default forwardRef(Button)
