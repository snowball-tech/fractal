import * as RxProgress from '@radix-ui/react-progress'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  progress,
  progressIndicator,
} from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Progress.recipe'
import type { ProgressProps } from './Progress.types'

/**
 * `Progress` component is used to display a progression to the user.
 */
export const Progress = ({
  getValueLabel,
  max = 100,
  value = 0,
  ...props
}: ProgressProps) => {
  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}`,
    progress(),
    props.className,
  )

  return (
    <RxProgress.Root
      className={groupClassNames}
      max={max}
      value={value}
      {...(isFunction(getValueLabel) ? { getValueLabel } : {})}
      {...omit(['className'], props)}
    >
      <RxProgress.Indicator
        className={progressIndicator()}
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </RxProgress.Root>
  )
}
Progress.displayName = 'Progress'

export default Progress
