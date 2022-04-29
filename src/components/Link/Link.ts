import { html } from 'utils/template/html'
import './Link.scss'

interface LinkProps extends WithClass, WithChildren {
  tag?: string
  href?: string
  for?: string
  variant?: 'primary' | 'danger'
  size?: 'small'
  onClick?: (e: MouseEvent) => void
}

export function Link (props: LinkProps): VirtualElement {
  const { children, tag = 'a', variant = 'primary', size, className, ...other } = props
  const attr = {
    className: [
      'link',
      className,
      {
        'link-primary': variant === 'primary',
        'link-danger': variant === 'danger',
        'link-xs': size === 'small'
      }
    ],
    ...other
  }

  return html`<${tag} ${attr}>${children}</${tag}>`
}
