import { html } from 'template'
import './Badge.scss'

interface BadgeProps {
  children: string
  variant?: string
  className?: string
}

export default function Badge ({ className, children, variant = 'primary' }: BadgeProps): string {
  const attr = {
    className: ['badge', className, {
      'badge-primary': variant === 'primary'
    }]
  }

  return html`<span ${attr}>${children}</span>`
}
