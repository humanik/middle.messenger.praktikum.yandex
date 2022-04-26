import { isFalsy } from 'utils/helpers'
import { html } from 'utils/template/html'
import './TextField.scss'

interface TextFieldProps extends WithClass {
  id?: string
  type?: string
  valid?: boolean
  invalid?: boolean
  name: string
  label: string
  feedback?: string
}

export function TextField (props: TextFieldProps): VirtualElement {
  const { id, type = 'text', valid, invalid, label, className, feedback, ...other } = props

  const mainClasses = ['form-field', className, {
    'form-field--valid': valid,
    'form-field--invalid': invalid
  }]

  const attr = {
    id,
    type,
    className: 'form-field__control',
    placeholder: ' ',
    ...other
  }

  return html`
<div ${{ className: mainClasses }}>
  <input ${attr}/>
  ${!isFalsy(feedback) && `<span class="form-field__feedback">${feedback}</span>`}
  <label for="${attr.id}" class="form-field__label">${label}</label>
</div>`
}
