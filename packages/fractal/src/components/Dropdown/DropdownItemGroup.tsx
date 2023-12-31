import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Dropdown.constants'
import type { DropdownItemGroupProps } from './Dropdown.types'
import { DropdownGroupContext } from './DropdownGroupContext'

/**
 * `ItemGroup` component is used to display `Item`s grouped under a common label
 * with nice formatting.
 *
 * See https://www.radix-ui.com/primitives/docs/components/dropdown-menu#group
 * for more information.
 */
export default function DropdownItemGroup({
  children: items,
  disabled = false,
  label,
  ...props
}: DropdownItemGroupProps) {
  return (
    <RxDropdownMenu.Group
      className={cn(
        `${PREFIX}-${GROUP_NAME}__item-group`,
        'p-2 py-0',
        disabled ? `${PREFIX}-${GROUP_NAME}__item-group--disabled` : '',
        props.className,
      )}
      {...omit(['className'], props)}
    >
      <RxDropdownMenu.Label
        asChild
        className={cj(
          `${PREFIX}-${GROUP_NAME}__item-group__label`,
          'block py-2',
          disabled
            ? `${PREFIX}-${GROUP_NAME}__item-group__label--disabled text-disabled`
            : 'cursor-default text-placeholder',
        )}
      >
        <Typography element="label">{label}</Typography>
      </RxDropdownMenu.Label>

      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__item-group__items`,
          disabled
            ? `${PREFIX}-${GROUP_NAME}__item-group__items--disabled`
            : alternatingBgColorLightClassNames,
        )}
        element="div"
      >
        <DropdownGroupContext.Provider value={{ disabled }}>
          {items}
        </DropdownGroupContext.Provider>
      </Typography>
    </RxDropdownMenu.Group>
  )
}
