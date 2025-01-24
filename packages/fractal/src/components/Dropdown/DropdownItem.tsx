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

    const { condensed: dropdownCondensed, disabled: dropdownDisabled } =
      useContext(DropdownContext)
    const { condensed: groupCondensed, disabled: groupDisabled } =
      useContext(DropdownGroupContext)

    const isDisabled = disabled || groupDisabled || dropdownDisabled
    const isCondensed = condensed || groupCondensed || dropdownCondensed

    const isLink = !isEmpty(href)

    return (
      <RxDropdownMenu.Item
        ref={ref}
        aria-label={label}
        asChild
        className={cn(
          `${PREFIX}-${GROUP_NAME}__item`,
          'alternatee',
          'flex items-center gap-1',
          'transition-background-color rounded-sm outline-hidden duration-300 ease-out',
          isCondensed
            ? `${PREFIX}-${GROUP_NAME}__item--condensed max-h-6 px-2 py-1`
            : 'p-2',
          icon ? `${PREFIX}-${GROUP_NAME}__with-icon` : '',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__item--disabled text-disabled cursor-not-allowed !bg-transparent`
            : 'text-dark cursor-pointer',
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
        <Typography element={isLink ? 'a' : 'div'}>
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
