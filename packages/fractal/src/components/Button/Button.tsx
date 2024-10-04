'use client'

import { composeRefs } from '@radix-ui/react-compose-refs'
import {
  Border1,
  BorderTransparent2,
  ColorBackgroundDisabled,
  ColorBaseGrey30,
  ColorBaseTransparent,
  ColorBaseWhite,
  ColorBorderDisabled,
  ColorBorderLight,
  ColorBrandPrimaryDark,
  ColorBrandSecondary,
  ColorTextDark,
  ColorTextDisabled,
  ColorTextLight,
  ShadowBrutal1,
  ShadowBrutal1Dark,
  ShadowNone,
  SizeRadiusRounded,
  SizeSpacing1,
  SizeSpacing2,
  SizeSpacing3,
  SizeSpacing6,
  SizeSpacingHalf,
  SizeSpacingQuarter,
} from '@snowball-tech/design-tokens/dist/web/typescript/design-tokens'

import {
  type CSSProperties,
  type ForwardedRef,
  type MouseEvent,
  type TouchEvent,
  createElement,
  forwardRef,
  useRef,
} from 'react'

import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'

import { Typography } from '@/components/Typography/Typography'
import { Breakpoints, PREFIX, Themes } from '@/constants'
import useTheme from '@/hooks/useTheme'
import { cj, cn } from '@/styles/helpers'

import type { ButtonProps } from './Button.types'

import { DEFAULT_VARIANT, GROUP_NAME, Variants } from './Button.constants'

export const variantClassNames: Record<Themes, Record<Variants, string>> = {
  [Themes.Light]: {
    [Variants.Display]:
      'bg-white text-dark shadow-subtle hover:shadow-brutal focus:shadow-brutal active:shadow-none border-1 border-normal active:-translate-x-quarter active:translate-y-half hover:translate-x-0 hover:-translate-y-quarter focus:translate-x-0 focus:-translate-y-quarter px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Primary]:
      'bg-secondary hover:bg-white active:bg-primary focus:bg-white active:!border-transparent text-light hover:text-dark active:text-dark focus:text-dark border-2 border-transparent hover:border-normal focus:border-normal px-[calc(theme(spacing.3)-theme(spacing.half))] py-half',

    [Variants.Secondary]:
      'bg-white active:bg-secondary text-dark active:text-light hover:shadow-hover focus:shadow-hover active:shadow-hover border-1 border-normal px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Text]: 'bg-transparent text-dark',
  },

  [Themes.Dark]: {
    [Variants.Display]:
      'bg-white text-dark shadow-subtle-dark hover:shadow-brutal-dark focus:shadow-brutal-dark active:shadow-none border-1 border-normal active:-translate-x-quarter active:translate-y-half hover:translate-x-0 hover:-translate-y-quarter focus:translate-x-0 focus:-translate-y-quarter px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Primary]:
      'bg-primary-dark hover:bg-light active:bg-primary-dark focus:bg-light active:!border-transparent text-dark hover:text-dark active:text-light focus:text-dark border-2 border-transparent hover:border-light focus:border-light px-[calc(theme(spacing.3)-theme(spacing.half))] py-half',

    [Variants.Secondary]:
      'bg-white active:bg-primary-dark text-dark active:text-light border-1 border-light px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Text]: 'bg-transparent text-light',
  },
}

export const variantStyles: Record<Themes, Record<Variants, CSSProperties>> = {
  [Themes.Light]: {
    [Variants.Display]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      boxShadow: ShadowBrutal1,
      color: ColorTextDark,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Primary]: {
      backgroundColor: ColorBrandSecondary,
      border: BorderTransparent2,
      color: ColorTextLight,
      padding: `${SizeSpacingHalf} calc(${SizeSpacing3} - ${SizeSpacingHalf})`,
    },

    [Variants.Secondary]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      color: ColorTextDark,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Text]: {
      backgroundColor: ColorBaseTransparent,
      color: ColorTextDark,
    },
  },

  [Themes.Dark]: {
    [Variants.Display]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      boxShadow: ShadowBrutal1Dark,
      color: ColorTextDark,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Primary]: {
      backgroundColor: ColorBrandPrimaryDark,
      border: BorderTransparent2,
      color: ColorTextDark,
      padding: `${SizeSpacingHalf} calc(${SizeSpacing3} - ${SizeSpacingHalf})`,
    },

    [Variants.Secondary]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      borderColor: ColorBorderLight,
      color: ColorTextDark,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Text]: {
      backgroundColor: ColorBaseTransparent,
      color: ColorTextLight,
    },
  },
}

export const variantDisabledClassNames: Record<
  Themes,
  Record<Variants, string>
> = {
  [Themes.Light]: {
    [Variants.Display]:
      'bg-white text-disabled shadow-none border-1 border-disabled px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Primary]:
      'bg-disabled text-light px-[calc(theme(spacing.3)-theme(spacing.half))] py-half',

    [Variants.Secondary]:
      'bg-white text-disabled shadow-none border-1 border-disabled px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Text]: 'bg-transparent text-disabled',
  },

  [Themes.Dark]: {
    [Variants.Display]:
      'bg-white text-disabled shadow-none border-1 border-disabled px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Primary]:
      'bg-disabled text-disabled px-[calc(theme(spacing.3)-theme(spacing.half))] py-half',

    [Variants.Secondary]:
      'bg-white text-disabled shadow-none border-1 border-disabled px-[calc(theme(spacing.3)-theme(spacing.quarter))] py-[calc(theme(spacing.1)-theme(spacing.quarter))]',

    [Variants.Text]: 'bg-transparent text-grey-30',
  },
}

export const variantDisabledStyles: Record<
  Themes,
  Record<Variants, CSSProperties>
> = {
  [Themes.Light]: {
    [Variants.Display]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      borderColor: ColorBorderDisabled,
      boxShadow: ShadowNone,
      color: ColorTextDisabled,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Primary]: {
      backgroundColor: ColorBackgroundDisabled,
      color: ColorTextLight,
      padding: `${SizeSpacingHalf} calc(${SizeSpacing3} - ${SizeSpacingHalf})`,
    },

    [Variants.Secondary]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      borderColor: ColorBorderDisabled,
      boxShadow: ShadowNone,
      color: ColorTextDisabled,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Text]: {
      backgroundColor: ColorBaseTransparent,
      color: ColorTextDisabled,
    },
  },

  [Themes.Dark]: {
    [Variants.Display]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      borderColor: ColorBorderDisabled,
      boxShadow: ShadowNone,
      color: ColorTextDisabled,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Primary]: {
      backgroundColor: ColorBackgroundDisabled,
      color: ColorTextDisabled,
      padding: `${SizeSpacingHalf} calc(${SizeSpacing3} - ${SizeSpacingHalf})`,
    },

    [Variants.Secondary]: {
      backgroundColor: ColorBaseWhite,
      border: Border1,
      borderColor: ColorBorderDisabled,
      boxShadow: ShadowNone,
      color: ColorTextDisabled,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },

    [Variants.Text]: {
      backgroundColor: ColorBaseTransparent,
      color: ColorBaseGrey30,
    },
  },
}

/**
 * `Button` component is used to allow the user to make an interaction on either
 * a button or a link element.
 */
export const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      children,
      disabled = false,
      element,
      fullWidth = false,
      href,
      icon,
      iconOnly = false,
      iconPosition = 'right',
      iconResponsive = false,
      inlineStyle = false,
      label,
      onClick,
      target,
      theme: themeOverride,
      truncate = true,
      type = 'button',
      underlined,
      variant = DEFAULT_VARIANT,
      wrap = false,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const theme = useTheme(themeOverride)

    const hasIcon = Boolean(icon)
    const hasChildren = Boolean(children)
    if (!hasChildren && isEmpty(label)) {
      console.warn(
        'You must provide a `label` or `children` to the `Button` component',
      )
    }

    const buttonRef = useRef<HTMLElement>(null)
    const combinedRef = composeRefs(ref, buttonRef)

    const handleClick = (event: MouseEvent<HTMLElement>) => {
      if (!disabled && isFunction(onClick)) {
        onClick(event)
      }

      buttonRef.current?.blur()
    }

    const handleTouchStart = (event: TouchEvent<HTMLButtonElement>) => {
      if (isFunction(props.onTouchStart)) {
        props.onTouchStart(event)

        return
      }

      if ('ontouchstart' in document.documentElement && isFunction(onClick)) {
        onClick(event as unknown as MouseEvent<HTMLElement>)
      }
    }

    const handleTouchEnd = (event: TouchEvent<HTMLButtonElement>) => {
      if (isFunction(props.onTouchEnd)) {
        props.onTouchEnd(event)
      }

      if (
        'ontouchstart' in document.documentElement &&
        !isFunction(props.onTouchStart) &&
        isFunction(onClick)
      ) {
        event.preventDefault()
      }
    }

    const asLink = !isEmpty(href)
    const isTextVariant = variant === Variants.Text

    const classNames = inlineStyle
      ? `${PREFIX}-${GROUP_NAME} ${PREFIX}-${GROUP_NAME}--${variant}`
      : cn(
          `${PREFIX}-${GROUP_NAME}`,
          `${PREFIX}-${GROUP_NAME}--${variant}`,
          asLink
            ? `${PREFIX}-${GROUP_NAME}__link ${PREFIX}-${GROUP_NAME}__link--${variant}`
            : '',
          (asLink && !isTextVariant) || underlined === false
            ? 'no-underline'
            : '',
          'flex max-w-full items-center justify-center gap-2 rounded-full outline-none transition-colors duration-300 ease-out active:transition-none appearance-none box-border px-unset',
          wrap ? '' : 'max-h-6',
          isTextVariant ? 'min-h-3' : 'min-h-6',
          fullWidth && (!iconOnly || !hasIcon)
            ? `${PREFIX}-${GROUP_NAME}--full-width w-full`
            : '',
          disabled
            ? `${PREFIX}-${GROUP_NAME}--disabled cursor-not-allowed ${variantDisabledClassNames[theme][variant]}`
            : `${variantClassNames[theme][variant]} cursor-pointer`,
          hasIcon
            ? `${PREFIX}-${GROUP_NAME}--with-addendum ${PREFIX}-${GROUP_NAME}--with-addendum-${iconPosition === 'left' ? 'prefix' : 'suffix'}`
            : '',
          iconOnly && hasIcon
            ? `${PREFIX}-${GROUP_NAME}--icon-only w-6 max-w-6 max-h-6 h-6`
            : fullWidth
              ? ''
              : 'w-fit',
          iconOnly && hasIcon && isTextVariant ? 'w-3 max-w-3 h-3 max-h-3' : '',
          props.className,
        )

    const style: CSSProperties | undefined = inlineStyle
      ? {
          appearance: 'none',
          borderRadius: SizeRadiusRounded,
          boxSizing: 'border-box',
          display: asLink ? 'inline-block' : undefined,
          outline: 'none',
          paddingLeft: 'unset',
          paddingRight: 'unset',
          transition: 'color, background-color, border-color 300ms ease-out',
          ...(asLink && !isTextVariant ? { textDecoration: 'none' } : {}),
          ...(wrap ? {} : { maxHeight: SizeSpacing6 }),
          ...(isTextVariant
            ? { minHeight: SizeSpacing3 }
            : { minHeight: SizeSpacing6 }),
          ...(disabled
            ? {
                cursor: 'not-allowed',
                ...variantDisabledStyles[theme][variant],
              }
            : { cursor: 'pointer', ...variantStyles[theme][variant] }),
          ...(iconOnly && hasIcon
            ? {
                height: SizeSpacing6,
                maxHeight: SizeSpacing6,
                maxWidth: SizeSpacing6,
                padding: asLink
                  ? `calc(${SizeSpacing1} + ${SizeSpacingQuarter}) 0 0 calc(${SizeSpacing1} + ${SizeSpacingQuarter})`
                  : `${SizeSpacingHalf} 0 0 ${SizeSpacingQuarter}`,
                width: SizeSpacing6,
              }
            : fullWidth
              ? {}
              : { width: 'fit-content' }),
          ...(iconOnly && hasIcon && isTextVariant
            ? {
                height: SizeSpacing3,
                maxHeight: SizeSpacing3,
                maxWidth: SizeSpacing3,
                width: SizeSpacing3,
              }
            : {}),
          ...(fullWidth ? { maxWidth: '100%', width: '100%' } : {}),
          ...(asLink && isTextVariant ? { color: ColorTextDark } : {}),
        }
      : undefined

    const iconElement = (
      <div
        className={cj(
          `${PREFIX}-${GROUP_NAME}__icon`,
          `${PREFIX}-${GROUP_NAME}__icon--${iconPosition}`,
          !inlineStyle && 'h-3 w-3 items-center [&>svg]:h-3',
          !inlineStyle && asLink
            ? `${PREFIX}-${GROUP_NAME}__link__icon--${iconPosition}`
            : '',
          !inlineStyle && isTextVariant ? 'mt-0' : '',
          iconResponsive === false ? 'flex' : 'hidden',
          !iconOnly &&
            (iconResponsive === Breakpoints.xxs || iconResponsive === true)
            ? 'xs:flex'
            : '',
          !iconOnly && iconResponsive === Breakpoints.xs ? 'sm:flex' : '',
          !iconOnly && iconResponsive === Breakpoints.sm ? 'md:flex' : '',
          !iconOnly && iconResponsive === Breakpoints.md ? 'lg:flex' : '',
          !iconOnly && iconResponsive === Breakpoints.lg ? 'xl:flex' : '',
          !iconOnly && iconResponsive === Breakpoints.xl ? 'xxl:flex' : '',
        )}
        style={
          inlineStyle
            ? {
                boxSizing: 'border-box',
                display: 'inline-block',
                height: SizeSpacing3,
                width: SizeSpacing3,
                ...(isTextVariant ? { marginTop: 0 } : {}),
                ...(iconPosition === 'left' && (!iconOnly || !hasIcon)
                  ? { marginRight: SizeSpacing2 }
                  : {}),
                ...(iconPosition === 'right' && (!iconOnly || !hasIcon)
                  ? { marginLeft: SizeSpacing2 }
                  : {}),
              }
            : undefined
        }
      >
        {icon}
      </div>
    )

    const labelElement = (
      <Typography
        className={cj(
          `${PREFIX}-${GROUP_NAME}__label`,
          `${PREFIX}-${GROUP_NAME}__label--${variant}`,
          !inlineStyle && asLink
            ? `${PREFIX}-${GROUP_NAME}__link__label ${PREFIX}-${GROUP_NAME}__link__label--${variant}`
            : '',
          !inlineStyle &&
            'flex max-h-full max-w-full flex-1 items-center justify-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap text-center align-middle',
          !inlineStyle && isTextVariant ? 'pt-0' : '',
          !inlineStyle && underlined === false ? 'no-underline' : '',
        )}
        element="div"
        inlineStyle={inlineStyle}
        style={
          inlineStyle
            ? {
                boxSizing: 'border-box',
                marginTop: isTextVariant
                  ? '0'
                  : `calc(${SizeSpacingHalf} + ${SizeSpacingQuarter})`,
                maxHeight: '100%',
                maxWidth: '100%',
                overflow: 'hidden',
                textAlign: 'center',
                textOverflow: 'ellipsis',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                ...(isTextVariant ? { paddingTop: 0 } : {}),
                ...(underlined === false ? { textDecoration: 'none' } : {}),
              }
            : undefined
        }
        variant={isTextVariant ? 'body-1-link' : 'body-1-median'}
      >
        {hasIcon && iconPosition === 'left' && iconElement}
        {iconOnly && hasIcon ? (
          false
        ) : hasChildren ? (
          children
        ) : (
          <div
            className={
              inlineStyle
                ? undefined
                : cj(
                    wrap || truncate ? 'min-w-0' : '',
                    wrap ? 'whitespace-break-spaces' : '',
                    truncate ? 'truncate' : '',
                  )
            }
            style={
              inlineStyle
                ? {
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    ...(wrap || truncate ? { minWidth: 0 } : {}),
                    ...(wrap ? { whiteSpace: 'break-spaces' } : {}),
                    ...(truncate
                      ? {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }
                      : {}),
                    ...(isTextVariant && underlined !== false
                      ? { textDecoration: 'underline' }
                      : {}),
                  }
                : undefined
            }
          >
            {label}
          </div>
        )}
        {hasIcon && iconPosition === 'right' && iconElement}
      </Typography>
    )

    const content = iconOnly && hasIcon ? iconElement : labelElement

    if (element && element !== 'a' && element !== 'button' && !asLink) {
      return createElement(
        element,
        {
          'aria-label': label,
          className: classNames,
          ref: combinedRef,
          style: { ...style, ...props.style },
          title: label,
          ...omit(['className', 'style'], props),
        },
        content,
      )
    }

    if (asLink || element === 'a') {
      return (
        <a
          {...(props.id === undefined ? {} : { id: props.id })}
          ref={combinedRef as ForwardedRef<HTMLAnchorElement>}
          aria-label={label}
          className={classNames}
          href={href}
          {...(isEmpty(target) ? {} : { target })}
          style={{ ...style, ...props.style }}
          title={label}
          onClick={handleClick}
          {...omit(['className', 'id', 'style'], props)}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        {...(props.id === undefined ? {} : { id: props.id })}
        ref={combinedRef as ForwardedRef<HTMLButtonElement>}
        aria-label={label}
        className={classNames}
        {...(props.dir === undefined
          ? {}
          : { dir: props.dir as 'ltr' | 'rtl' })}
        disabled={disabled}
        style={{ ...style, ...props.style }}
        title={label}
        type={type}
        onClick={handleClick}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
        {...omit(
          ['className', 'dir', 'id', 'style', 'onTouchEnd', 'onTouchStart'],
          props,
        )}
      >
        {content}
      </button>
    )
  },
)
Button.displayName = 'Button'

export default Button
