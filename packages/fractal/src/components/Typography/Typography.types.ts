import type { ElementType, ReactNode } from 'react'

import { Variants } from './Typography.constants'

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** The text to display. */
  children: ReactNode
  /** The HTML element to use to display your text. */
  element?: ElementType
  /** The variant of typography (style and size) to use. */
  variant?: `${Variants}`
}
