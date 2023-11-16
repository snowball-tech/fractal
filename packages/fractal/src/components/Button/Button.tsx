import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import {
  type ForwardedRef,
  type MouseEvent,
  type TouchEvent,
  forwardRef,
} from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'

import { DEFAULT_VARIANT, GROUP_NAME, Variants } from './Button.constants'
import type { ButtonProps } from './Button.types'

export const variantClassNames = {
  /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

  [Variants.Display]:
    'bg-white text-dark shadow-subtle hover:shadow-brutal focus:shadow-brutal active:shadow-none border-1 border-normal active:-translate-x-0.25 active:translate-y-0.5 hover:translate-x-0 hover:-translate-y-0.25 focus:translate-x-0 focus:-translate-y-0.25',
  [Variants.Primary]:
    'bg-secondary hover:bg-white active:bg-primary focus:bg-white active:!border-[transparent] text-light hover:text-dark active:text-dark focus:text-dark border-2 border-[transparent] hover:border-normal focus:border-normal',
  [Variants.Secondary]:
    'bg-white active:bg-secondary text-dark active:text-light hover:shadow-hover focus:shadow-hover active:shadow-hover border-1 border-normal',
  [Variants.Text]: 'bg-[transparent] text-dark',

  /* eslint-enable sort-keys, sort-keys/sort-keys-fix,
perfectionist/sort-objects */
}

export const variantDisabledClassNames = {
  /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

  [Variants.Display]:
    'bg-white text-disabled shadow-none border-1 border-disabled',
  [Variants.Primary]: 'bg-disabled text-light',
  [Variants.Secondary]:
    'bg-white text-disabled shadow-none border-1 border-disabled',
  [Variants.Text]: 'bg-[transparent] text-disabled',

  /* eslint-enable sort-keys, sort-keys/sort-keys-fix,
perfectionist/sort-objects */
}

/**
 * `Button` component is used to allow the user to make an interaction.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asLink = false,
      disabled = false,
      fullWidth = false,
      href,
      icon,
      iconOnly = false,
      iconPosition = 'right',
      label,
      onClick,
      target,
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
        onClick(
          event as unknown as MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
        )
      }
    }

    const handleTouchEnd = (event: TouchEvent<HTMLButtonElement>) => {
      if (isFunction(props.onTouchEnd)) {
        props.onTouchEnd(event)
      }

      if (
        'ontouchstart' in document.documentElement &&
        !isFunction(props.onTouchStart) &&
        isFunction(onClick)
      ) {
        event.preventDefault()
      }
    }

    const isTextVariant = variant === Variants.Text

    const classNames = twMerge(
      `${PREFIX}-${GROUP_NAME}`,
      `${PREFIX}-${GROUP_NAME}--${variant}`,
      asLink
        ? `${PREFIX}-${GROUP_NAME}__link ${PREFIX}-${GROUP_NAME}__link--${variant}`
        : '',
      'flex max-h-6 max-w-full items-center justify-center gap-2 rounded-full outline-none transition-colors duration-300 ease-out active:transition-none px-[unset] appearance-none outline-none box-border',
      !isTextVariant ? 'h-6 px-3 py-1' : '',
      fullWidth && !iconOnly
        ? `${PREFIX}-${GROUP_NAME}--full-width w-full`
        : '',
      disabled
        ? `${PREFIX}-${GROUP_NAME}--disabled cursor-not-allowed ${variantDisabledClassNames[variant]}`
        : `${variantClassNames[variant]} cursor-pointer`,
      !isEmpty(icon)
        ? `${PREFIX}-${GROUP_NAME}--with-addendum ${PREFIX}-${GROUP_NAME}--with-addendum-${iconPosition}`
        : '',
      // eslint-disable-next-line no-nested-ternary
      iconOnly
        ? `${PREFIX}-${GROUP_NAME}--icon-only w-6`
        : !fullWidth
          ? 'w-fit'
          : '',
      iconOnly && isTextVariant ? 'h-3 w-3' : '',
      props.className,
    )

    const iconElement = (
      <div
        className={twJoin(
          `${PREFIX}-${GROUP_NAME}__icon--${iconPosition}`,
          'flex h-3 w-3 items-center [&>svg]:h-3',
          asLink ? `${PREFIX}-${GROUP_NAME}__link__icon--${iconPosition}` : '',
          isTextVariant ? 'mt-0' : '',
        )}
      >
        {icon}
      </div>
    )

    const labelElement = (
      <Typography
        className={twJoin(
          `${PREFIX}-${GROUP_NAME}__label`,
          `${PREFIX}-${GROUP_NAME}__label--${variant}`,
          asLink
            ? `${PREFIX}-${GROUP_NAME}__link__label ${PREFIX}-${GROUP_NAME}__link__label--${variant}`
            : '',
          'flex max-h-full max-w-full flex-1 items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap text-center align-middle',
          isTextVariant ? 'pt-0' : '',
        )}
        element="div"
        variant={isTextVariant ? 'body-1-link' : 'body-1'}
      >
        {label}
      </Typography>
    )

    const hasIcon = Boolean(icon)

    if (asLink) {
      return (
        <a
          {...(props.id !== undefined ? { id: props.id } : {})}
          aria-label={label}
          className={classNames}
          href={href}
          {...(!isEmpty(target) ? { target } : {})}
          {...(!disabled && isFunction(onClick)
            ? { onClick }
            : { onClick: (event) => event.preventDefault() })}
          title={label}
          {...omit(['className', 'id'], props)}
        >
          {hasIcon && iconPosition === 'left' && iconElement}
          {!iconOnly && labelElement}
          {hasIcon && iconPosition === 'right' && iconElement}
        </a>
      )
    }

    return (
      <button
        {...(props.id !== undefined ? { id: props.id } : {})}
        ref={ref}
        aria-label={label}
        className={classNames}
        {...(props.dir !== undefined
          ? { dir: props.dir as 'ltr' | 'rtl' }
          : {})}
        disabled={disabled}
        title={label}
        type={type}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
        {...(isFunction(onClick) ? { onClick } : {})}
        {...omit(
          ['className', 'dir', 'id', 'onTouchEnd', 'onTouchStart'],
          props,
        )}
      >
        {hasIcon && iconPosition === 'left' && iconElement}
        {!iconOnly && labelElement}
        {hasIcon && iconPosition === 'right' && iconElement}
      </button>
    )
  },
)
Button.displayName = 'Button'

export default Button
