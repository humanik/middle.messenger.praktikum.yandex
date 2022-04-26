import { Button } from 'components/Button/Button'
import { TextField } from 'components/Form/TextField'
import { Link } from 'components/Link/Link'
import { Modal, showModal } from 'components/Modal/Modal'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import { AvatarModal } from './AvatarModal'
import { DataList } from './DataList'
import './Profile.scss'
import { ProfileAvatar } from './ProfileAvatar'

const AVATAR_MODAL_ID = 'modal-avatar'
const DATA_MODAL_ID = 'modal-change-data'
const PASSOWRD_MODAL_ID = 'modal-change-password'

const data = [
  { label: 'Почта', name: 'email', value: 'pochta@yandex.ru' },
  { label: 'Логин', name: 'login', value: 'ivanivanov' },
  { label: 'Имя', name: 'first_name', value: 'Иван' },
  { label: 'Фамилия', name: 'second_name', value: 'Иванов' },
  { label: 'Имя в чате', name: 'display_name', value: 'Иван' },
  { label: 'Телефон', name: 'phone', value: '+7 (909) 967 30 30' }
]

const actions = [
  { label: Link({ children: 'Change data', tag: 'button', onClick: showModal(DATA_MODAL_ID) }) },
  { label: Link({ children: 'Change password', tag: 'button', onClick: showModal(PASSOWRD_MODAL_ID) }) },
  { label: Link({ children: 'Logout', variant: 'danger', tag: 'button' }) }
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
  ${ChangeDataModal()}
  ${ChangePasswordModal()}
</div>`
  }
}

function ChangeDataModal (): VirtualElement {
  return html`
${Modal({
  id: DATA_MODAL_ID,
  children: html`
  <div class="modal__content">
    <div class="modal__title">Изменить данные</div>
    <form class="modal__body" ${{ onSubmit: (e: SubmitEvent) => { e.preventDefault() } }}>
      ${data.map((field) => TextField(field))}
      ${Button({ children: 'Изменить', className: 'w-100 mt-8' })}
    </form>
  </div>`
})}
`
}

function ChangePasswordModal (): VirtualElement {
  return html`
${Modal({
  id: PASSOWRD_MODAL_ID,
  children: html`
  <div class="modal__content">
    <div class="modal__title">Изменить пароль</div>
    <form class="modal__body" ${{ onsubmit: (e: SubmitEvent) => { e.preventDefault() } }}>
      ${TextField({ label: 'Старый пароль', name: 'oldPassword', type: 'password' })}
      ${TextField({ label: 'Новый пароль', name: 'newPassword', type: 'password' })}
      ${TextField({ label: 'Повторите новый пароль', name: 'newPasswordConfirm', type: 'password' })}
      ${Button({ children: 'Изменить', className: 'w-100 mt-8' })}
    </form>
  </div>`
})}`
}
