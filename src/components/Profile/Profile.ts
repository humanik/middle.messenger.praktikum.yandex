import Button from 'components/Button/Button'
import TextField from 'components/Form/TextField'
import Link from 'components/Link/Link'
import Modal, { showModal } from 'components/Modal/Modal'
import { html } from 'template'
import AvatarModal from './AvatarModal'
import DataList from './DataList'
import './Profile.scss'
import ProfileAvatar from './ProfileAvatar'

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
  { label: Link({ label: 'Change data', tag: 'button', onclick: showModal(DATA_MODAL_ID) }) },
  { label: Link({ label: 'Change password', tag: 'button', onclick: showModal(PASSOWRD_MODAL_ID) }) },
  { label: Link({ label: 'Logout', variant: 'danger', tag: 'button' }) }
]

export default function Profile (): string {
  return html`
<div class="profile">
  ${ProfileAvatar({ onclick: showModal(AVATAR_MODAL_ID) })}
  <span class="profile__username">Ivan</span>
  ${DataList({ items: data, className: 'profile__data' })}
  ${DataList({ items: actions, className: 'profile__actions' })}
  ${AvatarModal({ id: AVATAR_MODAL_ID })}
  ${ChangeDataModal}
  ${ChangePasswordModal}
</div>`
}

function ChangeDataModal (): string {
  const children = html`
<div class="modal__title">Узменить данные</div>
<form class="modal__body" ${{ onsubmit: (e: SubmitEvent) => { e.preventDefault() } }}>
  ${data.map(TextField)}
  ${Button({ label: 'Узменить', className: 'w-100 mt-8' })}
</form>`

  return Modal({ id: DATA_MODAL_ID, children })
}

function ChangePasswordModal (): string {
  const children = html`
<div class="modal__title">Узменить пароль</div>
<form class="modal__body" ${{ onsubmit: (e: SubmitEvent) => { e.preventDefault() } }}>
  ${TextField({ label: 'Старый пароль', name: 'oldPassword', type: 'password' })}
  ${TextField({ label: 'Новый пароль', name: 'newPassword', type: 'password' })}
  ${TextField({ label: 'Повторите новый пароль', name: 'newPasswordConfirm', type: 'password' })}
  ${Button({ label: 'Узменить', className: 'w-100 mt-8' })}
</form>`

  return Modal({ id: PASSOWRD_MODAL_ID, children })
}
