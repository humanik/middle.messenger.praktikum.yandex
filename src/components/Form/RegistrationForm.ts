import { Button } from 'components/Button/Button'
import { TextField } from 'components/Form/TextField'
import { Link } from 'components/Link/Link'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import './AuthForm.scss'

export class RegistrationForm extends Component {
  protected state = {
    form: { email: '', login: '', first_name: '', second_name: '', phone: '', password: '', password_confirm: '' }
  }

  public render (): VirtualElement {
    return html`
<form class="auth-form" autocomplete="off" ${{ onSubmit: this.submitHandler }}>
  <h2 class="auth-form__title">Регистрация</h2>
  ${TextField({ label: 'Почта', name: 'email', type: 'email', onInput: this.changeFieldHandler })}
  ${TextField({ label: 'Логин', name: 'login', onInput: this.changeFieldHandler })}
  ${TextField({ label: 'Имя', name: 'first_name', onInput: this.changeFieldHandler })}
  ${TextField({ label: 'Фамилия', name: 'second_name', onInput: this.changeFieldHandler })}
  ${TextField({ label: 'Телефон', name: 'phone', onInput: this.changeFieldHandler })}
  ${TextField({ label: 'Пароль', name: 'password', type: 'password', onInput: this.changeFieldHandler })}
  ${TextField({ label: 'Пароль (еще раз)', name: 'password_confirm', type: 'password', onInput: this.changeFieldHandler })}

  <div class="auth-form__actions">
    ${Button({ children: 'Зарегистрироваться', type: 'submit', className: 'auth-form__submit' })}
    ${Link({ children: 'Войти', href: '/login' })}
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
