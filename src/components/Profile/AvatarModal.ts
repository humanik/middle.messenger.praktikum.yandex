import Avatar from 'components/Avatar/Avatar'
import Button from 'components/Button/Button'
import Link from 'components/Link/Link'
import Modal from 'components/Modal/Modal'
import { html } from 'template'
import './AvatarModal.scss'

const INPUT_ID = 'avatar-input'

interface AvatarModalProps {
  id: string
}

export default function AvatarModal ({ id }: AvatarModalProps): string {
  const className = 'avatar-modal'

  const children = html` <div class="modal__title">Загрузите файл</div>
    <form class="modal__body" ${{ onsubmit: submitHandler }}>
      ${Link({
        for: INPUT_ID,
        label: 'Выбрать файл на компьютере',
        tag: 'label',
        className: 'w-50 text-center'
      })}
      <input
        ${{
          id: INPUT_ID,
          name: 'avatar',
          onchange: uploadHandler,
          type: 'file',
          className: 'visually-hidden'
        }}
        accept="image/png, image/jpeg"
      />
      <div class="avatar-modal__preview">${Avatar({ size: 'big' })}</div>
      ${Button({ label: 'Поменять', type: 'submit', className: 'w-100 mt-8' })}
    </form>`

  return Modal({ id, className, children })
}

function uploadHandler (e: Event): void {
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

function submitHandler (e: SubmitEvent): void {
  e.preventDefault()
  const input = document.querySelector<HTMLInputElement>(`#${INPUT_ID}`)
  if (input == null) {
    return
  }
  input.value = ''
  input.dispatchEvent(new Event('change'))
}
