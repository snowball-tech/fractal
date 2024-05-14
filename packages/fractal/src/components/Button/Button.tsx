'use client'

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
import isEmpty from 'lodash/fp/isEmpty'
import isFunction from 'lodash/fp/isFunction'
import omit from 'lodash/fp/omit'
import {
  type CSSProperties,
  type ForwardedRef,
  type MouseEvent,
  type TouchEvent,
  forwardRef,
} from 'react'

import { Typography } from '@/components/Typography/Typography'
import { PREFIX, Themes } from '@/constants'
import useTheme from '@/hooks/useTheme'
import { cj, cn } from '@/styles/helpers'

import { DEFAULT_VARIANT, GROUP_NAME, Variants } from './Button.constants'
import type { ButtonProps } from './Button.types'

export const variantClassNames: Record<Themes, Record<Variants, string>> = {
  /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

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
  /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
}

export const variantStyles: Record<Themes, Record<Variants, CSSProperties>> = {
  /* eslint-disable sort-keys, sort-keys/sort-keys-fix,
  perfectionist/sort-objects */

  [Themes.Light]: {
    [Variants.Display]: {
      backgroundColor: ColorBaseWhite,
      color: ColorTextDark,
      boxShadow: ShadowBrutal1,
      border: Border1,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },
    [Variants.Primary]: {
      backgroundColor: ColorBrandSecondary,
      color: ColorTextLight,
      border: BorderTransparent2,
      padding: `${SizeSpacingHalf} calc(${SizeSpacing3} - ${SizeSpacingHalf})`,
    },
    [Variants.Secondary]: {
      backgroundColor: ColorBaseWhite,
      color: ColorTextDark,
      border: Border1,
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
      color: ColorTextDark,
      boxShadow: ShadowBrutal1Dark,
      border: Border1,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },
    [Variants.Primary]: {
      backgroundColor: ColorBrandPrimaryDark,
      color: ColorTextDark,
      border: BorderTransparent2,
      padding: `${SizeSpacingHalf} calc(${SizeSpacing3} - ${SizeSpacingHalf})`,
    },
    [Variants.Secondary]: {
      backgroundColor: ColorBaseWhite,
      color: ColorTextDark,
      border: Border1,
      borderColor: ColorBorderLight,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },
    [Variants.Text]: {
      backgroundColor: ColorBaseTransparent,
      color: ColorTextLight,
    },
  },

  /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
}

export const variantDisabledClassNames: Record<
  Themes,
  Record<Variants, string>
> = {
  /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

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

  /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
}

export const variantDisabledStyles: Record<
  Themes,
  Record<Variants, CSSProperties>
> = {
  /* eslint-disable sort-keys, sort-keys/sort-keys-fix,
  perfectionist/sort-objects */

  [Themes.Light]: {
    [Variants.Display]: {
      backgroundColor: ColorBaseWhite,
      color: ColorTextDisabled,
      boxShadow: ShadowNone,
      border: Border1,
      borderColor: ColorBorderDisabled,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },
    [Variants.Primary]: {
      backgroundColor: ColorBackgroundDisabled,
      color: ColorTextLight,
      padding: `${SizeSpacingHalf} calc(${SizeSpacing3} - ${SizeSpacingHalf})`,
    },
    [Variants.Secondary]: {
      backgroundColor: ColorBaseWhite,
      color: ColorTextDisabled,
      boxShadow: ShadowNone,
      border: Border1,
      borderColor: ColorBorderDisabled,
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
      color: ColorTextDisabled,
      boxShadow: ShadowNone,
      border: Border1,
      borderColor: ColorBorderDisabled,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },
    [Variants.Primary]: {
      backgroundColor: ColorBackgroundDisabled,
      color: ColorTextDisabled,
      padding: `${SizeSpacingHalf} calc(${SizeSpacing3} - ${SizeSpacingHalf})`,
    },
    [Variants.Secondary]: {
      backgroundColor: ColorBaseWhite,
      color: ColorTextDisabled,
      boxShadow: ShadowNone,
      border: Border1,
      borderColor: ColorBorderDisabled,
      padding: `calc(${SizeSpacing1} - ${SizeSpacingQuarter}) calc(${SizeSpacing3} - ${SizeSpacingQuarter})`,
    },
    [Variants.Text]: {
      backgroundColor: ColorBaseTransparent,
      color: ColorBaseGrey30,
    },
  },

  /* eslint-enable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */
}

/**
 * `Button` component is used to allow the user to make an interaction on either
 * a button or a link element.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled = false,
      fullWidth = false,
      href,
      icon,
      iconOnly = false,
      iconPosition = 'right',
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
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const theme = useTheme(themeOverride)

    const hasIcon = Boolean(icon)
    const hasChildren = Boolean(children)
    if (!hasChildren && isEmpty(label)) {
      console.warn(
        'You must provide a `label` or `children` to the `Button` component',
      )
    }

    const handleTouchStart = (event: TouchEvent<HTMLButtonElement>) => {
      if (isFunction(props.onTouchStart)) {
        props.onTouchStart(event)

        return
      }

      if ('ontouchstart' in document.documentElement && isFunction(onClick)) {
        onClick(
          event as unknown as MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
        )
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
          // eslint-disable-next-line no-nested-ternary
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
          // eslint-disable-next-line no-nested-ternary
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
          !inlineStyle && 'flex h-3 w-3 items-center [&>svg]:h-3',
          !inlineStyle && asLink
            ? `${PREFIX}-${GROUP_NAME}__link__icon--${iconPosition}`
            : '',
          !inlineStyle && isTextVariant ? 'mt-0' : '',
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
        {/* eslint-disable-next-line no-nested-ternary */}
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

    if (asLink) {
      return (
        <a
          {...(props.id === undefined ? {} : { id: props.id })}
          aria-label={label}
          className={classNames}
          href={href}
          {...(isEmpty(target) ? {} : { target })}
          style={{ ...style, ...props.style }}
          title={label}
          {...(!disabled && isFunction(onClick) ? { onClick } : {})}
          {...omit(['className', 'id', 'style'], props)}
        >
          {iconOnly && hasIcon ? iconElement : labelElement}
        </a>
      )
    }

    return (
      <button
        {...(props.id === undefined ? {} : { id: props.id })}
        ref={ref}
        aria-label={label}
        className={classNames}
        {...(props.dir === undefined
          ? {}
          : { dir: props.dir as 'ltr' | 'rtl' })}
        disabled={disabled}
        style={{ ...style, ...props.style }}
        title={label}
        type={type}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
        {...(isFunction(onClick) ? { onClick } : {})}
        {...omit(
          ['className', 'dir', 'id', 'style', 'onTouchEnd', 'onTouchStart'],
          props,
        )}
      >
        {iconOnly && hasIcon ? iconElement : labelElement}
      </button>
    )
  },
)
Button.displayName = 'Button'

export default Button
