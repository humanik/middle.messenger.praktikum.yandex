import Avatar from 'components/Avatar/Avatar'
import Button from 'components/Button/Button'
import ButtonGroup from 'components/Button/ButtonGroup'
import IconButton from 'components/Button/IconButton'
import TextField from 'components/Form/TextField'
import { DeleteIcon, MenuIcon, PlusIcon } from 'components/Icon'
import Modal, { showModal } from 'components/Modal/Modal'
import Popover, { togglePopover } from 'components/Popover/Popover'
import { html } from 'template'
import './ChatHeader.scss'

export default function ChatHeader ({ name }: { name: string }): string {
  return html`
<header class="chat-header">
  <div class="chat-header__info">
    ${Avatar({ size: 'small' })}
    <div class="chat-header__name">${name}</div>
    ${Popover({
      className: 'chat-header__actions',
      content: Menu(),
      trigger: IconButton({ icon: MenuIcon(), className: 'popover__trigger', onclick: togglePopover })
    })}
    ${AddUserModal}
    ${RemoveUserModal}
  </div>
</header>`
}

const AddUserModal = (): string => {
  const children = html`
<div class="modal__title">Добавить пользователя</div>
<div class="modal__body">
  ${TextField({ label: 'Логин', name: 'login' })}
  ${Button({ label: 'Добавить', className: 'w-100 mt-8' })}
</div>`

  return Modal({ id: 'modal-add-user', children })
}

const RemoveUserModal = (): string => {
  const children = html`
<div class="modal__title">Удалить пользователя</div>
<div class="modal__body">
  ${TextField({ label: 'Логин', name: 'login' })}
  ${Button({ label: 'Удалить', className: 'w-100 mt-8' })}
</div>`

  return Modal({ id: 'modal-remove-user', children })
}

const Menu = (): string => {
  const items = [
    {
      icon: PlusIcon,
      text: 'Добавить пользователя',
      onclick: showModal('modal-add-user')
    },
    {
      icon: DeleteIcon,
      text: 'Удалить пользователя',
      onclick: showModal('modal-remove-user')
    }
  ]

  return ButtonGroup({ items })
}
