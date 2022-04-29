import emptyAvatar from 'images/empty-avatar.svg'
import { html } from 'utils/template/html'
import './Avatar.scss'

interface Props extends WithClass {
  id?: string
  size?: 'big' | 'small'
}

export function Avatar (props: Props = {}): VirtualElement {
  const { size, className, ...other } = props

  const attr = {
    className: ['avatar', className, {
      'avatar-xl': size === 'big',
      'avatar-sm': size === 'small'
    }],
    ...other
  }

  return html`
<div ${attr}>
  <img ${{ src: emptyAvatar, className: 'avatar__img' }}/>
</div>`
}
