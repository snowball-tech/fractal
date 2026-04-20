export const GROUP_NAME = 'toggle'

export enum Variants {
  Primary = 'primary',
  Secondary = 'secondary',
}

export const DEFAULT_VARIANT = Variants.Primary

export const variantClassNames = {
  [Variants.Primary]:
    'bg-white text-dark aria-not-pressed:shadow-subtle aria-not-pressed:hover:shadow-brutal aria-not-pressed:focus:shadow-brutal aria-not-pressed:active:shadow-none border-1 border-normal aria-not-pressed:active:-translate-x-quarter aria-not-pressed:active:translate-y-half aria-not-pressed:hover:translate-x-0 aria-not-pressed:hover:-translate-y-quarter aria-not-pressed:focus:translate-x-0 aria-not-pressed:focus:-translate-y-quarter aria-pressed:bg-secondary aria-pressed:text-light',
  [Variants.Secondary]:
    'bg-white text-dark aria-not-pressed:hover:bg-primary aria-not-pressed:focus:bg-primary border-1 border-normal aria-pressed:bg-secondary aria-pressed:text-light',
}

export const disabledVariantClassNames = {
  [Variants.Primary]:
    'bg-white text-disabled shadow-none border-1 border-disabled aria-pressed:bg-secondary aria-pressed:text-disabled',
  [Variants.Secondary]:
    'bg-white text-disabled shadow-none border-1 border-disabled aria-pressed:bg-secondary aria-pressed:text-disabled',
}
