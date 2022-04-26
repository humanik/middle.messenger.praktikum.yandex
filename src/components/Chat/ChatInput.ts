import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import { ComponentTuple } from 'utils/template/Template'

interface ChatInputProps {
  id?: string
  children?: string
  placeholder?: string
}

export class ChatInputComponent extends Component<ChatInputProps> {
  public render (): VirtualElement {
    const attr = {
      rows: 1,
      className: 'chat-form__control',
      onKeydown: this.keydownHandler
    }

    return html`<textarea ${attr}>${this.props.children}</textarea>`
  }

  protected keydownHandler = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (e.target instanceof HTMLInputElement) {
        e.target.form?.dispatchEvent(new Event('submit', { cancelable: true }))
      }
    }
  }
}

export function ChatInput (props: ChatInputProps = {}): ComponentTuple {
  return [ChatInputComponent, props]
}
