import omit from 'lodash/fp/omit'
import range from 'lodash/fp/range'
import { twJoin, twMerge } from 'tailwind-merge'

import { Progress } from '@/components/Progress'
import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Stepper.constants'
import type { StepperProps } from './Stepper.types'

/**
 * `Stepper` component is used to display a progression to the user in the form
 * of steps.
 */
export const Stepper = ({
  current = 0,
  currentAs = 'step',
  length,
  max = 100,
  value = 0,
  ...props
}: StepperProps) => {
  return (
    <div
      className={twMerge(
        `${PREFIX}-${GROUP_NAME}`,
        `${PREFIX}-${GROUP_NAME}--current-as-${currentAs}`,
        'flex max-w-full gap-1',
        props.className,
      )}
      {...omit(['className'], props)}
    >
      {range(0, length).map((index) => {
        if (index !== current) {
          return (
            <Progress
              key={index}
              className={twJoin(
                `${PREFIX}-${GROUP_NAME}__step`,
                'w-full !max-w-5',
              )}
              max={1}
              value={current > index ? 1 : 0}
              {...(current > index ? { 'data-completed': true } : {})}
              {...(current === index ? { 'data-active': true } : {})}
            />
          )
        }

        return (
          <Progress
            key={index}
            className={twJoin(
              `${PREFIX}-${GROUP_NAME}__step`,
              `${PREFIX}-${GROUP_NAME}__step--current`,
              'w-full',
              currentAs === 'step' ? '!max-w-5' : '',
            )}
            max={currentAs === 'step' ? 5 : max}
            value={currentAs === 'step' ? 1 : value}
          />
        )
      })}
    </div>
  )
}
Stepper.displayName = 'Stepper'

export default Stepper
