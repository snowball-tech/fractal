import { UilTimes as CloseIcon } from '@tooni/iconscout-unicons-react'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography/Typography'
import {
  DARK_FG_COLORS_CLASSNAMES,
  LIGHT_BG_COLORS_CLASSNAMES,
  PREFIX,
} from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { CardProps } from './Card.types'

import { DEFAULT_COLOR, GROUP_NAME } from './Card.constants'

/**
 * `Card` component allow to build nice interface by offering user colored
 * blocks of contents.
 *
 * It's also useful for feedback and hierarchization of the content.
 */
export const Card = ({
  children,
  color = DEFAULT_COLOR,
  dismissable = false,
  dismissButtonLabel = 'Close',
  fontSize = 1,
  icon,
  onDismiss,
  title,
  ...props
}: CardProps) => {
  const hasChildren = Boolean(children)

  return (
    <div
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        `${PREFIX}-${GROUP_NAME}--${color}`,
        `${PREFIX}-${GROUP_NAME}--${fontSize}`,
        'text-dark relative flex flex-col gap-1 rounded-sm p-2',
        LIGHT_BG_COLORS_CLASSNAMES[color],
        dismissable ? `${PREFIX}-${GROUP_NAME}--dismissable pr-6` : '',
        props.className,
      )}
      {...omit(['className'], props)}
    >
      {(!isEmpty(title) || icon) && (
        <Typography
          className={cj(
            `${PREFIX}-${GROUP_NAME}__title`,
            `${PREFIX}-${GROUP_NAME}__title--${fontSize}`,
            'flex items-center gap-1',
          )}
          element="div"
          variant={`body-${fontSize}-bold`}
        >
          {icon && (
            <div
              className={cj(
                `${PREFIX}-${GROUP_NAME}__title__icon`,
                `${PREFIX}-${GROUP_NAME}__title__icon--${color}`,
                'text h-3 w-3',
                DARK_FG_COLORS_CLASSNAMES[color],
              )}
            >
              {icon}
            </div>
          )}

          {title}
        </Typography>
      )}

      {hasChildren && (
        <Typography
          className={cj(
            `${PREFIX}-${GROUP_NAME}__content`,
            `${PREFIX}-${GROUP_NAME}__content--${fontSize}`,
            'max-h-full overflow-y-auto',
          )}
          element="div"
          variant={`body-${fontSize}`}
        >
          {children}
        </Typography>
      )}

      {dismissable && (
        <div
          className={cj(
            `${PREFIX}-${GROUP_NAME}__dismiss`,
            'absolute top-2 right-2 h-3 w-3',
          )}
        >
          <Button
            icon={<CloseIcon />}
            iconOnly
            label={dismissButtonLabel}
            variant="text"
            {...(isFunction(onDismiss) ? { onClick: onDismiss } : {})}
          />
        </div>
      )}
    </div>
  )
}
Card.displayName = 'Card'

export default Card
