import { Button } from 'components/Button/Button'
import { TextField } from 'components/Form/TextField'
import { Link } from 'components/Link/Link'
import { Form } from 'utils/Form'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import { required } from 'utils/validation/rules'
import { Validator } from 'utils/validation/Validator'
import './AuthForm.scss'

interface State extends FormState<FormFields>, UnknownRecord {}

interface FormFields extends StringRecord {
  login: string
  password: string
}

export class LoginForm extends Component<{}, State> {
  private readonly form: Form<FormFields>

  constructor (props = {}) {
    super(props)
    this.state = {
      form: {
        values: { login: '', password: '' },
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
  <h2 class="auth-form__title">Вход</h2>
  ${TextField({ id: 'input-login', label: 'Логин', name: 'login', ...this.form.fieldProps('login') })}
  ${TextField({ id: 'input-password', random: Math.random(), label: 'Пароль', name: 'password', ...this.form.fieldProps('password'), type: 'password' })}

  <div class="auth-form__actions">
    ${Button({ children: 'Авторизоваться', type: 'submit', className: 'auth-form__submit' })}
    ${Link({ children: 'Нет аккаунта?', href: '/registration' })}
  </div>
</form>`
  }

  private createValidator (): Validator<FormFields> {
    const validator = new Validator<FormFields>()
    validator.addRules('login', required())
    validator.addRules('password', required())

    return validator
  }
}
