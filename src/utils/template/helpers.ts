import { Component as RealComponent } from './Component'

export function isVirtualElement (candidate: any): candidate is VirtualElement {
  return (
    candidate !== null &&
    typeof candidate === 'object' &&
    typeof candidate.tagName === 'string' &&
    typeof candidate.attributes === 'object' &&
    Array.isArray(candidate?.children)
  )
}

export function isVirtualComponent (candidate: any): candidate is VirtualComponent {
  return isVirtualElement(candidate) && candidate.component !== undefined
}

export function isComponentTuple (candidate: unknown): candidate is ComponentTuple {
  return (
    Array.isArray(candidate) && (candidate.length === 2) && candidate[0].prototype instanceof RealComponent
  )
}

export function isComponentType (candidate: unknown): candidate is new() => Component {
  return (
    typeof candidate === 'function' && candidate.prototype instanceof RealComponent
  )
}
