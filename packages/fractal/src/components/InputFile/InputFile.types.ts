import type { AllHTMLAttributes, ReactNode } from 'react'

import type { ButtonProps } from '@/components/Button/Button.types'

import { Variants } from './InputFile.constants'

export type CombinedRefs = {
  fileInput: HTMLInputElement | null
  trigger: HTMLButtonElement | null
}

export interface InputFileProps
  extends Omit<AllHTMLAttributes<HTMLInputElement>, 'label' | 'onChange'> {
  /** The label of the trigger of the input file. */
  label: ReactNode
  /** Prevents the user from interacting with the input file and the trigger. */
  disabled?: boolean
  /** The props to pass to the trigger of the input file. */
  triggerProps?: Partial<
    Omit<
      ButtonProps,
      'disabled' | 'href' | 'label' | 'target' | 'type' | 'variant'
    >
  >
  /**
   * The variant of the input file.
   *
   * Currently, only trigger button variants are available (and the variants
   * name follow the variants name of the `Button` component).
   */
  variant?: `${Variants}`
  /** Event handler called when one or multiple files are selected. */
  onChange?: (files: FileList | null) => void
}
