import { html, uniqID } from 'template'
import './Modal.scss'

export default function Modal (children, { id = uniqID(), oncancel = cancelHandler, className, ...props } = {}) {
  const attr = {
    id,
    className: ['modal', className],
    oncancel,
    ...props
  }

  return html`
<dialog ${attr}>
  <div class="modal__content">${children}</div>
</dialog>`
}

export function showModal (id) {
  return function () {
    const dialog = document.getElementById(id)
    if (dialog) {
      dialog.showModal()
    }
  }
}

export const closeModal = (id) => {
  const dialog = document.getElementById(id)
  if (dialog) {
    closeDialog(dialog)
  }
}

const closeDialog = (dialog) => {
  dialog.setAttribute('closing', '')

  dialog.addEventListener('animationend', function (e) {
    dialog.close()
    dialog.removeAttribute('closing')
  }, { once: true })
}

document.addEventListener('click', function (e) {
  if (e.target instanceof HTMLDialogElement) {
    closeDialog(e.target)
  }
})

function cancelHandler (e) {
  e.preventDefault()

  if (['BUTTON', 'INPUT', 'TEXTAREA'].includes(document.activeElement.nodeName)) {
    document.activeElement.blur()
  } else {
    closeDialog(e.target)
  }
}
