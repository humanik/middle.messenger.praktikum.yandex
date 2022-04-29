import { Button } from 'components/Button/Button'
import { ButtonGroup } from 'components/Button/ButtonGroup'
import { IconButton } from 'components/Button/IconButton'
import { ArrowIcon, AttachmentIcon, FileIcon, LocationIcon, MediaIcon } from 'components/Icon'
import { Popover, togglePopover } from 'components/Popover/Popover'
import { isFalsy } from 'utils/helpers'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import './ChatFooter.scss'
import './ChatForm.scss'
import { ChatInput } from './ChatInput'

export class ChatForm extends Component {
  public render (): VirtualElement {
    const menuItems = [
      {
        icon: MediaIcon({ width: 22, className: 'btn-group-item__icon' }),
        text: 'Фото и видео'
      },
      {
        icon: FileIcon({ width: 22, className: 'btn-group-item__icon' }),
        text: 'Файл'
      },
      {
        icon: LocationIcon({ width: 22, className: 'btn-group-item__icon' }),
        text: 'Локация'
      }
    ]

    return html`
<form ${{ className: 'chat-form', onSubmit: this.submitHandler }}>
  ${Popover({
    position: 'top-left',
    trigger: IconButton({ icon: AttachmentIcon(), className: 'p-1', size: 'big', onClick: togglePopover }),
    content: ButtonGroup({ items: menuItems })
  })}
  ${ChatInput({ id: 'chat-input', name: 'message', placeholder: 'Сообщение' })}
  ${Button({ children: ArrowIcon(), className: 'chat-form__submit', type: 'submit' })}
</form>`
  }

  protected submitHandler = (e: SubmitEvent): void => {
    e.preventDefault()
    const now = new Date()
    const input = document.querySelector<HTMLInputElement>('#chat-input')
    const chatContent = document.querySelector('.chat-content')
    if (isFalsy(input) || isFalsy(chatContent)) {
      return
    }
    const text = input.value.trim()
    if (text.length > 0) {
      const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
      const message = { send: 'out', text, time }
      console.log({ message })
    }
    input.value = ''
  }
}
