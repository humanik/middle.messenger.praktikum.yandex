import Button from 'components/Button/Button'
import TextField from 'components/Form/TextField'
import Link from 'components/Link/Link'
import { html } from 'template'
import './AuthForm.scss'

const submitHandler = (e: SubmitEvent): void => {
  e.preventDefault()
}

export default function RegistrationForm (): string {
  return html`
<form class="auth-form" autocomplete="off" ${{ onsubmit: submitHandler }}>
  <h2 class="auth-form__title">Регистрация</h2>
  ${TextField({ label: 'Почта', name: 'email', type: 'email' })}
  ${TextField({ label: 'Логин', name: 'login' })}
  ${TextField({ label: 'Имя', name: 'first_name' })}
  ${TextField({ label: 'Фамилия', name: 'second_name' })}
  ${TextField({ label: 'Телефон', name: 'phone' })}
  ${TextField({ label: 'Пароль', name: 'password', type: 'password' })}
  ${TextField({ label: 'Пароль (еще раз)', name: 'password_confirm', type: 'password' })}

  <div class="auth-form__actions">
    ${Button({ label: 'Зарегистрироваться', type: 'submit', className: 'auth-form__submit' })}
    ${Link({ label: 'Войти', href: '/login' })}
  </div>
</form>`
}
