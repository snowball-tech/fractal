import isEmpty from 'lodash/fp/isEmpty'
import isInteger from 'lodash/fp/isInteger'
import isNil from 'lodash/fp/isNil'
import isNumber from 'lodash/fp/isNumber'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import type { BadgeProps } from './Badge.types'

import { GROUP_NAME } from './Badge.constants'

/**
 * `Badge` component displays a number in a small colored bubble.
 */
export const Badge = ({ count, label, limit = 99, ...props }: BadgeProps) => {
  let actualCount = isNumber(count) && isInteger(count) ? `${count}` : ''
  if (
    isNumber(limit) &&
    limit > 0 &&
    !isEmpty(actualCount) &&
    (count ?? 0) > limit
  ) {
    actualCount = `+${limit}`
  }

  return (
    <Typography
      aria-label={label}
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        'bg-primary inline-flex shrink-0 items-center justify-center rounded-full',
        isNil(count) || !isNumber(count) || !isInteger(count)
          ? `${PREFIX}-${GROUP_NAME}--empty h-2 max-h-2 min-h-2 w-2 max-w-2 min-w-2 p-0`
          : `${PREFIX}-${GROUP_NAME}--with-count px-half h-3 max-h-3 w-fit min-w-3 py-0`,
        props.className,
      )}
      element="div"
      title={label}
      variant="caption-bold"
      {...omit(['className'], props)}
    >
      {actualCount}
    </Typography>
  )
}
Badge.displayName = 'Badge'

export default Badge
