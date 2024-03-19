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
    fill?: string
    height?: number
    size?: string
    stroke?: string
    style?: Record<string, number | string | null | undefined>
    width?: number
  }
  const icon: (props: IconProps) => JSX.Element
  export = icon
}
