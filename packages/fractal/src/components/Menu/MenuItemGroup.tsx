'use client'

import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Menu.constants'
import type { MenuItemGroupProps } from './Menu.types'
import { MenuGroupContext } from './MenuGroupContext'

/**
 * `ItemGroup` component is used to display `Item`s grouped under a common label
 * with nice formatting.
 *
 * See https://www.radix-ui.com/primitives/docs/components/menu-menu#group
 * for more information.
 */
export default function MenuItemGroup({
  children: items,
  disabled = false,
  label,
  ...props
}: MenuItemGroupProps) {
  return (
    <div
      className={cn(
        `${PREFIX}-${GROUP_NAME}__item-group`,
        'p-2 py-0',
        disabled ? `${PREFIX}-${GROUP_NAME}__item-group--disabled` : '',
        props.className,
      )}
      {...omit(['className'], props)}
    >
      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__item-group__label`,
          'block py-2 text-placeholder',
          disabled
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
          disabled
            ? `${PREFIX}-${GROUP_NAME}__item-group__items--disabled`
            : alternatingBgColorLightClassNames,
        )}
        element="div"
      >
        <MenuGroupContext.Provider value={{ disabled }}>
          {items}
        </MenuGroupContext.Provider>
      </Typography>
    </div>
  )
}
