import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'

import { LIGHT_BG_COLORS_CLASSNAMES, PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import { Colors, DEFAULT_COLOR, GROUP_NAME, Shapes } from './Skeleton.constants'
import type { SkeletonProps } from './Skeleton.types'

/**
 * `Skeleton` component is used to display animated placeholders of content
 * while the content is loading.
 */
export const Skeleton = ({
  children,
  color = DEFAULT_COLOR,
  shape,
  ...props
}: SkeletonProps) => {
  const colorClassNames = {
    ...LIGHT_BG_COLORS_CLASSNAMES,
    [Colors.Black]: 'bg-black',
    [Colors.DarkGrey]: 'bg-grey-30',
    [Colors.Grey]: 'bg-grey-70',
    [Colors.LightGrey]: 'bg-grey-90',
  }

  const animationColorClassNames = {
    [Colors.Blue]:
      'after:bg-[linear-gradient(90deg,transparent,var(--color-decorative-blue-70),transparent)]',
    [Colors.Green]:
      'after:bg-[linear-gradient(90deg,transparent,var(--color-decorative-green-70),transparent)]',
    [Colors.Pink]:
      'after:bg-[linear-gradient(90deg,transparent,var(--color-decorative-pink-70),transparent)]',
    [Colors.Purple]:
      'after:bg-[linear-gradient(90deg,transparent,var(--color-decorative-purple-70),transparent)]',
    [Colors.Yellow]:
      'after:bg-[linear-gradient(90deg,transparent,var(--color-decorative-yellow-70),transparent)]',

    //
    [Colors.Black]: '',
    [Colors.DarkGrey]: '',
    [Colors.Grey]:
      'after:bg-[linear-gradient(90deg,transparent,var(--color-base-grey-50),transparent)]',
    [Colors.LightGrey]:
      'after:bg-[linear-gradient(90deg,transparent,var(--color-base-grey-70),transparent)]',
    [Colors.White]:
      'after:bg-[linear-gradient(90deg,transparent,var(--color-base-grey-90),transparent)]',
  }

  let skeletonShapeClassNames = ''
  switch (shape) {
    case Shapes.Circle: {
      skeletonShapeClassNames = 'rounded-full [aspect-ratio:1/1]'
      break
    }

    case Shapes.Rectangle: {
      skeletonShapeClassNames = 'w-full rounded-sm'
      break
    }

    case Shapes.RoundedRectangle: {
      skeletonShapeClassNames = 'w-full rounded-full'
      break
    }

    case Shapes.Square: {
      skeletonShapeClassNames = 'rounded-sm [aspect-ratio:1/1] '
      break
    }

    default: {
      return false
    }
  }

  if (isEmpty(skeletonShapeClassNames)) {
    return false
  }

  return (
    <div
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        `${PREFIX}-${GROUP_NAME}--${shape}`,
        `${PREFIX}-${GROUP_NAME}--${color}`,
        colorClassNames[color],
        'relative h-full overflow-hidden',
        skeletonShapeClassNames,
        `after:absolute after:inset-0 after:-translate-x-full after:animate-wave after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)] after:content-empty`,
        animationColorClassNames[color],
        props.className,
      )}
      {...omit(['className'], props)}
    >
      {children}
    </div>
  )
}
Skeleton.displayName = 'Skeleton'

export default Skeleton
