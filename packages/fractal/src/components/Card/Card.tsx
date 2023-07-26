import { cx } from '@snowball-tech/fractal-panda/css'
import { card, typography } from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'

import { DEFAULT_COLOR } from './Card.constants'
import type { CardProps } from './Card.types'

/**
 * `Card` component allow to build interface with level and hierarchy.
 * experience.
 */
export const Card = ({
  children,
  color = DEFAULT_COLOR,
  ...props
}: CardProps) => {
  return (
    <div
      className={cx(
        props.className,
        card({ color }),
        typography({ variant: 'body-1' }),
      )}
      {...omit(['className'], props)}
    >
      {children}
    </div>
  )
}
Card.displayName = 'Card'

export default Card
