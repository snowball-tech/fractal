import { Pressable } from '@ark-ui/react'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  button,
  buttonIcon,
  buttonLabel,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef } from 'react'

import { PREFIX } from '@/constants'

import { DEFAULT_VARIANT, Variants } from './Button.constants'
import { GROUP_NAME } from './Button.recipe'
import type { ButtonProps } from './Button.types'

/**
 * `Button` component is used to allow the user to make an interaction.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled = false,
      fullWidth = false,
      icon,
      iconOnly = false,
      iconPosition = 'right',
      label,
      onClick,
      onLongClick,
      type = 'button',
      variant = DEFAULT_VARIANT,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const buttonClassNames = cx(
      `${PREFIX}-${GROUP_NAME}`,
      button({ variant }),
      fullWidth && !iconOnly ? 'full-width' : '',
      disabled ? 'disabled' : '',
      !isEmpty(icon)
        ? `addendum ${iconPosition === 'right' ? 'suffix' : 'prefix'}`
        : '',
      iconOnly ? 'icon-only' : '',
      props.className,
    )

    return (
      <Pressable
        {...(props.id !== undefined ? { id: props.id } : {})}
        ref={ref}
        aria-label={label}
        className={buttonClassNames}
        {...(props.dir !== undefined
          ? { dir: props.dir as 'ltr' | 'rtl' }
          : {})}
        disabled={disabled}
        preventFocusOnPress
        type={type}
        {...(isFunction(onClick) ? { onPress: (event) => onClick(event) } : {})}
        {...(isFunction(onLongClick)
          ? { onLongPress: (event) => onLongClick(event) }
          : {})}
        title={label}
        {...omit(['className', 'dir', 'id'], props)}
      >
        {icon && iconPosition === 'left' ? (
          <div className={buttonIcon()}>{icon}</div>
        ) : (
          false
        )}

        {!iconOnly ? (
          <div
            className={cx(
              buttonLabel(),
              typography({
                variant: variant === Variants.Text ? 'body-1-link' : 'body-1',
              }),
            )}
          >
            {label}
          </div>
        ) : (
          false
        )}

        {icon && iconPosition === 'right' ? (
          <div className={buttonIcon()}>{icon}</div>
        ) : (
          false
        )}
      </Pressable>
    )
  },
)
Button.displayName = 'Button'

export default Button
