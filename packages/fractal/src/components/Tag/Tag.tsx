import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { LIGHT_BG_COLORS_CLASSNAMES, PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import {
  Colors,
  DEFAULT_COLOR,
  DEFAULT_SIZE,
  GROUP_NAME,
  Sizes,
  sizeToTypographyVariant,
} from './Tag.constants'
import type { TagProps } from './Tag.types'

/**
 * `Tag` component displays a small colored pill of text.
 */
export const Tag = ({
  children,
  color = DEFAULT_COLOR,
  disabled = false,
  fullWidth = false,
  size = DEFAULT_SIZE,
  ...props
}: TagProps) => {
  const sizeClassNames = {
    [Sizes.M]: 'px-2 py-1 leading-[20px]',
    [Sizes.S]: 'px-1 py-half',
  }

  return (
    <Typography
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        `${PREFIX}-${GROUP_NAME}--${color}`,
        `${PREFIX}-${GROUP_NAME}--${size}`,
        'inline-flex w-fit items-center justify-center rounded-full border-1',
        sizeClassNames[size],
        color === Colors.White ? 'border-grey-70' : 'border-transparent',
        fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width w-full` : '',
        disabled
          ? `${PREFIX}-${GROUP_NAME}--disabled cursor-not-allowed bg-disabled-light text-disabled`
          : `${LIGHT_BG_COLORS_CLASSNAMES[color]} cursor-default`,
        props.className,
      )}
      element="div"
      variant={sizeToTypographyVariant[size]}
      {...omit(['className'], props)}
    >
      {children}
    </Typography>
  )
}
Tag.displayName = 'Tag'

export default Tag
