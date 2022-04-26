import { html } from 'utils/template/html'
import './List.scss'

interface ListProps {
  items: VirtualElement[]
}

export function List ({ items }: ListProps): VirtualElement {
  return html`
<ul class="list-group">
  ${items.map(ListItem)}
</ul>`
}

function ListItem (item: VirtualElement): VirtualElement {
  return html`<li class="list-group__item">${item}</li>`
}
