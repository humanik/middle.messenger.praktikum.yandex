import { Button } from 'components/Button/Button'
import { TextField } from 'components/Form/TextField'
import { Link } from 'components/Link/Link'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import { email, login, name, password, phone, required } from 'utils/validation/rules'
import { Validator } from 'utils/validation/Validator'
import './AuthForm.scss'

interface State extends UnknownRecord {
  form: FormFields
  touched: Partial<Record<keyof FormFields, boolean>>
  isSubmitted: boolean
}

interface FormFields extends StringRecord {
  email: string
  login: string
  first_name: string
  second_name: string
  phone: string
  password: string
  password_confirm: string
}

export class RegistrationForm extends Component<{}, State> {
  private readonly validator: Validator<FormFields>

  constructor (props = {}) {
    super(props)
    this.state = {
      form: { email: '', login: '', first_name: '', second_name: '', phone: '', password: '', password_confirm: '' },
      touched: {},
      isSubmitted: false
    }
    this.validator = this.createValidator()
  }

  public render (): VirtualElement {
    const fieldProps = (name: StringKey<FormFields>): any => {
      const needValidation = name in this.state.touched || this.state.isSubmitted

      return {
        onBlur: this.onBlur,
        onInput: this.onChange,
        invalid: needValidation && !this.validator.isValid(name, this.state.form[name]),
        feedback: needValidation && this.validator.errorMessage(name, this.state.form[name])
      }
    }

    return html`
<form class="auth-form" autocomplete="off" ${{ onSubmit: this.submitHandler }}>
  <h2 class="auth-form__title">Регистрация</h2>
  ${TextField({ id: 'input-email', label: 'Почта', name: 'email', ...fieldProps('email') })}
  ${TextField({ id: 'input-login', label: 'Логин', name: 'login', ...fieldProps('login') })}
  ${TextField({ id: 'input-name', label: 'Имя', name: 'first_name', ...fieldProps('first_name') })}
  ${TextField({ id: 'input-secondname', label: 'Фамилия', name: 'second_name', ...fieldProps('second_name') })}
  ${TextField({ id: 'input-phone', label: 'Телефон', name: 'phone', ...fieldProps('phone') })}
  ${TextField({ id: 'input-password', label: 'Пароль', name: 'password', type: 'password', ...fieldProps('password') })}
  ${TextField({ id: 'input-password_confirm', label: 'Пароль (еще раз)', name: 'password_confirm', type: 'password', ...fieldProps('password_confirm') })}

  <div class="auth-form__actions">
    ${Button({ children: 'Зарегистрироваться', type: 'submit', className: 'auth-form__submit' })}
    ${Link({ children: 'Войти', href: '/login' })}
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
    this.setState({ form: { [name]: input.value }, touched: { [name]: true } })
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
    validator.addRules('email', required(), email())
    validator.addRules('login', required(), login())
    validator.addRules('first_name', required(), name())
    validator.addRules('second_name', required(), name())
    validator.addRules('phone', required(), phone())
    validator.addRules('password', required(), password())
    validator.addRules('password_confirm', required(), password())

    return validator
  }
}
