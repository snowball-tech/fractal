'use client'

import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'

import { type ForwardedRef, forwardRef, useContext } from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { DropdownItemProps } from './Dropdown.types'

import { GROUP_NAME } from './Dropdown.constants'
import { DropdownContext } from './DropdownContext'
import { DropdownGroupContext } from './DropdownGroupContext'

/**
 * `Item` displays items in a dropdown.
 *
 * See https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item
 * for more information.
 */
export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  (
    {
      active = false,
      children,
      condensed = false,
      disabled,
      href,
      icon,
      label,
      onClick,
      onSelect,
      rainbow = true,
      target,
      value,
      ...props
    }: DropdownItemProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const hasChildren = Boolean(children)
    if (!hasChildren && isEmpty(label)) {
      console.warn(
        'You must provide a `label` or `children` to the `DropdownItem` component',
      )
    }

    const {
      condensed: dropdownCondensed,
      disabled: dropdownDisabled,
      rainbow: dropdownRainbow,
    } = useContext(DropdownContext)
    const {
      condensed: groupCondensed,
      disabled: groupDisabled,
      rainbow: groupRainbow,
    } = useContext(DropdownGroupContext)

    const isDisabled = disabled || groupDisabled || dropdownDisabled
    const isCondensed = condensed || groupCondensed || dropdownCondensed
    const isRainbow = rainbow && groupRainbow && dropdownRainbow

    const isLink = !isEmpty(href)

    return (
      <RxDropdownMenu.Item
        ref={ref}
        aria-label={label}
        asChild
        className={cn(
          `${PREFIX}-${GROUP_NAME}__item`,
          isRainbow ? 'alternatee' : '',
          'flex items-center gap-1',
          'rounded-sm outline-none transition-background-color duration-300 ease-out',
          isCondensed
            ? `${PREFIX}-${GROUP_NAME}__item--condensed max-h-6 px-2 py-1`
            : 'p-2',
          icon ? `${PREFIX}-${GROUP_NAME}__with-icon` : '',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__item--disabled cursor-not-allowed !bg-transparent text-disabled`
            : 'cursor-pointer text-dark',
          !isDisabled && !isRainbow ? 'hover:bg-decorative-pink-90' : '',
          isLink ? `${PREFIX}-${GROUP_NAME}__item__link no-underline` : '',
          props.className,
        )}
        disabled={isDisabled}
        title={label}
        {...(active ? { 'data-highlighted': active } : {})}
        {...(isLink ? { href, target } : {})}
        {...(value === undefined ? {} : { 'data-value': value })}
        {...(isFunction(onClick) ? { onSelect: onClick } : {})}
        {...(isFunction(onSelect) ? { onSelect } : {})}
        {...omit(['className', 'data-value'], props)}
      >
        <Typography element={isLink ? 'a' : 'div'} variant="body-1">
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
      </RxDropdownMenu.Item>
    )
  },
)
DropdownItem.displayName = 'DropdownItem'

export default DropdownItem
