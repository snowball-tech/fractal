import { cx } from '@snowball-tech/fractal-panda/css'
import { logo } from '@snowball-tech/fractal-panda/recipes'
import omit from 'lodash/fp/omit'

import { DEFAULT_SIZE } from './Logo.constants'
import type { LogoProps } from './Logo.types'

/**
 * `Loader` component allow to build interface with level and hierarchy.
 * experience.
 */
export const Loader = ({ size = DEFAULT_SIZE, ...props }: LogoProps) => {
  return (
    <svg
      className={cx(props.className, logo({ size }))}
      display="block"
      fill="none"
      preserveAspectRatio="xMidYMid"
      style={{ background: '0 0', margin: 'auto' }}
      viewBox="0 0 261 76"
      xmlns="http://www.w3.org/2000/svg"
      {...omit(['className'], props)}
    >
      <path
        d="M250.463 64.3778V1l-7.512 1.01102V72.0564h16.686v-7.6786h-9.174ZM230.247 3.84182V64.3785h9.175v7.6786h-16.687V4.9735l7.512-1.13168Z"
        fill="#111"
      />
      <path
        clipRule="evenodd"
        d="M206.183 62.7088h5.517l1 9.3478h7.246l-8.482-65.34312-5.064.79345-7.862 64.54967h6.715l.93-9.3478Zm4.72-7.4117h-3.923l1.928-29.4931 1.995 29.4931Zm-35.034-42.9913s6.684-1.8502 11.834-1.8502c6.229 0 7.911 3.2725 7.911 8.079v13.9696c0 4.2067-1.795 6.1429-3.723 6.8778 1.928.735 4.322 2.2707 4.322 7.2782v16.3153c0 5.2744-2.327 9.0808-7.979 9.0808h-12.365V12.3058Zm7.512 5.6876v18.4525h2.261c2.061 0 2.594-1.4023 2.594-3.4719V20.3391c0-2.0696-.604-3.1391-2.594-3.1391-1.5 0-2.261.7934-2.261.7934Zm0 25.8641v21.1893h2.261c2.394 0 2.925-1.1353 2.925-3.3383V47.0624c0-2.0695-.531-3.2049-2.925-3.2049h-2.261Z"
        fill="#111"
        fillRule="evenodd"
      />
      <path
        d="m162.437 54.5629-4.17-39.5832-5.519.8062-4.007 38.7094-3.966-37.5777-7.554 1.0257 6.735 54.114h8.309l3.191-34.4769 3.126 34.4769h8.044l7.563-59.4927-7.361 1.1298-4.391 40.8685Z"
        fill="#111"
      />
      <path
        clipRule="evenodd"
        d="M135.378 60.9713c0 6.9437-2.326 11.6862-9.573 11.6862h-1.263c-7.179 0-9.706-4.7407-9.706-11.6862V30.352c0-6.9437 2.527-11.4174 9.64-11.4174h1.263c7.313 0 9.641 4.5414 9.641 11.3516l-.002 30.6851Zm-7.645-31.0197c0-2.5376-.865-3.8064-2.592-3.8064-1.928 0-2.66 1.2012-2.66 3.8064v31.5536c0 2.1372.599 3.8064 2.725 3.8064 2.061 0 2.527-1.6692 2.527-3.8064V29.9516Z"
        fill="#111"
        fillRule="evenodd"
      />
      <path
        d="m103.797 49.0218-6.449-26.643h-6.7787v49.6788h6.7806V43.4785l7.1791 28.5791h6.116V21.0021l-6.848.5814v27.4383ZM86.1125 30.5237c0-5.8777-2.3937-8.6146-8.5772-8.6146l-1.3944.0018c-5.9177 0-9.2416 3.0056-9.2416 9.6824v1.6033c0 4.9399.9302 8.1448 4.1212 12.2858l4.7873 6.1429c2.725 3.6053 3.0581 4.7406 3.0581 8.3459v1.1353c0 3.1373-.6644 4.2727-2.4592 4.2727-1.6619 0-2.4592-1.1354-2.4592-3.4719v-8.6805l-7.4468 2.7826v7.1667c0 6.1429 3.1236 9.4155 9.1742 9.4155h1.4636c6.6477 0 9.7058-4.3403 9.7058-11.6185v-1.6034c0-5.6748-1.0631-8.1448-4.4543-12.5527l-4.7874-6.2105c-2.5265-3.2726-3.058-4.8083-3.058-7.6128v-.9342c0-2.3365.3986-3.4719 2.1934-3.4719s2.1279 1.2688 2.1279 2.938v7.1448l7.2466-2.7826v-5.3641ZM55.947 59.8367c10.5826-19.4271-3.7743-43.3744-25.8998-43.171-6.4412.0228-12.8384 2.2753-17.8869 6.2764-4.29163 3.3787-7.61235 7.9915-9.44489 13.1401-7.8884 22.3551 12.71549 44.3853 35.52359 37.945 7.491-2.0961 14.0232-7.3373 17.708-14.1905Zm-4.1217-.4629c-1.0513 1.6863-2.3028 3.2497-3.7212 4.6401l-.0015.0015.003.003c-11.4928 11.343-30.5463 9.1983-39.24633-4.3896-.9815-1.5255-1.79917-3.1572-2.43327-4.8572-.25638-.7225.67658-1.2598 1.17264-.6648C10.2807 57.3186 13.873 59.647 17.8627 60.796c2.4317.5829 3.4132-2.8718 1.0224-3.6565C7.78068 54.1129 2.68356 40.0165 9.79222 30.8c.79488-1.0655 1.66268-2.0809 2.61528-3.0099l.0015-.0015-.003-.003c11.5019-11.346 30.5539-9.1907 39.2463 4.3896.9816 1.5255 1.7992 3.1572 2.4333 4.8572.2564.7225-.6766 1.2598-1.1726.6648-2.6821-3.2118-6.2743-5.5402-10.2641-6.6892-1.071-.3081-2.1708.3962-2.371 1.492-.176.9624.4096 1.8928 1.3486 2.1645 10.3429 2.8141 15.6479 15.4048 10.1988 24.7093Z"
        fill="#111"
      />
      <path
        d="M250.463 64.3778V1l-7.512 1.01102V72.0564h16.686v-7.6786h-9.174ZM230.247 3.84182V64.3785h9.175v7.6786h-16.687V4.9735l7.512-1.13168Z"
        stroke="#111"
        strokeWidth="1.01844"
      />
      <path
        clipRule="evenodd"
        d="M206.183 62.7088h5.517l1 9.3478h7.246l-8.482-65.34312-5.064.79345-7.862 64.54967h6.715l.93-9.3478Zm4.72-7.4117h-3.923l1.928-29.4931 1.995 29.4931Zm-35.034-42.9913s6.684-1.8502 11.834-1.8502c6.229 0 7.911 3.2725 7.911 8.079v13.9696c0 4.2067-1.795 6.1429-3.723 6.8778 1.928.735 4.322 2.2707 4.322 7.2782v16.3153c0 5.2744-2.327 9.0808-7.979 9.0808h-12.365V12.3058Zm7.512 5.6876v18.4525h2.261c2.061 0 2.594-1.4023 2.594-3.4719V20.3391c0-2.0696-.604-3.1391-2.594-3.1391-1.5 0-2.261.7934-2.261.7934Zm0 25.8641v21.1893h2.261c2.394 0 2.925-1.1353 2.925-3.3383V47.0624c0-2.0695-.531-3.2049-2.925-3.2049h-2.261Z"
        stroke="#111"
        strokeWidth="1.01844"
      />
      <path
        d="m162.437 54.5629-4.17-39.5832-5.519.8062-4.007 38.7094-3.966-37.5777-7.554 1.0257 6.735 54.114h8.309l3.191-34.4769 3.126 34.4769h8.044l7.563-59.4927-7.361 1.1298-4.391 40.8685Z"
        stroke="#111"
        strokeWidth="1.01844"
      />
      <path
        clipRule="evenodd"
        d="M135.378 60.9713c0 6.9437-2.326 11.6862-9.573 11.6862h-1.263c-7.179 0-9.706-4.7407-9.706-11.6862V30.352c0-6.9437 2.527-11.4174 9.64-11.4174h1.263c7.313 0 9.641 4.5414 9.641 11.3516l-.002 30.6851Zm-7.645-31.0197c0-2.5376-.865-3.8064-2.592-3.8064-1.928 0-2.66 1.2012-2.66 3.8064v31.5536c0 2.1372.599 3.8064 2.725 3.8064 2.061 0 2.527-1.6692 2.527-3.8064V29.9516Z"
        stroke="#111"
        strokeWidth="1.01844"
      />
      <path
        d="m103.797 49.0218-6.449-26.643h-6.7787v49.6788h6.7806V43.4785l7.1791 28.5791h6.116V21.0021l-6.848.5814v27.4383ZM86.1125 30.5237c0-5.8777-2.3937-8.6146-8.5772-8.6146l-1.3944.0018c-5.9177 0-9.2416 3.0056-9.2416 9.6824v1.6033c0 4.9399.9302 8.1448 4.1212 12.2858l4.7873 6.1429c2.725 3.6053 3.0581 4.7406 3.0581 8.3459v1.1353c0 3.1373-.6644 4.2727-2.4592 4.2727-1.6619 0-2.4592-1.1354-2.4592-3.4719v-8.6805l-7.4468 2.7826v7.1667c0 6.1429 3.1236 9.4155 9.1742 9.4155h1.4636c6.6477 0 9.7058-4.3403 9.7058-11.6185v-1.6034c0-5.6748-1.0631-8.1448-4.4543-12.5527l-4.7874-6.2105c-2.5265-3.2726-3.058-4.8083-3.058-7.6128v-.9342c0-2.3365.3986-3.4719 2.1934-3.4719s2.1279 1.2688 2.1279 2.938v7.1448l7.2466-2.7826v-5.3641Zm-56.0653-13.858c22.1255-.2034 36.4824 23.7439 25.8998 43.171-3.6848 6.8532-10.217 12.0944-17.708 14.1905-22.8081 6.4403-43.41199-15.5899-35.52359-37.945 1.83254-5.1486 5.15326-9.7614 9.44489-13.1401 5.0485-4.0011 11.4457-6.2536 17.8869-6.2764Z"
        stroke="#111"
        strokeWidth="1.01844"
      />
      <path
        d="M55.947 59.8367c10.5826-19.4271-3.7743-43.3744-25.8998-43.171-6.4412.0228-12.8384 2.2753-17.8869 6.2764-4.29163 3.3787-7.61235 7.9915-9.44489 13.1401-7.8884 22.3551 12.71549 44.3853 35.52359 37.945 7.491-2.0961 14.0232-7.3373 17.708-14.1905Zm-4.1217-.4629c-1.0513 1.6863-2.3028 3.2497-3.7212 4.6401l-.0015.0015.003.003c-11.4928 11.343-30.5463 9.1983-39.24633-4.3896-.9815-1.5255-1.79917-3.1572-2.43327-4.8572-.25638-.7225.67658-1.2598 1.17264-.6648C10.2807 57.3186 13.873 59.647 17.8627 60.796c2.4317.5829 3.4132-2.8718 1.0224-3.6565C7.78068 54.1129 2.68356 40.0165 9.79222 30.8c.79488-1.0655 1.66268-2.0809 2.61528-3.0099l.0015-.0015-.003-.003c11.5019-11.346 30.5539-9.1907 39.2463 4.3896.9816 1.5255 1.7992 3.1572 2.4333 4.8572.2564.7225-.6766 1.2598-1.1726.6648-2.6821-3.2118-6.2743-5.5402-10.2641-6.6892-1.071-.3081-2.1708.3962-2.371 1.492-.176.9624.4096 1.8928 1.3486 2.1645 10.3429 2.8141 15.6479 15.4048 10.1988 24.7093Z"
        stroke="#111"
        strokeWidth="1.01844"
      />
    </svg>
  )
}
Loader.displayName = 'Loader'

export default Loader
