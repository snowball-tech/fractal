import { UilArrowLeft as LeftIcon } from '@iconscout/react-unicons'
import { cx } from '@snowball-tech/fractal-panda/css'
import {
  header,
  headerBackButton,
  headerMenu,
  headerTitle,
} from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography'

import type { HeaderProps } from './Header.types'

/**
 * `Header` component displays a responsive header with an integrated menu
 */
export const Header = ({
  back = false,
  children,
  menu,
  title,
  ...props
}: HeaderProps) => {
  return (
    <div
      className={cx(props.className, header())}
      {...omit(['className'], props)}
    >
      {back ? (
        <div className={headerBackButton()}>
          <LeftIcon />
        </div>
      ) : (
        false
      )}

      <Typography
        aria-label={title}
        className={headerTitle()}
        title={title}
        variant="heading-4"
      >
        {title}
      </Typography>

      {children}

      {menu ? <div className={headerMenu()}>{menu}</div> : false}
    </div>
  )
}
Header.displayName = 'Header'

export default Header
