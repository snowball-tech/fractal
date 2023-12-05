import * as RxSelect from '@radix-ui/react-select'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { alternatingBgColorLightClassNames, cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Select.constants'
import type { SelectItemGroupProps } from './Select.types'
import { SelectGroupContext } from './SelectGroupContext'

/**
 * `SelectItemGroup` component is used to group `SelectItem` components inside
 * of the dropdown of a `Select` component.
 *
 * See https://www.radix-ui.com/primitives/docs/components/select#group for more
 * information.
 */
export const SelectItemGroup = ({
  children,
  disabled = false,
  label,
  ...props
}: SelectItemGroupProps) => {
  return (
    <RxSelect.Group
      className={cn(
        `${PREFIX}-${GROUP_NAME}__item-group`,
        'p-2 py-0',
        disabled ? `${PREFIX}-${GROUP_NAME}__item-group--disabled` : '',
        props.className,
      )}
      {...omit(['className'], props)}
    >
      <RxSelect.Label
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
      </RxSelect.Label>

      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__item-group__items`,
          disabled
            ? `${PREFIX}-${GROUP_NAME}__item-group__items--disabled`
            : alternatingBgColorLightClassNames,
        )}
        element="div"
      >
        <SelectGroupContext.Provider value={{ disabled }}>
          {children}
        </SelectGroupContext.Provider>
      </Typography>
    </RxSelect.Group>
  )
}
SelectItemGroup.displayName = 'SelectItemGroup'

export default SelectItemGroup
