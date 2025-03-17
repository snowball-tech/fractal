import {
  ColorDecorativePurple50,
  ColorTextDark,
  FontWeightMedian,
  TypographyBody1BoldEmailFontFamily,
  TypographyBody1BoldEmailFontSize,
  TypographyBody1BoldEmailFontWeight,
  TypographyBody1BoldEmailLetterSpacing,
  TypographyBody1BoldEmailLineHeight,
  TypographyBody1EmailFontFamily,
  TypographyBody1EmailFontSize,
  TypographyBody1EmailFontWeight,
  TypographyBody1EmailLetterSpacing,
  TypographyBody1EmailLineHeight,
  TypographyBody1LinkEmailFontFamily,
  TypographyBody1LinkEmailFontSize,
  TypographyBody1LinkEmailFontWeight,
  TypographyBody1LinkEmailLetterSpacing,
  TypographyBody1LinkEmailLineHeight,
  TypographyBody1LinkEmailTextDecoration,
  TypographyBody1MedianEmailFontFamily,
  TypographyBody1MedianEmailFontSize,
  TypographyBody1MedianEmailFontWeight,
  TypographyBody1MedianEmailLetterSpacing,
  TypographyBody1MedianEmailLineHeight,
  TypographyBody2BoldEmailFontFamily,
  TypographyBody2BoldEmailFontSize,
  TypographyBody2BoldEmailFontWeight,
  TypographyBody2BoldEmailLetterSpacing,
  TypographyBody2BoldEmailLineHeight,
  TypographyBody2EmailFontFamily,
  TypographyBody2EmailFontSize,
  TypographyBody2EmailFontWeight,
  TypographyBody2EmailLetterSpacing,
  TypographyBody2EmailLineHeight,
  TypographyBody2LinkEmailFontFamily,
  TypographyBody2LinkEmailFontSize,
  TypographyBody2LinkEmailFontWeight,
  TypographyBody2LinkEmailLetterSpacing,
  TypographyBody2LinkEmailLineHeight,
  TypographyBody2LinkEmailTextDecoration,
  TypographyBody2MedianEmailFontFamily,
  TypographyBody2MedianEmailFontSize,
  TypographyBody2MedianEmailFontWeight,
  TypographyBody2MedianEmailLetterSpacing,
  TypographyBody2MedianEmailLineHeight,
  TypographyCaptionBoldEmailFontFamily,
  TypographyCaptionBoldEmailFontSize,
  TypographyCaptionBoldEmailFontWeight,
  TypographyCaptionBoldEmailLetterSpacing,
  TypographyCaptionBoldEmailLineHeight,
  TypographyCaptionLinkEmailFontFamily,
  TypographyCaptionLinkEmailFontSize,
  TypographyCaptionLinkEmailFontWeight,
  TypographyCaptionLinkEmailLetterSpacing,
  TypographyCaptionLinkEmailLineHeight,
  TypographyCaptionLinkEmailTextDecoration,
  TypographyCaptionMedianEmailFontFamily,
  TypographyCaptionMedianEmailFontSize,
  TypographyCaptionMedianEmailFontWeight,
  TypographyCaptionMedianEmailLetterSpacing,
  TypographyCaptionMedianEmailLineHeight,
  TypographyDisplay1EmailFontFamily,
  TypographyDisplay1EmailFontSizeMd,
  TypographyDisplay1EmailFontSizeXxs,
  TypographyDisplay1EmailFontWeight,
  TypographyDisplay1EmailLetterSpacing,
  TypographyDisplay1EmailLineHeightMd,
  TypographyDisplay1EmailLineHeightXxs,
  TypographyDisplay2EmailFontFamily,
  TypographyDisplay2EmailFontSizeMd,
  TypographyDisplay2EmailFontSizeXxs,
  TypographyDisplay2EmailFontWeight,
  TypographyDisplay2EmailLetterSpacing,
  TypographyDisplay2EmailLineHeightMd,
  TypographyDisplay2EmailLineHeightXxs,
  TypographyDisplayWideEmailFontFamily,
  TypographyDisplayWideEmailFontSizeMd,
  TypographyDisplayWideEmailFontSizeXxs,
  TypographyDisplayWideEmailFontWeight,
  TypographyDisplayWideEmailLetterSpacing,
  TypographyDisplayWideEmailLineHeightMd,
  TypographyDisplayWideEmailLineHeightXxs,
  TypographyHeading1EmailFontFamily,
  TypographyHeading1EmailFontSizeMd,
  TypographyHeading1EmailFontSizeXxs,
  TypographyHeading1EmailFontWeight,
  TypographyHeading1EmailLetterSpacing,
  TypographyHeading1EmailLineHeightMd,
  TypographyHeading1EmailLineHeightXxs,
  TypographyHeading2EmailFontFamily,
  TypographyHeading2EmailFontSizeMd,
  TypographyHeading2EmailFontSizeXxs,
  TypographyHeading2EmailFontWeight,
  TypographyHeading2EmailLetterSpacing,
  TypographyHeading2EmailLineHeightMd,
  TypographyHeading2EmailLineHeightXxs,
  TypographyHeading3EmailFontFamily,
  TypographyHeading3EmailFontSize,
  TypographyHeading3EmailFontWeight,
  TypographyHeading3EmailLetterSpacing,
  TypographyHeading3EmailLineHeight,
  TypographyHeading3LinkEmailFontFamily,
  TypographyHeading3LinkEmailFontSize,
  TypographyHeading3LinkEmailFontWeight,
  TypographyHeading3LinkEmailLetterSpacing,
  TypographyHeading3LinkEmailLineHeight,
  TypographyHeading4EmailFontFamily,
  TypographyHeading4EmailFontSize,
  TypographyHeading4EmailFontWeight,
  TypographyHeading4EmailLetterSpacing,
  TypographyHeading4EmailLineHeight,
  TypographyHeading4LinkEmailFontFamily,
  TypographyHeading4LinkEmailFontSize,
  TypographyHeading4LinkEmailFontWeight,
  TypographyHeading4LinkEmailLetterSpacing,
  TypographyHeading4LinkEmailLineHeight,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens'

import {
  type CSSProperties,
  type ElementType,
  type ForwardedRef,
  createElement,
  forwardRef,
} from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import omit from 'lodash/fp/omit'

import { PREFIX } from '@/constants'
import { cn } from '@/styles/helpers'

import type { TypographyProps } from './Typography.types'

import {
  DEFAULT_ELEMENT,
  DEFAULT_VARIANT,
  GROUP_NAME,
  Variants,
  VARIANTS_MAPPING,
} from './Typography.constants'

const MONOSPACED_ELEMENTS: Set<ElementType> = new Set([
  'code',
  'kbd',
  'pre',
  'samp',
])

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
      disableClickTracking = false,
      element,
      fullStyle = false,
      inlineStyle = false,
      variant = DEFAULT_VARIANT,
      xs = false,
      ...props
    }: TypographyProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    let actualElement = element || VARIANTS_MAPPING[variant] || DEFAULT_ELEMENT
    if (!isEmpty(props.href) && isEmpty(element)) {
      actualElement = 'a'
    }
    if (element === 'a' && isEmpty(props.href)) {
      actualElement = DEFAULT_ELEMENT
    }

    let typographyClassNames = ''
    switch (variant) {
      case Variants.Body1Bold: {
        typographyClassNames =
          'tracking-normal text-body-1 font-body-1 font-weight-body-1-bold leading-body-1'
        break
      }

      case Variants.Body1Link: {
        typographyClassNames =
          'tracking-normal text-body-1 font-body-1 font-weight-body-1-link leading-body-1 underline'
        break
      }

      case Variants.Body1Median: {
        typographyClassNames =
          'tracking-normal text-body-1 font-body-1 font-weight-body-1-median leading-body-1'
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

      case Variants.Body2Link: {
        typographyClassNames =
          'tracking-normal text-body-2 font-body-2 font-weight-body-2-link leading-body-2 underline'
        break
      }

      case Variants.Body2Median: {
        typographyClassNames =
          'tracking-normal text-body-2 font-body-2 font-weight-body-2-median leading-body-2'
        break
      }

      case Variants.CaptionBold: {
        typographyClassNames =
          'tracking-normal text-caption font-caption font-weight-caption-bold leading-caption'
        break
      }

      case Variants.CaptionLink: {
        typographyClassNames =
          'tracking-normal text-caption font-caption font-weight-caption-link leading-caption underline'
        break
      }

      case Variants.CaptionMedian: {
        typographyClassNames =
          'tracking-normal text-caption font-caption font-weight-caption-median leading-caption'
        break
      }
      case Variants.Display1: {
        typographyClassNames = `tracking-normal xxs:text-display-1-xxs${xs ? '' : ' md:text-display-1-md md:leading-display-1-md'} font-display-1 font-weight-display-1 xxs:leading-display-1-xxs`
        break
      }

      case Variants.Display2: {
        typographyClassNames = `tracking-normal xxs:text-display-2-xxs${xs ? '' : ' md:text-display-2-md md:leading-display-2-md'} font-display-2 font-weight-display-2 xxs:leading-display-2-xxs`
        break
      }

      case Variants.DisplayWide: {
        typographyClassNames = `tracking-normal xxs:text-display-wide-xxs${xs ? '' : ' md:text-display-wide-md md:leading-display-wide-md'} font-display-wide font-weight-display-wide xxs:leading-display-wide-xxs`
        break
      }

      case Variants.Heading1: {
        typographyClassNames = `tracking-normal xxs:text-heading-1-xxs${xs ? '' : ' md:text-heading-1-md md:leading-heading-1-md'} font-heading-1 font-weight-heading-1 xxs:leading-heading-1-xxs`
        break
      }

      case Variants.Heading2: {
        typographyClassNames = `tracking-normal xxs:text-heading-2-xxs${xs ? '' : ' md:text-heading-2-md md:leading-heading-2-md'} font-heading-2 font-weight-heading-2 xxs:leading-heading-2-xxs`
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

      default: {
        typographyClassNames =
          actualElement === 'a'
            ? 'tracking-normal text-body-1 font-body-1 font-weight-body-1-link leading-body-1 underline'
            : 'tracking-normal text-body-1 font-body-1 font-weight-body-1 leading-body-1'
        break
      }
    }

    const typographyStyles: CSSProperties = {
      margin: 0,
    }

    if (fullStyle) {
      typographyStyles.boxSizing = 'border-box'
      typographyStyles.color = ColorTextDark
    }

    if (inlineStyle) {
      switch (variant) {
        case Variants.Body1Bold: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyBody1BoldEmailFontFamily
          }

          typographyStyles.fontSize = TypographyBody1BoldEmailFontSize
          typographyStyles.lineHeight = TypographyBody1BoldEmailLineHeight
          typographyStyles.fontWeight = TypographyBody1BoldEmailFontWeight
          typographyStyles.letterSpacing = TypographyBody1BoldEmailLetterSpacing
          break
        }

        case Variants.Body1Link: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyBody1LinkEmailFontFamily
          }

          typographyStyles.fontSize = TypographyBody1LinkEmailFontSize
          typographyStyles.lineHeight = TypographyBody1LinkEmailLineHeight
          typographyStyles.fontWeight = TypographyBody1LinkEmailFontWeight
          typographyStyles.letterSpacing = TypographyBody1LinkEmailLetterSpacing
          typographyStyles.textDecoration =
            TypographyBody1LinkEmailTextDecoration
          break
        }

        case Variants.Body1Median: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyBody1MedianEmailFontFamily
          }

          typographyStyles.fontSize = TypographyBody1MedianEmailFontSize
          typographyStyles.lineHeight = TypographyBody1MedianEmailLineHeight
          typographyStyles.fontWeight = TypographyBody1MedianEmailFontWeight
          typographyStyles.letterSpacing =
            TypographyBody1MedianEmailLetterSpacing
          break
        }

        case Variants.Body2: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyBody2EmailFontFamily
            typographyStyles.fontWeight = TypographyBody2EmailFontWeight
          }

          typographyStyles.fontSize = TypographyBody2EmailFontSize
          typographyStyles.lineHeight = TypographyBody2EmailLineHeight
          typographyStyles.letterSpacing = TypographyBody2EmailLetterSpacing
          break
        }

        case Variants.Body2Bold: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyBody2BoldEmailFontFamily
          }

          typographyStyles.fontSize = TypographyBody2BoldEmailFontSize
          typographyStyles.lineHeight = TypographyBody2BoldEmailLineHeight
          typographyStyles.fontWeight = TypographyBody2BoldEmailFontWeight
          typographyStyles.letterSpacing = TypographyBody2BoldEmailLetterSpacing
          break
        }

        case Variants.Body2Link: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyBody2LinkEmailFontFamily
          }

          typographyStyles.fontSize = TypographyBody2LinkEmailFontSize
          typographyStyles.lineHeight = TypographyBody2LinkEmailLineHeight
          typographyStyles.fontWeight = TypographyBody2LinkEmailFontWeight
          typographyStyles.letterSpacing = TypographyBody2LinkEmailLetterSpacing
          typographyStyles.textDecoration =
            TypographyBody2LinkEmailTextDecoration
          break
        }

        case Variants.Body2Median: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyBody2MedianEmailFontFamily
          }

          typographyStyles.fontSize = TypographyBody2MedianEmailFontSize
          typographyStyles.lineHeight = TypographyBody2MedianEmailLineHeight
          typographyStyles.fontWeight = TypographyBody2MedianEmailFontWeight
          typographyStyles.letterSpacing =
            TypographyBody2MedianEmailLetterSpacing
          break
        }

        case Variants.CaptionBold: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyCaptionBoldEmailFontFamily
          }

          typographyStyles.fontSize = TypographyCaptionBoldEmailFontSize
          typographyStyles.lineHeight = TypographyCaptionBoldEmailLineHeight
          typographyStyles.fontWeight = TypographyCaptionBoldEmailFontWeight
          typographyStyles.letterSpacing =
            TypographyCaptionBoldEmailLetterSpacing
          break
        }

        case Variants.CaptionLink: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyCaptionLinkEmailFontFamily
          }

          typographyStyles.fontSize = TypographyCaptionLinkEmailFontSize
          typographyStyles.lineHeight = TypographyCaptionLinkEmailLineHeight
          typographyStyles.fontWeight = TypographyCaptionLinkEmailFontWeight
          typographyStyles.letterSpacing =
            TypographyCaptionLinkEmailLetterSpacing
          typographyStyles.textDecoration =
            TypographyCaptionLinkEmailTextDecoration
          break
        }

        case Variants.CaptionMedian: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyCaptionMedianEmailFontFamily
          }

          typographyStyles.fontSize = TypographyCaptionMedianEmailFontSize
          typographyStyles.lineHeight = TypographyCaptionMedianEmailLineHeight
          typographyStyles.fontWeight = TypographyCaptionMedianEmailFontWeight
          typographyStyles.letterSpacing =
            TypographyCaptionMedianEmailLetterSpacing
          break
        }

        case Variants.Display1: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyDisplay1EmailFontFamily
          }

          typographyStyles.fontSize = xs
            ? TypographyDisplay1EmailFontSizeXxs
            : TypographyDisplay1EmailFontSizeMd
          typographyStyles.lineHeight = xs
            ? TypographyDisplay1EmailLineHeightXxs
            : TypographyDisplay1EmailLineHeightMd
          typographyStyles.fontWeight = TypographyDisplay1EmailFontWeight
          typographyStyles.letterSpacing = TypographyDisplay1EmailLetterSpacing
          break
        }

        case Variants.Display2: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyDisplay2EmailFontFamily
          }

          typographyStyles.fontSize = xs
            ? TypographyDisplay2EmailFontSizeXxs
            : TypographyDisplay2EmailFontSizeMd
          typographyStyles.lineHeight = xs
            ? TypographyDisplay2EmailLineHeightXxs
            : TypographyDisplay2EmailLineHeightMd
          typographyStyles.fontWeight = TypographyDisplay2EmailFontWeight
          typographyStyles.letterSpacing = TypographyDisplay2EmailLetterSpacing
          break
        }

        case Variants.DisplayWide: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyDisplayWideEmailFontFamily
          }

          typographyStyles.fontSize = xs
            ? TypographyDisplayWideEmailFontSizeXxs
            : TypographyDisplayWideEmailFontSizeMd
          typographyStyles.lineHeight = xs
            ? TypographyDisplayWideEmailLineHeightXxs
            : TypographyDisplayWideEmailLineHeightMd
          typographyStyles.fontWeight = TypographyDisplayWideEmailFontWeight
          typographyStyles.letterSpacing =
            TypographyDisplayWideEmailLetterSpacing
          break
        }

        case Variants.Heading1: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyHeading1EmailFontFamily
          }

          typographyStyles.fontSize = xs
            ? TypographyHeading1EmailFontSizeXxs
            : TypographyHeading1EmailFontSizeMd
          typographyStyles.lineHeight = xs
            ? TypographyHeading1EmailLineHeightXxs
            : TypographyHeading1EmailLineHeightMd
          typographyStyles.fontWeight = TypographyHeading1EmailFontWeight
          typographyStyles.letterSpacing = TypographyHeading1EmailLetterSpacing
          break
        }

        case Variants.Heading2: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyHeading2EmailFontFamily
          }

          typographyStyles.fontSize = xs
            ? TypographyHeading2EmailFontSizeXxs
            : TypographyHeading2EmailFontSizeMd
          typographyStyles.lineHeight = xs
            ? TypographyHeading2EmailLineHeightXxs
            : TypographyHeading2EmailLineHeightMd
          typographyStyles.fontWeight = TypographyHeading2EmailFontWeight
          typographyStyles.letterSpacing = TypographyHeading2EmailLetterSpacing
          break
        }

        case Variants.Heading3: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyHeading3EmailFontFamily
          }

          typographyStyles.fontSize = TypographyHeading3EmailFontSize
          typographyStyles.lineHeight = TypographyHeading3EmailLineHeight
          typographyStyles.fontWeight = TypographyHeading3EmailFontWeight
          typographyStyles.letterSpacing = TypographyHeading3EmailLetterSpacing
          break
        }

        case Variants.Heading3Link: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyHeading3LinkEmailFontFamily
          }

          typographyStyles.fontSize = TypographyHeading3LinkEmailFontSize
          typographyStyles.lineHeight = TypographyHeading3LinkEmailLineHeight
          typographyStyles.fontWeight = TypographyHeading3LinkEmailFontWeight
          typographyStyles.letterSpacing =
            TypographyHeading3LinkEmailLetterSpacing
          break
        }

        case Variants.Heading4: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyHeading4EmailFontFamily
          }

          typographyStyles.fontSize = TypographyHeading4EmailFontSize
          typographyStyles.lineHeight = TypographyHeading4EmailLineHeight
          typographyStyles.fontWeight = TypographyHeading4EmailFontWeight
          typographyStyles.letterSpacing = TypographyHeading4EmailLetterSpacing
          break
        }

        case Variants.Heading4Link: {
          if (fullStyle) {
            typographyStyles.fontFamily = TypographyHeading4LinkEmailFontFamily
          }

          typographyStyles.fontSize = TypographyHeading4LinkEmailFontSize
          typographyStyles.lineHeight = TypographyHeading4LinkEmailLineHeight
          typographyStyles.fontWeight = TypographyHeading4LinkEmailFontWeight
          typographyStyles.letterSpacing =
            TypographyHeading4LinkEmailLetterSpacing
          break
        }

        default: {
          if (actualElement === 'a') {
            if (fullStyle) {
              typographyStyles.fontFamily = TypographyBody1LinkEmailFontFamily
            }

            typographyStyles.fontSize = TypographyBody1LinkEmailFontSize
            typographyStyles.lineHeight = TypographyBody1LinkEmailLineHeight
            typographyStyles.fontWeight = TypographyBody1LinkEmailFontWeight
            typographyStyles.letterSpacing =
              TypographyBody1LinkEmailLetterSpacing
            typographyStyles.textDecoration =
              TypographyBody1LinkEmailTextDecoration
          } else {
            if (fullStyle) {
              typographyStyles.fontFamily = TypographyBody1EmailFontFamily
              typographyStyles.fontWeight = TypographyBody1EmailFontWeight
            }

            typographyStyles.fontSize = TypographyBody1EmailFontSize
            typographyStyles.lineHeight = TypographyBody1EmailLineHeight
            typographyStyles.letterSpacing = TypographyBody1EmailLetterSpacing
          }
          break
        }
      }
    }

    const forcedStyles: CSSProperties = {}

    if (actualElement === 'a') {
      typographyStyles.color = ColorTextDark
    } else if (MONOSPACED_ELEMENTS.has(actualElement)) {
      forcedStyles.fontFamily = 'monospace, monospace'

      if (actualElement === 'code') {
        forcedStyles.color = ColorDecorativePurple50
        forcedStyles.fontWeight = FontWeightMedian
      }
    }

    return createElement(
      actualElement,
      {
        className: cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}__${actualElement}`,
          `${PREFIX}-${GROUP_NAME}--${variant}`,
          !inlineStyle && typographyClassNames,
          props.className,
        ),
        style: inlineStyle
          ? {
              ...forcedStyles,
              ...typographyStyles,
              ...props.style,
            }
          : { ...forcedStyles, ...props.style },
        ...omit(['className', 'style'], props),
        ...(actualElement === 'a' &&
        !isEmpty(props.href) &&
        disableClickTracking
          ? { clicktracking: 'off' }
          : {}),
        ref,
      },
      children,
    )
  },
)
Typography.displayName = 'Typography'

export default Typography
