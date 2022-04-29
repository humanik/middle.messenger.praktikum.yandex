import { html } from 'utils/template/html'
import './Button.scss'

interface IconButtonProps extends WithClass {
  icon: VirtualElement
  onClick: (e: MouseEvent) => void
  size?: 'big'
  type?: string
}

export function IconButton (props: IconButtonProps): VirtualElement {
  const { icon, size, type, className, ...other } = props

  const attr = {
    className: ['btn btn-icon', className, {
      'btn-icon-xl': size === 'big'
    }],
    ...other
  }

  return html`<button ${attr}>${icon}</button>`
}
