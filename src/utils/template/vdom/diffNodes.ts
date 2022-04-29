import { isVirtualComponent } from '../helpers'
import { createElement } from './createElement'
import { diffAttributes } from './diffAttributes'
import { diffChildren } from './diffChildren'
import { patchComponent } from './patchComponent'

export function diffNodes (oldNode: VirtualNode, newNode?: VirtualNode): NodePatch {
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

  if ((oldNode?.tagName !== newNode?.tagName) || (oldNode.component !== newNode.component)) {
    return (element: Element) => {
      const newElement = createElement(newNode)
      element.replaceWith(newElement)
      return newElement
    }
  }

  if (isVirtualComponent(oldNode) && isVirtualComponent(newNode)) {
    return (element: Element) => {
      patchComponent(oldNode, newNode)
      return element
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
