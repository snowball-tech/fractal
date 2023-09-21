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
import { type ForwardedRef, type TouchEvent, forwardRef } from 'react'

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
    const handleTouchStart = (event: TouchEvent<HTMLButtonElement>) => {
      if (isFunction(props.onTouchStart)) {
        props.onTouchStart(event)

        return
      }

      if ('ontouchstart' in document.documentElement && isFunction(onClick)) {
        onClick(event)
      }
    }

    const handleTouchEnd = (event: TouchEvent<HTMLButtonElement>) => {
      if (isFunction(props.onTouchEnd)) {
        props.onTouchEnd(event)
      }

      if ('ontouchstart' in document.documentElement) {
        event.preventDefault()
      }
    }

    const groupClassName = cx(
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
        className={groupClassName}
        {...(props.dir !== undefined
          ? { dir: props.dir as 'ltr' | 'rtl' }
          : {})}
        disabled={disabled}
        preventFocusOnPress
        type={type}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
        {...(isFunction(onClick) ? { onPress: onClick } : {})}
        {...(isFunction(onLongClick) ? { onLongPress: onLongClick } : {})}
        title={label}
        {...omit(['className', 'dir', 'id'], props)}
      >
        {icon && iconPosition === 'left' ? (
          <div className={buttonIcon({ variant })}>{icon}</div>
        ) : (
          false
        )}

        {!iconOnly ? (
          <div
            className={cx(
              buttonLabel({ variant }),
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
          <div className={buttonIcon({ variant })}>{icon}</div>
        ) : (
          false
        )}
      </Pressable>
    )
  },
)
Button.displayName = 'Button'

export default Button
