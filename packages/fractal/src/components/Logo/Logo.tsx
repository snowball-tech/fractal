import omit from 'lodash/fp/omit'
import { twMerge } from 'tailwind-merge'

import { PREFIX } from '@/constants'

import {
  BrandColors,
  DEFAULT_BRAND_COLOR,
  DEFAULT_PICTO_COLOR,
  DEFAULT_SIZE,
  GROUP_NAME,
  PictoColors,
  Sizes,
} from './Logo.constants'
import type { LogoProps } from './Logo.types'

/**
 * `Logo` component allow to display the SnowBall logo.
 */
export const Logo = ({
  brandVariant = DEFAULT_BRAND_COLOR,
  pictoVariant = DEFAULT_PICTO_COLOR,
  size = DEFAULT_SIZE,
  ...props
}: LogoProps) => {
  if (pictoVariant === 'none' && brandVariant === 'none') {
    return false
  }
  const logoSizeClassNames = {
    /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

    [Sizes.S]: 'h-[22px] w-[75px]',
    [Sizes.M]: 'h-[44px] w-[150px]',
    [Sizes.L]: 'h-[66px] w-[225px]',
    [Sizes.XL]: 'h-[88px] w-[300px]',
    [Sizes.Fluid]: 'h-auto w-full',

    /* eslint-enable sort-keys, sort-keys/sort-keys-fix,
perfectionist/sort-objects */
  }
  const pictoClassNames = {
    /* eslint-disable sort-keys, sort-keys/sort-keys-fix, perfectionist/sort-objects */

    [Sizes.S]: 'h-[22px] w-[22px]',
    [Sizes.M]: 'h-[44px] w-[44px]',
    [Sizes.L]: 'h-[66px] w-[66px]',
    [Sizes.XL]: 'h-[88px] w-[88px]',
    [Sizes.Fluid]: 'h-auto w-full',

    /* eslint-enable sort-keys, sort-keys/sort-keys-fix,
perfectionist/sort-objects */
  }

  const pictoColor = PictoColors[pictoVariant]
  const brandColor = BrandColors[brandVariant]

  let viewBox = '0 0 261 76'
  if (brandVariant === 'none') {
    viewBox = '0 16 60 60'
  }
  if (pictoVariant === 'none') {
    viewBox = '60 0 201 76'
  }

  let className = logoSizeClassNames[size]
  if (brandVariant === 'none') {
    className = pictoClassNames[size]
  }

  return (
    <svg
      className={twMerge(
        `${PREFIX}-${GROUP_NAME}`,
        `${PREFIX}-${GROUP_NAME}--${size}`,
        `${PREFIX}-${GROUP_NAME}__brand--${brandVariant}`,
        `${PREFIX}-${GROUP_NAME}__picto--${pictoVariant}`,
        brandVariant === 'none' ? `${PREFIX}-${GROUP_NAME}--picto-only` : '',
        pictoVariant === 'none' ? `${PREFIX}-${GROUP_NAME}--brand-only` : '',
        brandVariant !== 'none' && pictoVariant !== 'none'
          ? `${PREFIX}-${GROUP_NAME}--full`
          : '',
        className,
        props.className,
      )}
      display="block"
      fill="none"
      preserveAspectRatio="xMidYMid"
      style={{ background: 'none', margin: 'auto' }}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      {...omit(['className'], props)}
    >
      {/* Picto */}
      {pictoVariant !== 'none' && (
        <>
          <path
            d="M55.947 59.837c10.583-19.427-3.774-43.375-25.9-43.171-6.441.023-12.838 2.275-17.887 6.276a29.378 29.378 0 0 0-9.445 13.14C-5.173 58.437 15.431 80.468 38.24 74.027c7.491-2.096 14.023-7.337 17.708-14.19Zm-4.122-.463a25.099 25.099 0 0 1-3.72 4.64l-.002.001.003.003c-11.493 11.343-30.547 9.199-39.247-4.39a25.378 25.378 0 0 1-2.433-4.856c-.256-.723.677-1.26 1.173-.665a20.945 20.945 0 0 0 10.264 6.689c2.431.583 3.413-2.872 1.022-3.656C7.781 54.112 2.684 40.016 9.792 30.8a25.447 25.447 0 0 1 2.616-3.01l.001-.001-.003-.003c11.502-11.346 30.554-9.191 39.246 4.39a25.372 25.372 0 0 1 2.434 4.856c.256.723-.677 1.26-1.173.665a20.945 20.945 0 0 0-10.264-6.689c-1.071-.308-2.17.396-2.371 1.492-.174.96.41 1.896 1.348 2.164 10.343 2.815 15.648 15.405 10.2 24.71z"
            fill={pictoColor}
          />
          <path
            d="M55.947 59.8367c10.5826-19.4271-3.7743-43.3744-25.8998-43.171-6.4412.0228-12.8384 2.2753-17.8869 6.2764-4.29163 3.3787-7.61235 7.9915-9.44489 13.1401-7.8884 22.3551 12.71549 44.3853 35.52359 37.945 7.491-2.0961 14.0232-7.3373 17.708-14.1905Zm-4.1217-.4629c-1.0513 1.6863-2.3028 3.2497-3.7212 4.6401l-.0015.0015.003.003c-11.4928 11.343-30.5463 9.1983-39.24633-4.3896-.9815-1.5255-1.79917-3.1572-2.43327-4.8572-.25638-.7225.67658-1.2598 1.17264-.6648C10.2807 57.3186 13.873 59.647 17.8627 60.796c2.4317.5829 3.4132-2.8718 1.0224-3.6565C7.78068 54.1129 2.68356 40.0165 9.79222 30.8c.79488-1.0655 1.66268-2.0809 2.61528-3.0099l.0015-.0015-.003-.003c11.5019-11.346 30.5539-9.1907 39.2463 4.3896.9816 1.5255 1.7992 3.1572 2.4333 4.8572.2564.7225-.6766 1.2598-1.1726.6648-2.6821-3.2118-6.2743-5.5402-10.2641-6.6892-1.071-.3081-2.1708.3962-2.371 1.492-.176.9624.4096 1.8928 1.3486 2.1645 10.3429 2.8141 15.6479 15.4048 10.1988 24.7093Z M30.046 16.666c22.126-.204 36.483 23.744 25.9 43.17-3.685 6.854-10.217 12.095-17.708 14.191-22.808 6.44-43.412-15.59-35.524-37.945a29.378 29.378 0 0 1 9.445-13.14c5.049-4.001 11.446-6.254 17.887-6.276z"
            stroke={pictoColor}
            strokeWidth="1.01844"
          />
        </>
      )}

      {/* Brand */}
      {brandVariant !== 'none' && (
        <>
          {/* SN */}
          <path
            d="m103.797 49.022-6.449-26.643h-6.779v49.679h6.78v-28.58l7.18 28.58h6.116V21.002l-6.848.581zM86.113 30.524c0-5.878-2.394-8.615-8.578-8.615l-1.394.002c-5.918 0-9.242 3.006-9.242 9.682v1.604c0 4.94.93 8.144 4.121 12.285l4.788 6.143c2.725 3.606 3.058 4.74 3.058 8.346v1.135c0 3.138-.665 4.273-2.46 4.273-1.661 0-2.459-1.135-2.459-3.472v-8.68l-7.446 2.782v7.167c0 6.143 3.123 9.416 9.174 9.416h1.463c6.648 0 9.706-4.34 9.706-11.619V59.37c0-5.675-1.063-8.145-4.454-12.553l-4.787-6.21c-2.527-3.273-3.058-4.809-3.058-7.613v-.935c0-2.336.398-3.471 2.193-3.471s2.128 1.268 2.128 2.938v7.144l7.246-2.782v-5.364z"
            fill={brandColor}
          />
          <path
            d="m103.797 49.022-6.449-26.643h-6.779v49.679h6.78v-28.58l7.18 28.58h6.116V21.002l-6.848.581zM86.113 30.524c0-5.878-2.394-8.615-8.578-8.615l-1.394.002c-5.918 0-9.242 3.006-9.242 9.682v1.604c0 4.94.93 8.144 4.121 12.285l4.788 6.143c2.725 3.606 3.058 4.74 3.058 8.346v1.135c0 3.138-.665 4.273-2.46 4.273-1.661 0-2.459-1.135-2.459-3.472v-8.68l-7.446 2.782v7.167c0 6.143 3.123 9.416 9.174 9.416h1.463c6.648 0 9.706-4.34 9.706-11.619V59.37c0-5.675-1.063-8.145-4.454-12.553l-4.787-6.21c-2.527-3.273-3.058-4.809-3.058-7.613v-.935c0-2.336.398-3.471 2.193-3.471s2.128 1.268 2.128 2.938v7.144l7.246-2.782v-5.364z"
            stroke={brandColor}
            strokeWidth="1.01844"
          />

          {/* O */}
          <path
            clipRule="evenodd"
            d="M135.378 60.9713c0 6.9437-2.326 11.6862-9.573 11.6862h-1.263c-7.179 0-9.706-4.7407-9.706-11.6862V30.352c0-6.9437 2.527-11.4174 9.64-11.4174h1.263c7.313 0 9.641 4.5414 9.641 11.3516l-.002 30.6851Zm-7.645-31.0197c0-2.5376-.865-3.8064-2.592-3.8064-1.928 0-2.66 1.2012-2.66 3.8064v31.5536c0 2.1372.599 3.8064 2.725 3.8064 2.061 0 2.527-1.6692 2.527-3.8064V29.9516Z"
            fill={brandColor}
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M135.378 60.9713c0 6.9437-2.326 11.6862-9.573 11.6862h-1.263c-7.179 0-9.706-4.7407-9.706-11.6862V30.352c0-6.9437 2.527-11.4174 9.64-11.4174h1.263c7.313 0 9.641 4.5414 9.641 11.3516l-.002 30.6851Zm-7.645-31.0197c0-2.5376-.865-3.8064-2.592-3.8064-1.928 0-2.66 1.2012-2.66 3.8064v31.5536c0 2.1372.599 3.8064 2.725 3.8064 2.061 0 2.527-1.6692 2.527-3.8064V29.9516Z"
            stroke={brandColor}
            strokeWidth="1.01844"
          />

          {/* W */}
          <path
            d="m162.437 54.5629-4.17-39.5832-5.519.8062-4.007 38.7094-3.966-37.5777-7.554 1.0257 6.735 54.114h8.309l3.191-34.4769 3.126 34.4769h8.044l7.563-59.4927-7.361 1.1298-4.391 40.8685Z"
            fill={brandColor}
          />
          <path
            d="m162.437 54.5629-4.17-39.5832-5.519.8062-4.007 38.7094-3.966-37.5777-7.554 1.0257 6.735 54.114h8.309l3.191-34.4769 3.126 34.4769h8.044l7.563-59.4927-7.361 1.1298-4.391 40.8685Z"
            stroke={brandColor}
            strokeWidth="1.01844"
          />

          {/* BA */}
          <path
            clipRule="evenodd"
            d="M206.183 62.7088h5.517l1 9.3478h7.246l-8.482-65.34312-5.064.79345-7.862 64.54967h6.715l.93-9.3478Zm4.72-7.4117h-3.923l1.928-29.4931 1.995 29.4931Zm-35.034-42.9913s6.684-1.8502 11.834-1.8502c6.229 0 7.911 3.2725 7.911 8.079v13.9696c0 4.2067-1.795 6.1429-3.723 6.8778 1.928.735 4.322 2.2707 4.322 7.2782v16.3153c0 5.2744-2.327 9.0808-7.979 9.0808h-12.365V12.3058Zm7.512 5.6876v18.4525h2.261c2.061 0 2.594-1.4023 2.594-3.4719V20.3391c0-2.0696-.604-3.1391-2.594-3.1391-1.5 0-2.261.7934-2.261.7934Zm0 25.8641v21.1893h2.261c2.394 0 2.925-1.1353 2.925-3.3383V47.0624c0-2.0695-.531-3.2049-2.925-3.2049h-2.261Z"
            fill={brandColor}
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M206.183 62.7088h5.517l1 9.3478h7.246l-8.482-65.34312-5.064.79345-7.862 64.54967h6.715l.93-9.3478Zm4.72-7.4117h-3.923l1.928-29.4931 1.995 29.4931Zm-35.034-42.9913s6.684-1.8502 11.834-1.8502c6.229 0 7.911 3.2725 7.911 8.079v13.9696c0 4.2067-1.795 6.1429-3.723 6.8778 1.928.735 4.322 2.2707 4.322 7.2782v16.3153c0 5.2744-2.327 9.0808-7.979 9.0808h-12.365V12.3058Zm7.512 5.6876v18.4525h2.261c2.061 0 2.594-1.4023 2.594-3.4719V20.3391c0-2.0696-.604-3.1391-2.594-3.1391-1.5 0-2.261.7934-2.261.7934Zm0 25.8641v21.1893h2.261c2.394 0 2.925-1.1353 2.925-3.3383V47.0624c0-2.0695-.531-3.2049-2.925-3.2049h-2.261Z"
            stroke={brandColor}
            strokeWidth="1.01844"
          />

          {/* LL */}
          <path
            d="M250.463 64.3778V1l-7.512 1.01102V72.0564h16.686v-7.6786h-9.174ZM230.247 3.84182V64.3785h9.175v7.6786h-16.687V4.9735l7.512-1.13168Z"
            fill={brandColor}
          />
          <path
            d="M250.463 64.3778V1l-7.512 1.01102V72.0564h16.686v-7.6786h-9.174ZM230.247 3.84182V64.3785h9.175v7.6786h-16.687V4.9735l7.512-1.13168Z"
            stroke={brandColor}
            strokeWidth="1.01844"
          />
        </>
      )}
    </svg>
  )
}
Logo.displayName = 'Logo'

export default Logo
