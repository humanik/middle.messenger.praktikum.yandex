import { html } from 'utils/template/html'
import './ChatMessage.scss'

interface ChatMessageProps extends WithClass {
  text: string
  time: string
  send?: string
  type?: string
}

export function ChatMessage (props: ChatMessageProps): VirtualElement {
  const { className = '', send = 'in', type = 'text', text, time, ...other } = props
  const attr = {
    className: ['chat-message', className, {
      'chat-message--in': send !== 'out',
      'chat-message--out': send === 'out',
      'chat-message--img': type === 'image'
    }],
    ...other
  }

  return html`
<div ${attr}>
  <div class="chat-message__content">${text.trim()}</div>
  <div class="chat-message__time">${time}</div>
</div>`
}
