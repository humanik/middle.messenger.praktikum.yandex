import { ArrowIcon } from 'components/Icon'
import { html } from 'template'
import './ProfileBack.scss'

const clickHandler = (e) => {
  e.preventDefault()
  history.back()
}

export default function BackButon () {
  return html`
<button ${{ className: 'profile-back', onclick: clickHandler }}>
  <span class="profile-back__circle">${ArrowIcon}</span>
</button>`
}
