import Avatar from 'components/Avatar/Avatar'
import { html } from 'template'
import './ProfileAvatar.scss'

interface ProfileAvatarProps {
  onclick: () => void
}

export default function ProfileAvatar (props: ProfileAvatarProps): string {
  return html`
<div class="profile-avatar">
  ${Avatar({ id: 'profile-avatar', size: 'big' })}
  <button class="profile-avatar__change" type="button" ${{ onclick: props.onclick }}>Поменять аватар</button>
</div>`
}
