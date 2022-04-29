import { RegistrationForm } from 'components/Form/RegistrationForm'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'

export class RegistrationPage extends Component {
  public render (): VirtualElement {
    return html`<div class="centered-container">${RegistrationForm}</div>`
  }
}
