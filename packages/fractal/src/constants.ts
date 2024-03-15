import constants from '@snowball-tech/design-tokens/dist/web/typescript/constants'

export const Breakpoints = constants.breakpoints

export const PREFIX = 'fractal'

export const LIGHT_BG_COLORS_CLASSNAMES = {
  blue: 'bg-decorative-blue-90',
  green: 'bg-decorative-green-90',
  pink: 'bg-decorative-pink-90',
  purple: 'bg-decorative-purple-90',
  white: 'bg-white',
  yellow: 'bg-decorative-yellow-90',

  //
  error: 'bg-feedback-danger-90',
  success: 'bg-feedback-success-90',
  warning: 'bg-feedback-warning-90',
}

export const MEDIUM_BG_COLORS_CLASSNAMES = {
  blue: 'bg-decorative-blue-70',
  green: 'bg-decorative-green-70',
  pink: 'bg-decorative-pink-70',
  purple: 'bg-decorative-purple-70',
  white: 'bg-white',
  yellow: 'bg-decorative-yellow-70',

  //
  error: 'bg-feedback-danger-70',
  success: 'bg-feedback-success-70',
  warning: 'bg-feedback-warning-70',
}

export const DARK_BG_COLORS_CLASSNAMES = {
  blue: 'bg-decorative-blue-50',
  green: 'bg-decorative-green-50',
  pink: 'bg-primary',
  purple: 'bg-decorative-purple-50',
  white: 'bg-white',
  yellow: 'bg-decorative-yellow-50',

  //
  error: 'bg-feedback-danger-50',
  success: 'bg-feedback-success-50',
  warning: 'bg-feedback-warning-50',
}

export const LIGHT_FG_COLORS_CLASSNAMES = {
  blue: 'text-decorative-blue-90',
  green: 'text-decorative-green-90',
  pink: 'text-decorative-pink-90',
  purple: 'text-decorative-purple-90',
  white: 'bg-white',
  yellow: 'text-decorative-yellow-90',

  //
  error: 'text-feedback-danger-90',
  success: 'text-feedback-success-90',
  warning: 'text-feedback-warning-90',
}

export const MEDIUM_FG_COLORS_CLASSNAMES = {
  blue: 'text-decorative-blue-70',
  green: 'text-decorative-green-70',
  pink: 'text-decorative-pink-70',
  purple: 'text-decorative-purple-70',
  white: 'bg-white',
  yellow: 'text-decorative-yellow-70',

  //
  error: 'text-feedback-danger-70',
  success: 'text-feedback-success-70',
  warning: 'text-feedback-warning-70',
}

export const DARK_FG_COLORS_CLASSNAMES = {
  blue: 'text-decorative-blue-50',
  green: 'text-decorative-green-50',
  pink: 'text-primary',
  purple: 'text-decorative-purple-50',
  white: 'bg-white',
  yellow: 'text-decorative-yellow-50',

  //
  error: 'text-feedback-danger-50',
  success: 'text-feedback-success-50',
  warning: 'text-feedback-warning-50',
}

export enum Themes {
  Dark = 'dark',
  Light = 'light',
}
export const DEFAULT_THEME = Themes.Light
