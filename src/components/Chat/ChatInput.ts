import { html } from 'template'

interface ChatInputProps {
  id?: string
  children?: string
  placeholder?: string
}

export default function ChatInput ({ children, ...props }: ChatInputProps): string {
  const attr = {
    rows: 1,
    className: 'chat-form__control',
    onkeydown: keydownHandler,
    ...props
  }

  return html`<textarea ${attr}>${children}</textarea>`
}

const keydownHandler = (e: KeyboardEvent): void => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    if (e.target instanceof HTMLInputElement) {
      e.target.form?.dispatchEvent(new Event('submit', { cancelable: true }))
    }
  }
}
