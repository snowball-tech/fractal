import { cx } from '@snowball-tech/fractal-panda/css'
import { tag, typography } from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'

import { DEFAULT_COLOR } from './Tag.constants'
import { GROUP_NAME } from './Tag.recipe'
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
  const groupClassName = cx(
    `${PREFIX}-${GROUP_NAME}`,
    tag({ color }),
    typography({ variant: 'caption-median' }),
    fullWidth ? 'full-width' : '',
    disabled ? 'disabled' : '',
    props.className,
  )

  return (
    <div className={groupClassName} {...omit(['className'], props)}>
      {children}
    </div>
  )
}
Tag.displayName = 'Tag'

export default Tag
