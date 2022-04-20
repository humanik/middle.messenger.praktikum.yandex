import { html } from 'template'
import './Header.scss'
import Search from './Search'

export default function SidebarHeader (): string {
  return html`
<div class="sidebar-header">
  <a class="sidebar-header__profile" href="/profile">Профиль</a>
  ${Search}
</div>`
}
