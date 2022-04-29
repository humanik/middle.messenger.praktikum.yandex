import { LoginForm } from 'components/Form/LoginForm'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'

export class LoginPage extends Component {
  public render (): VirtualElement {
    return html`<div class="centered-container">${LoginForm}</div>`
  }
}
