import { html, uniqID } from 'template'
import './TextField.scss'

export default function TextField ({ id = uniqID(), type = 'text', valid, invalid, label, className, feedback, ...props } = {}) {
  const mainClasses = ['form-field', className, {
    'form-field--valid': valid,
    'form-field--invalid': invalid
  }]

  const attr = {
    id,
    type,
    className: 'form-field__control',
    placeholder: ' ',
    ...props
  }

  return html`
<div ${{ className: mainClasses }}>
  <input ${attr}/>
  ${Feedback({ text: feedback })}
  <label for="${attr.id}" class="form-field__label">${label}</label>
</div>`
}

function Feedback ({ text }) {
  if (!text) {
    return
  }

  return html`<span class="form-field__feedback">${text}</span>`
}
