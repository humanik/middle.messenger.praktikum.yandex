import { ArrowIcon } from 'components/Icon'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'
import './ProfileBack.scss'

const clickHandler = (e: MouseEvent): void => {
  e.preventDefault()
  history.back()
}

export class BackButton extends Component {
  public render (): VirtualElement {
    return html`
<button ${{ className: 'profile-back', onclick: clickHandler }}>
  <span class="profile-back__circle">${ArrowIcon()}</span>
</button>`
  }
}
