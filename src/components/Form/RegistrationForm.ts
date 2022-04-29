import { Button } from 'components/Button/Button'
import { TextField } from 'components/Form/TextField'
import { Link } from 'components/Link/Link'
import { Form } from 'utils/Form'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import { email, login, name, password, phone, required, same } from 'utils/validation/rules'
import { Validator } from 'utils/validation/Validator'
import './AuthForm.scss'

interface State extends FormState<FormFields>, UnknownRecord {}

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
  private readonly form: Form<FormFields>

  constructor (props = {}) {
    super(props)
    this.state = {
      form: {
        values: { email: '', login: '', first_name: '', second_name: '', phone: '', password: '', password_confirm: '' },
        touched: {},
        isSubmitted: false
      }
    }
    this.form = new Form({
      form: this.state.form,
      validator: this.createValidator(),
      setFormState: (value) => this.setState({ form: value })
    })
  }

  public render (): VirtualElement {
    return html`
<form class="auth-form" autocomplete="off" ${{ onSubmit: this.form.submitHandler }}>
  <h2 class="auth-form__title">Регистрация</h2>
  ${TextField({ id: 'input-email', label: 'Почта', name: 'email', ...this.form.fieldProps('email') })}
  ${TextField({ id: 'input-login', label: 'Логин', name: 'login', ...this.form.fieldProps('login') })}
  ${TextField({ id: 'input-name', label: 'Имя', name: 'first_name', ...this.form.fieldProps('first_name') })}
  ${TextField({ id: 'input-secondname', label: 'Фамилия', name: 'second_name', ...this.form.fieldProps('second_name') })}
  ${TextField({ id: 'input-phone', label: 'Телефон', name: 'phone', ...this.form.fieldProps('phone') })}
  ${TextField({ id: 'input-password', label: 'Пароль', name: 'password', type: 'password', ...this.form.fieldProps('password') })}
  ${TextField({ id: 'input-password_confirm', label: 'Пароль (еще раз)', name: 'password_confirm', type: 'password', ...this.form.fieldProps('password_confirm') })}

  <div class="auth-form__actions">
    ${Button({ children: 'Зарегистрироваться', type: 'submit', className: 'auth-form__submit' })}
    ${Link({ children: 'Войти', href: '/login' })}
  </div>
</form>`
  }

  private createValidator (): Validator<FormFields> {
    const validator = new Validator<FormFields>()
    validator.addRules('email', required(), email())
    validator.addRules('login', required(), login())
    validator.addRules('first_name', required(), name())
    validator.addRules('second_name', required(), name())
    validator.addRules('phone', required(), phone())
    validator.addRules('password', required(), password())
    validator.addRules('password_confirm', required(), same(() => this.state.form.values.password))

    return validator
  }
}
