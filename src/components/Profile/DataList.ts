import { isFalsy } from 'utils/helpers'
import { html } from 'utils/template/html'
import './DataList.scss'

interface DataListProps extends WithClass {
  items: DataListItemProps[]
}

interface DataListItemProps {
  label: string | VirtualElement
  value?: string | VirtualElement
}

export function DataList (props: DataListProps): VirtualElement {
  return html`
<div ${{ className: ['data-list', props.className] }}>
  ${props.items.map(DataListItem)}
</div>`
}

export function DataListItem (props: DataListItemProps): VirtualElement {
  const { label, value } = props

  return html`
<div class="data-list-item">
  <div class="data-list-item__label">${label}</div>
  ${!isFalsy(value) && html`<div class="data-list-item__value">${value}</div>`}
</div>`
}
