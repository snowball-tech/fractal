import AngleDownIcon from '@iconscout/react-unicons/dist/icons/uil-angle-down'
import * as RxDropdown from '@radix-ui/react-dropdown-menu'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  dropdown,
  dropdownContainer,
  dropdownTrigger,
  dropdownTriggerIndicator,
  selectDropdown,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { useState } from 'react'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Dropdown.recipe'
import type { DropdownProps } from './Dropdown.types'

/**
 * `Avatar` component allow to display an avatar with an optional dropdown menu.
 */
export const Avatar = ({
  children,
  disabled = false,
  onMenuOpenChange,
  side,
  trigger,
  withIndicator = true,
  ...props
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const groupClassNames = cx(
    dropdownContainer(),
    props.className,
    isOpen ? 'opened' : 'closed',
    disabled ? 'disabled' : '',
  )

  const handleOpenChange = (isOpened: boolean) => {
    if (disabled) {
      return
    }

    if (isFunction(onMenuOpenChange)) {
      onMenuOpenChange(isOpened)
    }

    setIsOpen(isOpened)
  }

  return (
    <div className={groupClassNames}>
      <RxDropdown.Root
        {...(disabled ? { open: false } : {})}
        modal={false}
        onOpenChange={handleOpenChange}
      >
        <RxDropdown.Trigger
          className={cx(
            `${PREFIX}-${GROUP_NAME}-trigger`,
            typography({ variant: 'body-1' }),
            dropdownTrigger(),
          )}
        >
          {trigger}

          {withIndicator && (
            <div className={dropdownTriggerIndicator()}>
              <AngleDownIcon />
            </div>
          )}
        </RxDropdown.Trigger>

        <RxDropdown.Portal>
          <RxDropdown.Content
            className={cx(
              `${PREFIX}-${GROUP_NAME}-dropdown`,
              typography({ variant: 'body-1' }),
              selectDropdown(),
              dropdown(),
            )}
            loop
            {...(!isEmpty(side) ? { side } : {})}
            style={{
              display: undefined,
              ...(props.style ?? {}),
            }}
            {...omit(['className', 'style'], props)}
          >
            {children}
          </RxDropdown.Content>
        </RxDropdown.Portal>
      </RxDropdown.Root>
    </div>
  )
}
Avatar.displayName = 'Avatar'

export default Avatar
