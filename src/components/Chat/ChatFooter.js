import { html } from 'template'
import './ChatFooter.scss'
import ChatForm from './ChatForm'

export default function ChatFooter (props = {}) {
  return html`
<footer class="chat-footer">
  ${ChatForm}
</footer>`
}
