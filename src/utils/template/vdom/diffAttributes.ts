export function diffAttributes (
  oldAttributes: Record<string, string | EventListener>,
  newAttributes: Record<string, string | EventListener>
): NodePatch {
  const patches: NodePatch[] = []

  // Setting new attributes
  for (const name in newAttributes) {
    const oldValue = oldAttributes[name]
    const newValue = newAttributes[name]

    if (typeof newValue === 'function' && newValue !== oldValue) {
      patches.push((elem: Element) => {
        elem.addEventListener(name, newValue)
        return elem
      })
    }

    if (typeof newValue === 'string' && newValue !== oldValue) {
      patches.push((elem: Element) => {
        elem.setAttribute(name, newValue)
        return elem
      })
    }
  }

  // Removing attributes
  for (const name in oldAttributes) {
    const oldValue = oldAttributes[name]
    const newValue = newAttributes[name]

    if (typeof oldValue === 'function' && oldValue !== newValue) {
      patches.push((elem: Element) => {
        elem.removeEventListener(name, oldValue)
        return elem
      })
    }

    if (typeof oldValue === 'string' && !(name in newAttributes)) {
      patches.push((elem: Element) => {
        elem.removeAttribute(name)
        return elem
      })
    }
  }

  return (elem: Node) => {
    for (const patch of patches) {
      patch(elem)
    }

    return elem
  }
}
