import { html } from 'template'

const keydownHandler = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    e.target.form.dispatchEvent(new Event('submit', { cancelable: true }))
  }
}

export default function ChatInput ({ children, ...props }) {
  const attr = {
    rows: 1,
    className: 'chat-form__control',
    onkeydown: keydownHandler,
    ...props
  }

  return html`<textarea ${attr}>${children}</textarea>`
}
