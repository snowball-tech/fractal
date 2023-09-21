import { cx } from '@snowball-tech/fractal-panda/css'
import { badge, typography } from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isInteger from 'lodash/fp/isInteger'
import isNil from 'lodash/fp/isNil'
import isNumber from 'lodash/fp/isNumber'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Badge.recipe'
import type { BadgeProps } from './Badge.types'

/**
 * `Badge` component displays a number in a small colored bubble.
 */
export const Badge = ({ count, limit = 99, ...props }: BadgeProps) => {
  const groupClassName = cx(
    `${PREFIX}-${GROUP_NAME}`,
    badge(),
    typography({ variant: 'caption-bold' }),
    isNil(count) || !isNumber(count) || !isInteger(count) ? 'empty' : '',
    props.className,
  )

  let actualCount = isNumber(count) && isInteger(count) ? `${count}` : ''
  if (!isEmpty(actualCount) && (count ?? 0) > limit) {
    actualCount = `+${limit}`
  }

  return (
    <div className={groupClassName} {...omit(['className'], props)}>
      {actualCount}
    </div>
  )
}
Badge.displayName = 'Badge'

export default Badge
