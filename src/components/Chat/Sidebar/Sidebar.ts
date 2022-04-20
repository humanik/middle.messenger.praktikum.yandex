import { html } from 'template'
import Channel from './Channel'
import './Sidebar.scss'
import Header from './SidebarHeader'

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

export default function Sidebar (): string {
  return html`
<aside class="chat-sidebar">
  ${Header()}
  ${channels.map(Channel)}
</aside>`
}
