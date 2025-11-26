import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import range from 'lodash/fp/range'

import { Progress } from '@/components/Progress/Progress'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { StepperProps } from './Stepper.types'

import { GROUP_NAME } from './Stepper.constants'

/**
 * `Stepper` component is used to display a progression to the user in the form
 * of steps.
 *
 * See
 * https://fractal.snowball.xyz/?path=/docs/molecules-progress--documentation
 * for more information.
 */
export const Stepper = ({
  current = 0,
  currentAs = 'step',
  getValueLabel,
  length,
  max = 100,
  value = 0,
  ...props
}: StepperProps) => {
  const label = isFunction(getValueLabel)
    ? getValueLabel(current, length)
    : getValueLabel !== null
      ? `${current} / ${length}`
      : undefined

  return (
    <div
      aria-label={label}
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        `${PREFIX}-${GROUP_NAME}--current-as-${currentAs}`,
        'flex max-w-full gap-1',
        props.className,
      )}
      title={label}
      {...omit(['className'], props)}
    >
      {range(0, length).map((index) => {
        if (index !== current) {
          return (
            <Progress
              key={index}
              className={cj(`${PREFIX}-${GROUP_NAME}__step`, 'w-full !max-w-5')}
              getValueLabel={null}
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
            className={cj(
              `${PREFIX}-${GROUP_NAME}__step`,
              `${PREFIX}-${GROUP_NAME}__step--current`,
              'w-full',
              currentAs === 'step' ? '!max-w-5' : '',
            )}
            getValueLabel={null}
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
