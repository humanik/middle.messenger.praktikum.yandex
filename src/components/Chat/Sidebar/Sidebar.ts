import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import { ChatChannel } from './ChatChannel'
import './Sidebar.scss'
import { SidebarHeader } from './SidebarHeader'

const channels = [
  {
    username: 'John',
    text: 'Hello world!',
    date: '10:49',
    unread: 4
  },
  {
    username: 'Maria',
    text: 'Hello world!',
    date: '12:55',
    unread: 2
  },
  {
    username: 'Gena',
    text: 'Hello world!',
    date: '09:47',
    unread: 0
  }
]

export class Sidebar extends Component {
  public render (): VirtualElement {
    return html`
<aside class="chat-sidebar">
  ${SidebarHeader}
  ${channels.map(ChatChannel)}
</aside>`
  }
}
