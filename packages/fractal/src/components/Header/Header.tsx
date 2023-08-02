import { cx } from '@snowball-tech/fractal-panda/css'
import {
  header,
  headerLeft,
  headerMiddle,
  headerRight,
} from '@snowball-tech/fractal-panda/recipes'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import type { HeaderProps } from './Header.types'

/**
 * `Header` component displays a responsive header.
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
      className={cx(props.className, header())}
      {...(isFunction(onClick) ? { onClick } : {})}
      {...omit(['className'], props)}
    >
      {left ? <div className={headerLeft()}>{left}</div> : false}

      {middle ? <div className={headerMiddle()}>{middle}</div> : false}

      {right ? <div className={headerRight()}>{right}</div> : false}
    </div>
  )
}
Header.displayName = 'Header'

export default Header
