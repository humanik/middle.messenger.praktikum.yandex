import { Profile } from 'components/Profile/Profile'
import { BackButton } from 'components/Profile/ProfileBack'
import { Component } from 'utils/template/Component'
import { html } from 'utils/template/html'

export class ProfilePage extends Component {
  public render (): VirtualElement {
    return html`
<div class="d-flex">
  ${BackButton}
  ${Profile}
</div>`
  }
}
