import { Avatar } from 'components/Avatar/Avatar'
import { html } from 'utils/template/html'
import './ProfileAvatar.scss'

interface ProfileAvatarProps {
  onClick?: EventListener
}

export function ProfileAvatar ({ onClick }: ProfileAvatarProps): VirtualElement {
  return html`
<div class="profile-avatar">
  ${Avatar({ id: 'profile-avatar', size: 'big' })}
  <button class="profile-avatar__change" type="button" ${{ onClick }}>Поменять аватар</button>
</div>`
}
