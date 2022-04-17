import { html } from 'template'
import './DataList.scss'

export default function DataList ({ className, items = [] } = {}) {
  return html`
<div ${{ className: ['data-list', className] }}>
  ${items.map(DataItem)}
</div>`
}

function DataItem ({ label, value } = {}) {
  return html`
<div class="data-list-item">
  <div class="data-list-item__label">${label}</div>
  ${value && html`<div class="data-list-item__value">${value}</div>`}
</div>`
}
