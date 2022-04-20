import { html } from 'template'
import './Button.scss'

interface ButtonProps {
  label: string
  size?: string
  type?: string
  variant?: string
  className?: string
}

export default function Button ({ variant = 'primary', label, size, className, ...props }: ButtonProps): string {
  const attr = {
    className: ['btn', className, {
      'btn-primary': variant === 'primary',
      'btn-xs': size === 'small'
    }],
    ...props
  }

  return html`<button ${attr}>${label}</button>`
}
