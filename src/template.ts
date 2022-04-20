import { truthy } from 'utils/helpers'

const domParser = new DOMParser()
const callbacks = new Map()
const callbackNames = new Map()

Object.defineProperty(window, 'callFunction', {
  value (name: string, ...args: unknown[]) {
    const fn = callbackNames.get(name)
    fn(...args)
  }
})

export function html (strings: readonly string[], ...values: any[]): string {
  return strings.reduce((result: string, value: string, i: number) => {
    let replacement = ''
    const dynamic = values[i]

    if (Array.isArray(dynamic)) {
      replacement = dynamic.join('\n')
    } else if (typeof dynamic === 'function') {
      replacement = dynamic()
    } else if (typeof dynamic === 'object' && dynamic !== null) {
      replacement = attributes(dynamic)
    } else if (typeof dynamic === 'string') {
      replacement = dynamic
    }

    result += value
    result += replacement

    return result
  }, '')
}

export const attributes = (input: Record<string, any>): string => {
  const parts: string[] = []

  if ('class' in input) {
    delete input.class // Use className instead.
  }

  for (const [key, value] of Object.entries(input)) {
    if (key === 'className') {
      if (Array.isArray(value)) {
        parts.push(`class="${classes(...value)}"`)
      } else if (typeof value === 'string' || typeof value === 'object') {
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

  console.log(input, parts)

  return parts.join(' ')
}

export const classes = (...names: Array<string | object | null>): string => {
  const classNames = new Set()

  for (const name of names) {
    if (typeof name === 'string' || name instanceof String) {
      classNames.add(name)
    } else if (Array.isArray(name)) {
      name.forEach((name) => classNames.add(name))
    } else if (typeof name === 'object' && name !== null) {
      for (const [key, value] of Object.entries(name)) {
        if (truthy(value)) {
          classNames.add(key)
        }
      }
    }
  }

  return Array.from(classNames).filter(Boolean).map(escape).join(' ')
}

export const uniqID = (length = 8): string => {
  let result = ''
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  const charactersLength = characters.length
  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * charactersLength)
    result += characters.charAt(randomIndex)
  }

  return result
}

const getCallbackID = (fn: Function): string => {
  if (callbacks.has(fn)) {
    return callbacks.get(fn)
  }
  const name = uniqID()
  callbacks.set(fn, name)
  callbackNames.set(name, fn)

  return name
}

export const escape = (string: string): string => {
  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }

  const reUnescapedHtml = /[&<>"']/g

  return string.replace(reUnescapedHtml, (chr: keyof typeof htmlEscapes) => htmlEscapes[chr])
}

export function createNode (html: string): ChildNode | null {
  return domParser.parseFromString(html, 'text/html').body.firstChild
}
