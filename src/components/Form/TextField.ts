import { isFalsy } from 'utils/helpers'
import { html } from 'utils/template/html'
import './TextField.scss'

interface TextFieldProps extends WithClass {
  id?: string
  type?: string
  valid?: boolean
  value?: string
  invalid?: boolean
  name: string
  label: string
  feedback?: string
  onInput?: EventListener
}

export function TextField (props: TextFieldProps): VirtualElement {
  const { id, type = 'text', value = '', onInput, valid, invalid, label, className, feedback, ...other } = props

  const mainClasses = ['form-field', className, {
    'form-field--valid': valid,
    'form-field--invalid': invalid
  }]

  const attr = {
    id,
    type,
    value,
    onInput,
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
