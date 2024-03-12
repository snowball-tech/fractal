'use client'

import omit from 'lodash/fp/omit'
import { useContext } from 'react'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Menu.constants'
import type { MenuItemGroupProps } from './Menu.types'
import { MenuContext } from './MenuContext'
import { MenuGroupContext } from './MenuGroupContext'

/**
 * `ItemGroup` component is used to display `Item`s grouped under a common label
 * with nice formatting.
 */
export default function MenuItemGroup({
  children,
  disabled = false,
  label,
  ...props
}: MenuItemGroupProps) {
  const { disabled: menuDisabled } = useContext(MenuContext)

  const isDisabled = disabled || menuDisabled

  return (
    <div
      className={cn(
        `${PREFIX}-${GROUP_NAME}__item-group`,
        'p-2 py-0',
        isDisabled ? `${PREFIX}-${GROUP_NAME}__item-group--disabled` : '',
        props.className,
      )}
      {...omit(['className'], props)}
    >
      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__item-group__label`,
          'block py-2',
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
        <MenuGroupContext.Provider value={{ disabled: isDisabled }}>
          {children}
        </MenuGroupContext.Provider>
      </Typography>
    </div>
  )
}
