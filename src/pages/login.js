import LoginForm from 'components/Form/LoginForm'
import { html } from 'template'

export default function LoginPage () {
  return html`<div class="centered-container">${LoginForm()}</div>`
}
