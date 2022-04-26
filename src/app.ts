import { ChatPage } from 'pages/chat'
import { HomePage } from 'pages/home'
import { LoginPage } from 'pages/login'
import { NotFoundPage } from 'pages/not-found'
import { ProfilePage } from 'pages/profile'
import { RegistrationPage } from 'pages/registration'
import { ServerErrorPage } from 'pages/server-error'
import { renderTo } from 'utils/template/vdom/renderTo'

function loadRouteCountent (): void {
  let Page = NotFoundPage

  switch (location.pathname) {
    case '/':
      Page = HomePage
      break
    case '/chat':
      Page = ChatPage
      break
    case '/profile':
      Page = ProfilePage
      break
    case '/login':
      Page = LoginPage
      break
    case '/registration':
      Page = RegistrationPage
      break
    case '/404':
      Page = NotFoundPage
      break
    case '/500':
      Page = ServerErrorPage
      break
  }

  renderTo('#root', new Page())
}

document.addEventListener('DOMContentLoaded', loadRouteCountent)
window.addEventListener('popstate', loadRouteCountent)
window.addEventListener('pushState', loadRouteCountent)
window.addEventListener('replaceState', loadRouteCountent)
