import Profile from 'components/Profile/Profile'
import BackButon from 'components/Profile/ProfileBack'
import { html } from 'template'

export default function ProfilePage () {
  return html`
<div class="d-flex">
  ${BackButon}
  ${Profile}
</div>`
}
