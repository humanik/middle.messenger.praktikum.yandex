import { createElement } from './createElement'
import { diffAttributes } from './diffAttributes'
import { diffChildren } from './diffChildren'

export function diffNodes (oldNode: VirtualNode, newNode: VirtualNode | undefined): NodePatch {
  if (newNode === undefined) {
    return (node: Element) => {
      node.remove()
      return undefined
    }
  }

  if (typeof oldNode === 'string' || typeof newNode === 'string') {
    if (oldNode !== newNode) {
      return (element: Element) => {
        const newElement = createElement(newNode)
        element.replaceWith(newElement)
        return newElement
      }
    } else {
      return (element: Element) => element
    }
  }

  if (oldNode?.tagName !== newNode?.tagName) {
    return (element: Element) => {
      const newElement = createElement(newNode)
      element.replaceWith(newElement)
      return newElement
    }
  }

  const patchChildren = diffChildren(oldNode.children, newNode.children)
  const patchAttributes = diffAttributes(oldNode.attributes, newNode.attributes)

  return (element: Element) => {
    patchChildren(element)
    patchAttributes(element)

    return element
  }
}
