import { Button } from 'components/Button/Button'
import { TextField } from 'components/Form/TextField'
import { Link } from 'components/Link/Link'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import './AuthForm.scss'

export class LoginForm extends Component {
  public render (): VirtualElement {
    return html`
<form class="auth-form" autocomplete="off" ${{ onSubmit: this.submitHandler }}>
  <h2 class="auth-form__title">Вход</h2>
  ${TextField({ label: 'Логин', name: 'login', invalid: true, feedback: 'Неверный логин' })}
  ${TextField({ label: 'Пароль', name: 'password', type: 'password' })}

  <div class="auth-form__actions">
    ${Button({ children: 'Авторизоваться', type: 'submit', className: 'auth-form__submit' })}
    ${Link({ children: 'Нет аккаунта?', href: '/registration' })}
  </div>
</form>`
  }

  protected submitHandler = (e: SubmitEvent): void => {
    e.preventDefault()
    console.log('Hello')
  }
}
