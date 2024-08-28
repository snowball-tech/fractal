declare module '@snowball-tech/design-tokens/dist/web/typescript/constants' {
  export const breakpoints: {
    xxs: 'xxs'

    xs: 'xs'

    sm: 'sm'

    md: 'md'

    lg: 'lg'

    xl: 'xl'

    xxl: 'xxl'
  }
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
