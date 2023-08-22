import CloseIcon from '@iconscout/react-unicons/dist/icons/uil-times'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  card,
  cardContent,
  cardDismissIcon,
  cardIcon,
  cardTitle,
  typography,
} from '@snowball-tech/fractal-panda/recipes'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import noop from 'lodash/fp/noop'
import omit from 'lodash/fp/omit'

import { Button } from '@/components/Button'
import { PREFIX } from '@/constants'

import { DEFAULT_COLOR, DEFAULT_ELEVATION } from './Card.constants'
import { GROUP_NAME } from './Card.recipe'
import type { CardProps } from './Card.types'

/**
 * `Card` component allow to build interface with level and hierarchy.
 * experience.
 */
export const Card = ({
  children,
  color = DEFAULT_COLOR,
  dismissable = false,
  elevation = DEFAULT_ELEVATION,
  icon,
  onDismiss,
  title,
  ...props
}: CardProps) => {
  const groupClassNames = cx(
    `${PREFIX}-${GROUP_NAME}`,
    card({ color, elevation }),
    props.className,
    dismissable ? 'dismissable' : '',
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

      {dismissable ? (
        <div className={cardDismissIcon()}>
          <Button
            icon={<CloseIcon />}
            iconOnly
            label=""
            variant="text"
            onClick={() => (isFunction(onDismiss) ? onDismiss() : noop)}
          />
        </div>
      ) : (
        false
      )}
    </div>
  )
}
Card.displayName = 'Card'

export default Card
