import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import { twJoin, twMerge } from 'tailwind-merge'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX } from '@/constants'

import { GROUP_NAME } from './Header.constants'
import type { HeaderProps } from './Header.types'

/**
 * `Header` component displays a responsive header.
 *
 * For best result, add a `@container` class on the container parent so that the
 * header can adapt its display to the available size.
 */
export const Header = ({
  children: middle,
  left,
  onClick,
  right,
  ...props
}: HeaderProps) => {
  return (
    <div
      className={twMerge(
        `${PREFIX}-${GROUP_NAME}`,
        'flex h-8 w-full items-center gap-1 border-b-2 border-normal bg-primary px-3 pb-[calc(theme(spacing.1)-var(--size-border-2))] pt-1 text-dark',
        '@md:grid @md:h-10 @md:grid-cols-12 @md:content-stretch @md:justify-stretch @md:gap-0',
        props.className,
      )}
      {...(isFunction(onClick) ? { onClick } : {})}
      {...omit(['className'], props)}
    >
      {left ? (
        <div
          className={twJoin(
            `${PREFIX}-${GROUP_NAME}__left`,
            '@md:col-start-1 @md:col-end-4 @md:grid @md:max-h-8 @md:justify-self-start',
          )}
        >
          {left}
        </div>
      ) : (
        false
      )}

      <Typography
        className={twJoin(
          `${PREFIX}-${GROUP_NAME}__middle`,
          'm-0 max-h-full w-full overflow-hidden text-ellipsis whitespace-nowrap',
          '@md:col-start-4 @md:col-end-10 @md:grid @md:max-h-6 @md:justify-self-center  @md:text-center',
        )}
        element="div"
        variant="heading-4"
      >
        {middle}
      </Typography>

      {right ? (
        <div
          className={twJoin(
            `${PREFIX}-${GROUP_NAME}__right`,
            '@md:col-start-10 @md:col-end-13 @md:grid @md:max-h-6 @md:justify-self-end',
          )}
        >
          {right}
        </div>
      ) : (
        false
      )}
    </div>
  )
}
Header.displayName = 'Header'

export default Header
