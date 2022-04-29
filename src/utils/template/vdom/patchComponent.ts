export function patchComponent (oldNode: VirtualComponent, newNode: VirtualComponent): void {
  if (typeof oldNode.instance === 'object') {
    newNode.instance = oldNode.instance
    newNode.instance.setProps(newNode.attributes)
  }
}
