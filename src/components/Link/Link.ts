import { html } from 'template'
import './Link.scss'

interface LinkProps {
  tag?: string
  label: string
  href?: string
  for?: string
  variant?: string
  size?: string
  className?: string
  onclick?: (e: MouseEvent) => void
}

const Link = ({ label, tag = 'a', variant = 'primary', size, className, ...props }: LinkProps): string => {
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
    ...props
  }

  return html`<${tag} ${attr}>${label}</${tag}>`
}

export default Link
