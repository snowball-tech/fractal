import { cx } from '@snowball-tech/fractal-panda/css'
import {
  card,
  cardContent,
  cardIcon,
  cardTitle,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'

import { DEFAULT_COLOR } from './Card.constants'
import { GROUP_NAME } from './Card.recipe'
import type { CardProps } from './Card.types'

/**
 * `Card` component allow to build interface with level and hierarchy.
 * experience.
 */
export const Card = ({
  children,
  color = DEFAULT_COLOR,
  fullWidth = false,
  icon,
  title,
  ...props
}: CardProps) => {
  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}`,
    card(),
    props.className,
    fullWidth ? 'full-width' : '',
    typography({ variant: 'body-1' }),
  )

  return (
    <div className={groupClassNames} {...omit(['className'], props)}>
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

      <div className={cardContent()}>{children}</div>
    </div>
  )
}
Card.displayName = 'Card'

export default Card
