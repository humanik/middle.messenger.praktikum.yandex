import { html } from 'utils/template/html'
import './Button.scss'

interface ButtonProps extends WithClass, WithChildren {
  size?: 'small'
  type?: string
  variant?: 'primary'
}

export function Button (props: ButtonProps): VirtualElement {
  const { variant = 'primary', children, size, className, ...other } = props

  const attr = {
    className: ['btn', className, {
      'btn-primary': variant === 'primary',
      'btn-xs': size === 'small'
    }],
    ...other
  }

  return html`<button ${attr}>${children}</button>`
}
