import * as RxProgress from '@radix-ui/react-progress'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { GROUP_NAME } from './Progress.constants'
import type { ProgressProps } from './Progress.types'

/**
 * `Progress` component is used to display a progression to the user.
 *
 * See https://www.radix-ui.com/primitives/docs/components/progress for more
 * information.
 */
export const Progress = ({
  getValueLabel,
  max = 100,
  value = 0,
  ...props
}: ProgressProps) => {
  return (
    <RxProgress.Root
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        'relative h-1 w-full max-w-full overflow-hidden rounded-full border-1 border-normal bg-decorative-pink-90',
        props.className,
      )}
      max={max}
      value={value}
      {...(isFunction(getValueLabel) ? { getValueLabel } : {})}
      {...omit(['className'], props)}
    >
      <RxProgress.Indicator
        className={cj(
          `${PREFIX}-${GROUP_NAME}__indicator`,
          'h-full w-full rounded-full bg-secondary transition-transform delay-100 duration-600 [transition-property:cubic-bezier(0.65,0,0.35,1)]',
          props.className,
        )}
        style={{
          transform: `translateX(-${100 - (value / max) * 100}%)`,
        }}
      />
    </RxProgress.Root>
  )
}
Progress.displayName = 'Progress'

export default Progress
