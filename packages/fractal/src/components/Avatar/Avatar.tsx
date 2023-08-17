import UserIcon from '@iconscout/react-unicons/dist/icons/uil-user'
import { css, cx } from '@snowball-tech/fractal-panda/css'
import {
  avatar,
  avatarWithBackground,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'

import { DEFAULT_SIZE, sizeToTypographyVariant } from './Avatar.constants'
import type { AvatarProps } from './Avatar.types'

/**
 * `Avatar` component allow to display an avatar with an optional dropdown menu.
 */
export const Avatar = ({
  imageUrl,
  name,
  size = DEFAULT_SIZE,
  ...props
}: AvatarProps) => {
  const initials = name
    ?.split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')

  if (!isEmpty(imageUrl)) {
    return (
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
  }

  return (
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
  )
}
Avatar.displayName = 'Avatar'

export default Avatar
