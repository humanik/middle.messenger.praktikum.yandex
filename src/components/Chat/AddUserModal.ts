import { Button } from 'components/Button/Button'
import { TextField } from 'components/Form/TextField'
import { Modal } from 'components/Modal/Modal'
import { Form } from 'utils/Form'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import { login, required } from 'utils/validation/rules'
import { Validator } from 'utils/validation/Validator'

interface State extends FormState<FormFields>, UnknownRecord {}

interface FormFields extends StringRecord {
  login: string
}

export class AddUserModal extends Component<{}, State> {
  private readonly form: Form<FormFields>

  constructor (props = {}) {
    super(props)
    this.state = {
      form: {
        values: { login: '' },
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
  id: 'modal-add-user',
  children: html`
  <div class="modal__content">
    <div class="modal__title">Добавить пользователя</div>
    <form class="modal__body" ${{ onSubmit: this.form.submitHandler }}>
      ${TextField({ id: 'input-add-user', label: 'Логин', name: 'login', ...this.form.fieldProps('login') })}
      ${Button({ children: 'Добавить', className: 'w-100 mt-8' })}
    </form>
  </div>`
})}`
  }

  private createValidator (): Validator<FormFields> {
    const validator = new Validator<FormFields>()
    validator.addRules('login', required(), login())

    return validator
  }
}
