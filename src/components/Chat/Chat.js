import { html } from 'template'
import './Chat.scss'
import ChatContent from './ChatContent'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'
import Sidebar from './Sidebar/Sidebar'

export default function Chat (props = {}) {
  return html`
<div class="chat">
  <main class="chat-window">
    ${ChatHeader({ name: 'Ivan' })}
    ${ChatContent}
    ${ChatFooter}
  </main>
  ${Sidebar}
</div>`
}
