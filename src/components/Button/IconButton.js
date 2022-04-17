import { html } from 'template'
import './Button.scss'

export default function IconButton ({ icon, size, type, className, ...props } = {}) {
  const attr = {
    className: ['btn btn-icon', className, {
      'btn-icon-xl': size === 'big'
    }],
    ...props
  }

  return html`<button ${attr}>${icon}</button>`
}
