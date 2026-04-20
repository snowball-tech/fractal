'use client'

import { useMountEffect } from '@react-hookz/web'
import {
  Border1,
  ColorBackgroundBodyDark,
  ColorBackgroundBodyWhite,
  ColorTextDark,
  ColorTextLight,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens'
import {
  SizeBorder1,
  SizeSpacing2,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens-px'
import { UilAngleDown as ChevronIcon } from '@tooni/iconscout-unicons-react'
import { AnimatePresence, motion } from 'motion/react'

import { type ForwardedRef, forwardRef, useState } from 'react'

import isBoolean from 'lodash/fp/isBoolean'
import isFunction from 'lodash/fp/isFunction'
import isNumber from 'lodash/fp/isNumber'
import isString from 'lodash/fp/isString'
import omit from 'lodash/fp/omit'

import { Button } from '@/components/Button/Button'
import { Typography } from '@/components/Typography/Typography'
import { PREFIX, Themes } from '@/constants'
import useTheme from '@/hooks/useTheme'
import { cj, cn } from '@/styles/helpers'
import { onlyText } from '@/utils'

import type { PaperProps } from './Paper.types'

import {
  DEFAULT_ELEVATION,
  DEFAULT_TITLE_VARIANT,
  elevationClassNames,
  ELEVATIONS,
  Elevations,
  elevationStyles,
  GROUP_NAME,
} from './Paper.constants'

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
    const textTitle = isString(title) ? title : onlyText(title)

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
        element={isString(title) ? undefined : 'div'}
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
        aria-label={textTitle}
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
        title={textTitle}
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
