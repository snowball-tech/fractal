export enum Variants {
  Body1 = 'body-1',
  Body1Bold = 'body-1-bold',
  Body1Link = 'body-1-link',
  Body1Median = 'body-1-median',

  Body2 = 'body-2',
  Body2Bold = 'body-2-bold',
  Body2Link = 'body-2-link',
  Body2Median = 'body-2-median',

  CaptionBold = 'caption-bold',
  CaptionLink = 'caption-link',
  CaptionMedian = 'caption-median',

  Display1 = 'display-1',
  Display2 = 'display-2',
  DisplayWide = 'display-wide',

  Heading1 = 'heading-1',
  Heading2 = 'heading-2',
  Heading3 = 'heading-3',
  Heading3Link = 'heading-3-link',
  Heading4 = 'heading-4',
  Heading4Link = 'heading-4-link',
}

export const VARIANTS_MAPPING: Record<Variants, keyof JSX.IntrinsicElements> = {
  [Variants.Body1]: 'p',
  [Variants.Body1Bold]: 'p',
  [Variants.Body1Link]: 'a',
  [Variants.Body1Median]: 'p',

  [Variants.Body2]: 'p',
  [Variants.Body2Bold]: 'p',
  [Variants.Body2Link]: 'a',
  [Variants.Body2Median]: 'p',

  [Variants.CaptionBold]: 'p',
  [Variants.CaptionLink]: 'a',
  [Variants.CaptionMedian]: 'p',

  [Variants.Display1]: 'h1',
  [Variants.Display2]: 'h2',
  [Variants.DisplayWide]: 'h3',

  [Variants.Heading1]: 'h1',
  [Variants.Heading2]: 'h2',
  [Variants.Heading3]: 'h3',
  [Variants.Heading3Link]: 'a',
  [Variants.Heading4]: 'h4',
  [Variants.Heading4Link]: 'a',
}
