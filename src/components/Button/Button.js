import { html } from 'template'
import './Button.scss'

export default function Button ({ variant = 'primary', label, size, className, ...props } = {}) {
  const attr = {
    className: ['btn', className, {
      'btn-primary': variant === 'primary',
      'btn-xs': size === 'small'
    }],
    ...props
  }

  return html`<button ${attr}>${label}</button>`
}
