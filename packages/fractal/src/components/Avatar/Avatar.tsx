import AngleDownIcon from '@iconscout/react-unicons/dist/icons/uil-angle-down'
import UserIcon from '@iconscout/react-unicons/dist/icons/uil-user'
import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu'
import { css, cx } from '@snowball-tech/fractal-panda/css'
import {
  avatar,
  avatarContainer,
  avatarDropdown,
  avatarDropdownTrigger,
  avatarDropdownTriggerIndicator,
  avatarWithBackground,
  selectDropdown,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { useState } from 'react'

import { PREFIX } from '@/constants'

import { DEFAULT_SIZE, sizeToTypographyVariant } from './Avatar.constants'
import { GROUP_NAME } from './Avatar.recipe'
import type { AvatarProps } from './Avatar.types'

/**
 * `Avatar` component allow to display an avatar with an optional dropdown menu.
 */
export const Avatar = ({
  children,
  disabled = false,
  imageUrl,
  name,
  onMenuOpenChange,
  size = DEFAULT_SIZE,
  ...props
}: AvatarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const groupClassNames = cx(
    avatarContainer(),
    props.className,
    children ? 'with-menu' : '',
    isOpen ? 'opened' : 'closed',
    disabled ? 'disabled' : '',
  )

  const handleOpenChange = (open: boolean) => {
    if (isFunction(onMenuOpenChange)) {
      onMenuOpenChange(open)
    }
    setIsOpen(open)
  }

  const initials = name
    ?.split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')

  const avatarBubble = isEmpty(imageUrl) ? (
    <div
      className={cx(
        avatar({ size }),
        avatarWithBackground(),
        typography({ variant: sizeToTypographyVariant[size] }),
      )}
      title={name}
      {...omit(['className'], props)}
    >
      {isEmpty(initials) ? <UserIcon /> : initials}
    </div>
  ) : (
    <div
      className={cx(
        avatar({ size }),
        css({
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }),
      )}
      style={{ backgroundImage: `url(${imageUrl})` }}
      title={name}
      {...omit(['className'], props)}
    />
  )

  if (children && !disabled) {
    return (
      <div className={groupClassNames}>
        <RxDropdownMenu.Root modal={false} onOpenChange={handleOpenChange}>
          <RxDropdownMenu.Trigger
            className={cx(
              `${PREFIX}-${GROUP_NAME}-trigger`,
              typography({ variant: 'body-1' }),
              avatarDropdownTrigger(),
            )}
          >
            {avatarBubble}

            <div className={avatarDropdownTriggerIndicator()}>
              <AngleDownIcon />
            </div>
          </RxDropdownMenu.Trigger>

          <RxDropdownMenu.Portal>
            <RxDropdownMenu.Content
              align="center"
              className={cx(
                `${PREFIX}-${GROUP_NAME}-dropdown`,
                typography({ variant: 'body-1' }),
                selectDropdown(),
                avatarDropdown(),
              )}
              loop
              side="bottom"
              style={{
                display: undefined,
              }}
            >
              {children}
            </RxDropdownMenu.Content>
          </RxDropdownMenu.Portal>
        </RxDropdownMenu.Root>
      </div>
    )
  }

  return avatarBubble
}
Avatar.displayName = 'Avatar'

export default Avatar
