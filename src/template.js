const domParser = new DOMParser()
const callbacks = new Map()
const callbackNames = new Map()

Object.defineProperty(window, 'callFunction', {
  value (name, ...args) {
    const fn = callbackNames.get(name)
    fn(...args)
  }
})

export function html (strings, ...values) {
  return strings.reduce((result, value, i) => {
    let replacement = values[i] || ''

    if (Array.isArray(replacement)) {
      replacement = replacement.join('\n')
    } else if (typeof replacement === 'function') {
      replacement = replacement()
    } else if (typeof replacement === 'object') {
      replacement = attributes(replacement)
    }

    result += value
    result += replacement

    return result
  }, '')
}

export const attributes = (attributes) => {
  const parts = []

  if ('class' in attributes) {
    delete attributes.class // Use className instead.
  }

  for (const [key, value] of Object.entries(attributes)) {
    if (key === 'className') {
      if (Array.isArray(value)) {
        parts.push(`class="${classes(...value)}"`)
      } else {
        parts.push(`class="${classes(value)}"`)
      }
    } else if (typeof value === 'string') {
      parts.push(`${escape(key)}="${escape(value)}"`)
    } else if (typeof value === 'function') {
      parts.push(`${escape(key)}="callFunction('${getCallbackID(value)}', event)"`)
    } else if (typeof value === 'number') {
      parts.push(`${escape(key)}="${value}"`)
    }
  }

  return parts.join(' ')
}

export const classes = (...names) => {
  const classNames = new Set()

  for (const name of names) {
    if (typeof name === 'string' || name instanceof String) {
      classNames.add(name)
    } else if (Array.isArray(name)) {
      name.forEach((name) => classNames.add(name))
    } else if (typeof name === 'object') {
      for (const [key, value] of Object.entries(name)) {
        if (value) {
          classNames.add(key)
        }
      }
    }
  }

  return Array.from(classNames).filter(Boolean).map(escape).join(' ')
}

export const uniqID = (length = 8) => {
  let result = ''
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  const charactersLength = characters.length
  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * charactersLength)
    result += characters.charAt(randomIndex)
  }

  return result
}

const getCallbackID = (fn) => {
  if (callbacks.has(fn)) {
    return callbacks.get(fn)
  }
  const name = uniqID()
  callbacks.set(fn, name)
  callbackNames.set(name, fn)
  return name
}

export const escape = (string) => {
  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }

  const reUnescapedHtml = /[&<>"']/g
  const reHasUnescapedHtml = RegExp(reUnescapedHtml.source)

  return string && reHasUnescapedHtml.test(string)
    ? string.replace(reUnescapedHtml, (chr) => htmlEscapes[chr])
    : string || ''
}

export function createNode (html) {
  return domParser.parseFromString(html, 'text/html').body.firstChild
}
