import { html, uniqID } from 'template'
import './TextField.scss'

interface TextFieldProps {
  id?: string
  type?: string
  valid?: boolean
  invalid?: boolean
  name: string
  label: string
  className?: string
  feedback?: string
}

export default function TextField ({ id = uniqID(), type = 'text', valid, invalid, label, className, feedback = '', ...props }: TextFieldProps): string {
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
  ${feedback.length > 0 && Feedback(feedback)}
  <label for="${attr.id}" class="form-field__label">${label}</label>
</div>`
}

function Feedback (text: string): string {
  return html`<span class="form-field__feedback">${text}</span>`
}
