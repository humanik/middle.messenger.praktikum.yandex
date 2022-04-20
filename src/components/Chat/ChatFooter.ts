import { html } from 'template'
import './ChatFooter.scss'
import ChatForm from './ChatForm'

export default function ChatFooter (): string {
  return html`
<footer class="chat-footer">
  ${ChatForm}
</footer>`
}
