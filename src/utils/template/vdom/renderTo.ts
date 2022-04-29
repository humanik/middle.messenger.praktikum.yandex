import { Component } from '../Component'

export function renderTo (selector: string, component: Component): void {
  const container = document.querySelector(selector)
  if (container === null) {
    throw new Error('Container not found')
  }

  container.appendChild(component.getElement())
  component.dispatchMount()
}
