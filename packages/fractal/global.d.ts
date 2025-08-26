import * as React from 'react'

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

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'em-emoji': React.DetailedHTMLProps<
        {
          fallback?: string
          id?: string
          native?: string
          set?: 'apple' | 'facebook' | 'google' | 'native' | 'twitter'
          shortcodes?: string
          size?: number | string
          skin?: number | string
        } & React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}
