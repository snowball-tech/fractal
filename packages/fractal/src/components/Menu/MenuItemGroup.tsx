'use client'

import { useContext } from 'react'

import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'
import { onlyText } from '@/utils'

import type { MenuItemGroupProps } from './Menu.types'

import { GROUP_NAME } from './Menu.constants'
import { MenuContext } from './MenuContext'
import { MenuGroupContext } from './MenuGroupContext'

/**
 * `ItemGroup` component is used to display `Item`s grouped under a common label
 * with nice formatting.
 */
export function MenuItemGroup({
  children,
  condensed = false,
  disabled = false,
  label,
  labelElement,
  rainbow = true,
  ...props
}: MenuItemGroupProps) {
  const {
    condensed: menuCondensed,
    disabled: menuDisabled,
    rainbow: menuRainbow,
  } = useContext(MenuContext)

  const isDisabled = disabled || menuDisabled
  const isCondensed = condensed || menuCondensed
  const isRainbow = rainbow && menuRainbow

  const textLabel = isString(label) ? label : onlyText(label)

  return (
    <div
      aria-label={textLabel}
      className={cn(
        `${PREFIX}-${GROUP_NAME}__item-group`,
        'px-2',
        isDisabled ? `${PREFIX}-${GROUP_NAME}__item-group--disabled` : '',
        props.className,
      )}
      title={textLabel}
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
        element={labelElement || (isString(label) ? 'label' : 'div')}
      >
        {label}
      </Typography>

      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__item-group__items`,
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__item-group__items--disabled`
            : isRainbow
              ? alternatingBgColorLightClassNames
              : '',
        )}
        element="div"
      >
        <MenuGroupContext.Provider
          value={{
            condensed: isCondensed,
            disabled: isDisabled,
            rainbow: isRainbow,
          }}
        >
          {children}
        </MenuGroupContext.Provider>
      </Typography>
    </div>
  )
}
MenuItemGroup.displayName = 'MenuItemGroup'

export default MenuItemGroup
