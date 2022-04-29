import { Link } from 'components/Link/Link'
import { showModal } from 'components/Modal/Modal'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import { AvatarModal } from './AvatarModal'
import { ChangeDataModal } from './ChangeDataModal'
import { ChangePasswordModal } from './ChangePasswordModal'
import { data } from './data'
import { DataList } from './DataList'
import './Profile.scss'
import { ProfileAvatar } from './ProfileAvatar'

const AVATAR_MODAL_ID = 'modal-avatar'
export const DATA_MODAL_ID = 'modal-change-data'
export const PASSOWRD_MODAL_ID = 'modal-change-password'

const actions = [
  { label: Link({ children: 'Изменить данные', tag: 'button', onClick: showModal(DATA_MODAL_ID) }) },
  { label: Link({ children: 'Изменить пароль', tag: 'button', onClick: showModal(PASSOWRD_MODAL_ID) }) },
  { label: Link({ children: 'Выйти', variant: 'danger', tag: 'button' }) }
]

export class Profile extends Component {
  public render (): VirtualElement {
    return html`
<div class="profile">
  ${ProfileAvatar({ onClick: showModal(AVATAR_MODAL_ID) })}
  <span class="profile__username">Ivan</span>
  ${DataList({ items: data, className: 'profile__data' })}
  ${DataList({ items: actions, className: 'profile__actions' })}
  ${AvatarModal({ id: AVATAR_MODAL_ID })}
  ${ChangeDataModal}
  ${ChangePasswordModal}
</div>`
  }
}
