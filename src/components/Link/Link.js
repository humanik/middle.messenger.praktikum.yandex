import { html } from 'template'
import './Link.scss'

document.addEventListener('click', (e) => {
  if (e.target instanceof HTMLAnchorElement) {
    e.preventDefault()
    const href = e.target.getAttribute('href')
    history.pushState({ page: href }, '', href)
  }
})

export default function Link ({ label, tag = 'a', variant = 'primary', size, className, ...props } = {}) {
  const attr = {
    className: ['link', className, {
      'link-primary': variant === 'primary',
      'link-danger': variant === 'danger',
      'link-xs': size === 'small'
    }],
    ...props
  }

  return html`<${tag} ${attr}>${label}</${tag}>`
}
