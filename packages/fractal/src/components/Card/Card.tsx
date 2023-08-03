import { cx } from '@snowball-tech/fractal-panda/css'
import {
  card,
  cardIcon,
  cardTitle,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
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
  icon,
  title,
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
      {!isEmpty(title) || icon ? (
        <div
          className={cx(
            cardTitle({ color }),
            typography({ variant: 'body-1-bold' }),
          )}
        >
          {icon ? <div className={cardIcon({ color })}>{icon}</div> : false}

          {title}
        </div>
      ) : (
        false
      )}
      {children}
    </div>
  )
}
Card.displayName = 'Card'

export default Card
