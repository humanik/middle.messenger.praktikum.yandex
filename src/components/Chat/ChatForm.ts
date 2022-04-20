import Button from 'components/Button/Button'
import ButtonGroup from 'components/Button/ButtonGroup'
import IconButton from 'components/Button/IconButton'
import { ArrowIcon, AttachmentIcon, FileIcon, LocationIcon, MediaIcon } from 'components/Icon'
import Popover, { togglePopover } from 'components/Popover/Popover'
import { html } from 'template'
import './ChatFooter.scss'
import './ChatForm.scss'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

const submitHandler = (e: SubmitEvent): void => {
  e.preventDefault()
  const now = new Date()
  const input = document.querySelector<HTMLInputElement>('#chat-input')
  const chatContent = document.querySelector('.chat-content')
  if ((input == null) || (chatContent == null)) {
    return
  }
  const text = input.value.trim()
  if (text.length > 0) {
    const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
    const message = ChatMessage({ send: 'out', text, time })
    console.log(message)
  }
  input.value = ''
}

export default function ChatForm (): string {
  return html`
<form ${{ className: 'chat-form', onsubmit: submitHandler }}>
  ${Popover({
    position: 'top-left',
    trigger: IconButton({ icon: AttachmentIcon(), className: 'p-1', size: 'big', onclick: togglePopover }),
    content: AttachmentMenu()
  })}
  ${ChatInput({ id: 'chat-input', placeholder: 'Сообщение' })}
  ${SubmitButton}
</form>`
}

const SubmitButton = (): string =>
  Button({ label: ArrowIcon(), className: 'chat-form__submit', type: 'submit' })

const AttachmentMenu = (): string => {
  const items = [
    {
      icon: MediaIcon,
      text: 'Фото и видео'
    },
    {
      icon: FileIcon,
      text: 'Файл'
    },
    {
      icon: LocationIcon,
      text: 'Локация'
    }
  ]

  return ButtonGroup({ items })
}
