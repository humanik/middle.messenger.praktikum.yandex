import { Chat } from 'components/Chat/Chat'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'

export class ChatPage extends Component {
  public render (): VirtualElement {
    return html`${Chat}`
  }
}
