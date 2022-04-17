import { html } from 'template'
import './Popover.scss'

document.addEventListener('keyup', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.popover').forEach((popover) => {
      if (popover.hasAttribute('open')) {
        popover.removeAttribute('open')
      }
    })
  }
})

export default function Popover ({ position = 'bottom-right', className, content, trigger, ...props }) {
  const attr = {
    className: ['popover', className],
    ...props,
    'data-position': position
  }

  return html`
<div ${attr}>
  ${trigger}
  <div class="popover__content">${content}</div>
</div>`
}

export const togglePopover = (e) => {
  const popover = e.target.closest('.popover')

  if (popover.hasAttribute('open')) {
    popover.removeAttribute('open')
  } else {
    popover.setAttribute('open', '')

    setTimeout(() => {
      document.addEventListener('click', function () {
        popover.removeAttribute('open')
      }, { once: true })
    }, 0)
  }
}
