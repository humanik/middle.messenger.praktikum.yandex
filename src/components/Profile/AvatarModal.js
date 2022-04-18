import Avatar from 'components/Avatar/Avatar'
import Button from 'components/Button/Button'
import Link from 'components/Link/Link'
import Modal from 'components/Modal/Modal'
import { html } from 'template'
import './AvatarModal.scss'

const INPUT_ID = 'avatar-input'

function uploadHandler (e) {
  const preview = document.querySelector('.avatar-modal__preview')
  if (!preview) {
    return
  }

  if (e.target.files.length > 0) {
    const file = e.target.files[0]
    const img = preview.querySelector('.avatar__img')
    img.src = URL.createObjectURL(file)
    preview.setAttribute('show', '')
  } else {
    preview.removeAttribute('show')
  }
}

function submitHandler (e) {
  e.preventDefault()
  const input = document.getElementById(INPUT_ID)
  input.value = ''
  input.dispatchEvent(new Event('change'))
}

export default function AvatarModal (props = {}) {
  const id = INPUT_ID
  props.className = ['avatar-modal', props.className]

  const children = html`
<div class="modal__title">Загрузите файл</div>
<form class="modal__body" ${{ onsubmit: submitHandler }}>
  ${Link({ for: id, label: 'Выбрать файл на компьютере', tag: 'label', className: 'w-50 text-center' })}
  <input ${{ id, name: 'avatar', onchange: uploadHandler, type: 'file', className: 'visually-hidden' }} accept="image/png, image/jpeg">
  <div class="avatar-modal__preview">
    ${Avatar({ size: 'big' })}
  </div>
  ${Button({ label: 'Поменять', type: 'submit', className: 'w-100 mt-8' })}
</form>`

  return Modal(children, props)
}
