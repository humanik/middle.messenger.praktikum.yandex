import { isVirtualComponent } from '../helpers'

export function createElement ($element: VirtualNode, isSvg: boolean = false): Node {
  if (typeof $element === 'string') {
    return document.createTextNode($element)
  }

  if (isVirtualComponent($element)) {
    const Component = $element.component
    const instance = $element.instance ?? new Component($element.attributes)
    $element.instance = instance
    return instance.getElement()
  }

  let element: Element
  if ($element.tagName === 'svg' || isSvg) {
    element = document.createElementNS('http://www.w3.org/2000/svg', $element.tagName)
  } else {
    element = document.createElement($element.tagName)
  }

  for (const [key, value] of Object.entries($element.attributes)) {
    if (typeof value === 'string') {
      element.setAttribute(key, value)
    } else {
      const eventName = key.startsWith('on') ? key.slice(2).toLowerCase() : key.toLowerCase()
      element.addEventListener(eventName, value)
    }
  }

  for (const child of $element.children) {
    element.appendChild(createElement(child, $element.tagName === 'svg'))
  }

  return element
}
