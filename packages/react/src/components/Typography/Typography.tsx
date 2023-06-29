import { typography } from '@snowball-tech/panda-fractal-react/recipes'
import { createElement } from 'react'

import {
  DEFAULT_ELEMENT,
  DEFAULT_VARIANT,
  VARIANTS_MAPPING,
} from './Typography.constants'
import type { TypographyProps } from './Typography.types'

/**
 * `Typography` component is the corner stone of Fractal. It defines and boxes
 * allowed text styles throughout your UI.
 *
 * Using this component ensure you to have a consistent and accessible
 * experience.
 */
export default function Typography({
  children,
  element,
  variant = DEFAULT_VARIANT,
}: TypographyProps) {
  return createElement(
    element || VARIANTS_MAPPING[variant] || DEFAULT_ELEMENT,
    { className: typography({ variant }) },
    children,
  )
}
