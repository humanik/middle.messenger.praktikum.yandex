import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import './Popover.scss'

document.addEventListener('keyup', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.popover[open]').forEach((popover) => {
      popover.removeAttribute('open')
    })
  }
})

interface PopoverProps extends WithClass {
  content: VirtualElement
  trigger: VirtualElement
  position?: string
}

export class PopoverComponent extends Component<PopoverProps> {
  public render (): VirtualElement {
    const { position = 'bottom-right', className, content, trigger, ...other } = this.props
    const attr = {
      className: ['popover', className],
      'data-position': position,
      ...other
    }

    return html`
<div ${attr}>
  ${trigger}
  <div class="popover__content">${content}</div>
</div>`
  }
}

export function Popover (props: PopoverProps): ComponentTuple {
  return [PopoverComponent, props]
}

export const togglePopover = (e: Event): void => {
  if (!(e.target instanceof HTMLElement)) {
    return
  }

  const popover = e.target.closest('.popover')
  if (popover === null) {
    return
  }

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
