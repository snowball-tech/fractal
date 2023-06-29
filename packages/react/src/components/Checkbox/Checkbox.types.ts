import { Variants } from './Checkbox.constants'

export interface CheckboxProps {
  /** A unique HTML id for the checkbox. */
  id?: string
  /** The label of the checkbox. */
  label: string
  /** The variant of the checkbox (color) to use. */
  variant?: `${Variants}`
}
