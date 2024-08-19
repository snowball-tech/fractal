'use client'

import UserIcon from '@iconscout/react-unicons/icons/uil-user'

import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'

import { Dropdown } from '@/components/Dropdown'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { AvatarProps } from './Avatar.types'

import {
  DEFAULT_SIZE,
  GROUP_NAME,
  Sizes,
  sizeToTypographyVariant,
} from './Avatar.constants'

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
    [Sizes.S]: 'h-5 max-h-5 min-h-5 w-5 max-w-5 min-w-5',

    [Sizes.M]: 'h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6',

    [Sizes.L]: 'h-7 max-h-7 min-h-7 w-7 max-w-7 min-w-7',

    [Sizes.XL]: 'h-8 max-h-8 min-h-8 w-8 max-w-8 min-w-8',

    [Sizes.Fluid]: 'w-full h-full min-h-5 min-w-5',
  }

  const iconSizeClassNames = {
    [Sizes.S]:
      'h-[calc(theme(spacing.5)/2)] max-h-[calc(theme(spacing.5)/2)] min-h-[calc(theme(spacing.5)/2)] w-[calc(theme(spacing.5)/2)] max-w-[calc(theme(spacing.5)/2)] min-w-[calc(theme(spacing.5)/2)]',

    [Sizes.M]: 'h-3 max-h-3 min-h-3 w-3 max-w-3 min-w-3',

    [Sizes.L]:
      'h-[calc(theme(spacing.7)/2)] max-h-[calc(theme(spacing.7)/2)] min-h-[calc(theme(spacing.7)/2)] w-[calc(theme(spacing.7)/2)] max-w-[calc(theme(spacing.7)/2)] min-w-[calc(theme(spacing.7)/2)]',

    [Sizes.XL]: 'h-4 max-h-4 min-h-4 w-4 max-w-4 min-w-4',

    [Sizes.Fluid]:
      'w-full h-full min-h-[calc(theme(spacing.5)/2)] min-w-[calc(theme(spacing.5)/2)]',
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
      aria-label={name}
      className={cj(
        baseBubbleClassName,
        'flex items-center justify-center overflow-hidden bg-decorative-pink-70 text-dark',
        isEmpty(initials)
          ? `${PREFIX}-${GROUP_NAME}__bubble--with-icon`
          : `${PREFIX}-${GROUP_NAME}__bubble--with-initials`,
        size === Sizes.Fluid
          ? `[font-size:0.75rem] @[56px]:[font-size:1rem] @[64px]:[font-size:1.2rem] @[72px]:[font-size:1.4rem] @[80px]:[font-size:1.6rem] @[88px]:[font-size:1.8rem] @[96px]:[font-size:2rem] @[104px]:[font-size:2.2rem] @[112px]:[font-size:2.44rem] @[120px]:[font-size:2.6rem] @[128px]:[font-size:2.8rem] @[136px]:[font-size:3rem] @[144px]:[font-size:3.2rem] @[152px]:[font-size:3.44rem] @[160px]:[font-size:3.6rem] @[168px]:[font-size:3.83rem] @[176px]:[font-size:4rem] @[184px]:[font-size:4.2rem] @[192px]:[font-size:4.4rem] @[200px]:[font-size:4.6rem] @[208px]:[font-size:4.81rem] @[216px]:[font-size:5rem] @[224px]:[font-size:5.2rem] @[232px]:[font-size:5.4rem] @[240px]:[font-size:5.65rem]`
          : '',
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
      aria-label={name}
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
          'cursor-pointer @container',
          size === Sizes.Fluid ? 'h-full w-full' : sizeClassNames[size],
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
        'cursor-default @container',
        size === Sizes.Fluid ? 'h-full w-full' : sizeClassNames[size],
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
