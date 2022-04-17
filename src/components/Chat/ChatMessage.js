import { html } from 'template'
import './ChatMessage.scss'

export default function ChatMessage ({ className, send, type, ...props } = {}) {
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
