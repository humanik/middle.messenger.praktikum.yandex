import { Button } from 'components/Button/Button'
import { TextField } from 'components/Form/TextField'
import { Modal } from 'components/Modal/Modal'
import { Form } from 'utils/Form'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import { email, login, name, phone, required } from 'utils/validation/rules'
import { Validator } from 'utils/validation/Validator'
import { data } from './data'
import { DATA_MODAL_ID } from './Profile'

interface State extends FormState<FormFields>, UnknownRecord {}

interface FormFields extends StringRecord {
  email: string
  login: string
  first_name: string
  second_name: string
  display_name: string
  phone: string
}

const formValues = data.reduce((result: StringRecord, { name, value }) => {
  result[name] = value
  return result
}, {}) as FormFields

export class ChangeDataModal extends Component<{}, State> {
  private readonly form: Form<FormFields>

  constructor (props = {}) {
    super(props)
    this.state = {
      form: {
        values: formValues,
        touched: {},
        isSubmitted: false
      }
    }
    this.form = new Form({
      form: this.state.form,
      validator: this.createValidator(),
      setFormState: (value) => this.setState({ form: value })
    })
  }

  public render (): VirtualElement {
    return html`
${Modal({
  id: DATA_MODAL_ID,
  children: html`
  <div class="modal__content">
    <div class="modal__title">Изменить данные</div>
    <form class="modal__body" ${{ onSubmit: (e: SubmitEvent) => { e.preventDefault() } }}>
      ${data.map((field) => TextField({ ...field, ...this.form.fieldProps(field.name) }))}
      ${Button({ children: 'Изменить', className: 'w-100 mt-8' })}
    </form>
  </div>`
})}`
  }

  private createValidator (): Validator<FormFields> {
    const validator = new Validator<FormFields>()
    validator.addRules('email', required(), email())
    validator.addRules('login', required(), login())
    validator.addRules('first_name', required(), name())
    validator.addRules('second_name', required(), name())
    validator.addRules('display_name', required(), name())
    validator.addRules('phone', required(), phone())

    return validator
  }
}
