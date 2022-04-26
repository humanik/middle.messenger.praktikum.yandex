import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import './ChatFooter.scss'
import { ChatForm } from './ChatForm'

export class ChatFooter extends Component {
  public render (): VirtualElement {
    return html`
<footer class="chat-footer">
  ${ChatForm}
</footer>`
  }
}
