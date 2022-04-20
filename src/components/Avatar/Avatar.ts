import emptyAvatar from 'images/empty-avatar.svg'
import { html } from 'template'
import './Avatar.scss'

interface AvatarProps {
  id?: string
  size?: string
  className?: string
}

const Avatar = ({ size, className, ...props }: AvatarProps = {}): string => {
  const attr = {
    className: ['avatar', className, {
      'avatar-xl': size === 'big',
      'avatar-sm': size === 'small'
    }],
    ...props
  }

  return html`<div ${attr}><img ${{ src: emptyAvatar, className: 'avatar__img' }}/></div>`
}

export default Avatar
