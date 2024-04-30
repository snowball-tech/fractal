export const GROUP_NAME = 'emoji-picker'

export enum Categories {
  Activity = 'activity',
  Flags = 'flags',
  Foods = 'foods',
  Frequent = 'frequent',
  Nature = 'nature',
  Objects = 'objects',
  People = 'people',
  Places = 'places',
  Symbols = 'symbols',
}

export const DEFAULT_CATEGORIES = [
  Categories.Frequent,
  Categories.People,
  Categories.Nature,
  Categories.Foods,
  Categories.Activity,
  Categories.Places,
  Categories.Objects,
  Categories.Symbols,
  Categories.Flags,
]

export enum Locales {
  Ar = 'ar',
  Be = 'be',
  Cs = 'cs',
  De = 'de',
  En = 'en',
  Es = 'es',
  Fa = 'fa',
  Fi = 'fi',
  Fr = 'fr',
  Hi = 'hi',
  It = 'it',
  Ja = 'ja',
  Ko = 'ko',
  Nl = 'nl',
  Pl = 'pl',
  Pt = 'pt',
  Ru = 'ru',
  Sa = 'sa',
  Tr = 'tr',
  Uk = 'uk',
  Vi = 'vi',
  Zh = 'zh',
}

export const DEFAULT_LOCALE = Locales.En

export enum Positions {
  Bottom = 'bottom',
  Top = 'top',
}

export const DEFAULT_NAV_POSITION = Positions.Top
export const DEFAULT_PREVIEW_POSITION = Positions.Bottom

export enum SearchPositions {
  Static = 'static',
  Sticky = 'sticky',
}

export const DEFAULT_SEARCH_POSITION = SearchPositions.Sticky

export enum SkinTonePositions {
  Preview = 'preview',
  Search = 'search',
}

export const DEFAULT_SKIN_TONE_POSITION = SkinTonePositions.Preview

export enum EmojisSets {
  Apple = 'apple',
  Facebook = 'facebook',
  Google = 'google',
  Native = 'native',
  Twitter = 'twitter',
}

export const DEFAULT_EMOJIS_SET = EmojisSets.Native

export const SKIN_TONES = [1, 2, 3, 4, 5, 6] as const
export type SkinTone = (typeof SKIN_TONES)[number]
export const DEFAULT_SKIN_TONE: SkinTone = 1

export const VERSIONS = [1, 2, 3, 4, 5, 11, 12, 12.1, 13, 13.1, 14, 15] as const
export type Version = (typeof VERSIONS)[number]
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const DEFAULT_VERSION: Version = VERSIONS.at(-1)!
