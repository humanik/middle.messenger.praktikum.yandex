import { isFalsy } from './helpers'
import { Validator } from './validation/Validator'

interface FormSettings<T extends StringRecord> {
  form: FormData<T>
  validator: Validator<T>
  setFormState: (v: Partial<FormData<T>>) => void
}

interface FormData<T extends StringRecord> {
  values: T
  touched: Partial<Record<keyof T, boolean>>
  isSubmitted: boolean
}

export class Form<T extends StringRecord> {
  private readonly form
  private readonly validator
  private readonly setFormState

  constructor ({ form, validator, setFormState }: FormSettings<T>) {
    this.form = form
    this.validator = validator
    this.setFormState = setFormState
  }

  public fieldProps = (name: StringKey<T>): any => {
    const needValidation = this.form.isSubmitted || !isFalsy(this.form.touched[name])

    return {
      onBlur: this.onBlur,
      onInput: this.onChange,
      invalid: needValidation && !this.validator.isValid(name, this.form.values[name]),
      feedback: needValidation && this.validator.errorMessage(name, this.form.values[name])
    }
  }

  protected onChange = (e: Event): void => {
    const input = e.target as HTMLInputElement
    const values = { ...this.form.values, ...{ [input.name]: input.value } }
    this.setFormState({ values })
  }

  protected onBlur = (e: Event): void => {
    const input = e.target as HTMLInputElement
    const touched = { ...this.form.touched, ...{ [input.name]: true } }
    this.setFormState({ touched })
  }

  public submitHandler = (e: SubmitEvent): void => {
    e.preventDefault()
    if (!this.form.isSubmitted) {
      this.setFormState({ isSubmitted: true })
    }

    console.log(this.form.values)
    const errors = this.validator.getErrors(this.form.values)
    if (errors.length > 0) {
      console.error('Form has errors', errors)
    } else {
      console.log('Form is valid')
    }
  }
}
