import { cx } from '@snowball-tech/fractal-panda/css'
import { step, stepper } from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'
import range from 'lodash/fp/range'

import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Stepper.recipe'
import type { StepperProps } from './Stepper.types'

/**
 * `Stepper` component is used to display a progression to the user in the form
 * of steps.
 */
export const Stepper = ({
  current = 0,
  highlighted = false,
  length,
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
      {range(0, length).map((index) => (
        <div
          key={index}
          className={step()}
          {...(current > index ? { 'data-completed': true } : {})}
          {...(current === index ? { 'data-active': true } : {})}
        />
      ))}
    </div>
  )
}
Stepper.displayName = 'Stepper'

export default Stepper
