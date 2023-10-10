import UserIcon from '@iconscout/react-unicons/dist/icons/uil-user'
import { css, cx } from '@snowball-tech/fractal-panda/css'
import {
  avatar,
  avatarContainer,
  avatarWithBackground,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'

import { Dropdown } from '@/components/Dropdown'

import { DEFAULT_SIZE, sizeToTypographyVariant } from './Avatar.constants'
import type { AvatarProps } from './Avatar.types'

/**
 * `Avatar` component allow to display an avatar with an optional dropdown menu.
 */
export const Avatar = ({
  children,
  disabled = false,
  imageUrl,
  name,
  size = DEFAULT_SIZE,
  ...props
}: AvatarProps) => {
  const groupClassNames = cx(
    avatarContainer(),
    props.className,
    children ? 'with-menu' : '',
    disabled ? 'disabled' : '',
  )

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
        <Dropdown disabled={disabled} trigger={avatarBubble}>
          {children}
        </Dropdown>
      </div>
    )
  }

  return avatarBubble
}
Avatar.displayName = 'Avatar'

export default Avatar
