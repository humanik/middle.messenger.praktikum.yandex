import { Link } from 'components/Link/Link'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'

export class NotFoundPage extends Component {
  public render (): VirtualElement {
    return html`
<div class="centered-container">
  <div class="error-page">
    <h1 class="error-page__title">404</h1>
    <p class="error-page__text">Не туда попали</p>
    ${Link({ children: 'Назад к чатам', href: '/chat' })}
  </div>
</div>`
  }
}
