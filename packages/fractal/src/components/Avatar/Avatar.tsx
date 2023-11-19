import UserIcon from '@iconscout/react-unicons/dist/icons/uil-user'
import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'

import { Dropdown } from '@/components/Dropdown'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import {
  DEFAULT_SIZE,
  GROUP_NAME,
  Sizes,
  sizeToTypographyVariant,
} from './Avatar.constants'
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
  const sizeClassNames = {
    /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

    [Sizes.S]: 'h-5 max-h-5 min-h-5 w-5 max-w-5 min-w-5',
    [Sizes.M]: 'h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6',
    [Sizes.L]: 'h-7 max-h-7 min-h-7 w-7 max-w-7 min-w-7',
    [Sizes.XL]: 'h-8 max-h-8 min-h-8 w-8 max-w-8 min-w-8',

    /* eslint-enable sort-keys, sort-keys/sort-keys-fix,
perfectionist/sort-objects */
  }

  const iconSizeClassNames = {
    /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

    [Sizes.S]:
      'h-[calc(theme(spacing.5)/2)] max-h-[calc(theme(spacing.5)/2)] min-h-[calc(theme(spacing.5)/2)] w-[calc(theme(spacing.5)/2)] max-w-[calc(theme(spacing.5)/2)] min-w-[calc(theme(spacing.5)/2)]',
    [Sizes.M]: 'h-3 max-h-3 min-h-3 w-3 max-w-3 min-w-3',
    [Sizes.L]:
      'h-[calc(theme(spacing.7)/2)] max-h-[calc(theme(spacing.7)/2)] min-h-[calc(theme(spacing.7)/2)] w-[calc(theme(spacing.7)/2)] max-w-[calc(theme(spacing.7)/2)] min-w-[calc(theme(spacing.7)/2)]',
    [Sizes.XL]: 'h-4 max-h-4 min-h-4 w-4 max-w-4 min-w-4',

    /* eslint-enable sort-keys, sort-keys/sort-keys-fix,
perfectionist/sort-objects */
  }

  const baseBubbleClassName = cj(
    `${PREFIX}-${GROUP_NAME}__bubble`,
    'rounded-full border-1 border-normal',
    sizeClassNames[size],
  )

  const initials = name
    ?.split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')

  const hasChildren = Boolean(children)

  const avatarBubble = isEmpty(imageUrl) ? (
    <Typography
      className={cj(
        baseBubbleClassName,
        'flex items-center justify-center bg-decorative-pink-70 text-dark',
        !isEmpty(initials)
          ? `${PREFIX}-${GROUP_NAME}__bubble--with-initials`
          : `${PREFIX}-${GROUP_NAME}__bubble--with-icon`,
      )}
      element="div"
      title={name}
      variant={sizeToTypographyVariant[size]}
      {...omit(['className'], props)}
    >
      {isEmpty(initials) ? (
        <UserIcon
          className={cj(
            `${PREFIX}-${GROUP_NAME}__bubble`,
            iconSizeClassNames[size],
          )}
        />
      ) : (
        initials
      )}
    </Typography>
  ) : (
    <div
      className={cj(
        baseBubbleClassName,
        'bg-cover bg-center bg-no-repeat',
        `${PREFIX}-${GROUP_NAME}__bubble--with-picture`,
      )}
      style={{ backgroundImage: `url(${imageUrl})` }}
      title={name}
      {...omit(['className'], props)}
    />
  )

  if (hasChildren && !disabled) {
    return (
      <div
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${size}`,
          `${PREFIX}-${GROUP_NAME}--with-menu`,
          'w-fit cursor-pointer',
          props.className,
        )}
      >
        <Dropdown
          className={`${PREFIX}-${GROUP_NAME}__dropdown`}
          disabled={disabled}
          trigger={avatarBubble}
        >
          {children}
        </Dropdown>
      </div>
    )
  }

  return (
    <div
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        `${PREFIX}-${GROUP_NAME}--${size}`,
        'w-fit cursor-default',
        disabled ? `${PREFIX}-${GROUP_NAME}--disabled` : '',
        props.className,
      )}
    >
      {avatarBubble}
    </div>
  )
}
Avatar.displayName = 'Avatar'

export default Avatar
