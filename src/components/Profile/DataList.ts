import { html } from 'template'
import './DataList.scss'

interface DataListProps {
  items: DataItemProps[]
  className?: string
}

interface DataItemProps {
  label: string
  value?: string
}

export default function DataList ({ className, items = [] }: DataListProps): string {
  return html`
<div ${{ className: ['data-list', className] }}>
  ${items.map(DataItem)}
</div>`
}

function DataItem ({ label, value = '' }: DataItemProps): string {
  return html`
<div class="data-list-item">
  <div class="data-list-item__label">${label}</div>
  ${value.length > 0 && html`<div class="data-list-item__value">${value}</div>`}
</div>`
}
