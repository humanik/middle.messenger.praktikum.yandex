import { SearchIcon } from 'components/Icon'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import './Search.scss'

export class Search extends Component {
  public render (): VirtualElement {
    return html`
<div class="chat-search">
  <input class="chat-search__control" placeholder="Поиск"/>
  ${SearchIcon({ className: 'chat-search__icon' })}
</div>`
  }
}
