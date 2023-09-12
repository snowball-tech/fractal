import { cx } from '@snowball-tech/fractal-panda/css'
import { paper, typography } from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'

import { DEFAULT_ELEVATION } from './Paper.constants'
import { GROUP_NAME } from './Paper.recipe'
import type { PaperProps } from './Paper.types'

/**
 * `Paper` component allow to build interface with level and hierarchy.
 */
export const Paper = ({
  children,
  elevation = DEFAULT_ELEVATION,
  ...props
}: PaperProps) => {
  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}`,
    paper({ elevation }),
    props.className,
    typography({ variant: 'body-1' }),
  )

  return (
    <div className={groupClassNames} {...omit(['className'], props)}>
      {children}
    </div>
  )
}
Paper.displayName = 'Paper'

export default Paper
