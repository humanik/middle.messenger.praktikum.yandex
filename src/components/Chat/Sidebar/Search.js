import { html } from 'template'
import './Search.scss'
import SearchIcon from './SearchIcon'

export default function Search () {
  return html`
<div class="chat-search">
  <input class="chat-search__control" placeholder="Поиск"/>
  ${SearchIcon({ className: 'chat-search__icon' })}
</div>`
}
