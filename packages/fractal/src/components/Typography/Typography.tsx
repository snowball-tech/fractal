import { cx } from '@snowball-tech/fractal-panda/css'
import { typography } from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'
import { type ElementType, createElement } from 'react'

import {
  DEFAULT_ELEMENT,
  DEFAULT_VARIANT,
  VARIANTS_MAPPING,
} from './Typography.constants'
import type { TypographyProps } from './Typography.types'

/**
 * `Typography` component is the corner stone of Fractal. It defines and
 * restricts allowed text styles throughout your UI.
 *
 * Using this component ensure you to have a consistent and accessible
 * experience.
 */
export const Typography = ({
  children,
  element,
  variant = DEFAULT_VARIANT,
  ...props
}: TypographyProps) => {
  return createElement(
    element || VARIANTS_MAPPING[variant] || (DEFAULT_ELEMENT as ElementType),
    {
      className: cx(props.className, typography({ variant })),
      ...omit(['className'], props),
    },
    children,
  )
}
Typography.displayName = 'Typography'

export default Typography
