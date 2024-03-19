declare module '@snowball-tech/design-tokens/dist/web/typescript/constants' {
  export const breakpoints: {
    /* eslint-disable perfectionist/sort-object-types */
    xs: 'xs'
    sm: 'sm'
    md: 'md'
    lg: 'lg'
    xl: 'xl'
    xxl: 'xxl'
    /* eslint-enable perfectionist/sort-object-types */
  }
}

declare module '@iconscout/react-unicons/icons/*' {
  type IconProps = {
    className?: string
    color?: string
    size?: string
    style?: Record<string, number | string | null | undefined>
  }
  const icon: (props: IconProps) => JSX.Element
  export = icon
}
