import { html } from 'template'
import './List.scss'

interface ListProps {
  items: string[]
}

export default function List ({ items = [] }: ListProps): string {
  return html`
<ul class="list-group">
  ${items.map(ListItem)}
</ul>`
}

function ListItem (children: string): string {
  return html`<li class="list-group__item">${children}</li>`
}
