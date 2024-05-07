import {
  TypographyBody1BoldFontFamily,
  TypographyBody1BoldFontSize,
  TypographyBody1BoldFontWeight,
  TypographyBody1BoldLineHeight,
  TypographyBody1FontFamily,
  TypographyBody1FontSize,
  TypographyBody1FontWeight,
  TypographyBody1LineHeight,
  TypographyBody1LinkFontFamily,
  TypographyBody1LinkFontSize,
  TypographyBody1LinkFontWeight,
  TypographyBody1LinkLineHeight,
  TypographyBody1LinkTextDecoration,
  TypographyBody1MedianFontFamily,
  TypographyBody1MedianFontSize,
  TypographyBody1MedianFontWeight,
  TypographyBody1MedianLineHeight,
  TypographyBody2BoldFontFamily,
  TypographyBody2BoldFontSize,
  TypographyBody2BoldFontWeight,
  TypographyBody2BoldLineHeight,
  TypographyBody2FontFamily,
  TypographyBody2FontSize,
  TypographyBody2FontWeight,
  TypographyBody2LineHeight,
  TypographyBody2LinkFontFamily,
  TypographyBody2LinkFontSize,
  TypographyBody2LinkFontWeight,
  TypographyBody2LinkLineHeight,
  TypographyBody2LinkTextDecoration,
  TypographyBody2MedianFontFamily,
  TypographyBody2MedianFontSize,
  TypographyBody2MedianFontWeight,
  TypographyBody2MedianLineHeight,
  TypographyCaptionBoldFontFamily,
  TypographyCaptionBoldFontSize,
  TypographyCaptionBoldFontWeight,
  TypographyCaptionBoldLineHeight,
  TypographyCaptionLinkFontFamily,
  TypographyCaptionLinkFontSize,
  TypographyCaptionLinkFontWeight,
  TypographyCaptionLinkLineHeight,
  TypographyCaptionLinkTextDecoration,
  TypographyCaptionMedianFontFamily,
  TypographyCaptionMedianFontSize,
  TypographyCaptionMedianFontWeight,
  TypographyCaptionMedianLineHeight,
  TypographyDisplay1FontFamily,
  TypographyDisplay1FontSizeMd,
  TypographyDisplay1FontSizeXs,
  TypographyDisplay1FontWeight,
  TypographyDisplay1LineHeightMd,
  TypographyDisplay1LineHeightXs,
  TypographyDisplay2FontFamily,
  TypographyDisplay2FontSizeMd,
  TypographyDisplay2FontSizeXs,
  TypographyDisplay2FontWeight,
  TypographyDisplay2LineHeightMd,
  TypographyDisplay2LineHeightXs,
  TypographyDisplayWideFontFamily,
  TypographyDisplayWideFontSizeMd,
  TypographyDisplayWideFontSizeXs,
  TypographyDisplayWideFontWeight,
  TypographyDisplayWideLineHeightMd,
  TypographyDisplayWideLineHeightXs,
  TypographyHeading1FontFamily,
  TypographyHeading1FontSizeMd,
  TypographyHeading1FontSizeXs,
  TypographyHeading1FontWeight,
  TypographyHeading1LineHeightMd,
  TypographyHeading1LineHeightXs,
  TypographyHeading2FontFamily,
  TypographyHeading2FontSizeMd,
  TypographyHeading2FontSizeXs,
  TypographyHeading2FontWeight,
  TypographyHeading2LineHeight,
  TypographyHeading3FontFamily,
  TypographyHeading3FontSize,
  TypographyHeading3FontWeight,
  TypographyHeading3LineHeight,
  TypographyHeading3LinkFontFamily,
  TypographyHeading3LinkFontSize,
  TypographyHeading3LinkFontWeight,
  TypographyHeading3LinkLineHeight,
  TypographyHeading4FontFamily,
  TypographyHeading4FontSize,
  TypographyHeading4FontWeight,
  TypographyHeading4LineHeight,
  TypographyHeading4LinkFontFamily,
  TypographyHeading4LinkFontSize,
  TypographyHeading4LinkFontWeight,
  TypographyHeading4LinkLineHeight,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens'
import omit from 'lodash/fp/omit'
import {
  type CSSProperties,
  type ElementType,
  type ForwardedRef,
  createElement,
  forwardRef,
} from 'react'

import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

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
    {
      children,
      element,
      inlineStyle = false,
      variant = DEFAULT_VARIANT,
      xs = false,
      ...props
    }: TypographyProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    let typographyClassNames = ''
    switch (variant) {
      case Variants.Display1: {
        typographyClassNames = `tracking-normal xs:text-display-1-xs${xs ? '' : ' md:text-display-1-md md:leading-display-1-md'} font-display-1 font-weight-display-1 xs:leading-display-1-xs`
        break
      }

      case Variants.Display2: {
        typographyClassNames = `tracking-normal xs:text-display-2-xs${xs ? '' : ' md:text-display-2-md md:leading-display-2-md'} font-display-2 font-weight-display-2 xs:leading-display-2-xs`
        break
      }

      case Variants.DisplayWide: {
        typographyClassNames = `tracking-normal xs:text-display-wide-xs${xs ? '' : ' md:text-display-wide-md md:leading-display-wide-md'} font-display-wide font-weight-display-wide xs:leading-display-wide-xs`
        break
      }

      case Variants.Heading1: {
        typographyClassNames = `tracking-normal xs:text-heading-1-xs${xs ? '' : ' md:text-heading-1-md md:leading-heading-1-md'} font-heading-1 font-weight-heading-1 xs:leading-heading-1-xs`
        break
      }

      case Variants.Heading2: {
        typographyClassNames = `tracking-normal xs:text-heading-2-xs${xs ? '' : ' md:text-heading-2-md md:leading-heading-2-md'} font-heading-2 font-weight-heading-2 leading-heading-2`
        break
      }

      case Variants.Heading3: {
        typographyClassNames =
          'tracking-normal text-heading-3 font-heading-3 font-weight-heading-3 leading-heading-3'
        break
      }

      case Variants.Heading3Link: {
        typographyClassNames =
          'tracking-normal text-heading-3 font-heading-3 font-weight-heading-3 leading-heading-3 underline'
        break
      }

      case Variants.Heading4: {
        typographyClassNames =
          'tracking-normal text-heading-4 font-heading-4 font-weight-heading-4 leading-heading-4'
        break
      }

      case Variants.Heading4Link: {
        typographyClassNames =
          'tracking-normal text-heading-4 font-heading-4 font-weight-heading-4 leading-heading-4 underline'
        break
      }

      // eslint-disable-next-line default-case-last
      default:
      case Variants.Body1: {
        typographyClassNames =
          'tracking-normal text-body-1 font-body-1 font-weight-body-1 leading-body-1'
        break
      }

      case Variants.Body1Bold: {
        typographyClassNames =
          'tracking-normal text-body-1 font-body-1 font-weight-body-1-bold leading-body-1'
        break
      }

      case Variants.Body1Median: {
        typographyClassNames =
          'tracking-normal text-body-1 font-body-1 font-weight-body-1-median leading-body-1'
        break
      }

      case Variants.Body1Link: {
        typographyClassNames =
          'tracking-normal text-body-1 font-body-1 font-weight-body-1-link leading-body-1 underline'
        break
      }

      case Variants.Body2: {
        typographyClassNames =
          'tracking-normal text-body-2 font-body-2 font-weight-body-2 leading-body-2'
        break
      }

      case Variants.Body2Bold: {
        typographyClassNames =
          'tracking-normal text-body-2 font-body-2 font-weight-body-2-bold leading-body-2'
        break
      }

      case Variants.Body2Median: {
        typographyClassNames =
          'tracking-normal text-body-2 font-body-2 font-weight-body-2-median leading-body-2'
        break
      }

      case Variants.Body2Link: {
        typographyClassNames =
          'tracking-normal text-body-2 font-body-2 font-weight-body-2-link leading-body-2 underline'
        break
      }

      case Variants.CaptionBold: {
        typographyClassNames =
          'tracking-normal text-caption font-caption font-weight-caption-bold leading-caption'
        break
      }

      case Variants.CaptionMedian: {
        typographyClassNames =
          'tracking-normal text-caption font-caption font-weight-caption-median leading-caption'
        break
      }

      case Variants.CaptionLink: {
        typographyClassNames =
          'tracking-normal text-caption font-caption font-weight-caption-link leading-caption underline'
        break
      }
    }

    const typographyStyles: CSSProperties = {
      letterSpacing: 0,
    }

    if (inlineStyle) {
      switch (variant) {
        case Variants.Display1: {
          typographyStyles.fontFamily = TypographyDisplay1FontFamily
          typographyStyles.fontSize = xs
            ? TypographyDisplay1FontSizeXs
            : TypographyDisplay1FontSizeMd
          typographyStyles.lineHeight = xs
            ? TypographyDisplay1LineHeightXs
            : TypographyDisplay1LineHeightMd
          typographyStyles.fontWeight = TypographyDisplay1FontWeight
          break
        }

        case Variants.Display2: {
          typographyStyles.fontFamily = TypographyDisplay2FontFamily
          typographyStyles.fontSize = xs
            ? TypographyDisplay2FontSizeXs
            : TypographyDisplay2FontSizeMd
          typographyStyles.lineHeight = xs
            ? TypographyDisplay2LineHeightXs
            : TypographyDisplay2LineHeightMd
          typographyStyles.fontWeight = TypographyDisplay2FontWeight
          break
        }

        case Variants.DisplayWide: {
          typographyStyles.fontFamily = TypographyDisplayWideFontFamily
          typographyStyles.fontSize = xs
            ? TypographyDisplayWideFontSizeXs
            : TypographyDisplayWideFontSizeMd
          typographyStyles.lineHeight = xs
            ? TypographyDisplayWideLineHeightXs
            : TypographyDisplayWideLineHeightMd
          typographyStyles.fontWeight = TypographyDisplayWideFontWeight
          break
        }

        case Variants.Heading1: {
          typographyStyles.fontFamily = TypographyHeading1FontFamily
          typographyStyles.fontSize = xs
            ? TypographyHeading1FontSizeXs
            : TypographyHeading1FontSizeMd
          typographyStyles.lineHeight = xs
            ? TypographyHeading1LineHeightXs
            : TypographyHeading1LineHeightMd
          typographyStyles.fontWeight = TypographyHeading1FontWeight
          break
        }

        case Variants.Heading2: {
          typographyStyles.fontFamily = TypographyHeading2FontFamily
          typographyStyles.fontSize = xs
            ? TypographyHeading2FontSizeXs
            : TypographyHeading2FontSizeMd
          typographyStyles.lineHeight = TypographyHeading2LineHeight
          typographyStyles.fontWeight = TypographyHeading2FontWeight
          break
        }

        case Variants.Heading3: {
          typographyStyles.fontFamily = TypographyHeading3FontFamily
          typographyStyles.fontSize = TypographyHeading3FontSize
          typographyStyles.lineHeight = TypographyHeading3LineHeight
          typographyStyles.fontWeight = TypographyHeading3FontWeight
          break
        }

        case Variants.Heading3Link: {
          typographyStyles.fontFamily = TypographyHeading3LinkFontFamily
          typographyStyles.fontSize = TypographyHeading3LinkFontSize
          typographyStyles.lineHeight = TypographyHeading3LinkLineHeight
          typographyStyles.fontWeight = TypographyHeading3LinkFontWeight
          break
        }

        case Variants.Heading4: {
          typographyStyles.fontFamily = TypographyHeading4FontFamily
          typographyStyles.fontSize = TypographyHeading4FontSize
          typographyStyles.lineHeight = TypographyHeading4LineHeight
          typographyStyles.fontWeight = TypographyHeading4FontWeight
          break
        }

        case Variants.Heading4Link: {
          typographyStyles.fontFamily = TypographyHeading4LinkFontFamily
          typographyStyles.fontSize = TypographyHeading4LinkFontSize
          typographyStyles.lineHeight = TypographyHeading4LinkLineHeight
          typographyStyles.fontWeight = TypographyHeading4LinkFontWeight
          break
        }

        // eslint-disable-next-line default-case-last
        default:
        case Variants.Body1: {
          typographyStyles.fontFamily = TypographyBody1FontFamily
          typographyStyles.fontSize = TypographyBody1FontSize
          typographyStyles.lineHeight = TypographyBody1LineHeight
          typographyStyles.fontWeight = TypographyBody1FontWeight
          break
        }

        case Variants.Body1Bold: {
          typographyStyles.fontFamily = TypographyBody1BoldFontFamily
          typographyStyles.fontSize = TypographyBody1BoldFontSize
          typographyStyles.lineHeight = TypographyBody1BoldLineHeight
          typographyStyles.fontWeight = TypographyBody1BoldFontWeight
          break
        }

        case Variants.Body1Median: {
          typographyStyles.fontFamily = TypographyBody1MedianFontFamily
          typographyStyles.fontSize = TypographyBody1MedianFontSize
          typographyStyles.lineHeight = TypographyBody1MedianLineHeight
          typographyStyles.fontWeight = TypographyBody1MedianFontWeight
          break
        }

        case Variants.Body1Link: {
          typographyStyles.fontFamily = TypographyBody1LinkFontFamily
          typographyStyles.fontSize = TypographyBody1LinkFontSize
          typographyStyles.lineHeight = TypographyBody1LinkLineHeight
          typographyStyles.fontWeight = TypographyBody1LinkFontWeight
          typographyStyles.textDecoration = TypographyBody1LinkTextDecoration
          break
        }

        case Variants.Body2: {
          typographyStyles.fontFamily = TypographyBody2FontFamily
          typographyStyles.fontSize = TypographyBody2FontSize
          typographyStyles.lineHeight = TypographyBody2LineHeight
          typographyStyles.fontWeight = TypographyBody2FontWeight
          break
        }

        case Variants.Body2Bold: {
          typographyStyles.fontFamily = TypographyBody2BoldFontFamily
          typographyStyles.fontSize = TypographyBody2BoldFontSize
          typographyStyles.lineHeight = TypographyBody2BoldLineHeight
          typographyStyles.fontWeight = TypographyBody2BoldFontWeight
          break
        }

        case Variants.Body2Median: {
          typographyStyles.fontFamily = TypographyBody2MedianFontFamily
          typographyStyles.fontSize = TypographyBody2MedianFontSize
          typographyStyles.lineHeight = TypographyBody2MedianLineHeight
          typographyStyles.fontWeight = TypographyBody2MedianFontWeight
          break
        }

        case Variants.Body2Link: {
          typographyStyles.fontFamily = TypographyBody2LinkFontFamily
          typographyStyles.fontSize = TypographyBody2LinkFontSize
          typographyStyles.lineHeight = TypographyBody2LinkLineHeight
          typographyStyles.fontWeight = TypographyBody2LinkFontWeight
          typographyStyles.textDecoration = TypographyBody2LinkTextDecoration
          break
        }

        case Variants.CaptionBold: {
          typographyStyles.fontFamily = TypographyCaptionBoldFontFamily
          typographyStyles.fontSize = TypographyCaptionBoldFontSize
          typographyStyles.lineHeight = TypographyCaptionBoldLineHeight
          typographyStyles.fontWeight = TypographyCaptionBoldFontWeight
          break
        }

        case Variants.CaptionMedian: {
          typographyStyles.fontFamily = TypographyCaptionMedianFontFamily
          typographyStyles.fontSize = TypographyCaptionMedianFontSize
          typographyStyles.lineHeight = TypographyCaptionMedianLineHeight
          typographyStyles.fontWeight = TypographyCaptionMedianFontWeight
          break
        }

        case Variants.CaptionLink: {
          typographyStyles.fontFamily = TypographyCaptionLinkFontFamily
          typographyStyles.fontSize = TypographyCaptionLinkFontSize
          typographyStyles.lineHeight = TypographyCaptionLinkLineHeight
          typographyStyles.fontWeight = TypographyCaptionLinkFontWeight
          typographyStyles.textDecoration = TypographyCaptionLinkTextDecoration
          break
        }
      }
    }

    const actualElement =
      element || VARIANTS_MAPPING[variant] || (DEFAULT_ELEMENT as ElementType)

    return createElement(
      actualElement,
      {
        className: cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}__${actualElement}`,
          `${PREFIX}-${GROUP_NAME}--${variant}`,
          typographyClassNames,
          props.className,
        ),
        style: inlineStyle
          ? {
              ...typographyStyles,
              ...props.style,
            }
          : props.style,
        ...omit(['className', 'style'], props),
        ref,
      },
      children,
    )
  },
)
Typography.displayName = 'Typography'

export default Typography
