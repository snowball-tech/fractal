import omit from 'lodash/fp/omit'
import {
  type ElementType,
  type ForwardedRef,
  createElement,
  forwardRef,
} from 'react'
import { twJoin } from 'tailwind-merge'

import { PREFIX } from '@/constants'

import {
  DEFAULT_ELEMENT,
  DEFAULT_VARIANT,
  GROUP_NAME,
  VARIANTS_MAPPING,
  Variants,
} from './Typography.constants'
import type { TypographyProps } from './Typography.types'

/**
 * `Typography` component is the corner stone of Fractal. It defines and
 * restricts allowed text styles throughout your UI.
 *
 * Using this component ensure you to have a consistent and accessible
 * experience.
 */
export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    { children, element, variant = DEFAULT_VARIANT, ...props }: TypographyProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    let typographyClassNames = ''
    switch (variant) {
      case Variants.Display1:
        typographyClassNames =
          'tracking-normal xs:text-display-1-xs md:text-display-1-md font-display-1 font-weight-display-1 xs:leading-display-1-xs md:leading-display-1-md'
        break

      case Variants.Display2:
        typographyClassNames =
          'tracking-normal xs:text-display-2-xs md:text-display-2-md font-display-2 font-weight-display-2 xs:leading-display-2-xs md:leading-display-2-md'
        break

      case Variants.DisplayWide:
        typographyClassNames =
          'tracking-normal xs:text-display-wide-xs md:text-display-wide-md font-display-wide font-weight-display-wide xs:leading-display-wide-xs md:leading-display-wide-md'
        break

      case Variants.Heading1:
        typographyClassNames =
          'tracking-normal xs:text-heading-1-xs md:text-heading-1-md font-heading-1 font-weight-heading-1 xs:leading-heading-1-xs md:leading-heading-1-md'
        break

      case Variants.Heading2:
        typographyClassNames =
          'tracking-normal xs:text-heading-2-xs md:text-heading-2-md font-heading-2 font-weight-heading-2 leading-heading-2'
        break

      case Variants.Heading3:
        typographyClassNames =
          'tracking-normal text-heading-3 font-heading-3 font-weight-heading-3 leading-heading-3'
        break

      case Variants.Heading3Link:
        typographyClassNames =
          'tracking-normal text-heading-3 font-heading-3 font-weight-heading-3 leading-heading-3 underline'
        break

      case Variants.Heading4:
        typographyClassNames =
          'tracking-normal text-heading-4 font-heading-4 font-weight-heading-4 leading-heading-4'
        break

      case Variants.Heading4Link:
        typographyClassNames =
          'tracking-normal text-heading-4 font-heading-4 font-weight-heading-4 leading-heading-4 underline'
        break

      // eslint-disable-next-line default-case-last
      default:
      case Variants.Body1:
        typographyClassNames =
          'tracking-normal text-body-1 font-body-1 font-weight-body-1 leading-body-1'
        break

      case Variants.Body1Bold:
        typographyClassNames =
          'tracking-normal text-body-1 font-body-1 font-weight-body-1-bold leading-body-1'
        break

      case Variants.Body1Median:
        typographyClassNames =
          'tracking-normal text-body-1 font-body-1 font-weight-body-1-median leading-body-1'
        break

      case Variants.Body1Link:
        typographyClassNames =
          'tracking-normal text-body-1 font-body-1 font-weight-body-1-link leading-body-1 underline'
        break

      case Variants.Body2:
        typographyClassNames =
          'tracking-normal text-body-2 font-body-2 font-weight-body-2 leading-body-2'
        break

      case Variants.Body2Bold:
        typographyClassNames =
          'tracking-normal text-body-2 font-body-2 font-weight-body-2-bold leading-body-2'
        break

      case Variants.Body2Median:
        typographyClassNames =
          'tracking-normal text-body-2 font-body-2 font-weight-body-2-median leading-body-2'
        break

      case Variants.Body2Link:
        typographyClassNames =
          'tracking-normal text-body-2 font-body-2 font-weight-body-2-link leading-body-2 underline'
        break

      case Variants.CaptionBold:
        typographyClassNames =
          'tracking-normal text-caption font-caption font-weight-caption-bold leading-caption'
        break

      case Variants.CaptionMedian:
        typographyClassNames =
          'tracking-normal text-caption font-caption font-weight-caption-median leading-caption'
        break

      case Variants.CaptionLink:
        typographyClassNames =
          'tracking-normal text-caption font-caption font-weight-caption-link leading-caption underline'
        break
    }

    const actualElement =
      element || VARIANTS_MAPPING[variant] || (DEFAULT_ELEMENT as ElementType)

    return createElement(
      actualElement,
      {
        className: twJoin(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}__${actualElement}`,
          `${PREFIX}-${GROUP_NAME}--${variant}`,
          typographyClassNames,
          props.className,
        ),
        ...omit(['className'], props),
        ref,
      },
      children,
    )
  },
)
Typography.displayName = 'Typography'

export default Typography
