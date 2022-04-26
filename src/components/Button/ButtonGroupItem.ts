import { html } from 'utils/template/html'
import './ButtonGroup.scss'

export interface GroupItemProps {
  icon?: VirtualElement
  text?: string
  onClick?: EventListener
}

export function ButtonGroupItem (props: GroupItemProps): VirtualElement {
  const { icon, text, ...other } = props
  const attr = { className: 'btn-group-item', ...other }

  return html`
<button ${attr}>
  ${icon}
  <span>${text}</span>
</button>`
}
