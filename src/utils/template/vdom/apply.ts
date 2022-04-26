export function apply (fn: (n: VirtualNode) => void, element: VirtualNode): void {
  fn(element)
  if (typeof element === 'object') {
    element.children.forEach(apply.bind(null, fn))
  }
}
