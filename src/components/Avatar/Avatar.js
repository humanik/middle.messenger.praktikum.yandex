import { html } from 'template'
import emptyAvatar from 'images/empty-avatar.svg'
import './Avatar.scss'

export default function Avatar ({ size, className, ...props } = {}) {
  const attr = {
    className: ['avatar', className, {
      'avatar-xl': size === 'big',
      'avatar-sm': size === 'small'
    }],
    ...props
  }

  return html`<div ${attr}><img ${{ src: emptyAvatar, className: 'avatar__img' }}/></div>`
}
