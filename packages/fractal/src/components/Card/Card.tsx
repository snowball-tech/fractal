import CloseIcon from '@iconscout/react-unicons/dist/icons/uil-times'
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import noop from 'lodash/fp/noop'
import omit from 'lodash/fp/omit'

import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography/Typography'
import {
  DARK_FG_COLORS_CLASSNAMES,
  LIGHT_BG_COLORS_CLASSNAMES,
  PREFIX,
} from '@/constants'
import { cj, cn } from '@/styles/helpers'

import { DEFAULT_COLOR, GROUP_NAME } from './Card.constants'
import type { CardProps } from './Card.types'

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
  fontSize = 1,
  icon,
  onDismiss,
  title,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        `${PREFIX}-${GROUP_NAME}`,
        `${PREFIX}-${GROUP_NAME}--${color}`,
        `${PREFIX}-${GROUP_NAME}--${fontSize}`,
        'relative flex flex-col gap-1 rounded-sm p-2 text-dark',
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
                'h-3 w-3 text',
                DARK_FG_COLORS_CLASSNAMES[color],
              )}
            >
              {icon}
            </div>
          )}

          {title}
        </Typography>
      )}

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

      {dismissable && (
        <div
          className={cj(
            `${PREFIX}-${GROUP_NAME}__dismiss`,
            'absolute right-2 top-2 h-3 w-3',
          )}
        >
          <Button
            icon={<CloseIcon />}
            iconOnly
            label=""
            variant="text"
            onClick={() => (isFunction(onDismiss) ? onDismiss() : noop)}
          />
        </div>
      )}
    </div>
  )
}
Card.displayName = 'Card'

export default Card
