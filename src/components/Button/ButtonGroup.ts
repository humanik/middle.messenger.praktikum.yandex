import { html } from 'template'
import './ButtonGroup.scss'

interface ButtonGroupProps {
  items: GroupItemProps[]
  className?: string
}

interface GroupItemProps {
  icon?: ({ className }: { className: string }) => string
  text?: string
}

export default function ButtonGroup ({ className, items = [] }: ButtonGroupProps): string {
  const content = items.map(GroupItem)

  return html`<div ${{ className: ['btn-group', className] }}>${content}</div>`
}

const GroupItem = ({ icon, text, ...props }: GroupItemProps): string => {
  const attr = { className: 'btn-group-item', ...props }

  return html`
<button ${attr}>
  ${icon?.({ className: 'btn-group-item__icon' })}
  <span>${text}</span>
</button>`
}
