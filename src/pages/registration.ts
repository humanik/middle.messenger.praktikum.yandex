import RegistrationForm from 'components/Form/RegistrationForm'
import { html } from 'template'

export default function RegistrationPage (): string {
  return html`<div class="centered-container">${RegistrationForm()}</div>`
}