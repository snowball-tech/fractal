'use client'

import { useContext } from 'react'

import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'

import type { MenuItemGroupProps } from './Menu.types'

import { GROUP_NAME } from './Menu.constants'
import { MenuContext } from './MenuContext'
import { MenuGroupContext } from './MenuGroupContext'

/**
 * `ItemGroup` component is used to display `Item`s grouped under a common label
 * with nice formatting.
 */
export default function MenuItemGroup({
  children,
  condensed = false,
  disabled = false,
  label,
  ...props
}: MenuItemGroupProps) {
  const { condensed: menuCondensed, disabled: menuDisabled } =
    useContext(MenuContext)

  const isDisabled = disabled || menuDisabled
  const isCondensed = condensed || menuCondensed

  return (
    <div
      className={cn(
        `${PREFIX}-${GROUP_NAME}__item-group`,
        'px-2',
        isDisabled ? `${PREFIX}-${GROUP_NAME}__item-group--disabled` : '',
        props.className,
      )}
      {...omit(['className'], props)}
    >
      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__item-group__label`,
          'block',
          isCondensed ? 'py-1' : 'py-2',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__item-group__label--disabled text-disabled`
            : 'cursor-default text-placeholder',
        )}
        element="label"
      >
        {label}
      </Typography>

      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__item-group__items`,
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__item-group__items--disabled`
            : alternatingBgColorLightClassNames,
        )}
        element="div"
      >
        <MenuGroupContext.Provider
          value={{ condensed: isCondensed, disabled: isDisabled }}
        >
          {children}
        </MenuGroupContext.Provider>
      </Typography>
    </div>
  )
}
