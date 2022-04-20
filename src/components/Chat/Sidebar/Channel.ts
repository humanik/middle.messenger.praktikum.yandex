import Avatar from 'components/Avatar/Avatar'
import Badge from 'components/Badge/Badge'
import { html } from 'template'
import './Channel.scss'

interface ChatChannelProps {
  text: string
  date: string
  unread?: number
  username: string
}

export default function ChatChannel ({ unread = 0, date = '', text = '', username = '' }: ChatChannelProps): string {
  let NotificationBadge = ''
  if (unread > 0) {
    NotificationBadge = Badge({
      children: unread.toString(),
      className: 'chat-channel__new'
    })
  }

  return html`
<div class="chat-channel">
  ${Avatar}
  <div class="chat-channel__content">
    <span class="chat-channel__username">${username}</span>
    <p class="chat-channel__text">${text}</p>
  </div>
  <div class="chat-channel__meta">
    <span class="chat-channel__date">${date}</span>
    ${NotificationBadge}
  </div>
</div>`
}
