import { html } from 'template'
import './Button.scss'

interface IconButtonProps {
  icon: string
  size?: string
  type?: string
  className?: string
  onclick: (e: MouseEvent) => void
}

export default function IconButton ({ icon, size, type, className, ...props }: IconButtonProps): string {
  const attr = {
    className: ['btn btn-icon', className, {
      'btn-icon-xl': size === 'big'
    }],
    ...props
  }

  return html`<button ${attr}>${icon}</button>`
}
