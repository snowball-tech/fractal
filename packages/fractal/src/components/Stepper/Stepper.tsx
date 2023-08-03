import { cx } from '@snowball-tech/fractal-panda/css'
import {
  step,
  stepAsProgress,
  stepper,
} from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'
import range from 'lodash/fp/range'

import { Progress } from '@/components/Progress'
import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Stepper.recipe'
import type { StepperProps } from './Stepper.types'

/**
 * `Stepper` component is used to display a progression to the user in the form
 * of steps.
 */
export const Stepper = ({
  current = 0,
  currentAs = 'step',
  highlighted = false,
  length,
  max = 100,
  value = 0,
  ...props
}: StepperProps) => {
  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}`,
    stepper(),
    props.className,
    highlighted ? 'highlighted' : '',
  )

  return (
    <div className={groupClassNames} {...omit(['className'], props)}>
      {range(0, length).map((index) => {
        if (index !== current || currentAs === 'step') {
          return (
            <div
              key={index}
              className={step()}
              {...(current > index ? { 'data-completed': true } : {})}
              {...(current === index ? { 'data-active': true } : {})}
            />
          )
        }

        return (
          <Progress
            key={index}
            className={stepAsProgress()}
            max={max}
            value={value}
          />
        )
      })}
    </div>
  )
}
Stepper.displayName = 'Stepper'

export default Stepper
