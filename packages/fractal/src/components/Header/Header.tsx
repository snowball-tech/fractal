import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'
import { cj, cn } from '@/styles/helpers'

import type { HeaderProps } from './Header.types'

import { GROUP_NAME } from './Header.constants'

/**
 * `Header` component displays a responsive header.
 *
 * For best result, add a `@container` class on the container parent so that the
 * header can adapt its display to the available size.
 */
export const Header = ({
  children,
  left,
  onClick,
  right,
  ...props
}: HeaderProps) => (
  <div
    className={cn(
      `${PREFIX}-${GROUP_NAME}`,
      'border-normal bg-primary text-dark flex h-8 w-full items-center gap-1 border-b-2 px-3 pt-1 pb-[calc(theme(spacing.1)-var(--size-border-2))]',
      '@md:h-10 @md:content-stretch @md:justify-stretch @md:gap-0',
      props.className,
    )}
    {...(isFunction(onClick) ? { onClick } : {})}
    {...omit(['className'], props)}
  >
    {left ? (
      <div
        className={cj(
          `${PREFIX}-${GROUP_NAME}__left`,
          '@md:max-h-8 @md:justify-self-start',
        )}
      >
        {left}
      </div>
    ) : (
      false
    )}

    <Typography
      className={cj(
        `${PREFIX}-${GROUP_NAME}__middle`,
        'm-0 max-h-full w-full truncate',
        '@md:max-h-6 @md:justify-self-center @md:text-center',
      )}
      element="div"
      variant="heading-4"
    >
      {children}
    </Typography>

    {right ? (
      <div
        className={cj(
          `${PREFIX}-${GROUP_NAME}__right`,
          '@md:max-h-6 @md:justify-self-end',
        )}
      >
        {right}
      </div>
    ) : (
      false
    )}
  </div>
)
Header.displayName = 'Header'

export default Header
