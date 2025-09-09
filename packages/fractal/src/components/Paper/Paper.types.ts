import type { AllHTMLAttributes, ElementType, ReactNode } from 'react'

import { Themes } from '@/constants'

import type {
  AlternateElevations,
  Elevations,
  TitleVariants,
} from './Paper.constants'

export interface PaperProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'title'> {
  /** The content of the paper. */
  children: ReactNode
  /**
   * The label of the collapse/expand button when in the expanded state.
   *
   * This or `toggleButtonLabel` is mandatory if the paper is collapsible.
   */
  collapseButtonLabel?: string
  /** Indicates if the paper is collapsed. */
  collapsed?: boolean
  /** Indicates if the paper can be collapsed. */
  collapsible?: boolean
  /** The class name to use on the content of the paper. */
  contentClassName?: string
  /** The default collapsed state of the paper. */
  defaultCollapsed?: boolean
  /** The HTML element to use to display your paper. */
  element?: ElementType
  /**
   * The elevation level of the paper.
   *
   * 0 (flat) is a non elevated non-bordered block
   * light is a non elevated block with a lighter (greyish) border
   * 1 (bordered) is a non elevated bordered block
   * 2 (elevated) is a lightly raised (small shadow) bordered block
   * 3 (higher) is a raised bordered block
   */
  elevation?: 0 | 1 | 2 | 3 | `${AlternateElevations}` | `${Elevations}`
  /**
   * The label of the collapse/expand button when in the collapsed state.
   *
   * This or `toggleButtonLabel` is mandatory if the paper is collapsible.
   */
  expandButtonLabel?: string
  /**
   * Indicates to inline all styles (including resets, font, ...) or only the
   * needed ones.
   *
   * Only used with `inlineStyle` enabled.
   */
  fullStyle?: boolean
  /**
   * Indicates to inline the styles instead of using Tailwind CSS classes.
   *
   * The typical usage for this is when creating HTML for an email.
   */
  inlineStyle?: boolean
  /**
   * Force the theme of the paper.
   *
   * If none is given, it will use the one provided by the Context/Provider.
   */
  theme?: Themes
  /** The (optional) title of the paper block. */
  title?: ReactNode
  /** The class name to use on the title of the paper block. */
  titleClassName?: string
  /** The typographic variant of the paper block title. */
  titleVariant?: `${TitleVariants}`
  /**
   * The label of the collapse/expand button whatever the state of the paper is.
   * It takes precedence over `collapseButtonLabel` and `expandButtonLabel`.
   *
   * This or both `collapseButtonLabel` and `expandButtonLabel` is mandatory if
   * the paper is collapsible.
   */
  toggleButtonLabel?: string
}
