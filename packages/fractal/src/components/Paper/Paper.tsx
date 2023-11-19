import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { DEFAULT_ELEVATION, Elevations, GROUP_NAME } from './Paper.constants'
import type { PaperProps } from './Paper.types'

/**
 * `Paper` component allow to build interface with level and hierarchy.
 */
export const Paper = ({
  children,
  elevation = DEFAULT_ELEVATION,
  ...props
}: PaperProps) => {
  const elevationClassNames = {
    /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

    [Elevations.Bordered]: 'rounded-sm shadow-none',
    [Elevations.Elevated]: 'rounded-sm shadow-subtle',
    [Elevations.Higher]: 'rounded-md shadow-brutal',

    /* eslint-enable sort-keys, sort-keys/sort-keys-fix,
perfectionist/sort-objects */
  }

  return (
    <Typography
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        `${PREFIX}-${GROUP_NAME}--${elevation}`,
        'relative flex flex-col border-1 border-normal bg-white p-2 text-dark',
        elevationClassNames[elevation],
        props.className,
      )}
      element="div"
      {...omit(['className'], props)}
    >
      {children}
    </Typography>
  )
}
Paper.displayName = 'Paper'

export default Paper
