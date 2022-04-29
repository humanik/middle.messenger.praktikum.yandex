import { Button } from 'components/Button/Button'
import { TextField } from 'components/Form/TextField'
import { Modal } from 'components/Modal/Modal'
import { Form } from 'utils/Form'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import { password, required, same } from 'utils/validation/rules'
import { Validator } from 'utils/validation/Validator'
import { PASSOWRD_MODAL_ID } from './Profile'

interface State extends FormState<FormFields>, UnknownRecord {}

interface FormFields extends StringRecord {
  oldPassword: string
  newPassword: string
  newPasswordConfirm: string
}

export class ChangePasswordModal extends Component<{}, State> {
  private readonly form: Form<FormFields>

  constructor (props = {}) {
    super(props)
    this.state = {
      form: {
        values: { oldPassword: '', newPassword: '', newPasswordConfirm: '' },
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
  id: PASSOWRD_MODAL_ID,
  children: html`
  <div class="modal__content">
    <div class="modal__title">Изменить пароль</div>
    <form class="modal__body" ${{ onSubmit: this.form.submitHandler }}>
      ${TextField({
        id: 'input-old-password', label: 'Старый пароль', name: 'oldPassword', type: 'password', ...this.form.fieldProps('oldPassword')
      })}
      ${TextField({
        id: 'input-new-password', label: 'Новый пароль', name: 'newPassword', type: 'password', ...this.form.fieldProps('newPassword')
      })}
      ${TextField({
        id: 'input-new-password-confirm', label: 'Повторите новый пароль', name: 'newPasswordConfirm', type: 'password', ...this.form.fieldProps('newPasswordConfirm')
      })}
      ${Button({ children: 'Изменить', className: 'w-100 mt-8' })}
    </form>
  </div>`
})}`
  }

  private createValidator (): Validator<FormFields> {
    const validator = new Validator<FormFields>()
    validator.addRules('oldPassword', required())
    validator.addRules('newPassword', required(), password())
    validator.addRules('newPasswordConfirm', required(), same(() => this.state.form.values.newPassword))

    return validator
  }
}
