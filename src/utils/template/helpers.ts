import { Component } from './Component'
import { ComponentTuple } from './Template'

export function isObject (item: any): item is object {
  return item && typeof item === 'object' && !Array.isArray(item)
}

export function mergeDeep (target: Record<string, unknown>, ...sources: Array<Record<string, unknown>>): Record<string, unknown> {
  if (sources.length === 0) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeDeep(target, ...sources)
}

export function isVirtualElement (candidate: any): candidate is VirtualElement {
  return (
    candidate !== null &&
    typeof candidate === 'object' &&
    typeof candidate?.tagName === 'string' &&
    typeof candidate?.attributes === 'object' &&
    Array.isArray(candidate?.children)
  )
}

export function isComponentTuple (candidate: unknown): candidate is ComponentTuple {
  return (
    Array.isArray(candidate) && (candidate.length === 2) && candidate[0].prototype instanceof Component
  )
}

export function isComponentType (candidate: unknown): candidate is new() => Component {
  return (
    typeof candidate === 'function' && candidate.prototype instanceof Component
  )
}
