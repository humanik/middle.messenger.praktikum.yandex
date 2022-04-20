import ChatPage from 'pages/chat'
import HomePage from 'pages/home'
import LoginPage from 'pages/login'
import NotFoundPage from 'pages/not-found'
import ProfilePage from 'pages/profile'
import RegistrationPage from 'pages/registration'
import ServerErrorPage from 'pages/server-error'

const historyOverride = function (type: string): () => unknown {
  const origFunction = history[type]

  return function (...args) {
    const result = origFunction.call(this, ...args)
    window.dispatchEvent(new Event(type))

    return result
  }
}

history.pushState = historyOverride('pushState')
history.replaceState = historyOverride('replaceState')

function loadRouteCountent (): void {
  let page = NotFoundPage
  const root = document.querySelector('#root')
  if (root == null) {
    return
  }

  switch (location.pathname) {
    case '/':
      page = HomePage
      break
    case '/chat':
      page = ChatPage
      break
    case '/profile':
      page = ProfilePage
      break
    case '/login':
      page = LoginPage
      break
    case '/registration':
      page = RegistrationPage
      break
    case '/404':
      page = NotFoundPage
      break
    case '/500':
      page = ServerErrorPage
      break
  }

  root.innerHTML = page()
}

document.addEventListener('DOMContentLoaded', loadRouteCountent)
window.addEventListener('popstate', loadRouteCountent)
window.addEventListener('pushState', loadRouteCountent)
window.addEventListener('replaceState', loadRouteCountent)

document.addEventListener('click', (e) => {
  if (e.target instanceof HTMLAnchorElement) {
    e.preventDefault()
    const href = e.target.getAttribute('href')
    history.pushState({ page: href }, '', href)
  }
})
