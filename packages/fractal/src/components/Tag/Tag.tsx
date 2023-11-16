import omit from 'lodash/fp/omit'
import { twMerge } from 'tailwind-merge'

import { Typography } from '@/components/Typography/Typography'
import { LIGHT_BG_COLORS_CLASSNAMES, PREFIX } from '@/constants'

import { DEFAULT_COLOR, GROUP_NAME } from './Tag.constants'
import type { TagProps } from './Tag.types'

/**
 * `Tag` component displays a small colored pill of text.
 */
export const Tag = ({
  children,
  color = DEFAULT_COLOR,
  disabled = false,
  fullWidth = false,
  ...props
}: TagProps) => {
  return (
    <Typography
      className={twMerge(
        `${PREFIX}-${GROUP_NAME}`,
        `${PREFIX}-${GROUP_NAME}--${color}`,
        'inline-flex w-fit items-center justify-center rounded-full px-1 py-0.5',
        fullWidth ? `${PREFIX}-${GROUP_NAME}--full-width w-full` : '',
        disabled
          ? `${PREFIX}-${GROUP_NAME}--disabled cursor-not-allowed bg-disabled-light text-disabled`
          : `${LIGHT_BG_COLORS_CLASSNAMES[color]} cursor-default`,
        props.className,
      )}
      element="div"
      variant="caption-median"
      {...omit(['className'], props)}
    >
      {children}
    </Typography>
  )
}
Tag.displayName = 'Tag'

export default Tag
