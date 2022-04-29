import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'

interface ChatInputProps {
  id?: string
  name?: string
  value?: string
  placeholder?: string
}

export class ChatInputComponent extends Component<ChatInputProps> {
  public render (): VirtualElement {
    const attr = {
      rows: 1,
      ...this.props,
      className: 'chat-form__control',
      onKeydown: this.keydownHandler
    }

    return html`<textarea ${attr}>${this.props.value}</textarea>`
  }

  protected keydownHandler = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (e.target instanceof HTMLTextAreaElement) {
        e.target.form?.dispatchEvent(new Event('submit', { cancelable: true }))
      }
    }
  }
}

export function ChatInput (props: ChatInputProps = {}): ComponentTuple {
  return [ChatInputComponent, props]
}
