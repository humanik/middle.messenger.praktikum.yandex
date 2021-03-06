import { Avatar } from 'components/Avatar/Avatar'
import { Button } from 'components/Button/Button'
import { Link } from 'components/Link/Link'
import { Modal } from 'components/Modal/Modal'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import './AvatarModal.scss'

const INPUT_ID = 'avatar-input'

interface AvatarModalProps {
  id: string
}

export class AvatarModalComponent extends Component<AvatarModalProps> {
  public render (): VirtualElement {
    return html`
${Modal({
  id: this.props.id,
  className: 'avatar-modal',
  children: html`
  <div class="modal__content">
    <div class="modal__title">Загрузите файл</div>
    <form class="modal__body" ${{ onSubmit: this.submitHandler }}>
      ${Link({
        for: INPUT_ID,
        children: 'Выбрать файл на компьютере',
        tag: 'label',
        className: 'w-50 text-center'
      })}
      <input name="avatar" type="file" class="visually-hidden" accept="image/png, image/jpeg" ${{
        id: INPUT_ID, onChange: this.uploadHandler
      }} />
      <div class="avatar-modal__preview">${Avatar({ size: 'big' })}</div>
      ${Button({ children: 'Поменять', type: 'submit', className: 'w-100 mt-8' })}
    </form>
  </div>`
})}`
  }

  protected submitHandler = (e: SubmitEvent): void => {
    e.preventDefault()
    const input = document.querySelector<HTMLInputElement>(`#${INPUT_ID}`)
    if (input == null) {
      return
    }
    input.value = ''
    input.dispatchEvent(new Event('change'))
  }

  protected uploadHandler = (e: Event): void => {
    const preview = document.querySelector('.avatar-modal__preview')
    if (preview === null || !(e.target instanceof HTMLInputElement)) {
      return
    }
    const files = e.target?.files

    if (files instanceof FileList && files.length > 0) {
      const file = files[0]
      const img = preview.querySelector<HTMLImageElement>('.avatar__img')
      if (img != null) {
        img.src = URL.createObjectURL(file)
        preview.setAttribute('show', '')
      }
    } else {
      preview.removeAttribute('show')
    }
  }
}

export function AvatarModal (props: AvatarModalProps): ComponentTuple {
  return [AvatarModalComponent, props]
}
