import * as RxToolbar from '@radix-ui/react-toolbar'

import {
  type ForwardedRef,
  type MouseEvent,
  type TouchEvent,
  forwardRef,
  useContext,
} from 'react'
import { onlyText } from 'react-children-utilities'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { ToolbarButtonProps } from './Toolbar.types'

import { GROUP_NAME } from './Toolbar.constants'
import { ToolbarContext } from './ToolbarContext'

/**
 * `ToolbarButton` component is used to offer actions to the user in a toolbar.
 *
 * See https://www.radix-ui.com/primitives/docs/components/toolbar#button for more
 * information.
 */
export const ToolbarButton = forwardRef<
  HTMLButtonElement | null,
  ToolbarButtonProps
>(
  (
    {
      active = false,
      children,
      disabled = false,
      fullWidth = false,
      href,
      icon,
      iconOnly = false,
      iconPosition = 'left',
      label,
      onClick,
      target,
      type = 'button',
      underlined,
      ...props
    }: ToolbarButtonProps,
    ref?: ForwardedRef<HTMLButtonElement | null>,
  ) => {
    const hasIcon = Boolean(icon)
    const hasChildren = Boolean(children)
    if (!hasChildren && !label) {
      console.warn(
        'You must provide a `label` or `children` to the `ToolbarButton` component',
      )
    }

    const { disabled: toolbarDisabled } = useContext(ToolbarContext)
    const isDisabled = disabled || toolbarDisabled

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

    const asLink = !isEmpty(href)

    const classNames = cn(
      `${PREFIX}-${GROUP_NAME}__button`,
      asLink ? `${PREFIX}-${GROUP_NAME}__button__link` : '',
      asLink || underlined === false ? 'no-underline' : '',
      'flex h-3 max-h-3 min-h-3 max-w-full items-center justify-center gap-1 rounded-xs bg-transparent p-0 text-left outline-none transition-colors duration-300 ease-out active:transition-none',
      fullWidth && !iconOnly
        ? `${PREFIX}-${GROUP_NAME}__button--full-width w-full`
        : '',
      active && !isDisabled
        ? 'text-dark'
        : isDisabled
          ? 'text-disabled'
          : 'text-placeholder',
      disabled
        ? `${PREFIX}-${GROUP_NAME}__button--disabled cursor-not-allowed`
        : 'cursor-pointer hover:bg-decorative-pink-90 hover:text-dark',
      hasIcon
        ? `${PREFIX}-${GROUP_NAME}__button--with-addendum ${PREFIX}-${GROUP_NAME}__button--with-addendum-${iconPosition === 'left' ? 'prefix' : 'suffix'}`
        : '',
      iconOnly
        ? `${PREFIX}-${GROUP_NAME}__button--icon-only px-half`
        : fullWidth
          ? ''
          : 'w-fit',
      iconOnly
        ? ''
        : hasIcon
          ? iconPosition === 'left'
            ? 'pl-half pr-1'
            : 'pl-1 pr-half'
          : 'px-1',
      props.className,
    )

    const iconElement = (
      <div
        className={cj(
          `${PREFIX}-${GROUP_NAME}__button__icon`,
          `${PREFIX}-${GROUP_NAME}__button__icon--${iconPosition}`,
          'mt-0 flex h-3 w-3 items-center [&>svg]:h-3',
          asLink
            ? `${PREFIX}-${GROUP_NAME}__button__link__icon--${iconPosition}`
            : '',
        )}
      >
        {icon}
      </div>
    )

    const labelElement = (
      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__button__label`,
          asLink ? `${PREFIX}-${GROUP_NAME}__button__link__label` : '',
          'flex max-h-full max-w-full flex-1 items-center justify-center gap-half overflow-hidden text-ellipsis whitespace-nowrap pt-0 text-center align-middle',
          underlined === false ? 'no-underline' : asLink ? 'underline' : '',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__button__label--disabled cursor-not-allowed`
            : `cursor-pointer`,
        )}
        element="div"
        variant={active ? 'body-1-median' : 'body-1'}
      >
        {hasIcon && iconPosition === 'left' && iconElement}
        {iconOnly ? (
          false
        ) : hasChildren ? (
          children
        ) : (
          <div className="min-w-0 truncate">{label}</div>
        )}
        {hasIcon && iconPosition === 'right' && iconElement}
      </Typography>
    )

    const textLabel = isString(label)
      ? label
      : isEmpty(label)
        ? onlyText(children)
        : onlyText(label)

    if (asLink) {
      return (
        <a
          {...(props.id === undefined ? {} : { id: props.id })}
          aria-label={textLabel}
          className={classNames}
          href={href}
          {...(isEmpty(target) ? {} : { target })}
          title={textLabel}
          {...(!disabled && isFunction(onClick) ? { onClick } : {})}
          {...omit(['className', 'id'], props)}
        >
          {iconOnly ? iconElement : labelElement}
        </a>
      )
    }

    return (
      <RxToolbar.Button
        {...(props.id === undefined ? {} : { id: props.id })}
        ref={ref}
        aria-label={textLabel}
        className={classNames}
        {...(props.dir === undefined
          ? {}
          : { dir: props.dir as 'ltr' | 'rtl' })}
        disabled={isDisabled}
        title={textLabel}
        type={type}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
        {...(isFunction(onClick) ? { onClick } : {})}
        {...omit(
          ['className', 'dir', 'id', 'onTouchEnd', 'onTouchStart'],
          props,
        )}
      >
        {iconOnly ? iconElement : labelElement}
      </RxToolbar.Button>
    )
  },
)
ToolbarButton.displayName = 'ToolbarButton'

export default ToolbarButton
