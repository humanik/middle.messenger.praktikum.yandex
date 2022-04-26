import { html } from 'utils/template/html'
import './Modal.scss'

interface ModalProps extends WithClass, WithChildren {
  id: string
  oncancel?: (e: Event) => void
}

document.addEventListener('click', function (e: MouseEvent) {
  if (e.target instanceof HTMLElement && e.target.tagName === 'DIALOG') {
    closeDialog(e.target as HTMLDialogElement)
  }
})

export function Modal (props: ModalProps): VirtualElement {
  const { id, oncancel = cancelHandler, children, className, ...other } = props
  const attr = { id, className: ['modal', className], oncancel, ...other }

  return html`<dialog ${attr}>${children}</dialog>`
}

function cancelHandler (e: Event): void {
  e.preventDefault()
  if (!(document.activeElement instanceof HTMLElement)) {
    return
  }

  if (['BUTTON', 'INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    document.activeElement.blur()
  } else {
    closeDialog(e.target as HTMLDialogElement)
  }
}

export function showModal (id: string): () => void {
  return function () {
    const dialog = document.querySelector<HTMLDialogElement>(`#${id}`)
    if (dialog !== null) {
      dialog.showModal()
    }
  }
}

export const closeModal = (id: string): void => {
  const dialog = document.getElementById(id)
  if (dialog !== null) {
    closeDialog(dialog as HTMLDialogElement)
  }
}

const closeDialog = (dialog: HTMLDialogElement): void => {
  dialog.setAttribute('closing', '')

  dialog.addEventListener('animationend', function () {
    if (typeof dialog.close === 'function') {
      dialog.close()
      dialog.removeAttribute('closing')
    }
  }, { once: true })
}
