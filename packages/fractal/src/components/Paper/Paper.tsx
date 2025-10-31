'use client'

import { useMountEffect } from '@react-hookz/web'
import {
  Border1,
  ColorBackgroundBodyDark,
  ColorBackgroundBodyWhite,
  ColorBaseGrey50,
  ColorBaseGrey70,
  ColorTextDark,
  ColorTextLight,
  ShadowBrutal1,
  ShadowBrutal1Dark,
  ShadowBrutal1Light,
  ShadowBrutal2,
  ShadowBrutal2Dark,
  ShadowBrutal2Light,
  ShadowNone,
  SizeRadiusS,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens'
import {
  SizeBorder1,
  SizeSpacing2,
  SizeSpacingHalf,
  SizeSpacingQuarter,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens-px'
import { UilAngleDown as ChevronIcon } from '@tooni/iconscout-unicons-react'
import { AnimatePresence, motion } from 'motion/react'

import {
  type CSSProperties,
  type ForwardedRef,
  forwardRef,
  useState,
} from 'react'

import isBoolean from 'lodash/fp/isBoolean'
import isFunction from 'lodash/fp/isFunction'
import isNumber from 'lodash/fp/isNumber'
import omit from 'lodash/fp/omit'

import { Button } from '@/components/Button/Button'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX, Themes } from '@/constants'
import useTheme from '@/hooks/useTheme'
import { cj, cn } from '@/styles/helpers'

import type { PaperProps } from './Paper.types'

import {
  DEFAULT_ELEVATION,
  DEFAULT_TITLE_VARIANT,
  ELEVATIONS,
  Elevations,
  GROUP_NAME,
} from './Paper.constants'

const baseElevationClassNames: Record<Elevations, string> = {
  [Elevations.Flat]: 'rounded-sm shadow-none border-none',

  [Elevations.Light]: 'rounded-sm shadow-none',

  [Elevations.Bordered]: 'rounded-sm shadow-none',

  [Elevations.Elevated]: 'rounded-sm shadow-subtle ml-quarter mb-quarter',

  [Elevations.Higher]: 'rounded-sm shadow-brutal ml-quarter mb-half',
}
export const elevationClassNames: Record<Themes, Record<Elevations, string>> = {
  [Themes.Light]: {
    [Elevations.Flat]: baseElevationClassNames[Elevations.Flat],

    [Elevations.Light]: cn(
      baseElevationClassNames[Elevations.Light],
      'border-grey-70',
    ),

    [Elevations.Bordered]: baseElevationClassNames[Elevations.Bordered],

    [Elevations.Elevated]: cn(
      baseElevationClassNames[Elevations.Elevated],
      'shadow-subtle-light',
    ),

    [Elevations.Higher]: cn(
      baseElevationClassNames[Elevations.Higher],
      'shadow-brutal-light',
    ),
  },

  [Themes.Dark]: {
    [Elevations.Flat]: baseElevationClassNames[Elevations.Flat],

    [Elevations.Light]: cn(
      baseElevationClassNames[Elevations.Light],
      'border-grey-50',
    ),

    [Elevations.Bordered]: cn(
      baseElevationClassNames[Elevations.Bordered],
      'border-primary',
    ),

    [Elevations.Elevated]: cn(
      baseElevationClassNames[Elevations.Elevated],
      'shadow-subtle-dark',
    ),

    [Elevations.Higher]: cn(
      baseElevationClassNames[Elevations.Higher],
      'shadow-brutal-dark',
    ),
  },
}

const baseElevationStyles: Record<Elevations, CSSProperties> = {
  [Elevations.Flat]: {
    border: 'none',
    borderRadius: SizeRadiusS,
    boxShadow: ShadowNone,
  },

  [Elevations.Light]: {
    borderRadius: SizeRadiusS,
    boxShadow: ShadowNone,
  },

  [Elevations.Bordered]: {
    borderRadius: SizeRadiusS,
    boxShadow: ShadowNone,
  },

  [Elevations.Elevated]: {
    borderRadius: SizeRadiusS,
    boxShadow: ShadowBrutal1,
    marginBottom: SizeSpacingQuarter,
    marginLeft: SizeSpacingQuarter,
  },

  [Elevations.Higher]: {
    borderRadius: SizeRadiusS,
    boxShadow: ShadowBrutal2,
    marginBottom: SizeSpacingHalf,
    marginLeft: SizeSpacingQuarter,
  },
}
export const elevationStyles: Record<
  Themes,
  Record<Elevations, CSSProperties>
> = {
  [Themes.Light]: {
    [Elevations.Flat]: baseElevationStyles[Elevations.Flat],

    [Elevations.Light]: {
      ...baseElevationStyles[Elevations.Light],
      borderColor: ColorBaseGrey70,
    },

    [Elevations.Bordered]: baseElevationStyles[Elevations.Bordered],

    [Elevations.Elevated]: {
      ...baseElevationStyles[Elevations.Elevated],
      boxShadow: ShadowBrutal1Light,
    },

    [Elevations.Higher]: {
      ...baseElevationStyles[Elevations.Higher],
      boxShadow: ShadowBrutal2Light,
    },
  },

  [Themes.Dark]: {
    [Elevations.Flat]: baseElevationStyles[Elevations.Flat],

    [Elevations.Light]: {
      ...baseElevationStyles[Elevations.Light],
      borderColor: ColorBaseGrey50,
    },

    [Elevations.Bordered]: baseElevationStyles[Elevations.Bordered],

    [Elevations.Elevated]: {
      ...baseElevationStyles[Elevations.Elevated],
      boxShadow: ShadowBrutal1Dark,
    },

    [Elevations.Higher]: {
      ...baseElevationStyles[Elevations.Higher],
      boxShadow: ShadowBrutal2Dark,
    },
  },
}

/**
 * `Paper` component allow to build interface with level and hierarchy.
 */
export const Paper = forwardRef<HTMLElement | null, PaperProps>(
  (
    {
      children,
      collapseButtonLabel,
      collapsed,
      collapsible = false,
      contentClassName,
      defaultCollapsed = false,
      element = 'div',
      elevation = DEFAULT_ELEVATION,
      expandButtonLabel,
      fullStyle = false,
      inlineStyle = false,
      onCollapse,
      onExpand,
      onToggle,
      theme: themeOverride,
      title,
      titleClassName,
      titleVariant = DEFAULT_TITLE_VARIANT,
      toggleButtonLabel,
      ...props
    }: PaperProps,
    ref?: ForwardedRef<HTMLElement | null>,
  ) => {
    const theme = useTheme(themeOverride)

    const [firstMount, setFirstMount] = useState(true)
    useMountEffect(() => {
      setFirstMount(false)
    })

    const convertedElevation = isNumber(elevation)
      ? (String(elevation) as Elevations)
      : elevation
    let actualElevation = ELEVATIONS[convertedElevation]
    if (!Object.keys(ELEVATIONS).includes(actualElevation)) {
      actualElevation = DEFAULT_ELEVATION
    }

    const hasTitle = Boolean(title)

    const [isCollapsed, setIsCollapsed] = useState(
      collapsed ?? defaultCollapsed,
    )
    if (isBoolean(collapsed) && collapsed !== isCollapsed) {
      setIsCollapsed(collapsed)
    }

    const toggle = () => {
      if (isFunction(onToggle)) {
        onToggle(!isCollapsed)
      }

      if (isCollapsed && isFunction(onExpand)) {
        onExpand()
      } else if (!isCollapsed && isFunction(onCollapse)) {
        onCollapse()
      }

      setIsCollapsed(!isCollapsed)
    }

    const titleComponent = hasTitle ? (
      <Typography
        className={cn(
          'w-full text-left',
          collapsible ? 'cursor-pointer' : '',
          titleClassName,
        )}
        element="div"
        variant={titleVariant || 'heading-4'}
      >
        {title}
      </Typography>
    ) : (
      false
    )

    const collapseButton = collapsible ? (
      <Button
        className="mt-half self-start"
        icon={
          <ChevronIcon
            className={cj(
              'transition-transform duration-600',
              isCollapsed ? '' : 'rotate-180',
            )}
          />
        }
        iconOnly
        label={
          toggleButtonLabel ||
          (isCollapsed
            ? expandButtonLabel || 'Déplier'
            : collapseButtonLabel || 'Replier')
        }
        variant="text"
        onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()

          toggle()
        }}
      />
    ) : (
      false
    )

    return (
      <Typography
        ref={ref}
        className={cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${actualElevation}`,
          hasTitle ? `${PREFIX}-${GROUP_NAME}--with-title` : '',
          !inlineStyle &&
            'relative flex flex-col gap-2 border-1 border-normal p-2',
          collapsible && !hasTitle ? 'min-h-7 pr-5' : '',
          !inlineStyle && elevationClassNames[theme][actualElevation],
          !inlineStyle &&
            (theme === Themes.Light
              ? 'bg-white text-dark'
              : 'bg-body-dark text-light'),
          props.className,
        )}
        element={element || 'div'}
        fullStyle={fullStyle}
        inlineStyle={inlineStyle}
        style={
          inlineStyle
            ? fullStyle
              ? {
                  boxSizing: 'border-box',
                  ...elevationStyles[theme][actualElevation],
                  backgroundColor:
                    theme === Themes.Light
                      ? ColorBackgroundBodyWhite
                      : ColorBackgroundBodyDark,
                  border: Border1,
                  borderWidth: SizeBorder1,
                  color:
                    theme === Themes.Light ? ColorTextDark : ColorTextLight,
                  padding: SizeSpacing2,
                  ...props.style,
                }
              : {
                  ...elevationStyles[theme][actualElevation],
                  backgroundColor:
                    theme === Themes.Light
                      ? undefined
                      : ColorBackgroundBodyDark,
                  border: Border1,
                  borderWidth: SizeBorder1,
                  color: theme === Themes.Light ? undefined : ColorTextLight,
                  padding: SizeSpacing2,
                  ...props.style,
                }
            : props.style
        }
        {...omit(['className', 'style'], props)}
      >
        {collapsible ? (
          <div
            className={cj(
              'flex items-center gap-1',
              hasTitle ? 'justify-between' : 'absolute right-2 top-2',
            )}
            role="button"
            tabIndex={-1}
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()

              toggle()
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                event.stopPropagation()

                toggle()
              }
            }}
          >
            {titleComponent}
            {collapseButton}
          </div>
        ) : (
          titleComponent
        )}

        {!collapsible ? (
          <div className={cn('flex size-full flex-col', contentClassName)}>
            {children}
          </div>
        ) : (
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                key="paper-content"
                animate="expanded"
                className={cn(
                  'flex size-full flex-col overflow-hidden',
                  contentClassName,
                )}
                exit="collapsed"
                initial={collapsed || !firstMount ? 'collapsed' : 'expanded'}
                transition={{
                  duration: hasTitle ? 0.4 : 0.6,
                  ease: 'easeInOut',
                }}
                variants={{
                  collapsed: { height: 0, opacity: 0 },
                  expanded: { height: 'auto', opacity: 1 },
                }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </Typography>
    )
  },
)
Paper.displayName = 'Paper'

export default Paper
