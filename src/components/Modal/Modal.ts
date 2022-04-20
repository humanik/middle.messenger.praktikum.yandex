import { html, uniqID } from 'template'
import './Modal.scss'

interface ModalProps {
  id: string
  children: string
  oncancel?: (e: Event) => void
  className?: string
}

export default function Modal (
  { id = uniqID(), oncancel = cancelHandler, children, className, ...props }: ModalProps
): string {
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

document.addEventListener('click', function (e) {
  if (e.target !== null) {
    closeDialog(e.target as HTMLDialogElement)
  }
})

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
