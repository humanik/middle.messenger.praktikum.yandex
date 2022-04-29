import { Button } from 'components/Button/Button'
import { TextField } from 'components/Form/TextField'
import { Link } from 'components/Link/Link'
import { isFalsy } from 'utils/helpers'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import { login, password, required } from 'utils/validation/rules'
import { Validator } from 'utils/validation/Validator'
import './AuthForm.scss'

interface State extends UnknownRecord {
  form: FormFields
  touched: Partial<Record<keyof FormFields, boolean>>
  isSubmitted: boolean
}

interface FormFields extends StringRecord {
  login: string
  password: string
}

export class LoginForm extends Component<{}, State> {
  private readonly validator: Validator<FormFields>

  constructor (props = {}) {
    super(props)
    this.state = { form: { login: '', password: '' }, touched: {}, isSubmitted: false }
    this.validator = this.createValidator()
  }

  public render (): VirtualElement {
    const fieldProps = (name: StringKey<FormFields>): any => {
      const needValidation = this.state.isSubmitted || !isFalsy(this.state.touched[name])

      return {
        onBlur: this.onBlur,
        onInput: this.onChange,
        invalid: needValidation && !this.validator.isValid(name, this.state.form[name]),
        feedback: needValidation && this.validator.errorMessage(name, this.state.form[name])
      }
    }

    return html`
<form class="auth-form" autocomplete="off" ${{ onSubmit: this.submitHandler }}>
  <h2 class="auth-form__title">Вход</h2>
  ${TextField({ id: 'input-login', label: 'Логин', name: 'login', ...fieldProps('login') })}
  ${TextField({ id: 'input-password', label: 'Пароль', name: 'password', ...fieldProps('password'), type: 'password' })}

  <div class="auth-form__actions">
    ${Button({ children: 'Авторизоваться', type: 'submit', className: 'auth-form__submit' })}
    ${Link({ children: 'Нет аккаунта?', href: '/registration' })}
  </div>
</form>`
  }

  protected onChange = (e: Event): void => {
    const input = e.target as HTMLInputElement
    const name = input.name as keyof FormFields
    this.setState({ form: { [name]: input.value } })
  }

  protected onBlur = (e: Event): void => {
    const input = e.target as HTMLInputElement
    const name = input.name as keyof FormFields
    this.setState({ touched: { [name]: true } })
  }

  protected submitHandler = (e: SubmitEvent): void => {
    e.preventDefault()
    if (!this.state.isSubmitted) {
      this.setState({ isSubmitted: true })
    }

    console.log(this.state.form)
    const errors = this.validator.getErrors(this.state.form)
    if (errors.length > 0) {
      console.log('Form has errors', errors)
    } else {
      console.log('Form is valid')
    }
  }

  private createValidator (): Validator<FormFields> {
    const validator = new Validator<FormFields>()
    validator.addRules('login', required(), login())
    validator.addRules('password', required(), password())

    return validator
  }
}
