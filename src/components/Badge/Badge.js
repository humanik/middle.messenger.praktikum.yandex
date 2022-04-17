import { html } from 'template'
import './Badge.scss'

export default function Badge (children, { className, variant = 'primary', ...props } = {}) {
  const attr = {
    className: ['badge', className, {
      'badge-primary': variant === 'primary'
    }]
  }

  return html`<span ${attr}>${children}</span>`
}
