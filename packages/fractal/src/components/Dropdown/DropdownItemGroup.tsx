'use client'

import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'

import { useContext } from 'react'

import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'

import type { DropdownItemGroupProps } from './Dropdown.types'

import { GROUP_NAME } from './Dropdown.constants'
import { DropdownContext } from './DropdownContext'
import { DropdownGroupContext } from './DropdownGroupContext'

/**
 * `ItemGroup` component is used to display `Item`s grouped under a common label
 * with nice formatting.
 *
 * See https://www.radix-ui.com/primitives/docs/components/dropdown-menu#group
 * for more information.
 */
export default function DropdownItemGroup({
  children,
  condensed = false,
  disabled = false,
  label,
  ...props
}: DropdownItemGroupProps) {
  const { condensed: dropdownCondensed, disabled: dropdownDisabled } =
    useContext(DropdownContext)

  const isDisabled = disabled || dropdownDisabled
  const isCondensed = condensed || dropdownCondensed

  return (
    <RxDropdownMenu.Group
      className={cn(
        `${PREFIX}-${GROUP_NAME}__item-group`,
        isCondensed ? `${PREFIX}-${GROUP_NAME}__item-group--condensed` : '',
        'px-2',
        isDisabled ? `${PREFIX}-${GROUP_NAME}__item-group--disabled` : '',
        props.className,
      )}
      {...omit(['className'], props)}
    >
      <RxDropdownMenu.Label
        asChild
        className={cj(
          `${PREFIX}-${GROUP_NAME}__item-group__label`,
          'block',
          isCondensed ? 'py-1' : 'py-2',
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__item-group__label--disabled text-disabled`
            : 'text-placeholder cursor-default',
        )}
      >
        <Typography element="label">{label}</Typography>
      </RxDropdownMenu.Label>

      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__item-group__items`,
          isDisabled
            ? `${PREFIX}-${GROUP_NAME}__item-group__items--disabled`
            : alternatingBgColorLightClassNames,
        )}
        element="div"
      >
        <DropdownGroupContext.Provider
          value={{ condensed: isCondensed, disabled: isDisabled }}
        >
          {children}
        </DropdownGroupContext.Provider>
      </Typography>
    </RxDropdownMenu.Group>
  )
}
