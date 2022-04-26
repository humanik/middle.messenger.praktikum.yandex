import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import './Chat.scss'
import { ChatContent } from './ChatContent'
import { ChatFooter } from './ChatFooter'
import { ChatHeader } from './ChatHeader'
import { Sidebar } from './Sidebar/Sidebar'

export class Chat extends Component {
  public render (): VirtualElement {
    return html`
<div class="chat">
  <main class="chat-window">
    ${ChatHeader}
    ${ChatContent}
    ${ChatFooter}
  </main>
  ${Sidebar}
</div>`
  }
}
