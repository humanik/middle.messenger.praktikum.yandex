import { html } from 'template'
import './List.scss'

export default function List ({ items = [], ...props } = {}) {
  return html`
<ul class="list-group">
  ${items.map(ListItem)}
</ul>`
}

function ListItem (children) {
  return html`<li class="list-group__item">${children}</li>`
}
