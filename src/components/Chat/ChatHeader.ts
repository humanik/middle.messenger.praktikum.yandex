import { Avatar } from 'components/Avatar/Avatar'
import { Button } from 'components/Button/Button'
import { ButtonGroup } from 'components/Button/ButtonGroup'
import { IconButton } from 'components/Button/IconButton'
import { TextField } from 'components/Form/TextField'
import { DeleteIcon, MenuIcon, PlusIcon } from 'components/Icon'
import { Modal, showModal } from 'components/Modal/Modal'
import { Popover, togglePopover } from 'components/Popover/Popover'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import './ChatHeader.scss'

export class ChatHeader extends Component {
  public render (): VirtualElement {
    return html`
<header class="chat-header">
  <div class="chat-header__info">
    ${Avatar({ size: 'small' })}
    <div class="chat-header__name">Ivan</div>
    ${Popover({
      className: 'chat-header__actions',
      content: Menu(),
      trigger: IconButton({ icon: MenuIcon(), className: 'popover__trigger', onClick: togglePopover })
    })}
    ${AddUserModal()}
    ${RemoveUserModal()}
  </div>
</header>`
  }
}

const AddUserModal = (): VirtualElement => {
  return html`
${Modal({
  id: 'modal-add-use',
  children: html`
  <div class="modal__content">
    <div class="modal__title">Добавить пользователя</div>
    <div class="modal__body">
      ${TextField({ id: 'input-add-user', label: 'Логин', name: 'login' })}
      ${Button({ children: 'Добавить', className: 'w-100 mt-8' })}
    </div>
  </div>`
})}`
}

const RemoveUserModal = (): VirtualElement => {
  return html`
${Modal({
  id: 'modal-remove-user',
  children: html`
  <div class="modal__content">
    <div class="modal__title">Удалить пользователя</div>
    <div class="modal__body">
      ${TextField({ id: 'input-remove-user', label: 'Логин', name: 'login' })}
      ${Button({ children: 'Удалить', className: 'w-100 mt-8' })}
    </div>
  </div>`
})}`
}

const Menu = (): VirtualElement => {
  const items = [
    {
      icon: PlusIcon({ className: 'btn-group-item__icon' }),
      text: 'Добавить пользователя',
      onClick: showModal('modal-add-user')
    },
    {
      icon: DeleteIcon({ className: 'btn-group-item__icon' }),
      text: 'Удалить пользователя',
      onClick: showModal('modal-remove-user')
    }
  ]

  return ButtonGroup({ items })
}
