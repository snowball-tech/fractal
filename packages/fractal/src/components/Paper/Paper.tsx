import omit from 'lodash/fp/omit'
import { type ForwardedRef, forwardRef } from 'react'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX, Themes } from '@/constants'
import useTheme from '@/hooks/useTheme'
import { cj, cn } from '@/styles/helpers'

import { DEFAULT_ELEVATION, Elevations, GROUP_NAME } from './Paper.constants'
import type { PaperProps } from './Paper.types'

/**
 * `Paper` component allow to build interface with level and hierarchy.
 */
export const Paper = forwardRef<HTMLDivElement, PaperProps>(
  (
    {
      children,
      elevation = DEFAULT_ELEVATION,
      theme: themeOverride,
      ...props
    }: PaperProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const theme = useTheme(themeOverride)

    const elevationClassNames = {
      /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

      [Elevations.Bordered]: 'rounded-sm shadow-none',
      [Elevations.Elevated]: cj(
        'rounded-sm shadow-subtle ml-quarter mb-quarter',
        theme === Themes.Light ? 'shadow-subtle-light' : 'shadow-subtle-dark',
      ),
      [Elevations.Higher]: cj(
        'rounded-sm shadow-brutal ml-quarter mb-half',
        theme === Themes.Light ? 'shadow-brutal-light' : 'shadow-brutal-dark',
      ),

      /* eslint-enable sort-keys, sort-keys/sort-keys-fix,
perfectionist/sort-objects */
    }

    return (
      <Typography
        ref={ref}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${elevation}`,
          'relative flex flex-col border-1 border-normal p-2',
          elevationClassNames[elevation],
          theme === Themes.Light
            ? 'bg-white text-dark'
            : 'bg-body-dark text-light',
          props.className,
        )}
        element="div"
        {...omit(['className'], props)}
      >
        {children}
      </Typography>
    )
  },
)
Paper.displayName = 'Paper'

export default Paper
