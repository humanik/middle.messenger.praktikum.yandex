import { html } from 'template'
import './ButtonGroup.scss'

export default function ButtonGroup ({ className, items = [] } = {}) {
  const content = items.map(GroupItem)

  return html`<div ${{ className: ['btn-group', className] }}>${content}</div>`
}

const GroupItem = ({ icon, text, ...props }) => {
  const attr = { className: 'btn-group-item', ...props }

  return html`
<button ${attr}>
  ${icon && icon({ className: 'btn-group-item__icon' })}
  <span>${text}</span>
</button>`
}
