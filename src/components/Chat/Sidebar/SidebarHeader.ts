import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import './Header.scss'
import { Search } from './Search'

export class SidebarHeader extends Component {
  public render (): VirtualElement {
    return html`
<div class="sidebar-header">
  <a class="sidebar-header__profile" href="/profile">Профиль</a>
  ${Search}
</div>`
  }
}
