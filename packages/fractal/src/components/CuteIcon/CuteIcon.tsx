import omit from 'lodash/fp/omit'

import { LIGHT_BG_COLORS_CLASSNAMES, PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import type { CuteIconProps } from './CuteIcon.types'

import { DEFAULT_COLOR, GROUP_NAME } from './CuteIcon.constants'

/**
 * `CuteIcon` component displays an icon in a small cute colored bubble.
 */
export const CuteIcon = ({
  color = DEFAULT_COLOR,
  icon,
  ...props
}: CuteIconProps) => (
  <div
    className={cn(
      `${PREFIX}-${GROUP_NAME}`,
      `${PREFIX}-${GROUP_NAME}--${color}`,
      'inline-flex h-5 max-h-5 min-h-5 w-5 min-w-5 max-w-5 items-center justify-center rounded-full p-1',
      LIGHT_BG_COLORS_CLASSNAMES[color],
      props.className,
    )}
    {...omit(['className'], props)}
  >
    {icon}
  </div>
)
CuteIcon.displayName = 'CuteIcon'

export default CuteIcon
