import Link from 'components/Link/Link'
import { html } from 'template'

export default function ServerErrorPage (): string {
  return html`
<div class="centered-container">
  <div class="error-page">
    <h1 class="error-page__title">500</h1>
    <p class="error-page__text">Мы уже фиксим</p>
    ${Link({ label: 'Назад к чатам', href: '/chat' })}
  </div>
</div>`
}
