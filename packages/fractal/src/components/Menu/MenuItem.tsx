'use client'

import {
  type ForwardedRef,
  type KeyboardEvent,
  type MouseEvent,
  forwardRef,
  useContext,
} from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { MenuItemProps } from './Menu.types'

import { GROUP_NAME } from './Menu.constants'
import { MenuContext } from './MenuContext'
import { MenuGroupContext } from './MenuGroupContext'
/**
 * `Item` displays items in a menu.
 */
export const MenuItem = forwardRef<
  HTMLDivElement | HTMLLinkElement,
  MenuItemProps
>(
  (
    {
      active = false,
      children,
      condensed = false,
      disabled,
      href,
      icon,
      label,
      onActivate,
      onClick,
      onKeyDown,
      target,
      ...props
    }: MenuItemProps,
    ref: ForwardedRef<HTMLDivElement | HTMLLinkElement>,
  ) => {
    const hasChildren = Boolean(children)
    if (!hasChildren && isEmpty(label)) {
      console.warn(
        'You must provide a `label` or `children` to the `MenuItem` component',
      )
    }

    const { condensed: menuCondensed, disabled: menuDisabled } =
      useContext(MenuContext)
    const { condensed: groupCondensed, disabled: groupDisabled } =
      useContext(MenuGroupContext)

    const isDisabled = disabled || menuDisabled || groupDisabled
    const isCondensed = condensed || menuCondensed || groupCondensed

    const isLink = !isEmpty(href)

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
      if (isFunction(onClick)) {
        onClick(event)
      }

      if (isFunction(onActivate)) {
        onActivate()
      }
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (isFunction(onKeyDown)) {
        onKeyDown(event)
      }

      if (
        (event.key === 'Enter' || event.key === ' ') &&
        isFunction(onActivate)
      ) {
        onActivate()
      }
    }

    return (
      <Typography
        ref={ref}
        aria-label={label}
        className={cn(
          `${PREFIX}-${GROUP_NAME}__item`,
          'alternatee',
          'flex flex-row items-center gap-1 text-nowrap',
          'transition-background-color rounded-sm outline-hidden duration-300 ease-out',
          isCondensed ? 'max-h-6 px-2 py-1' : 'p-2',
          icon ? `${PREFIX}-${GROUP_NAME}--with-icon` : '',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__item--disabled text-disabled pointer-events-none cursor-not-allowed !bg-transparent`
            : 'text-dark cursor-pointer',
          isLink ? `${PREFIX}-${GROUP_NAME}__item__link no-underline` : '',
          props.className,
        )}
        element={isLink ? 'a' : 'div'}
        role="menuitem"
        tabIndex={-1}
        title={label}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...(active ? { 'data-highlighted': active } : {})}
        {...(isLink ? { href, target } : {})}
        {...omit(['className', 'data-value'], props)}
      >
        {icon && (
          <div
            className={cj(
              `${PREFIX}-${GROUP_NAME}__item__icon`,
              'max-h-3 max-w-3',
            )}
          >
            {icon}
          </div>
        )}

        {hasChildren ? children : label}
      </Typography>
    )
  },
)
MenuItem.displayName = 'MenuItem'

export default MenuItem
