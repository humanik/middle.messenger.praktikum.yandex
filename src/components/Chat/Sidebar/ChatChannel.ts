import { Avatar } from 'components/Avatar/Avatar'
import { Badge } from 'components/Badge/Badge'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import { ComponentTuple } from 'utils/template/Template'
import './Channel.scss'

interface ChatChannelProps {
  text: string
  date: string
  unread?: number
  username: string
}

export class ChatChannelComponent extends Component<ChatChannelProps> {
  public render (): VirtualElement {
    const { unread = 0, date = '', text = '', username = '' } = this.props

    return html`
<div class="chat-channel">
  ${Avatar()}
  <div class="chat-channel__content">
    <span class="chat-channel__username">${username}</span>
    <p class="chat-channel__text">${text}</p>
  </div>
  <div class="chat-channel__meta">
    <span class="chat-channel__date">${date}</span>
    ${unread > 0 && Badge({
      children: unread,
      className: 'chat-channel__new'
    })}
  </div>
</div>`
  }
}

export function ChatChannel (props: ChatChannelProps): ComponentTuple {
  return [ChatChannelComponent, props]
}
