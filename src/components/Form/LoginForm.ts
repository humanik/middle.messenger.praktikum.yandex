import Button from 'components/Button/Button'
import TextField from 'components/Form/TextField'
import Link from 'components/Link/Link'
import { html } from 'template'
import './AuthForm.scss'

const submitHandler = (e: SubmitEvent): void => {
  e.preventDefault()
}

export default function LoginForm (): string {
  return html`
<form class="auth-form" autocomplete="off" ${{ onsubmit: submitHandler }}>
  <h2 class="auth-form__title">Вход</h2>
  ${TextField({ label: 'Логин', name: 'login', invalid: true, feedback: 'Неверный логин' })}
  ${TextField({ label: 'Пароль', name: 'password', type: 'password' })}

  <div class="auth-form__actions">
    ${Button({ label: 'Авторизоваться', type: 'submit', className: 'auth-form__submit' })}
    ${Link({ label: 'Нет аккаунта?', href: '/registration' })}
  </div>
</form>`
}
