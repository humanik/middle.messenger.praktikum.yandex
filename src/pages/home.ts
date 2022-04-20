import Link from 'components/Link/Link'
import List from 'components/List/List'
import { html } from 'template'

export default function HomePage (): string {
  const links = [
    Link({ label: 'Чат', href: '/chat' }),
    Link({ label: 'Профиль', href: '/profile' }),
    Link({ label: 'Вход', href: '/login' }),
    Link({ label: 'Регистрация', href: '/registration' }),
    Link({ label: '404', href: '/404' }),
    Link({ label: '500', href: '/500' })
  ]

  return html`
<div class="centered-container">
  ${List({ items: links })}
</div>`
}
