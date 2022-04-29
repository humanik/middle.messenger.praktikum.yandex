import { Link } from 'components/Link/Link'
import { List } from 'components/List/List'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'

export class HomePage extends Component {
  public render (): VirtualElement {
    const links = [
      Link({ children: 'Чат', href: '/chat' }),
      Link({ children: 'Профиль', href: '/profile' }),
      Link({ children: 'Вход', href: '/login' }),
      Link({ children: 'Регистрация', href: '/registration' }),
      Link({ children: '404', href: '/404' }),
      Link({ children: '500', href: '/500' })
    ]

    return html`<div class="centered-container">${List({ items: links })}</div>`
  }
}
