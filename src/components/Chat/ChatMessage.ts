import { html } from 'template'
import './ChatMessage.scss'

interface ChatMessageProps {
  send: string
  text: string
  time: string
  type?: string
  className?: string
}

const ChatMessage = ({ className = '', send = 'in', type = 'text', ...props }: ChatMessageProps): string => {
  const attr = {
    className: ['chat-message', className, {
      'chat-message--in': send !== 'out',
      'chat-message--out': send === 'out',
      'chat-message--img': type === 'image'
    }],
    ...props
  }

  return html`
<div ${attr}>
  <div class="chat-message__content">${props.text.trim()}</div>
  <div class="chat-message__time">${props.time}</div>
</div>`
}

export default ChatMessage
