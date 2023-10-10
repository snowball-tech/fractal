import CheckIcon from '@iconscout/react-unicons/dist/icons/uil-check'
import * as RxDropdown from '@radix-ui/react-dropdown-menu'
import { Label as RxLabel } from '@radix-ui/react-label'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  dropdownRadioItem,
  dropdownRadioItemCheckmark,
  dropdownRadioItemLabel,
  inputRadioContainer,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'
import { useId } from 'react'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Dropdown.recipe'
import type { DropdownRadioItemProps } from './Dropdown.types'

/**
 * `DropdownRadioItem` component is used to allow the user to make a single
 * choice amongst a group of multiple choices inside of a dropdown.
 *
 * You must use this component within the `DropdownRadioItemGroup` component
 * itself being inside of a `Dropdown` component.
 */
export const DropdownRadioItem = ({
  disabled = false,
  id,
  label,
  value,
  ...props
}: DropdownRadioItemProps) => {
  const generatedId = useId()
  const uniqueId = (id ?? generatedId) || generatedId

  const groupClassNames = cx(
    inputRadioContainer(),
    `${PREFIX}-${GROUP_NAME}-radio-item`,
    props.className,
    disabled ? 'disabled' : '',
  )

  return (
    <div className={groupClassNames}>
      <RxDropdown.RadioItem
        id={uniqueId}
        className={dropdownRadioItem()}
        disabled={disabled}
        value={value}
        {...omit(['className'], props)}
      >
        <div className={dropdownRadioItemCheckmark()}>
          <RxDropdown.ItemIndicator>
            <CheckIcon />
          </RxDropdown.ItemIndicator>
        </div>

        <RxLabel
          className={cx(
            typography({ variant: 'body-1' }),
            dropdownRadioItemLabel(),
          )}
          htmlFor={uniqueId}
        >
          {label}
        </RxLabel>
      </RxDropdown.RadioItem>
    </div>
  )
}
DropdownRadioItem.displayName = 'DropdownRadioItem'

export default DropdownRadioItem
