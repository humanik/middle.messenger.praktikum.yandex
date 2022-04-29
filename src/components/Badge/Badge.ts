import { html } from 'utils/template/html'
import './Badge.scss'

interface BadgeProps extends WithChildren, WithClass {
  variant?: 'primary'
}

export function Badge (props: BadgeProps): VirtualElement {
  const { className, children, variant = 'primary' } = props

  const attr = {
    className: ['badge', className, {
      'badge-primary': variant === 'primary'
    }]
  }

  return html`<span ${attr}>${children}</span>`
}
