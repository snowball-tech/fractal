import isEmpty from 'lodash/fp/isEmpty'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { LIGHT_BG_COLORS_CLASSNAMES, PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'
import { onlyText } from '@/utils'

import type { TagProps } from './Tag.types'

import {
  Colors,
  DEFAULT_COLOR,
  DEFAULT_SIZE,
  GROUP_NAME,
  Sizes,
  sizeToTypographyVariant,
} from './Tag.constants'

/**
 * `Tag` component displays a small colored pill of text.
 */
export const Tag = ({
  children,
  color = DEFAULT_COLOR,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  label,
  size = DEFAULT_SIZE,
  ...props
}: TagProps) => {
  const hasChildren = Boolean(children)
  if (!hasChildren && !label) {
    console.warn(
      'You must provide a `label` or `children` to the `DropdownItem` component',
    )
  }

  const iconSizeClassNames = {
    [Sizes.M]: 'h-[20px] w-[20px] [&>svg]:h-[20px] [&>svg]:w-[20px]',
    [Sizes.S]: 'h-2 w-2 [&>svg]:h-2 [&>svg]:w-2',
  }

  const hasIcon = Boolean(icon)
  const iconElement = hasIcon && (
    <div
      className={cj(
        `${PREFIX}-${GROUP_NAME}__icon`,
        `${PREFIX}-${GROUP_NAME}__icon--${iconPosition}`,
        'flex shrink-0 items-center',
        iconSizeClassNames[size],
      )}
    >
      {icon}
    </div>
  )

  const textLabel = isString(label)
    ? label
    : isEmpty(label)
      ? onlyText(children)
      : onlyText(label)

  const sizeClassNames = {
    [Sizes.M]: 'px-2 py-1 leading-[20px] max-h-[38px]',
    [Sizes.S]: 'px-1 py-half max-h-[28px] leading-[18px]',
  }

  return (
    <Typography
      aria-label={textLabel}
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        `${PREFIX}-${GROUP_NAME}--${color}`,
        `${PREFIX}-${GROUP_NAME}--${size}`,
        'inline-flex w-fit items-center justify-center gap-half rounded-full border-1',
        sizeClassNames[size],
        color === Colors.White ? 'border-grey-70' : 'border-transparent',
        fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width w-full` : '',
        disabled
          ? `${PREFIX}-${GROUP_NAME}--disabled cursor-not-allowed bg-disabled-light text-disabled`
          : `${LIGHT_BG_COLORS_CLASSNAMES[color]} cursor-default`,
        props.className,
      )}
      element="div"
      title={textLabel}
      variant={sizeToTypographyVariant[size]}
      {...omit(['className'], props)}
    >
      {hasIcon && iconPosition === 'left' && iconElement}

      {hasChildren ? children : label}

      {hasIcon && iconPosition === 'right' && iconElement}
    </Typography>
  )
}
Tag.displayName = 'Tag'

export default Tag
