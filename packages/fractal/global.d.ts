declare module '@snowball-tech/design-tokens/dist/web/typescript/constants' {
  export const breakpoints: {
    xs: 'xs'

    sm: 'sm'

    md: 'md'

    lg: 'lg'

    xl: 'xl'

    xxl: 'xxl'
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
    style?: Record<string, null | number | string | undefined>
    width?: number
  }
  const icon: (props: IconProps) => JSX.Element
  export = icon
}

declare namespace JSX {
  interface IntrinsicElements {
    'em-emoji': {
      fallback?: string
      id?: string
      native?: string
      set?: 'apple' | 'facebook' | 'google' | 'native' | 'twitter'
      shortcodes?: string
      size?: number | string
      skin?: number | string
    } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  }
}
