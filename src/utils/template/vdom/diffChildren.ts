import { createElement } from './createElement'
import { diffNodes } from './diffNodes'

export function diffChildren (oldNodes: VirtualNode[], newNodes: VirtualNode[]): NodePatch {
  const patches: NodePatch[] = []
  const additionalPatches: NodePatch[] = []

  oldNodes.forEach((oldChild, i) => {
    patches.push(diffNodes(oldChild, newNodes[i]))
  })

  for (const additionalChild of newNodes.slice(oldNodes.length)) {
    additionalPatches.push((elem: Element) => {
      elem.appendChild(createElement(additionalChild))
      return elem
    })
  }

  return (parent: Element) => {
    parent.childNodes.forEach((child, i) => {
      patches[i](child)
    })

    for (const patch of additionalPatches) {
      patch(parent)
    }

    return parent
  }
}
