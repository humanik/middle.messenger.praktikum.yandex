import { html } from 'utils/template/html'
import './ButtonGroup.scss'
import { ButtonGroupItem, GroupItemProps } from './ButtonGroupItem'

interface ButtonGroupProps extends WithClass {
  items: GroupItemProps[]
}

export function ButtonGroup (props: ButtonGroupProps): VirtualElement {
  const { className, items = [] } = props

  return html`<div ${{ className: ['btn-group', className] }}>${items.map(ButtonGroupItem)}</div>`
}
