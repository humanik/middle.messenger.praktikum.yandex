import Avatar from 'components/Avatar/Avatar'
import Badge from 'components/Badge/Badge'
import { html } from 'template'
import './Channel.scss'

export default function ChatChannel (props = {}) {
  let NotificationBadge = ''
  if (props.unread) {
    NotificationBadge = Badge(props.unread, {
      className: 'chat-channel__new',
      variant: 'primary'
    })
  }

  return html`
<div class="chat-channel">
  ${Avatar}
  <div class="chat-channel__content">
    <span class="chat-channel__username">${props.username}</span>
    <p class="chat-channel__text">${props.text}</p>
  </div>
  <div class="chat-channel__meta">
    <span class="chat-channel__date">${props.date}</span>
    ${NotificationBadge}
  </div>
</div>`
}
