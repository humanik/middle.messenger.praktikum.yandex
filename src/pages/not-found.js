import Link from 'components/Link/Link'
import { html } from 'template'

export default function NotFoundPage () {
  return html`
<div class="centered-container">
  <div class="error-page">
    <h1 class="error-page__title">404</h1>
    <p class="error-page__text">Не туда попали</p>
    ${Link({ label: 'Назад к чатам', href: '/chat' })}
  </div>
</div>`
}
