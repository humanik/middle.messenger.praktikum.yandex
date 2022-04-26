import { Button } from 'components/Button/Button'
import { TextField } from 'components/Form/TextField'
import { Link } from 'components/Link/Link'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import './AuthForm.scss'

export class LoginForm extends Component {
  protected state = { form: { name: '', password: '' } }

  public render (): VirtualElement {
    return html`
<form class="auth-form" autocomplete="off" ${{ onSubmit: this.submitHandler }}>
  <h2 class="auth-form__title">Вход</h2>
  ${TextField({ label: 'Логин', name: 'login', value: this.state.form.name, onInput: this.changeFieldHandler })}
  ${TextField({ label: 'Пароль', name: 'password', value: this.state.form.password, onInput: this.changeFieldHandler, type: 'password' })}

  <div class="auth-form__actions">
    ${Button({ children: 'Авторизоваться', type: 'submit', className: 'auth-form__submit' })}
    ${Link({ children: 'Нет аккаунта?', href: '/registration' })}
  </div>
</form>`
  }

  protected changeFieldHandler = (e: Event): void => {
    const input = e.target as HTMLInputElement
    this.setState({ form: { [input.name]: input.value } })
  }

  protected submitHandler = (e: SubmitEvent): void => {
    e.preventDefault()
    console.log(this.state.form)
  }
}
