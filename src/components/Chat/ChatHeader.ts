import { Avatar } from 'components/Avatar/Avatar'
import { ButtonGroup } from 'components/Button/ButtonGroup'
import { IconButton } from 'components/Button/IconButton'
import { DeleteIcon, MenuIcon, PlusIcon } from 'components/Icon'
import { showModal } from 'components/Modal/Modal'
import { Popover, togglePopover } from 'components/Popover/Popover'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import { AddUserModal } from './AddUserModal'
import './ChatHeader.scss'
import { RemoveUserModal } from './RemoveUserModal'

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
    ${AddUserModal}
    ${RemoveUserModal}
  </div>
</header>`
  }
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
